package main

import (
	"MessageSystem/IM/defs"
	"MessageSystem/IM/session"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

type middleWareHandler struct {
	r *httprouter.Router
}

func NewMiddleWareHandler(r *httprouter.Router) http.Handler {
	m := middleWareHandler{}
	m.r = r
	return m
}

func (m middleWareHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	//check session
	//var ok bool
	//if r,ok = validateUserSession(r);!ok{
	//	w.WriteHeader(http.StatusNonAuthoritativeInfo)
	//	return
	//}
	m.r.ServeHTTP(w, r)
}

func validateUserSession(r *http.Request)(*http.Request,bool){

	Logger.Debug(r.URL.Path)
	uid, ok := session.IsSessionExpired(r)
	if ok {
		return r,false
	}
	r.Header.Add(defs.HEADER_FIELD_UID, uid)
	return r,true
}