package config

import (
	"encoding/json"
	"fmt"
	"os"
)

type Configuration struct {
	Port    int`json:"port"`
	RedisUrl string `json:"redis_url"`
	PsqlUrl string `json:"psql_url"`
	StaticFilePath string `json:"static_file_path"`
	ServerFilePath string `json:"server_file_path"`
	ServerAssetsFilePath string `json:"server_assets_file_path"`
}

var configuration *Configuration

func InitConfig(filename string){
	file,err := os.Open(filename)
	if err != nil {
		panic("config file error： "+err.Error())
	}
	decoder:=json.NewDecoder(file)
	temp := &Configuration{}
	err = decoder.Decode(temp)
	if err != nil {
		panic("config file error： "+err.Error())
	}

	fmt.Println("解析出来的数据",temp)
	configuration = temp
}

func Port()int{
	return configuration.Port
}

func RedisUrlCfg()string {

	return configuration.RedisUrl
}

func PsqlUrlCfg() string {

	return configuration.PsqlUrl
}

func StaticFilePath()string{
	return configuration.StaticFilePath
}
func ServerFilePath()string{
	return configuration.ServerFilePath
}


func ServerAssetsFilePath() string {
	return configuration.ServerAssetsFilePath
}