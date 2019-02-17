package config

import (
	"encoding/json"
	"os"
)

type Configuration struct {
	Port    string`json:"port"`
	StaticFilePath string `json:"static_file_path"`
	ServerFilePath string `json:"server_file_path"`
}

var configuration *Configuration
func init(){
	file,err := os.Open("./im.config")
	if err != nil {
		panic("config file error： "+err.Error())
	}
	decoder:=json.NewDecoder(file)
	err = decoder.Decode(configuration)
	if err != nil {
		panic("config file error： "+err.Error())
	}
}

func Port()string{
	return configuration.Port
}
func StaticFilePath()string{
	return configuration.StaticFilePath
}
func ServerFilePath()string{
	return configuration.ServerFilePath
}