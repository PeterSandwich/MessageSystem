package defs

type Err struct {
	Error string
	ErrorCode string
}

type ErrResponse struct {
	HttpSC int
	Error Err
}

var (
	ErrorRequestBodyParseFailed = ErrResponse{HttpSC: 255, Error: Err{Error: "Request body is not correct", ErrorCode: "001"}}
	ErrorNotAuthUser = ErrResponse{HttpSC: 255, Error: Err{Error: "User authentication failed.", ErrorCode: "002"}}
	ErrorDBError = ErrResponse{HttpSC: 255, Error: Err{Error: "DB ops failed", ErrorCode: "003"}}
	ErrorInternalFaults = ErrResponse{HttpSC: 255, Error: Err{Error: "Internal service error", ErrorCode: "004"}}
	ErrorAccountExist = ErrResponse{HttpSC: 255, Error: Err{Error: "Account already exists", ErrorCode: "005"}}
	ErrorAccountOrPassWord = ErrResponse{HttpSC: 255, Error: Err{Error: "Wrong account or password", ErrorCode: "006"}}
	ErrorParamsFaults = ErrResponse{HttpSC: 255, Error: Err{Error: "Wrong params of URL", ErrorCode: "007"}}
	ErrorFileSize = ErrResponse{HttpSC:406,Error:Err{Error:"File too big",ErrorCode:"008"}}
	ErrorFileInvalid = ErrResponse{HttpSC:406,Error:Err{Error:"Invalid file",ErrorCode:"009"}}
	ErrorReadFile = ErrResponse{HttpSC:406,Error:Err{Error:"Read File Error",ErrorCode:"010"}}
	ErrorIinvaidType = ErrResponse{HttpSC:406,Error:Err{Error:"Invalid File Type",ErrorCode:"011"}}
	ErrorReadFileType = ErrResponse{HttpSC:406,Error:Err{Error:"Can't Read File Type",ErrorCode:"012"}}
	ErrorGetFileName = ErrResponse{HttpSC:406,Error:Err{Error:"Get FileMD5 Error",ErrorCode:"013"}}
	ErrorSubstrFileName = ErrResponse{HttpSC:406,Error:Err{Error:"Substr File Name Error",ErrorCode:"014"}}
	ErrorMkdir = ErrResponse{HttpSC:406,Error:Err{Error:"Mkdir_Error",ErrorCode:"015"}}
	ErrorCreateFile = ErrResponse{HttpSC:406,Error:Err{Error:"Create File Error",ErrorCode:"016"}}
)



