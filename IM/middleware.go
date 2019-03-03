package main

import (
	"MessageSystem/IM/defs"
	"MessageSystem/IM/session"
	"github.com/julienschmidt/httprouter"
	"go.uber.org/zap"
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
	r,uid := validateUserSession(r)
	r.Header.Add(defs.HEADER_FIELD_UID, uid)
	m.r.ServeHTTP(w, r)
}

func validateUserSession(r *http.Request)(*http.Request,string){
	str := r.Header.Get(defs.HEADER_FIELD_SESSION)
	if len(str)==0 {
		str = r.URL.Query().Get("session_id")
	}
	uid, ok := session.IsSessionExpired(str)
	Logger.Debug("get uid from IsSessionExpired",zap.String("uid",uid),zap.String("url",r.URL.Path))
	if ok {
		Logger.Warn(" session.IsSessionExpired")
		return r,""
	}
	return r,uid
}