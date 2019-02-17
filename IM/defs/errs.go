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

)



