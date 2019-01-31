(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







var routes = [
    { path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "chat", component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n      <li nz-menu-item routerLink=\"\" routerLinkActive=\"active\" >首页</li>\n      <li nz-menu-item routerLink=\"/login\" routerLinkActive=\"active\" [hidden]=\"login.isLogin\">登录</li>\n      <li nz-menu-item routerLink=\"/signup\" routerLinkActive=\"active\" [hidden]=\"login.isLogin\">注册</li>\n      <li nz-menu-item routerLink=\"/chat\" routerLinkActive=\"active\" [hidden]=\"!login.isLogin\"> <nz-badge nzDot style=\"color:white\"><a>消息</a></nz-badge></li>\n      <li nz-menu-item  (click)=\"quit()\" [hidden]=\"!login.isLogin\">退出</li>\n    </ul>\n  </nz-header>\n  <nz-content style=\"padding:0 50px;\">\n    <div style=\"background:#fff; padding: 24px; min-height: 800px;\">\n      <router-outlet></router-outlet>\n    </div>\n  </nz-content>\n</nz-layout>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(login, router) {
        this.login = login;
        this.router = router;
    }
    AppComponent.prototype.quit = function () {
        this.login.quit().subscribe(function (data) { console.log("退出"); });
        this.login.isLogin = false;
        this.router.navigate(["/login"]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _app_file_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/file.service */ "./src/app/file.service.ts");


















Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_14___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
            ],
            providers: [_websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"], _user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["en_US"] }, _app_file_service__WEBPACK_IMPORTED_MODULE_17__["UploadService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .demo-infinite-container {\n    height: 300px;\n    border: 1px solid #e8e8e8;\n    border-radius: 4px;\n  }\n  .headportrait{\n    position: relative;\n    width:230px;\n    height:230px;\n    bottom: -26px;\n    margin-left:26px;\n    cursor:pointer;\n}\n  :host ::ng-deep .headportrait img{\n    width:100%;height:100%;\n\n}\n  .mask  {    \n    position: absolute;    \n    width: 100%;    \n    height: 100%;      \n    background: #868c89;    \n    opacity: 0;\t\n    color: black;\n    text-align: center;\n    line-height:230px;\n    margin-top: -230px;\n}\n  /*hover状态（按你的需求）控制显示。opacity/display/z-index都可以*/\n  .headportrait:hover .mask {    opacity: .5;\t}\n  .upload-btn {\n  background-color: #337ab7;\n  color: #fff;\n  border-radius: 2px;\n  border: none;\n  padding: .5rem 1.3rem;\n  cursor: pointer;\n}\n  .picture {\n  width: 7rem;\n  height: 7rem;\n  margin-right: 1rem;\n  background-size: cover;\n}\n  .action-box {\n  margin-left: 1rem;\n}\n  .hint {\n  color: #909090;\n  font-size: 1.7rem;\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0VBRUE7SUFDSSxVQUFVLENBQUMsV0FBVzs7QUFFMUI7RUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0VBQUMsZ0RBQWdEO0VBQ2pELCtCQUErQixXQUFXLEVBQUU7RUFFNUM7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7RUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtFQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0VBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5kZW1vLWluZmluaXRlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuaGVhZHBvcnRyYWl0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDoyMzBweDtcbiAgICBoZWlnaHQ6MjMwcHg7XG4gICAgYm90dG9tOiAtMjZweDtcbiAgICBtYXJnaW4tbGVmdDoyNnB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhlYWRwb3J0cmFpdCBpbWd7XG4gICAgd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcblxufVxuXG4ubWFzayAgeyAgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgIHdpZHRoOiAxMDAlOyAgICBcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICAgXG4gICAgYmFja2dyb3VuZDogIzg2OGM4OTsgICAgXG4gICAgb3BhY2l0eTogMDtcdFxuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6MjMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIzMHB4O1xufS8qaG92ZXLnirbmgIHvvIjmjInkvaDnmoTpnIDmsYLvvInmjqfliLbmmL7npLrjgIJvcGFjaXR5L2Rpc3BsYXkvei1pbmRleOmDveWPr+S7pSovXHRcbi5oZWFkcG9ydHJhaXQ6aG92ZXIgLm1hc2sgeyAgICBvcGFjaXR5OiAuNTtcdH1cblxuLnVwbG9hZC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IC41cmVtIDEuM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGljdHVyZSB7XG4gIHdpZHRoOiA3cmVtO1xuICBoZWlnaHQ6IDdyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmFjdGlvbi1ib3gge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5oaW50IHtcbiAgY29sb3I6ICM5MDkwOTA7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button nz-button nzType=\"primary\" (click)=\"getalluser()\">获取全部用户列表</button>\n</div>\n<div>\n  <button nz-button nzType=\"primary\" (click)=\"ChatList()\">获取好友列表</button>\n</div>\n<div>\n  <button nz-button nzType=\"primary\" (click)=\"HistoryMessage()\">获取历史消息</button>\n</div>\n<div>\n  <input [(ngModel)]=\"chatto\">\n  <button nz-button nzType=\"primary\" (click)=\"chatToPeo(chatto)\">加好友</button>\n</div>\n\n<h2>单聊</h2>\n<div style=\"margin-bottom: 16px;\">\n  <nz-input-group nzAddOnBefore=\"发送给：\">\n    <input type=\"text\" nz-input [(ngModel)]=\"c2c_to_id\">\n  </nz-input-group>\n</div>\n<div style=\"margin-bottom: 16px;\">\n  <nz-input-group nzAddOnBefore=\"内容：\">\n    <input type=\"text\" nz-input [(ngModel)]=\"c2c_content\">\n  </nz-input-group>\n</div>\n<button nz-button nzType=\"primary\" (click)=\"sendMsg()\">发送</button>\n\n\n\n\n\n<br>\n<br>\n<div>\n  <input id=\"upfile\" type=\"file\" style=\"display: none;\" (change)=\"selectFile($event)\">\n  <div class=\"action-box\">\n    <button class=\"upload-btn\" onclick=\"upfile.click()\"> 点击上传\n    </button>\n  </div>\n  <div *ngIf=\"show\">\n    <div style=\"display: -webkit-box;\">\n      <div class=\"picture\" [ngStyle]=\"{ 'background-image': 'url('+GetPicUrl+filep+ ')'}\"></div>\n      <div class=\"hint\">\n        {{filename}}\n      </div>\n      <div class=\"action-box\">\n        <button class=\"upload-btn\" (click)=\" downloadFile()\"> 下载\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<h2>创建群</h2>\n<div style=\"margin-bottom: 16px;\">\n  <nz-input-group nzAddOnBefore=\"群名\">\n    <input type=\"text\" nz-input [(ngModel)]=\"group_name\">\n  </nz-input-group>\n</div>\n<button nz-button nzType=\"primary\" (click)=\"createGroup()\">创建群</button>\n\n<h2>邀请进入组</h2>\n<div style=\"margin-bottom: 16px;\">\n  <nz-input-group nzAddOnBefore=\"组ID：\">\n    <input type=\"text\" nz-input [(ngModel)]=\"gtoup_id\">\n  </nz-input-group>\n</div>\n<div style=\"margin-bottom: 16px;\">\n  <nz-input-group nzAddOnBefore=\"被邀请人的ID：\">\n    <input type=\"text\" nz-input [(ngModel)]=\"add_mem_id\">\n  </nz-input-group>\n</div>\n<button nz-button nzType=\"primary\" (click)=\"addMemToGoup()\">邀请进入组</button>\n\n<h2>群聊</h2>\n<div style=\"margin-bottom: 16px;\">\n  <nz-input-group nzAddOnBefore=\"发送给组：\">\n    <input type=\"text\" nz-input [(ngModel)]=\"c2g_group_id\">\n  </nz-input-group>\n</div>\n<div style=\"margin-bottom: 16px;\">\n  <nz-input-group nzAddOnBefore=\"内容：\">\n    <input type=\"text\" nz-input [(ngModel)]=\"c2g_content\">\n  </nz-input-group>\n</div>\n<button nz-button nzType=\"primary\" (click)=\"sendToGoup()\">发送</button>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent, Hist, HistList, ChatItem, ChatList, MsgItem, MsgList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hist", function() { return Hist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistList", function() { return HistList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatItem", function() { return ChatItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatList", function() { return ChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgItem", function() { return MsgItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgList", function() { return MsgList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../protocol/Protocol */ "./src/app/protocol/Protocol.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../file.service */ "./src/app/file.service.ts");







var ChatComponent = /** @class */ (function () {
    function ChatComponent(ws, us, upload) {
        this.ws = ws;
        this.us = us;
        this.upload = upload;
        this.chatto = 0;
        this.c2c_to_id = 0;
        this.c2c_content = "";
        this.group_name = '';
        this.add_mem_id = 0;
        this.gtoup_id = 0;
        this.c2g_group_id = 0;
        this.c2g_content = "";
        this.GetPicUrl = "http://localhost:9988/getpic/";
        this.fileurl = 'http://localhost:9988/upload';
        this.dfileurl = "";
        this.filep = "";
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.one = { ID: 1, Isgroup: false };
        this.msglist = { List: [] };
    };
    //////////////////////////////////////////////////////////////////////////////////////
    ChatComponent.prototype.getalluser = function () {
        this.ws.getUserList("").subscribe(function (data) {
            console.log(data);
        });
    };
    ChatComponent.prototype.chatToPeo = function (to) {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_SESSION;
        msg.from = this.us.MyUserId;
        msg.to = to;
        msg.time = Date.now();
        this.ws.sendMessage(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.encode(msg).finish());
    };
    ChatComponent.prototype.sendMsg = function () {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.REQUEST; //消息的类型的请求类型
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.NONE; // 消息的功能
        msg.from = this.us.MyUserId; // 消息发送方
        msg.to = this.c2c_to_id; //消息接收方
        msg.content = this.c2c_content; //消息内容
        msg.contentType = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.ContentType.TEXT; //消息类型
        msg.time = Date.now(); //消息的发送时间
        msg.isgroup = false; //是不是群组消息
        this.ws.sendMessage(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.encode(msg).finish());
    };
    ChatComponent.prototype.createGroup = function () {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_GROUP;
        msg.from = this.us.MyUserId;
        msg.content = this.group_name;
        msg.userlist.push(this.us.MyUserId);
        msg.time = Date.now();
        this.ws.sendMessage(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.encode(msg).finish());
    };
    ChatComponent.prototype.addMemToGoup = function () {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.GROUP_ADDMEMBERS;
        msg.from = this.us.MyUserId;
        msg.group = this.gtoup_id;
        msg.userlist.push(this.add_mem_id);
        msg.time = Date.now();
        this.ws.sendMessage(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.encode(msg).finish());
    };
    ChatComponent.prototype.sendToGoup = function () {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.NONE;
        msg.from = this.us.MyUserId;
        msg.group = this.c2g_group_id;
        msg.content = this.c2g_content;
        msg.isgroup = true;
        msg.time = Date.now();
        this.ws.sendMessage(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.encode(msg).finish());
    };
    ChatComponent.prototype.ChatList = function () {
        var _this = this;
        this.ws.getChatList().subscribe(function (data) {
            var HL = new (HistList);
            HL.List = [];
            for (var i = 0; i < data.List.length; i++) {
                var FriItem = new (_websocket_service__WEBPACK_IMPORTED_MODULE_3__["FriendItem"]);
                FriItem.ID = data.List[i].Id;
                FriItem.Name = data.List[i].Name;
                FriItem.Headimg = data.List[i].Headimg;
                FriItem.Isgroup = data.List[i].Isgroup;
                FriItem.Counter = data.List[i].Counter;
                _this.ws.FriendList.List.push(FriItem);
                var Ht = new (Hist);
                Ht.ID = data.List[i].Id;
                Ht.Isgroup = data.List[i].Isgroup;
                HL.List.push(Ht);
            }
            _this.HistoryMessage(HL);
        });
    };
    ChatComponent.prototype.HistoryMessage = function (info) {
        var _this = this;
        this.ws.getChatMessageList(info).subscribe(function (data) {
            console.log(data);
            _this.ws.MessageList.List = [];
            for (var i = 0; i < data.List.length; i++) {
                var session = new (_websocket_service__WEBPACK_IMPORTED_MODULE_3__["Session"]);
                session.MList = [];
                if (data.List[i].length > 0) {
                    session.ID = data.List[i][0].From;
                    if (session.ID == _this.us.MyUserId) {
                        session.ID = data.List[i][0].To;
                    }
                    session.Isgroup = data.List[i][0].Isgroup;
                }
                for (var j = 0; j < data.List[i].length; j++) {
                    var Item = new (_websocket_service__WEBPACK_IMPORTED_MODULE_3__["MessageItem"]);
                    Item.Mid = data.List[i][j].Mid;
                    Item.From = data.List[i][j].From;
                    Item.To = data.List[i][j].To;
                    Item.Content = data.List[i][j].Content;
                    Item.ContentType = data.List[i][j].ContentType;
                    Item.Time = data.List[i][j].Time;
                    session.MList.push(Item);
                }
                _this.ws.MessageList.List.push(session);
            }
            console.log(_this.ws.MessageList);
        });
    };
    ChatComponent.prototype.selectFile = function (event) {
        var fileList = event.target.files;
        this.uploadFile(fileList);
    };
    ChatComponent.prototype.uploadFile = function (files) {
        var _this = this;
        if (files.length == 0) {
            console.log("No file selected!");
            return;
        }
        var file = files[0];
        console.log(file.name);
        this.filename = file.name;
        this.upload.uploadFile(this.fileurl, file)
            .subscribe(function (response) {
            //.log(response);
            if (response["body"] != null) {
                if (response["body"]["code"] != 1) {
                    console.log(response["body"]["data"]);
                    _this.filep = response["body"]["data"]["filepath"];
                    _this.dfileurl = response["body"]["data"]["fileurl"];
                    // this.show = true;
                }
            }
            // if (event.type == HttpEventType.UploadProgress) {
            //   const percentDone = Math.round(100 * event.loaded / event.total);
            //   console.log(`File is ${percentDone}% loaded.`);
            // } else if (event instanceof HttpResponse) {
            //   console.log('File is completely loaded!');
            // }
        }, function (err) {
            console.log("Upload Error:", err);
        }, function () {
            console.log("Upload done");
        });
        //this.getpath();
    };
    ChatComponent.prototype.getpath = function () {
        this.filep = "getpic/3ea62ac5fb0758efadb15e36_compress.jpg";
        console.log(this.filep);
    };
    ChatComponent.prototype.download = function () {
        this.fileurl = "http://localhost:9876/files";
        window.open(this.fileurl, '_blank');
        return;
    };
    // 调用浏览器的下载
    ChatComponent.prototype.downloadFile = function () {
        var a = document.createElement('a');
        a.href = this.dfileurl;
        a.download = 'download';
        a.click();
        a.remove();
        console.log('download:' + a.href);
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _file_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])
    ], ChatComponent);
    return ChatComponent;
}());

// 发送请求漫游消息的结构体
var Hist = /** @class */ (function () {
    function Hist() {
    }
    return Hist;
}());

var HistList = /** @class */ (function () {
    function HistList() {
    }
    return HistList;
}());

//接收 好友列表的结构体
var ChatItem = /** @class */ (function () {
    function ChatItem() {
    }
    return ChatItem;
}());

var ChatList = /** @class */ (function () {
    function ChatList() {
    }
    return ChatList;
}());

// 接收 漫游信息的结构体
var MsgItem = /** @class */ (function () {
    function MsgItem() {
    }
    return MsgItem;
}());

var MsgList = /** @class */ (function () {
    function MsgList() {
    }
    return MsgList;
}());



/***/ }),

/***/ "./src/app/file.service.ts":
/*!*********************************!*\
  !*** ./src/app/file.service.ts ***!
  \*********************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    // file from event.target.files[0]
    UploadService.prototype.uploadFile = function (url, file) {
        var filetype = file.type;
        var formData = new FormData();
        formData.append('uploadFile', file);
        formData.append('type', filetype);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = {
            params: params,
            reportProgress: true,
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', url, formData, options);
        return this.http.request(req);
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-skeleton></nz-skeleton>\n<nz-skeleton></nz-skeleton>\n<nz-skeleton></nz-skeleton>\n<nz-skeleton></nz-skeleton>\n<nz-skeleton></nz-skeleton>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"margin-left:100px\">\n  <h1>登录</h1>\n  <div>.</div>\nUsername:<input nz-input placeholder=\"default size\" [(ngModel)]=\"name\" style=\"width: 200px\">\n<div>.</div>\nPassword:<input nz-input placeholder=\"default size\" [(ngModel)]=\"password\" style=\"width: 200px\">\n<div>.</div>\n<button (click)=\"submit()\" nz-button nzType=\"primary\">提交</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(login, ws, router) {
        this.login = login;
        this.ws = ws;
        this.router = router;
        this.name = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var body = { name: this.name, password: this.password };
        this.login.postLoginData(body).subscribe(function (data) {
            if (data['Ok']) {
                _this.login.isLogin = true;
                _this.router.navigate(['']);
                console.log(data['Uid']);
                _this.login.MyUserId = data['Uid'];
                _this.ws.createSocket(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].websocketUrl);
            }
            else {
                alert(data['Errmsg']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/protocol/Protocol.js":
/*!**************************************!*\
  !*** ./src/app/protocol/Protocol.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/


var $protobuf = __webpack_require__(/*! protobufjs/minimal */ "../../../../node_modules/protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Protocol = (function() {

    /**
     * Namespace Protocol.
     * @exports Protocol
     * @namespace
     */
    var Protocol = {};

    Protocol.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof Protocol
         * @interface IMessage
         * @property {Protocol.Message.Type|null} [type] Message type
         * @property {Protocol.Message.CtrlType|null} [cmd] Message cmd
         * @property {number|Long|null} [from] Message from
         * @property {number|Long|null} [to] Message to
         * @property {number|Long|null} [group] Message group
         * @property {boolean|null} [isgroup] Message isgroup
         * @property {string|null} [content] Message content
         * @property {Protocol.Message.ContentType|null} [contentType] Message contentType
         * @property {number|Long|null} [msgid] Message msgid
         * @property {number|Long|null} [time] Message time
         * @property {Array.<number|Long>|null} [userlist] Message userlist
         */

        /**
         * Constructs a new Message.
         * @memberof Protocol
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {Protocol.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            this.userlist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message type.
         * @member {Protocol.Message.Type} type
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.type = 0;

        /**
         * Message cmd.
         * @member {Protocol.Message.CtrlType} cmd
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.cmd = 0;

        /**
         * Message from.
         * @member {number|Long} from
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message to.
         * @member {number|Long} to
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message group.
         * @member {number|Long} group
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.group = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message isgroup.
         * @member {boolean} isgroup
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.isgroup = false;

        /**
         * Message content.
         * @member {string} content
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.content = "";

        /**
         * Message contentType.
         * @member {Protocol.Message.ContentType} contentType
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.contentType = 0;

        /**
         * Message msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message time.
         * @member {number|Long} time
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message userlist.
         * @member {Array.<number|Long>} userlist
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.userlist = $util.emptyArray;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof Protocol.Message
         * @static
         * @param {Protocol.IMessage=} [properties] Properties to set
         * @returns {Protocol.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link Protocol.Message.verify|verify} messages.
         * @function encode
         * @memberof Protocol.Message
         * @static
         * @param {Protocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cmd);
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.from);
            if (message.to != null && message.hasOwnProperty("to"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.to);
            if (message.group != null && message.hasOwnProperty("group"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.group);
            if (message.isgroup != null && message.hasOwnProperty("isgroup"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isgroup);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.content);
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.contentType);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.msgid);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.time);
            if (message.userlist != null && message.userlist.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (var i = 0; i < message.userlist.length; ++i)
                    writer.int64(message.userlist[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Protocol.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.Message
         * @static
         * @param {Protocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.cmd = reader.int32();
                    break;
                case 3:
                    message.from = reader.int64();
                    break;
                case 4:
                    message.to = reader.int64();
                    break;
                case 5:
                    message.group = reader.int64();
                    break;
                case 6:
                    message.isgroup = reader.bool();
                    break;
                case 7:
                    message.content = reader.string();
                    break;
                case 8:
                    message.contentType = reader.int32();
                    break;
                case 9:
                    message.msgid = reader.int64();
                    break;
                case 10:
                    message.time = reader.int64();
                    break;
                case 11:
                    if (!(message.userlist && message.userlist.length))
                        message.userlist = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.userlist.push(reader.int64());
                    } else
                        message.userlist.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof Protocol.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                switch (message.cmd) {
                default:
                    return "cmd: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from) && !(message.from && $util.isInteger(message.from.low) && $util.isInteger(message.from.high)))
                    return "from: integer|Long expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isInteger(message.to) && !(message.to && $util.isInteger(message.to.low) && $util.isInteger(message.to.high)))
                    return "to: integer|Long expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isInteger(message.group) && !(message.group && $util.isInteger(message.group.low) && $util.isInteger(message.group.high)))
                    return "group: integer|Long expected";
            if (message.isgroup != null && message.hasOwnProperty("isgroup"))
                if (typeof message.isgroup !== "boolean")
                    return "isgroup: boolean expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                switch (message.contentType) {
                default:
                    return "contentType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.userlist != null && message.hasOwnProperty("userlist")) {
                if (!Array.isArray(message.userlist))
                    return "userlist: array expected";
                for (var i = 0; i < message.userlist.length; ++i)
                    if (!$util.isInteger(message.userlist[i]) && !(message.userlist[i] && $util.isInteger(message.userlist[i].low) && $util.isInteger(message.userlist[i].high)))
                        return "userlist: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.Message)
                return object;
            var message = new $root.Protocol.Message();
            switch (object.type) {
            case "ACK":
            case 0:
                message.type = 0;
                break;
            case "REQUEST":
            case 1:
                message.type = 1;
                break;
            case "NOTIFICATION":
            case 2:
                message.type = 2;
                break;
            }
            switch (object.cmd) {
            case "NONE":
            case 0:
                message.cmd = 0;
                break;
            case "CREATE_GROUP":
            case 1:
                message.cmd = 1;
                break;
            case "GROUP_ADDMEMBERS":
            case 2:
                message.cmd = 2;
                break;
            case "MSG_BACK":
            case 3:
                message.cmd = 3;
                break;
            case "CREATE_SESSION":
            case 4:
                message.cmd = 4;
                break;
            }
            if (object.from != null)
                if ($util.Long)
                    (message.from = $util.Long.fromValue(object.from)).unsigned = false;
                else if (typeof object.from === "string")
                    message.from = parseInt(object.from, 10);
                else if (typeof object.from === "number")
                    message.from = object.from;
                else if (typeof object.from === "object")
                    message.from = new $util.LongBits(object.from.low >>> 0, object.from.high >>> 0).toNumber();
            if (object.to != null)
                if ($util.Long)
                    (message.to = $util.Long.fromValue(object.to)).unsigned = false;
                else if (typeof object.to === "string")
                    message.to = parseInt(object.to, 10);
                else if (typeof object.to === "number")
                    message.to = object.to;
                else if (typeof object.to === "object")
                    message.to = new $util.LongBits(object.to.low >>> 0, object.to.high >>> 0).toNumber();
            if (object.group != null)
                if ($util.Long)
                    (message.group = $util.Long.fromValue(object.group)).unsigned = false;
                else if (typeof object.group === "string")
                    message.group = parseInt(object.group, 10);
                else if (typeof object.group === "number")
                    message.group = object.group;
                else if (typeof object.group === "object")
                    message.group = new $util.LongBits(object.group.low >>> 0, object.group.high >>> 0).toNumber();
            if (object.isgroup != null)
                message.isgroup = Boolean(object.isgroup);
            if (object.content != null)
                message.content = String(object.content);
            switch (object.contentType) {
            case "TEXT":
            case 0:
                message.contentType = 0;
                break;
            case "IMG":
            case 1:
                message.contentType = 1;
                break;
            case "FILE":
            case 2:
                message.contentType = 2;
                break;
            }
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.userlist) {
                if (!Array.isArray(object.userlist))
                    throw TypeError(".Protocol.Message.userlist: array expected");
                message.userlist = [];
                for (var i = 0; i < object.userlist.length; ++i)
                    if ($util.Long)
                        (message.userlist[i] = $util.Long.fromValue(object.userlist[i])).unsigned = false;
                    else if (typeof object.userlist[i] === "string")
                        message.userlist[i] = parseInt(object.userlist[i], 10);
                    else if (typeof object.userlist[i] === "number")
                        message.userlist[i] = object.userlist[i];
                    else if (typeof object.userlist[i] === "object")
                        message.userlist[i] = new $util.LongBits(object.userlist[i].low >>> 0, object.userlist[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.Message
         * @static
         * @param {Protocol.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userlist = [];
            if (options.defaults) {
                object.type = options.enums === String ? "ACK" : 0;
                object.cmd = options.enums === String ? "NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.from = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.from = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.to = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.to = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.group = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.group = options.longs === String ? "0" : 0;
                object.isgroup = false;
                object.content = "";
                object.contentType = options.enums === String ? "TEXT" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Protocol.Message.Type[message.type] : message.type;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.Protocol.Message.CtrlType[message.cmd] : message.cmd;
            if (message.from != null && message.hasOwnProperty("from"))
                if (typeof message.from === "number")
                    object.from = options.longs === String ? String(message.from) : message.from;
                else
                    object.from = options.longs === String ? $util.Long.prototype.toString.call(message.from) : options.longs === Number ? new $util.LongBits(message.from.low >>> 0, message.from.high >>> 0).toNumber() : message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                if (typeof message.to === "number")
                    object.to = options.longs === String ? String(message.to) : message.to;
                else
                    object.to = options.longs === String ? $util.Long.prototype.toString.call(message.to) : options.longs === Number ? new $util.LongBits(message.to.low >>> 0, message.to.high >>> 0).toNumber() : message.to;
            if (message.group != null && message.hasOwnProperty("group"))
                if (typeof message.group === "number")
                    object.group = options.longs === String ? String(message.group) : message.group;
                else
                    object.group = options.longs === String ? $util.Long.prototype.toString.call(message.group) : options.longs === Number ? new $util.LongBits(message.group.low >>> 0, message.group.high >>> 0).toNumber() : message.group;
            if (message.isgroup != null && message.hasOwnProperty("isgroup"))
                object.isgroup = message.isgroup;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                object.contentType = options.enums === String ? $root.Protocol.Message.ContentType[message.contentType] : message.contentType;
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.userlist && message.userlist.length) {
                object.userlist = [];
                for (var j = 0; j < message.userlist.length; ++j)
                    if (typeof message.userlist[j] === "number")
                        object.userlist[j] = options.longs === String ? String(message.userlist[j]) : message.userlist[j];
                    else
                        object.userlist[j] = options.longs === String ? $util.Long.prototype.toString.call(message.userlist[j]) : options.longs === Number ? new $util.LongBits(message.userlist[j].low >>> 0, message.userlist[j].high >>> 0).toNumber() : message.userlist[j];
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof Protocol.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name Protocol.Message.Type
         * @enum {string}
         * @property {number} ACK=0 ACK value
         * @property {number} REQUEST=1 REQUEST value
         * @property {number} NOTIFICATION=2 NOTIFICATION value
         */
        Message.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ACK"] = 0;
            values[valuesById[1] = "REQUEST"] = 1;
            values[valuesById[2] = "NOTIFICATION"] = 2;
            return values;
        })();

        /**
         * CtrlType enum.
         * @name Protocol.Message.CtrlType
         * @enum {string}
         * @property {number} NONE=0 NONE value
         * @property {number} CREATE_GROUP=1 CREATE_GROUP value
         * @property {number} GROUP_ADDMEMBERS=2 GROUP_ADDMEMBERS value
         * @property {number} MSG_BACK=3 MSG_BACK value
         * @property {number} CREATE_SESSION=4 CREATE_SESSION value
         */
        Message.CtrlType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "CREATE_GROUP"] = 1;
            values[valuesById[2] = "GROUP_ADDMEMBERS"] = 2;
            values[valuesById[3] = "MSG_BACK"] = 3;
            values[valuesById[4] = "CREATE_SESSION"] = 4;
            return values;
        })();

        /**
         * ContentType enum.
         * @name Protocol.Message.ContentType
         * @enum {string}
         * @property {number} TEXT=0 TEXT value
         * @property {number} IMG=1 IMG value
         * @property {number} FILE=2 FILE value
         */
        Message.ContentType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TEXT"] = 0;
            values[valuesById[1] = "IMG"] = 1;
            values[valuesById[2] = "FILE"] = 2;
            return values;
        })();

        return Message;
    })();

    return Protocol;
})();

module.exports = $root;


/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left:100px\">\n  <h1>注册</h1>\n  <div>.</div>\nUsername:<input nz-input placeholder=\"default size\" [(ngModel)]=\"name\" style=\"width: 200px\">\n<div>.</div>\nPassword:<input nz-input placeholder=\"default size\" [(ngModel)]=\"password\" style=\"width: 200px\">\n<div>.</div>\n<button (click)=\"signup()\" nz-button nzType=\"primary\">提交</button>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(login) {
        this.login = login;
        this.name = '';
        this.password = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var body = { name: this.name, password: this.password };
        this.login.postSignupData(body).subscribe(function (data) {
            console.log(data);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.isLogin = false;
        this.MyUserId = -1;
        this.configUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.loginUrl = this.configUrl + "/login";
        this.signupUrl = this.configUrl + '/signup';
        this.quitUrl = this.configUrl + '/quit';
    }
    UserService.prototype.postLoginData = function (data) {
        return this.http.post(this.loginUrl, data);
    };
    UserService.prototype.postSignupData = function (data) {
        return this.http.post(this.signupUrl, data);
    };
    UserService.prototype.quit = function () {
        return this.http.get(this.quitUrl);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService, FriendItem, FriendList, MessageItem, Session, MessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendItem", function() { return FriendItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendList", function() { return FriendList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItem", function() { return MessageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageList", function() { return MessageList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protocol/Protocol */ "./src/app/protocol/Protocol.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var WebsocketService = /** @class */ (function () {
    function WebsocketService(http) {
        this.http = http;
        this.collection = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message);
        this.FriendList = new (FriendList);
        this.FriendList.List = [];
        this.MessageList = new (MessageList);
        this.MessageList.List = [];
    }
    WebsocketService.prototype.createSocket = function (url) {
        this.ws = new WebSocket(url);
        this.ws.onopen = function () {
            console.log("WebSocket打开");
        };
        this.ws.onmessage = function (evt) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(evt.data);
            reader.onload = function (e) {
                var buf = new Uint8Array(reader.result);
                var conn = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.decode(buf);
                console.log(conn);
            };
        };
        this.ws.onclose = function () {
            console.log("WebSocket结束");
        };
    };
    WebsocketService.prototype.sendMessage = function (message) {
        this.ws.send(message);
    };
    WebsocketService.prototype.getUserList = function (name) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/userlist?name" + name;
        return this.http.get(url);
    };
    // 获取聊天列表，或者是好友聊天列表
    WebsocketService.prototype.getChatList = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/chatlist";
        return this.http.get(url);
    };
    WebsocketService.prototype.getChatMessageList = function (data) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/histchat";
        return this.http.post(url, JSON.stringify(data));
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebsocketService);
    return WebsocketService;
}());

var FriendItem = /** @class */ (function () {
    function FriendItem() {
    }
    return FriendItem;
}());

var FriendList = /** @class */ (function () {
    function FriendList() {
    }
    return FriendList;
}());

var MessageItem = /** @class */ (function () {
    function MessageItem() {
    }
    return MessageItem;
}());

var Session = /** @class */ (function () {
    function Session() {
    }
    return Session;
}());

var MessageList = /** @class */ (function () {
    function MessageList() {
    }
    return MessageList;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    websocketUrl: "ws://localhost:9988/ws",
    apiUrl: "http://localhost:9988/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pjw/GoProject/src/MessageSystem/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map