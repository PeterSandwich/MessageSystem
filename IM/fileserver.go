package main

import (
	"crypto/md5"
	"encoding/hex"
	"errors"
	"fmt"
	"github.com/julienschmidt/httprouter"
	"github.com/nfnt/resize"
	"image"
	"image/jpeg"
	"image/png"
	"io"
	"io/ioutil"
	"log"
	"mime"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"MessageSystem/IM/defs"

	"encoding/json"
)


//   1, 比如我前端有 <img src="/img/xxxxxxxxxx.png">  相当于 <img src="http://localhost:9988/img/xxxxxxxxx.png">
//   2, 如果是文件不是图片的话， 要变成 /files/xxxxxxxxxxx.txt
//   3, 图片或文件上传成功后，如果是图片 返回{原文件：“/img/xxxxxxx.png”,缩略图："/img/xxxxxx_compress.png",文件类型：（0为文字，1为图片，2为文件）}


const maxUploadSize = 20 * 1024 * 1024 // 10 mb
const uploadPath = "/tmp/files/"
//const uploadPath = "C:/Users/User/Desktop/GoProject/files/"

var inputArgs defs.InputArgs

func uploadFileHandler(w http.ResponseWriter, r *http.Request,p httprouter.Params) {
		//返回内容
		returnp := defs.ReturnPath{}
		// 检查文件大小
		r.Body = http.MaxBytesReader(w, r.Body, maxUploadSize)
		if err := r.ParseMultipartForm(maxUploadSize); err != nil {
			sendErrorResponse(w,defs.ErrorFileSize)
			return
		}
		// 解析文件
		fileType := r.PostFormValue("type")
		fmt.Println(fileType)
		file, _, err := r.FormFile("uploadFile")
		if err != nil {
			sendErrorResponse(w,defs.ErrorFileInvalid)
			return
		}
		defer file.Close()
		fileBytes, err := ioutil.ReadAll(file)
		if err != nil {
			sendErrorResponse(w,defs.ErrorReadFile)
			return
		}
		// 获取文件类型，只需读取文件前512位
		filetype := http.DetectContentType(fileBytes)
		fmt.Println(filetype)
		//判断文件类型
		switch filetype {
		case "image/jpeg", "image/jpg":returnp.Filetype=1
		case "image/gif", "image/png":returnp.Filetype=1
		case "application/pdf":
			returnp.Filetype=2
		case "application/octet-stream","application/zip":
			filetype="application/x-zip-compressed"
			returnp.Filetype=2
		case "video/mp4":
			returnp.Filetype=3
			filetype = "video/mp4"
		case "audio/mpeg":
			returnp.Filetype=3
			filetype = "audio/mpeg"
		case "text/plain; charset=utf-8":
			returnp.Filetype=2
			filetype = "text/plain"
		default:
			sendErrorResponse(w,defs.ErrorIinvaidType)
			return
		}
		//读文件类型
		err=AddExtensionType()
		if err!=nil{
			sendErrorResponse(w,defs.ErrorAddExtensionType)
			return
		}
		fileEndings, err := mime.ExtensionsByType(fileType)
		fmt.Println(fileType,fileEndings)
		if err != nil {
			fmt.Println(err)
			sendErrorResponse(w,defs.ErrorReadFileType)
			return
		}
		if fileEndings[0]==".asm" || fileEndings[0]==".asc"{
			fileEndings[0]=".txt"
		}
		if fileEndings[0]==".m4v"{
			fileEndings[0]=".mp4"
		}
		if fileEndings[0]==".mp2"{
			fileEndings[0]=".mp3"
		}
		if fileEndings[0]==".pot"{
			fileEndings[0]=".ppt"
		}
		typew := strings.Split(fileEndings[0], ".")
		//生成文件名
		fileName, err := GetFileMD5(fileBytes)
		if err != nil {
			sendErrorResponse(w,defs.ErrorGetFileName)
			return
		}
		//规定文件标识长度
		CreateFileName, err := Substr(fileName, 0, 12)
		if err != nil {
			sendErrorResponse(w,defs.ErrorSubstrFileName)
			return
		}
		PATH:=uploadPath
		//创建存放文件的文件夹
		err = Mkdir(PATH)
		if err != nil {
			sendErrorResponse(w,defs.ErrorMkdir)
			return
		}
		//创建文件
		newPath := PATH + CreateFileName + fileEndings[0]
		err = createfile(newPath, fileBytes)
		if err != nil {
			sendErrorResponse(w,defs.ErrorCreateFile)
			fmt.Println("CERATEFILE_ERROR")
			return
		}
		if fileEndings[0] == ".jpg" || fileEndings[0] == ".jpeg" || fileEndings[0] == ".png" {
			inputArgs.LocalPath = newPath
			inputArgs.Quality = 70
			inputArgs.Width = 200
			fname := CreateFileName + "_compress" + fileEndings[0]
			inputArgs.OutputPath = PATH + fname
			if !imageCompress(
				func() (io.Reader, error) {
					f, err := os.Open(inputArgs.LocalPath)
					fmt.Println("osopenfile_error", err)
					return f, err
				},
				func() (*os.File, error) {
					F, ERR := os.Open(inputArgs.LocalPath)
					fmt.Println("osopenfile_error", err)
					return F, ERR
				},
				inputArgs.OutputPath,
				inputArgs.Quality,
				inputArgs.Width,
				typew[1]) {
				fmt.Println("生成缩略图失败")
			} else {
				fmt.Println("生成缩略图成功 " + inputArgs.OutputPath)
			}

			returnp.OriginalFile = "files/"+CreateFileName+fileEndings[0]
			returnp.Thumbnail = "files/"+fname
			resp, _ := json.Marshal(returnp)
			sendNormalResponse(w,string(resp),200)
		} else{
			returnp.OriginalFile = "files/"+CreateFileName+fileEndings[0]
			returnp.Thumbnail = ""
			fmt.Println(returnp)
			resp, _ := json.Marshal(returnp)
			sendNormalResponse(w,string(resp),200)
		}
	}
//获取可执行文件的绝对路径
func exepath(ftype string) (string, error) {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		return "", err
	}
	if len(ftype) <= 0 {
		return "", errors.New("filetype_error")
	}
	dir += "\\files"
	return strings.Replace(dir, "\\", "/", -1) + "/", nil
}

func Mkdir(dir string) error {
	if _, err := os.Stat(dir); os.IsNotExist(err) {
		os.Mkdir(dir, 0770)
	} else {
		fmt.Println(err)
		return err
	}
	return nil
}

func imageCompress(getReadSizeFile func() (io.Reader, error), getDecodeFile func() (*os.File, error),
	to string,
	Quality,
	base int,
	format string) bool {
	file_origin, err := getDecodeFile()
	defer file_origin.Close()
	if err != nil {
		fmt.Println("os.Open(file)错误")
		log.Fatal(err)
		return false
	}
	var origin image.Image
	var config image.Config
	var temp io.Reader
	temp, err = getReadSizeFile()
	if err != nil {
		fmt.Println("os.Open(temp)")
		log.Fatal(err)
		return false
	}
	var typeImage int64
	format = strings.ToLower(format)
	if format == "jpg" || format == "jpeg" {
		typeImage = 1
		origin, err = jpeg.Decode(file_origin)
		if err != nil {
			fmt.Println("jpeg.Decode(file_origin)")
			log.Fatal(err)
			return false
		}
		temp, err = getReadSizeFile()
		if err != nil {
			fmt.Println("os.Open(temp)")
			log.Fatal(err)
			return false
		}
		config, err = jpeg.DecodeConfig(temp)
		fmt.Println("147852", config)
		if err != nil {
			fmt.Println("jpeg.DecodeConfig(temp)")
			return false
		}
	} else if format == "png" {
		typeImage = 0
		origin, err = png.Decode(file_origin)
		if err != nil {
			fmt.Println("png.Decode(file_origin)")
			log.Fatal(err)
			return false
		}
		temp, err = getReadSizeFile()
		if err != nil {
			fmt.Println("os.Open(temp)")
			log.Fatal(err)
			return false
		}
		config, err = png.DecodeConfig(temp)
		if err != nil {
			fmt.Println("png.DecodeConfig(temp)")
			return false
		}
	}
	width := uint(base)
	fmt.Println(config.Height, "        ", config.Width)
	height := uint(base * config.Height / config.Width)
	canvas := resize.Thumbnail(width, height, origin, resize.Lanczos3)
	file_out, err := os.Create(to)
	defer file_out.Close()
	if err != nil {
		log.Fatal(err)
		return false
	}
	if typeImage == 0 {
		err = png.Encode(file_out, canvas)
		if err != nil {
			fmt.Println("压缩图片失败")
			return false
		}
	} else {
		err = jpeg.Encode(file_out, canvas, &jpeg.Options{Quality})
		if err != nil {
			fmt.Println("压缩图片失败")
			return false
		}
	}
	return true
}

func GetFileMD5(fbyte []byte) (string, error) {
	hash := md5.New()
	_, err := hash.Write(fbyte)
	if err != nil {
		return "", err
	}
	result := hash.Sum(nil)
	return hex.EncodeToString(result), nil
}

//创建文件
func createfile(fileurl string, filebyte []byte) error {
	file, err := os.Create(fileurl)
	defer file.Close()
	if err != nil {
		fmt.Println(err)
		return err

	}
	_, err = file.Write(filebyte)

	if err != nil {
		fmt.Println("qweqweqweqweqwe")
		return err
	}
	return nil
}

//截取字符串
func Substr(str string, start int, length int) (string, error) {
	RuneStr := []rune(str)
	RuneLen := len(RuneStr)
	if RuneLen == 0 {
		return "", errors.New("文件字节长度为零")
	}
	if start < 0 {
		start = 0
	}
	if length == 0 {
		return "", errors.New("文件名长度为零")
	}
	if length < 0 {
		return "", errors.New("文件名长度为负数")
	}

	end := start + length

	if start > RuneLen {
		return "", errors.New("文件名取值起始位置越界")
	}

	if end > RuneLen {
		end = RuneLen
	}

	return string(RuneStr[start:end]), nil
}

func AddExtensionType() error{
	err:=mime.AddExtensionType(".txt","text/plain")
	if err!=nil{
		fmt.Println("AddExtensionType:txt error",err)
		return err
	}
	err=mime.AddExtensionType(".zip","application/x-zip-compressed")
	if err!=nil{
		fmt.Println("AddExtensionType:zip error",err)
		return err
	}
	err=mime.AddExtensionType(".mp3","audio/mp3")
	if err!=nil{
		fmt.Println("AddExtensionType:mp3 error",err)
		return err
	}
	err=mime.AddExtensionType(".mp4","video/mp4")
	if err!=nil{
		fmt.Println("AddExtensionType:mp4 error",err)
		return err
	}
	err=mime.AddExtensionType(".ppt","application/vnd.ms-powerpoint")
	if err!=nil{
		fmt.Println("AddExtensionType:ppt error",err)
		return err
	}
	err=mime.AddExtensionType(".doc","application/msword")
	if err!=nil{
		fmt.Println("AddExtensionType:doc error",err)
		return err
	}
	return nil
}
