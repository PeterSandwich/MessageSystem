package config

import (
	"encoding/json"
	"os"
)

type Configuration struct {
	Port    int`json:"port"`
	StaticFilePath string `json:"static_file_path"`
	ServerFilePath string `json:"server_file_path"`
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
	configuration = temp
}

func Port()int{
	return configuration.Port
}
func StaticFilePath()string{
	return configuration.StaticFilePath
}
func ServerFilePath()string{
	return configuration.ServerFilePath
}