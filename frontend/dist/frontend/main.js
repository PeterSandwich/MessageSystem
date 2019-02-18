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
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
    },
    {
        path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "chat",
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
    },
    {
        path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n      <li nz-menu-item routerLink=\"\" routerLinkActive=\"active\" >首页</li>\n      <li nz-menu-item routerLink=\"/login\" routerLinkActive=\"active\" [hidden]=\"login.isLogin\">登录</li>\n      <li nz-menu-item routerLink=\"/signup\" routerLinkActive=\"active\" [hidden]=\"login.isLogin\">注册</li>\n      <li nz-menu-item routerLink=\"/chat\" routerLinkActive=\"active\" [hidden]=\"!login.isLogin\"> <nz-badge nzDot style=\"color:white\"><a>消息</a></nz-badge></li>\n      <li nz-menu-item  (click)=\"quit()\" [hidden]=\"!login.isLogin\">退出</li>\n    </ul>\n  </nz-header>\n  <nz-content style=\"padding:0 50px;\">\n    <div style=\"background:#AAAAAA; padding: 24px; min-height: 800px;\">\n      <router-outlet></router-outlet>\n    </div>\n  </nz-content>\n</nz-layout>"

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

module.exports = ".container{\n  background-color: #DDDDDD;\n  width: 1024px;\n  height: 675px;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.avatar{\n  /* 1 */\n  background-color: rgb(198, 228, 98);\n  height: 40px;\n  width: 240px;\n  height: 30px;\n}\n.him{\n  /* 2 */\n  background-color: rgb(101, 216, 206);\n  width: 790px;\n  height: 60px;\n  color: #444444;\n  padding-left: 20px;\n}\n.avatar2{\n  /* 3 */\n  background-color: rgb(121, 202, 128);\n  height: 35px;\n  width: 790px;\n}\n.inputmes{\n  /* 5 */\n  background-color: rgb(240, 244, 255);\n  vertical-align: top;\n  width: 790px;\n  height: 190px;\n  /* background-color: white; */\n}\n.tool{\n  /* 6 */\n  width: 790px;\n  height: 35px;\n  background-color: rgb(233, 173, 168);\n\n}\n.list{\n  /* 4 */\n  background-color: rgb(229, 155, 226);\n\n  width: 240px;\n  height: 550px;\n  overflow-x: none;\n  overflow-y: auto;\n  vertical-align: top;\n\n}\n.list li{\n    height: 65px;\n    list-style-type: none;\n    vertical-align: middle;\n    padding: 15px;\n}\n.item{\n    color: white;\n    border-bottom:1px solid #EEE;\n    height: 65px;\n    font-size: 12px;\n    /* font-display: center; */\n    vertical-align: middle;\n    /* text-align: center; */\n    position: relative;\n    cursor: pointer;\n}\n.list li:hover{\n  background-color: bisque;\n}\n.list li.selected:hover{\n  background-color: aquamarine !important\n}\n.selected{\n  background-color: aqua !important\n}\n.search{\n  background-color: rgb(46, 64, 230);\n  height: 35px;\n  width: 240px;\n}\n.bar{\n  background-color: rgb(133, 91, 78);\n  height: 35px;\n  width: 240px;\n}\n.bartool{\n  width: 70px;\n}\n.dropdown{\n  z-index: 100;\n}\n.grad{\n  width: 70px;\n  background-color:transparent;\n  border: 0px;\n  outline: none;\n  cursor: pointer;\n  height: 25px;\n}\n.img{\n  /* margin: 5px; */\n  /* margin-top: 10px; */\n  height:40px; \n  width:40px; \n  position: relative;\n  /* border-radius:50%;  */\n  overflow:hidden;\n}\n.send{\n  position: absolute;\n  margin-left: 720px;\n  margin-top: 155px;\n  z-index: 100;\n}\n.textarea{\n  background-color: white;\n  resize: none;\n  width: 790px;\n  height: 150px;\n  position: absolute;\n  padding: 15px;\n  border: none;\n  outline: none;\n  /* margin-top: 30px; */\n}\n#box{\n  min-height: 30px;          \n  border-radius: 5px;        \n  /* line-height: 50px;         */\n  margin-left: 10px;        \n  word-break: break-word;        \n  color: white;        \n  padding: 5px;        \n  line-height: 18px;\n\n\n    position: relative;\n    left:30px; \n    width: 140px;\n    min-height: 30px;\n    line-height: 20px;\n    margin-left: 10px;\n    word-wrap: 5px;\n    background: #088cb7;\n    border-radius: 4px;\n    padding: 10px;\n    margin-top:10px;\n    vertical-align: middle;\n    text-align: center;\n}\n/*左方说话*/\n#box:before{\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    right: 100%;\n    top: 9px;\n    border-top: 5px solid transparent;\n    border-right: 13px solid #088cb7;\n    border-bottom: 6px solid transparent;\n}\n/*右方说话*/\n#box1{          \n  min-height: 30px;          \n  border-radius: 5px;        \n  /* line-height: 50px;         */\n  margin-right: 10px;        \n  word-break: break-word;        \n  color: white;        \n  padding: 5px;        \n  line-height: 18px;\n\n  position: relative;\n  left:560px; \n  width: 140px;\n  /* height: 30px; */\n  background: #088cb7;\n  border-radius: 4px;\n  /* padding: 10px; */\n  margin-top:10px;\n  vertical-align: middle;\n  text-align: center;\n}\n#box1:before{\n  position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    left: 100%;\n    top: 9px;\n    border-top: 5px solid transparent;\n    border-left: 13px solid #088cb7;\n    border-bottom: 6px solid transparent;\n}\n.message1{\n  width: 790px;\n  height: 430px;\n  background-color: #F9F9F9;\n  padding: 10px;\n  overflow-y: auto;\n  overflow-x: none;\n  vertical-align: top;\n}\n.mesback{\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQvY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxNQUFNO0VBQ04sbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxNQUFNO0VBQ04sb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsTUFBTTtFQUNOLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxNQUFNO0VBQ04sb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsTUFBTTtFQUNOLFlBQVk7RUFDWixZQUFZO0VBQ1osb0NBQW9DOztBQUV0QztBQUNBO0VBQ0UsTUFBTTtFQUNOLG9DQUFvQzs7RUFFcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7QUFFckI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjs7O0lBR2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUduQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0EsT0FBTztBQUNQO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxvQ0FBb0M7QUFDeEM7QUFDQSxPQUFPO0FBQ1A7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCOztFQUVqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBR25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0Isb0NBQW9DO0FBQ3hDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xuICB3aWR0aDogMTAyNHB4O1xuICBoZWlnaHQ6IDY3NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xufVxuLmF2YXRhcntcbiAgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMjgsIDk4KTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5oaW17XG4gIC8qIDIgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMjE2LCAyMDYpO1xuICB3aWR0aDogNzkwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5hdmF0YXIye1xuICAvKiAzICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDIwMiwgMTI4KTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogNzkwcHg7XG59XG5cbi5pbnB1dG1lc3tcbiAgLyogNSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDQsIDI1NSk7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA3OTBweDtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG59XG4udG9vbHtcbiAgLyogNiAqL1xuICB3aWR0aDogNzkwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTczLCAxNjgpO1xuXG59XG4ubGlzdHtcbiAgLyogNCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAxNTUsIDIyNik7XG5cbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDU1MHB4O1xuICBvdmVyZmxvdy14OiBub25lO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG59XG4ubGlzdCBsaXtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5pdGVte1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRUVFO1xuICAgIGhlaWdodDogNjVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLyogZm9udC1kaXNwbGF5OiBjZW50ZXI7ICovXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0IGxpOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG59XG4ubGlzdCBsaS5zZWxlY3RlZDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZSAhaW1wb3J0YW50XG59XG4uc2VsZWN0ZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWEgIWltcG9ydGFudFxufVxuLnNlYXJjaHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA2NCwgMjMwKTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMjQwcHg7XG59XG4uYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCA5MSwgNzgpO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAyNDBweDtcbn1cbi5iYXJ0b29se1xuICB3aWR0aDogNzBweDtcbn1cbi5kcm9wZG93bntcbiAgei1pbmRleDogMTAwO1xufVxuLmdyYWR7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uaW1ne1xuICAvKiBtYXJnaW46IDVweDsgKi9cbiAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cbiAgaGVpZ2h0OjQwcHg7IFxuICB3aWR0aDo0MHB4OyBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBib3JkZXItcmFkaXVzOjUwJTsgICovXG4gIG92ZXJmbG93OmhpZGRlbjtcbn1cbi5zZW5ke1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA3MjBweDtcbiAgbWFyZ2luLXRvcDogMTU1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi50ZXh0YXJlYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDc5MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLyogbWFyZ2luLXRvcDogMzBweDsgKi9cbn1cbiNib3h7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7ICAgICAgICAgIFxuICBib3JkZXItcmFkaXVzOiA1cHg7ICAgICAgICBcbiAgLyogbGluZS1oZWlnaHQ6IDUwcHg7ICAgICAgICAgKi9cbiAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgICAgICBcbiAgd29yZC1icmVhazogYnJlYWstd29yZDsgICAgICAgIFxuICBjb2xvcjogd2hpdGU7ICAgICAgICBcbiAgcGFkZGluZzogNXB4OyAgICAgICAgXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDozMHB4OyBcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3b3JkLXdyYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDg4Y2I3O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8q5bem5pa56K+06K+dKi9cbiNib3g6YmVmb3Jle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICByaWdodDogMTAwJTtcbiAgICB0b3A6IDlweDtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkICMwODhjYjc7XG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLyrlj7Pmlrnor7Tor50qL1xuI2JveDF7ICAgICAgICAgIFxuICBtaW4taGVpZ2h0OiAzMHB4OyAgICAgICAgICBcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAgICAgICAgXG4gIC8qIGxpbmUtaGVpZ2h0OiA1MHB4OyAgICAgICAgICovXG4gIG1hcmdpbi1yaWdodDogMTBweDsgICAgICAgIFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyAgICAgICAgXG4gIGNvbG9yOiB3aGl0ZTsgICAgICAgIFxuICBwYWRkaW5nOiA1cHg7ICAgICAgICBcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OjU2MHB4OyBcbiAgd2lkdGg6IDE0MHB4O1xuICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gIGJhY2tncm91bmQ6ICMwODhjYjc7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xuICBtYXJnaW4tdG9wOjEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNib3gxOmJlZm9yZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgdG9wOiA5cHg7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkICMwODhjYjc7XG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLm1lc3NhZ2Uxe1xuICB3aWR0aDogNzkwcHg7XG4gIGhlaWdodDogNDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ubWVzYmFja3tcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" (mouseup) = \"his($event)\" >\n    <!--聊天窗口-->\n    <table class = \"table\">\n      <tr>\n        <th class = \"avatar\" rowspan=\"2\" colspan=\"3\">\n          <!-- 1 -->\n          <div>\n              <!--个人信息-->\n                <img src = {{my_img_url}} style = \"height:60px; width:60px; border-radius:50%; overflow:hidden; position:absolute;left:15px; top:20px;\">\n                <div>\n                    <div style = \"left: 90px; top:30px; position: absolute\">{{my_name}}</div>\n                    <div style = \"left:90px; top:55px; position: absolute; color:#999999\">个性签名</div>\n                </div>\n            </div>\n        </th>\n        <th class = \"him\"  >\n          <!-- 2 -->\n          {{to_name}}\n          <nz-dropdown class = \"dropdown\" *ngIf=\"isgroup\">\n            <a nz-dropdown>\n              <i nz-icon type=\"down\"></i>\n            </a>\n          </nz-dropdown>\n        </th>\n      </tr>\n      <tr class = \"avatar2\" >\n          <td rowspan=\"4\"  >\n            <!-- 3 -->\n            <div class = \"message1\" id=\"scrolldIV\" >\n                <div *ngFor=\"let item of showmsg; let i = index; let last = last\" >\n                    <div *ngIf=\"item.from != my_id\" id = \"box\"><!--接受的消息-->\n                        <div *ngIf=\"item.content_type == 0\">{{item.content}}</div>\n                        <div *ngIf=\"item.content_type == 1\">     \n                            <div class=\"picture\" [ngStyle]=\"{ 'background-image': 'url('+item.content+ ')'}\"></div>\n                        </div>\n                        <div *ngIf=\"item.content_type == 2\"  (mouseup)=\"he($event)\" (contextmenu)=\"his($event)\">\n                            <img src=\"/files/uknow.png\" class=\"picture\" >\n                            <button class=\"upload-btn\" (click)=\" downloadFile()\"> 下载\n                            </button>\n                        </div>\n                    </div>\n                    <div *ngIf=\"item.from == my_id\" id=\"box1\"><!--发送的消息-->\n                        <div *ngIf=\"item.content_type != 1 && item.content_type != 2\"  (contextmenu)=\"his($event)\" (mouseup)=\"he($event, item, i)\" >{{item.content}}</div>\n                        <div *ngIf=\"item.content_type == 1\"  (mouseup)=\"he($event, item.content)\" (contextmenu)=\"his($event)\">     \n                            <div class=\"picture\" [ngStyle]=\"{ 'background-image': 'url('+item.content+ ')'}\"></div>\n                        </div>\n                        <div *ngIf=\"item.content_type == 2\"  (mouseup)=\"he($event)\" (contextmenu)=\"his($event)\">\n                            <img src=\"/files/uknow.png\" class=\"picture\" >\n                            <button class=\"upload-btn\" (click)=\" downloadFile()\"> 下载\n                            </button>\n                        </div>\n                    </div>\n                    <span *ngIf=\"last\">{{scollbuttom()}}</span>\n                  </div>\n              </div>\n          </td>\n      </tr>\n      <tr >\n          <td colspan=\"3\" class = \"search\" colspan=\"3\">\n            <!-- 7 -->\n              <div>\n                  <nz-input-group [nzSuffix]=\"suffixIconSearch1\"> \n                      <input type=\"text\" [(ngModel)]=\"searchFriend\" nz-input placeholder=\"输入搜索内容\" id = \"search\">\n                  </nz-input-group> \n        \n                  <ng-template #suffixIconSearch1>\n                      <i nz-icon type=\"search\" class = \"icon\"></i>\n                  </ng-template>\n        \n                  <div>\n                      <div *ngIf=\"isVisible\">\n                          <div *ngIf=\"!searchFriend\">\n                            正在搜索内容\n                          </div>\n                          <div *ngIf=\"searchFriend\">\n                              <div *ngIf=\"flag;else Show\">查无此人</div>\n                              <ng-template #Show>\n                                  <!-- <div *ngFor=\"let item of userlist\">\n                                      <img src = \"{{item.Img_url}}\" class = \"img\">\n                                      {{item.Name}}\n                                  </div> -->\n                              </ng-template>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </td>\n      </tr>\n      <tr class = \"bar\">\n        <td class = \"bartool\">\n            <button class = \"grad\">聊天</button>|\n        </td>\n        <td class = \"bartool\">\n            <button class = \"grad\">通讯录</button>|\n        </td>\n        <td class = \"bartool\">\n            <nz-dropdown class = \"dropdown\">\n                <a nz-dropdown>\n                    &nbsp; &nbsp;添加 <i nz-icon type=\"down\"></i>\n                </a>\n                <ul nz-menu nzSelectable>\n                    <li nz-menu-item (click)=\"showAddFriendModal()\">\n                        <a>添加好友</a>\n                    </li>\n                    <li nz-menu-item (click) = \"showAddGroupModal()\">\n                        <a>创建群聊</a>\n                    </li>\n                </ul>\n            </nz-dropdown>\n        </td>\n      </tr>\n      <tr>\n        <td rowspan=\"3\" colspan=\"3\">\n            <!-- 4 -->\n            <div class = \"list\" >\n                <li  class = \"item\" [class.selected]=\"item == friend\" *ngFor=\"let item of friendlist.contact_list; let i = index\" (click) = \"test2(i, item.id,item.name, item.head_img, item.is_group)\">\n                    <nz-badge [nzCount]=\"item.count\" *ngIf=\"list!=NULL\">\n                        <img src = \"{{item.head_img}}\" class = \"img\">\n                    </nz-badge>\n                 {{item.name}}\n                </li>\n            </div>\n        </td>\n      </tr>\n      <tr>\n        <td class = \"tool\">\n          <!-- 6 -->\n          <div  *ngIf=\"isselect\">\n              <div >\n                <!-- <i nz-icon type=\"folder\" theme=\"outline\" style=\"font-size: 25px\" class = \"icon\"></i>            \n                <i nz-icon type=\"picture\" theme=\"outline\" style=\"font-size: 25px\" class = \"icon\"></i>        -->\n                <input id=\"upfile\" type=\"file\" style=\"display: none;\" (change)=\"selectFile($event)\" accept=\".pdf,.doc,.txt,.jpg,.zip,.jpeg,.ppt\">\n                <div class=\"action-box\">\n                  <button class=\"upload-btn\" nz-button nzType=\"primary\" (click) = \"upfile.click()\" >点击上传</button>\n                </div>\n              </div>\n            </div>\n        </td>\n      </tr>\n      <tr class = \"inputmes\">\n    <!-- 输入框 -->\n        <td>\n        <!-- 5 -->\n          <div  *ngIf=\"isselect\">\n            <textarea class = \"textarea\" [(ngModel)] = \"content\"></textarea>\n            <button class = \"send\" nz-button nzType=\"primary\" (click) = \"sendMsg()\" >发送</button>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </div>\n    \n  \n  <!-- 创建群聊 -->\n  <nz-modal [(nzVisible)]=\"isAddGroupVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\" (nzOnCancel)=\"handleAddGroupCancel()\">\n      <ng-template #modalTitle>\n        创建群\n      </ng-template>\n      <ng-template #modalContent>\n        <!-- <div class = \"list\" > -->\n          <div class = \"item\" *ngFor=\"let item of addGroupUserList.AGlist\" >\n              <label nz-checkbox [(ngModel)]=\"item.Check\">\n                  <img src = \"{{item.Headimg}}\" class = \"img\">\n                  {{item.Name}}\n              </label>\n          </div>\n        <!-- </div> -->\n      </ng-template>\n      <ng-template #modalFooter>\n          <input nz-input placeholder=\"群名字\"[(ngModel)]=\"GroupName\">\n          <button nz-button nzType=\"default\" (click)=\"handleAddGroupCancel()\">取消</button>\n          <button nz-button nzType=\"primary\" (click)=\"handleAddGroupOk()\" [nzLoading]=\"isConfirmLoading\">创建</button>\n      </ng-template>\n  </nz-modal>\n    \n    \n    <!-- 添加好友 -->\n  <nz-modal [(nzVisible)]=\"isAddFriendVisible\" [nzTitle]=\"modalTitle1\" [nzContent]=\"modalContent1\"  (nzOnCancel)=\"handleAddFriendCancel()\">\n      <ng-template #modalTitle1>\n          添加好友\n          <nz-input-group [nzSuffix]=\"suffixIconSearch\"> \n              <input type=\"text\" [(ngModel)]=\"searchContent\" nz-input placeholder=\"输入搜索的用户名\" \n              id = \"search\" (keyup) = \"keyUpSearch($event)\">\n          </nz-input-group> \n  \n          <ng-template #suffixIconSearch>\n              <i nz-icon type=\"search\" class = \"icon\" (click) = \"search()\"></i>\n          </ng-template>\n      </ng-template>\n    \n      <ng-template #modalContent1>\n          <div *ngIf=\"!searchContent\">\n              正在搜索内容\n          </div>\n            <div *ngIf=\"searchContent\">\n                <div *ngIf=\"flag;else Show\">查无此人</div>\n                <ng-template #Show>\n                <div *ngFor=\"let item of userlist\">\n                    <img src = \"{{item.Img_url}}\" class = \"img\">\n                      {{item.Name}}\n                    <button (click) = \"addfriend(item.ID)\">添加好友</button>\n                </div>\n              </ng-template>\n    \n            </div>\n      </ng-template>\n  </nz-modal>\n  \n  <div *ngIf=\"show\">\n      <div style=\"display: -webkit-box;\">\n          <div class=\"hint\">\n              {{filename}}\n          </div>\n          <div class=\"action-box\">\n              <button class=\"upload-btn\" (click)=\" downloadFile()\"> 下载\n              </button>\n          </div>\n      </div>\n  </div>\n  \n  <div  id = \"mesback1\"  *ngIf=\"pressBoolean\">\n      <input type = button value=\"撤回\" class = \"mesback\" (click) = \"backdata()\" [ngStyle]=\"{'left': px, 'top':py, 'z-index':'400', 'background-color':'red'}\" >\n  </div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent, AddGroupUserItem, AddGroupUserlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupUserItem", function() { return AddGroupUserItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupUserlist", function() { return AddGroupUserlist; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file.service */ "./src/app/file.service.ts");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../protocol/Protocol */ "./src/app/protocol/Protocol.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./src/app/chat/data.ts");


// import { MesList, FriendList, FriendItem, MessageList } from './data';






var ChatComponent = /** @class */ (function () {
    function ChatComponent(ws, us, // 里面有 我的Id: this.us.MyUserId
    upload, el) {
        this.ws = ws;
        this.us = us;
        this.upload = upload;
        this.el = el;
        // @ViewChild('scrollMe') private myScrollContainer: ElementRef;
        this.from_id = 1;
        this.to_id = 0;
        this.to_name = "";
        this.to_img = "";
        // group = 0;
        // addgtoup_id = 0;
        this.content = "";
        // group_name = '';
        this.list = [];
        // searchContent : string = "";
        // searchFriend : string = "";
        // groupName : string = "";
        this.isVisible = false;
        this.isgroup = false;
        this.pressBoolean = false;
        this.px = "";
        this.py = "";
        // mesItem = MessageItem;
        this.contentType = 0;
        this.backMes = "";
        this.isPress = false;
        this.fileurl = 'http://localhost:9988/upload';
        this.dfileurl = "http://localhost:9988/upload/c4fb3e1e6b7e.jpg";
        this.filep = "";
        /////////////////////////////////////////
        //// 创建群//////////////////////////////
        ////////////////////////////////////////
        this.GroupName = '';
        this.isAddGroupVisible = false;
        this.isAddGroupConfirmLoading = false;
        /////////////////////////////////////////
        //// 添加成员//////////////////////////////
        ////////////////////////////////////////
        this.isAddFriendVisible = false;
        this.isAddFriendConfirmLoading = false;
        this.addGroupUserList = new (AddGroupUserlist);
        this.addGroupUserList.AGlist = [];
        // this.userlist = [];
    }
    ChatComponent.prototype.ngAfterViewInit = function () {
        // this.elementRef.nativeElement.focus();
        this.el.nativeElement.focus();
    };
    ChatComponent.prototype.ngOnInit = function () {
        // this.friendlist = data.nearContractList;
        this.addressList = _data__WEBPACK_IMPORTED_MODULE_6__["addressList"];
        // this.messagelist = data.chatRoom;
        this.friendlist = this.ws.nearest_contact;
        console.log("friendlist = ", this.friendlist);
        this.my_id = this.us.MyUserId;
        this.my_img_url = this.us.myImg;
        this.my_name = this.us.myName;
        // console.log("id, name = ", this.my_id, this.my_name)
        this.scollbuttom();
        this.show = false;
        this.pressBoolean = false;
        this.isPress = false;
    };
    ChatComponent.prototype.his = function (event) {
        event.preventDefault();
        if (event.button != 2 || !this.isPress) {
            this.pressBoolean = false;
            this.isPress = false;
            return;
        }
    };
    ChatComponent.prototype.he = function (event, content) {
        if (event.button != 2) {
            this.pressBoolean = false;
            this.isPress = false;
            return;
        }
        this.isPress = true;
        this.backMes = content;
        this.pressBoolean = true;
        var px = event.clientX;
        var py = event.clientY;
        this.px = String(px) + 'px';
        this.py = String(py) + 'px';
        console.log("style=", this.px, this.py);
    };
    ChatComponent.prototype.backdata = function () {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.Type.REQUEST; //消息的类型的请求类型
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.CtrlType.MSG_BACK; // 消息的功
        msg.from = this.us.MyUserId; // 消息发送方
        msg.to = this.to_id; //消息接收方
        msg.content = this.backMes; //消息内容
        msg.contentType = this.contentType; //消息类型
        msg.isgroup = this.isgroup; //是不是群组消息
        // console.log("this.msg && this.to_id = ", msg, this.to_id);
        // this.ws.sendMessage(msg);
        this.backMes = "";
    };
    ChatComponent.prototype.test2 = function (index, id, name, img, isgroup) {
        this.isselect = true;
        this.to_id = id;
        this.to_name = name;
        this.to_img = img;
        this.isgroup = isgroup;
        var flag = false;
        this.friend = this.friendlist.contact_list[index];
        for (var i = 0; i < this.friendlist.contact_list.length; i++) {
            if (id == this.friendlist.contact_list[i].id) {
                this.friendlist.contact_list[i].count = 0;
                this.showmsg = this.friendlist.contact_list[i].message_list;
                this.isgroup = this.friendlist.contact_list[i].is_group;
                flag = true;
            }
        }
        // for(var i = 0; i < this.messagelist.length; i++){
        //   if(id == this.messagelist[i].id){
        //     this.showmsg = this.messagelist;
        //     this.isgroup = this.messagelist[i].is_group;
        //     flag = true;
        //   }
        // }
        if (!flag) {
            this.showmsg = [];
        }
        console.log("showmsg=", this.showmsg);
        this.scollbuttom();
    };
    ChatComponent.prototype.sendMsg = function () {
        this.content = this.content.replace(/^\s*/, ''); //去除左边空格
        // 去除所有空格: str = str.replace(/\s+/g,""); 
        // 去除两头空格: str = str.replace(/^\s+|\s+$/g,""); 
        // 去除左空格： str=str.replace( /^\s*/, ''); 
        // 去除右空格： str=str.replace(/(\s*$)/g, "");
        if (this.content == "") {
            console.log("输入内容为空");
            return;
        }
        var now = new Date();
        var div = document.getElementById('scrolldIV');
        now.getTime();
        div.scrollTop = div.scrollHeight;
        switch (this.isgroup) {
            case false:
                this.sendC2C();
                this.scollbuttom();
                break;
            case true:
                this.sendToGoup();
                this.scollbuttom();
                break;
            default:
                console.log("default");
                break;
        }
    };
    ChatComponent.prototype.sendC2C = function () {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.Type.REQUEST; //消息的类型的请求类型
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.CtrlType.NONE; // 消息的功
        msg.from = this.us.MyUserId; // 消息发送方
        msg.to = this.to_id; //消息接收方
        msg.content = this.content; //消息内容
        msg.contentType = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.ContentType.TEXT; //消息类型
        this.contentType = msg.contentType;
        msg.isgroup = false; //是不是群组消息
        // console.log("this.msg && this.to_id = ", msg, this.to_id);
        // this.ws.sendMessage(msg);
        this.content = "";
    };
    ChatComponent.prototype.sendToGoup = function () {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.CtrlType.NONE;
        msg.from = this.us.MyUserId;
        msg.to = this.to_id;
        msg.content = this.content;
        msg.contentType = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.ContentType.TEXT;
        this.contentType = msg.contentType;
        // console.log("type=", msg.contentType)
        msg.isgroup = true;
        // this.ws.sendMessage(msg);
        this.content = "";
    };
    ChatComponent.prototype.clickMe = function () {
        var btn = document.getElementById("search");
        btn.focus();
        this.isVisible = document.hasFocus();
        // this.userlist = [];
    };
    ChatComponent.prototype.outMe = function () {
        var btn = document.getElementById("search");
        btn.blur();
        this.isVisible = document.hasFocus();
        // this.userlist = [];
    };
    ChatComponent.prototype.cancelEditingTodo = function () {
        this.isVisible = false;
    };
    ChatComponent.prototype.keyUpSearch = function (content) {
        // this.ws.getUserList(this.searchContent).subscribe(data => {
        //   console.log("data2 = ", data.Ulist);
        //   this.userlist = data.Ulist;
        // })
    };
    ChatComponent.prototype.search = function () {
        // console.log("search=", this.searchContent);
        // this.ws.getUserList(this.searchContent).subscribe(data => {
        //   this.userlist = data.Ulist;
        //   this.flag = false;
        // })
        // if(this.searchContent == ""){
        //   return;
        // }
        // if(this.userlist.length == 0) {
        //   this.flag = true;
        // }
    };
    ChatComponent.prototype.addfriend = function (to) {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.CtrlType.CREATE_SESSION;
        msg.from = this.us.MyUserId;
        msg.to = to;
        msg.time = Date.now();
        // this.ws.sendMessage(msg)
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
        if (file.size > 10 * 1024 * 1024) {
            console.log("file is too big!");
            return;
        }
        //console.log(file.type)
        //console.log(file.name)
        this.filename = file.name;
        this.upload.uploadFile(this.fileurl, file).subscribe(function (response) {
            //.log(response);
            var filetype = -1;
            if (response["body"] != null) {
                if (response["body"]["code"] != 1) {
                    console.log(response["body"]["data"]);
                    _this.filep = response["body"]["data"]["originalfile"];
                    _this.dfileurl = response["body"]["data"]["thumbnail"];
                    filetype = response["body"]["data"]["filetype"];
                    console.log(_this.dfileurl);
                    _this.show = true;
                }
                console.log("####", _this.us.MyUserId, _this.to_id, _this.filep, _this.dfileurl, filetype);
                var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message);
                msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.Type.REQUEST;
                msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.CtrlType.NONE;
                msg.from = _this.us.MyUserId;
                msg.to = _this.to_id;
                msg.content = _this.dfileurl;
                msg.contentType = filetype;
                _this.contentType = msg.contentType;
                msg.isgroup = false;
                //  this.ws.sendMessage(msg);
                _this.content = "";
            }
        }, function (err) {
            console.log("Upload Error:", err);
        }, function () {
            console.log("Upload done");
        });
        //this.getpath();
    };
    ChatComponent.prototype.getpath = function () {
        this.filep = "getpic/3ea62ac5fb0758efadb15e36_compress.jpg";
        // console.log(this.filep);
    };
    ChatComponent.prototype.download = function () {
        window.open(this.fileurl, '_blank');
        return;
    };
    // 调用浏览器的下载
    ChatComponent.prototype.downloadFile = function () {
        var a = document.createElement('a');
        a.href = this.filep;
        a.download = 'download';
        a.click();
        a.remove();
        // console.log('download:' + a.href);
    };
    ChatComponent.prototype.showAddGroupModal = function () {
        // for(let i=0;i<this.ws.wsFriendList.List.length;i++){
        //   if(this.ws.wsFriendList.List[i].Isgroup){continue;}
        //   let item = new(AddGroupUserItem);
        //   item.ID=Number(this.ws.wsFriendList.List[i].ID);
        //   item.Name=this.ws.wsFriendList.List[i].Name;
        //   item.Headimg=this.ws.wsFriendList.List[i].Headimg;
        //   item.Check = false;
        //   this.addGroupUserList.AGlist.push(item);
        // }
        this.isAddGroupVisible = true;
    };
    ChatComponent.prototype.handleAddGroupCancel = function () {
        this.isAddGroupVisible = false;
        this.addGroupUserList.AGlist = [];
        this.GroupName = '';
    };
    ChatComponent.prototype.handleAddGroupOk = function () {
        if (this.GroupName == '' || this.addGroupUserList.AGlist.length == 0) {
            alert("注意：群名不能为空并且至少选中一人");
            this.GroupName = '';
            this.addGroupUserList.AGlist = [];
            return;
        }
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.CtrlType.CREATE_GROUP;
        msg.from = this.us.MyUserId;
        msg.content = this.GroupName;
        msg.contentType = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].Message.ContentType.TEXT;
        msg.isgroup = true;
        msg.userlist = [];
        for (var i = 0; i < this.addGroupUserList.AGlist.length; i++) {
            if (this.addGroupUserList.AGlist[i].Check) {
                // console.log(this.addGroupUserList.AGlist[i].ID);
                msg.userlist.push(this.addGroupUserList.AGlist[i].ID);
            }
        }
        msg.userlist.push(this.us.MyUserId);
        // this.ws.sendMessage(msg);
        this.addGroupUserList.AGlist = [];
        this.GroupName = '';
        this.isAddGroupVisible = false;
    };
    ChatComponent.prototype.showAddFriendModal = function () {
        this.isAddFriendVisible = true;
    };
    ChatComponent.prototype.handleAddFriendCancel = function () {
        this.isAddFriendVisible = false;
    };
    ChatComponent.prototype.handleAddFriendOk = function () {
    };
    ChatComponent.prototype.scollbuttom = function () {
        var dis = document.getElementById('scrolldIV');
        // var now = new Date(); //设置滚动条保持在最底部
        // now.getTime();
        try {
            dis.scrollTop = dis.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _file_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ChatComponent);
    return ChatComponent;
}());

var AddGroupUserItem = /** @class */ (function () {
    function AddGroupUserItem() {
    }
    return AddGroupUserItem;
}());

var AddGroupUserlist = /** @class */ (function () {
    function AddGroupUserlist() {
    }
    return AddGroupUserlist;
}());



/***/ }),

/***/ "./src/app/chat/data.ts":
/*!******************************!*\
  !*** ./src/app/chat/data.ts ***!
  \******************************/
/*! exports provided: addressList, id_1_message, id_2_message, id_3_message, chatRoom, chatroom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressList", function() { return addressList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id_1_message", function() { return id_1_message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id_2_message", function() { return id_2_message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id_3_message", function() { return id_3_message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatRoom", function() { return chatRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatroom", function() { return chatroom; });
// export class MesList {
//     from: number = 0;
//     to: number = 0;
//     msgid: number = 0;
//     content: string = "";
//     img_url: string = "";
//   }
var addressList = [
    { id: 1, name: "abc", head_img: "aaa", is_group: false },
    { id: 2, name: "bcd", head_img: "aaa", is_group: false },
    { id: 3, name: "cde", head_img: "aaa", is_group: false },
    { id: 4, name: "def", head_img: "aaa", is_group: true },
    { id: 5, name: "efg", head_img: "aaa", is_group: true },
    { id: 6, name: "fgh", head_img: "aaa", is_group: true },
];
// export const nearContractList : com.NearestContactItem[] = [
//     {id: 100021, name: "mmm", head_img: "aaa", count: 5, is_group: false},
//     {id: 100017, name: "pjw", head_img: "aaa", count: 1, is_group: false},
//     {id: 1008, name: "你有一条新的消息", head_img: "aaa", count: 12, is_group: false},
//     {id: 1009, name: "testGGG", head_img: "aaa", count: 6, is_group: true},
//     {id: 1010, name: "GGGGGGGGGGGG", head_img: "aaa", count: 2, is_group: true},
//     {id: 100019, name: "hql", head_img: "aaa", count: 2, is_group: true},
//     {id: 100018, name: "gct", head_img: "aaa", count: 2, is_group: true},
// ]
var id_1_message = [
    { id: 1001, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000001, is_group: false },
    { id: 1002, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000002, is_group: false },
    { id: 1003, from: 1, to: 100018, content: "测试", content_type: 0, arrive_time: 1000003, is_group: false },
    { id: 1004, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000004, is_group: false },
    { id: 1005, from: 1, to: 100018, content: "测试", content_type: 0, arrive_time: 1000005, is_group: false },
    { id: 1006, from: 1, to: 100018, content: "测试", content_type: 0, arrive_time: 1000006, is_group: false },
    { id: 1007, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000007, is_group: false },
    { id: 1008, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000008, is_group: false },
];
var id_2_message = [
    { id: 501, from: 100019, to: 100017, content: "dasdasdasd", content_type: 0, arrive_time: 1550047381671, is_group: false },
    { id: 505, from: 100019, to: 100017, content: "fsafasfa", content_type: 0, arrive_time: 1550047384788, is_group: false },
    { id: 509, from: 100017, to: 100019, content: "dasdasdas", content_type: 0, arrive_time: 1550047388021, is_group: false },
    { id: 513, from: 100017, to: 100019, content: "dasdasda", content_type: 0, arrive_time: 1550047392531, is_group: false },
    { id: 517, from: 100019, to: 100017, content: "files/4b06426a7a8e_compress.jpg", content_type: 1, arrive_time: 1550047406461, is_group: false },
    { id: 521, from: 100017, to: 100019, content: "files/4b06426a7a8e_compress.jpg", content_type: 1, arrive_time: 1550047414312, is_group: false },
    { id: 525, from: 100017, to: 100019, content: "777777", content_type: 0, arrive_time: 1550047437582, is_group: false },
    { id: 529, from: 100017, to: 100019, content: "", content_type: 0, arrive_time: 1550047451365, is_group: false },
    { id: 549, from: 100019, to: 100017, content: "files/9edbe55433e4_compress.jpg", content_type: 1, arrive_time: 1550047514194, is_group: false },
    { id: 553, from: 100019, to: 100017, content: "files/9edbe55433e4_compress.jpg", content_type: 1, arrive_time: 1550047517339, is_group: false }
];
var id_3_message = [
    { id: 565, from: 100018, to: 1008, content: "11111", content_type: 0, arrive_time: 1550294670186, is_group: true },
    { id: 569, from: 100018, to: 1008, content: "111111", content_type: 0, arrive_time: 1550294671863, is_group: true },
    { id: 573, from: 100018, to: 1008, content: "222222222", content_type: 0, arrive_time: 1550294673907, is_group: true },
    { id: 577, from: 100018, to: 1008, content: "3333333333", content_type: 0, arrive_time: 1550294675796, is_group: true },
    { id: 581, from: 100018, to: 1008, content: "aaaaaa", content_type: 0, arrive_time: 1550294678035, is_group: true },
    { id: 585, from: 100018, to: 1008, content: "hhhhhhhhhhh", content_type: 0, arrive_time: 1550294683810, is_group: true },
    { id: 589, from: 100018, to: 1008, content: "ffffffff", content_type: 0, arrive_time: 1550294686338, is_group: true },
    { id: 593, from: 100018, to: 1008, content: "qwr", content_type: 0, arrive_time: 1550294688195, is_group: true },
    { id: 597, from: 100018, to: 1008, content: "adf", content_type: 0, arrive_time: 1550294690621, is_group: true },
    { id: 601, from: 100018, to: 1008, content: "hello", content_type: 0, arrive_time: 1550309859874, is_group: true },
];
var chatRoom = [
    { id: 100021, name: "mmm", is_group: false, message_list: [] },
    { id: 100017, name: "pjw", is_group: false, message_list: [] },
    { id: 1008, name: "你有一条新的消息", is_group: true, message_list: id_3_message },
    { id: 1009, name: "testGGG", is_group: true, "message_list": [] },
    { id: 1010, name: "GGGGGGGGGGGG", is_group: true, "message_list": [] },
    { id: 100019, name: "hql", is_group: false, "message_list": id_2_message },
    { id: 100018, name: "gct", is_group: false, "message_list": [] }
];
var chatroom = {
    size: 7,
    message_list: id_3_message
};


/***/ }),

/***/ "./src/app/common/im.ts":
/*!******************************!*\
  !*** ./src/app/common/im.ts ***!
  \******************************/
/*! exports provided: MessageItem, HistoryMessage, AddressBookItem, AddressBook, NearestContactItem, NearestContact, GlobalMessage, ChatRoom, AllChatRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItem", function() { return MessageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryMessage", function() { return HistoryMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookItem", function() { return AddressBookItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBook", function() { return AddressBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearestContactItem", function() { return NearestContactItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearestContact", function() { return NearestContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalMessage", function() { return GlobalMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoom", function() { return ChatRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllChatRoom", function() { return AllChatRoom; });
//一条消息的消息体
var MessageItem = /** @class */ (function () {
    function MessageItem() {
    }
    return MessageItem;
}());

// 单个会话的历史消息
var HistoryMessage = /** @class */ (function () {
    function HistoryMessage() {
    }
    return HistoryMessage;
}());

// 通讯录相关
var AddressBookItem = /** @class */ (function () {
    function AddressBookItem() {
    }
    return AddressBookItem;
}());

var AddressBook = /** @class */ (function () {
    function AddressBook() {
    }
    return AddressBook;
}());

// 最近联系人
var NearestContactItem = /** @class */ (function () {
    function NearestContactItem() {
    }
    return NearestContactItem;
}());

var NearestContact = /** @class */ (function () {
    function NearestContact() {
    }
    return NearestContact;
}());

//全局显示消息集合
var GlobalMessage = /** @class */ (function () {
    function GlobalMessage() {
    }
    return GlobalMessage;
}());

//聊天室
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
    }
    return ChatRoom;
}());

var AllChatRoom = /** @class */ (function () {
    function AllChatRoom() {
    }
    return AllChatRoom;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(us, ws, router) {
        this.us = us;
        this.ws = ws;
        this.router = router;
        this.name = '';
        this.password = '';
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var body = { name: this.name, password: this.password };
        this.us.postLoginData(body).subscribe(function (data) {
            console.log("data.status=", data.status);
            if (data.status == 200) {
                var respond = data["body"];
                alert("登录成功");
                _this.us.isLogin = true;
                _this.us.MyUserId = respond['id'];
                _this.us.myImg = respond['head_img'];
                _this.us.myName = respond['name'];
                _this.us.session_id = respond['session_id'];
                _this.router.navigate(['chat']);
                console.log("data=", data, _this.us.MyUserId, _this.us.myName);
                // this.ws.createSocket(environment.websocketUrl);
                _this.ws.getNearestList();
            }
            else {
                alert("登录失败");
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


var $protobuf = __webpack_require__(/*! protobufjs/minimal */ "./node_modules/protobufjs/minimal.js");

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
            if (message.isgroup != null && message.hasOwnProperty("isgroup"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isgroup);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.content);
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.contentType);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.msgid);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.time);
            if (message.userlist != null && message.userlist.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
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
                    message.isgroup = reader.bool();
                    break;
                case 6:
                    message.content = reader.string();
                    break;
                case 7:
                    message.contentType = reader.int32();
                    break;
                case 8:
                    message.msgid = reader.int64();
                    break;
                case 9:
                    message.time = reader.int64();
                    break;
                case 10:
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"

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
            console.log("data=", data);
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
        this.session_id = '';
        this.isLogin = false;
        this.MyUserId = -1;
        this.myImg = "";
        this.myName = "";
        this.configUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.loginUrl = this.configUrl + "/login";
        this.signupUrl = this.configUrl + '/signup';
        this.quitUrl = this.configUrl + '/quit';
    }
    UserService.prototype.postLoginData = function (data) {
        return this.http.post(this.loginUrl, data, { observe: 'response' });
    };
    UserService.prototype.postSignupData = function (data) {
        return this.http.post(this.signupUrl, data);
    };
    UserService.prototype.quit = function () {
        return this.http.get(this.quitUrl);
    };
    UserService.prototype.getUserbyId = function (id) {
        var url = this.configUrl + '/user?id=' + id;
        return this.http.get(url);
    };
    UserService.prototype.getGroupById = function (id) {
        var url = this.configUrl + '/group?id=' + id;
        return this.http.get(url);
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
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protocol/Protocol */ "./src/app/protocol/Protocol.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _common_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/im */ "./src/app/common/im.ts");








var WebsocketService = /** @class */ (function () {
    function WebsocketService(http, us) {
        this.http = http;
        this.us = us;
        this.collection = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message);
        this.global_message = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["GlobalMessage"]);
        this.global_message.chat_room_list = new Map();
        this.nearest_contact = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["NearestContact"]);
        this.nearest_contact.contact_list = [];
        this.address_book = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["AddressBook"]);
        this.address_book.friends_list = [];
    }
    // 建立websocket链接
    WebsocketService.prototype.createSocket = function (url) {
        var that = this;
        this.ws = new WebSocket(url);
        this.ws.onopen = function () { console.log("WebSocket打开"); };
        this.ws.onmessage = function (evt) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(evt.data);
            reader.onload = function (e) {
                var buf = new Uint8Array(reader.result);
                var conn = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.decode(buf);
                //that.parseNotification(conn)    //收到消息解析后分析消息
            };
        };
        this.ws.onclose = function () { console.log("WebSocket关闭"); };
    };
    // 请求头部设置x-session-id
    WebsocketService.prototype.createSessionHeader = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('X-Session-Id', this.us.session_id);
        console.log("session=", this.us.session_id);
        return headers;
    };
    // 获取通讯录
    WebsocketService.prototype.getAddressBook = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/address-book";
        return this.http.get(url, { headers: this.createSessionHeader() });
    };
    // 获取最近联系人
    WebsocketService.prototype.getNearestContact = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/recent-contact";
        return this.http.get(url, { headers: this.createSessionHeader() });
    };
    //获取最近联系人的最近聊天信息
    WebsocketService.prototype.getNearestContactMessage = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/recent-contact-message";
        return this.http.get(url, { headers: this.createSessionHeader(), observe: 'response' });
    };
    WebsocketService.prototype.getNearestList = function () {
        var _this = this;
        this.getNearestContactMessage().subscribe(function (data) {
            console.log("最近联系人de消息", data);
            // if(data.contact_list.length == 0){
            //   data.contact_list = [];
            // }
            // let HL =  new(com.NearestContact);
            _this.nearest_contact.contact_list = [];
            // this.nearest_contact.contact_list = data.contact_list;
            // console.log("contact_list = ", this.nearest_contact.contact_list)
            // return data
            for (var i = 0; i < data.body['chat_room_list'].length; i++) {
                var FriItem = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["NearestContactItem"]);
                FriItem.id = data.body['chat_room_list'][i].id;
                FriItem.name = data.body['chat_room_list'][i].name;
                FriItem.head_img = data.body['chat_room_list'][i].head_img;
                FriItem.is_group = data.body['chat_room_list'][i].is_group;
                FriItem.count = data.body['chat_room_list'][i].count;
                FriItem.message_list = data.body['chat_room_list'][i].message_list;
                _this.nearest_contact.contact_list.push(FriItem);
            }
            console.log("contact_list = ", _this.nearest_contact.contact_list);
            // this.getNearestMessage();
        });
    };
    // getNearestMessage(){
    //   this.getNearestContactMessage().subscribe(data =>{
    //     console.log("最近联系人的消息", data);
    //     let allChatRoom = new(com.AllChatRoom);
    //     allChatRoom.message_list = [];
    //     allChatRoom.size = 0;
    //     allChatRoom.message_list = data.body['chat_room_list'];
    //     allChatRoom.size = data.body['size'];
    //     // console.log("allChatRoom = ", allChatRoom) 
    //     this.all_chat_room = allChatRoom
    //   })
    // }
    // //分析消息
    // parseNotification(conn:Protocol.Message){
    //   if (conn.type==Protocol.Message.Type.NOTIFICATION){
    //     console.log("NOTIFICATION");
    //     if (conn.cmd == Protocol.Message.CtrlType.NONE){
    //       console.log("COMMOM",conn);
    //       for(let i=0;i<this.wsMessageList.List.length;i++){
    //           if(conn.isgroup == this.wsMessageList.List[i].Isgroup&&
    //             ((conn.isgroup &&conn.to==this.wsMessageList.List[i].ID)||(!conn.isgroup &&conn.from==this.wsMessageList.List[i].ID))){
    //             let item = new(MessageItem);
    //             item.Mid = conn.msgid;
    //             item.From = conn.from;
    //             item.To = conn.from;
    //             if(conn.isgroup){
    //               item.To = conn.to;
    //             }
    //             item.Content = conn.content;
    //             item.ContentType =conn.contentType;
    //             item.Time = conn.time;
    //             this.wsMessageList.List[i].MList.push(item);
    //             console.log(this.wsMessageList.List[i]);
    //             break;
    //           }
    //       }
    //     }else if(conn.cmd == Protocol.Message.CtrlType.CREATE_SESSION){ //添加好友请求
    //       this.createSessById(conn,conn.from)
    //     }else if (conn.cmd == Protocol.Message.CtrlType.CREATE_GROUP || conn.cmd == Protocol.Message.CtrlType.GROUP_ADDMEMBERS){
    //       this.createGroupById(conn,conn.to)
    //     }else if(conn.cmd == Protocol.Message.CtrlType.MSG_BACK){
    //       for(let i=0;i<this.wsMessageList.List.length;i++){
    //         if(conn.isgroup == this.wsMessageList.List[i].Isgroup&&
    //           ((conn.isgroup &&conn.to==this.wsMessageList.List[i].ID)||(!conn.isgroup &&conn.from==this.wsMessageList.List[i].ID))){
    //            for(let j=0;j<this.wsMessageList.List[i].MList.length;j++){
    //             if (this.wsMessageList.List[i].MList[j].Mid == conn.msgid){
    //               this.wsMessageList.List[i].MList.slice(j,1);
    //               break;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }else if(conn.type==Protocol.Message.Type.ACK){
    //     if (conn.cmd == Protocol.Message.CtrlType.NONE){
    //       for(let i=0;i<this.wsMessageList.List.length;i++){
    //         if (conn.from==this.wsMessageList.List[i].ID && conn.isgroup == this.wsMessageList.List[i].Isgroup){
    //           for(let j=0;j<this.wsMessageList.List[i].MList.length;j++){
    //             if (this.wsMessageList.List[i].MList[j].Time == conn.time){
    //               this.wsMessageList.List[i].MList[j].Mid = conn.msgid;
    //               break;
    //             }
    //           }
    //           break;
    //         }
    //       }
    //     }else if(conn.cmd == Protocol.Message.CtrlType.CREATE_SESSION){//添加好友请求确认信息
    //      this.createSessById(conn,conn.to)
    //     }else if (conn.cmd == Protocol.Message.CtrlType.CREATE_GROUP || conn.cmd == Protocol.Message.CtrlType.GROUP_ADDMEMBERS){
    //       this.createGroupById(conn,conn.to)
    //     }
    //   }
    // }
    // createSessById(conn: Protocol.Message,uid: number|Long){
    //       let item = new(FriendItem);
    //       item.ID = uid;
    //       this.us.getUserbyId(item.ID).subscribe((data)=>{
    //         console.log("data=", data)
    //         item.Name = data["Name"];
    //         item.Headimg = data["Img_url"];
    //       });
    //       item.Counter = 1;
    //       item.Isgroup = false;
    //       this.wsFriendList.List.push(item);
    //       let sess = new(Session)
    //       sess.ID = item.ID
    //       sess.Isgroup = false;
    //       sess.MList = [];
    //       this.wsMessageList.List.push(sess);
    // }
    //  createGroupById(conn: Protocol.Message,gid: number|Long){
    //   let item = new(FriendItem);
    //   item.ID = gid;
    //   this.us.getGroupById(item.ID).subscribe((data)=>{
    //     item.Name = data["Name"];
    //     item.Headimg = data["Headimg"];
    //   });
    //   item.Counter = 1;
    //   item.Isgroup = true;
    //   this.wsFriendList.List.push(item);
    //   let sess = new(Session)
    //   sess.ID = item.ID
    //   sess.Isgroup = true;
    //   sess.MList = [];
    //   this.wsMessageList.List.push(sess);
    // }
    // // 发送信息，不在这里构造消息体
    // sendMessage(message: Protocol.Message){
    //   message.time = Date.now()
    //   // console.log("mes.contentype=",message.contentType);
    //   if (message.type ==  Protocol.Message.Type.REQUEST) {
    //     if(message.cmd == Protocol.Message.CtrlType.NONE){  // 单聊或群聊
    //       for(let i=0;i<this.wsMessageList.List.length;i++){
    //         if(message.isgroup == this.wsMessageList.List[i].Isgroup&&message.to==this.wsMessageList.List[i].ID){
    //           let item = new(MessageItem);
    //           item.Mid = 0;
    //           item.From = message.from;
    //           item.To = message.to;
    //           item.Content = message.content;
    //           item.ContentType =message.contentType;
    //           item.Time = message.time;
    //           this.wsMessageList.List[i].MList.push(item);
    //           break;
    //         }
    //       }
    //     }
    //   }else if(message.cmd == Protocol.Message.CtrlType.MSG_BACK){   // 撤回消息
    //     if(message.msgid == 0){
    //       alert("消息ＩＤ不存在，无法撤回");
    //     }
    //     for(let i=0;i<this.wsMessageList.List.length;i++){
    //       if (message.to==this.wsMessageList.List[i].ID && message.isgroup == this.wsMessageList.List[i].Isgroup){
    //         for(let j=0;j<this.wsMessageList.List[i].MList.length;j++){
    //           if (this.wsMessageList.List[i].MList[j].Mid == message.msgid){
    //             this.wsMessageList.List[i].MList.slice(j,1);
    //             break;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   console.log("发送前的数据",message)
    //   this.ws.send(Protocol.Message.encode(message).finish());
    // }
    // delectMessage(id: number){//撤回消息
    // }
    // //  下面函数是登录的时候初始数据 
    // //
    // // 获取聊天列表，或者是好友聊天列表
    // getChatList(){
    //   let url  = environment.apiUrl+"/chatlist"
    //   return this.http.get(url)
    // }
    // HistoryMessage(info){
    //   this.getChatMessageList(info).subscribe((data:MsgList) => {
    //     console.log("历史消息原数据",data)
    //     this.wsMessageList.List =[];
    //     if (data.List == null) {
    //       data.List = [];
    //     }
    //     for(let i=0;i<data.List.length;i++){
    //         let session = new(Session);
    //         session.MList = [];
    //         if (data.List[i].length>0){
    //           session.ID = data.List[i][0].From;
    //           if (data.List[i][0].Isgroup ||session.ID == this.us.MyUserId) {
    //             session.ID = data.List[i][0].To;
    //           }
    //           session.Isgroup = data.List[i][0].Isgroup;
    //         }else{continue;}
    //         // console.log("session.ID",session.ID, data.List[i][0].To,data.List[i][0].From)
    //        for(let j=0;j<data.List[i].length;j++){
    //         let Item = new(MessageItem);
    //         Item.Mid = data.List[i][j].Mid;
    //         Item.From = data.List[i][j].From;
    //         Item.To = data.List[i][j].To;
    //         Item.Content = data.List[i][j].Content;
    //         Item.ContentType = data.List[i][j].ContentType;
    //         Item.Time = data.List[i][j].Time;
    //         session.MList.push(Item);
    //       }
    //       this.wsMessageList.List.push(session)
    //       // console.log("ContenType = ", session.MList);
    //     }
    //     console.log("历史消息",this.wsMessageList.List)
    //   })
    // }
    WebsocketService.prototype.InitChatList = function () {
        this.getAddressBook().subscribe(function (data) {
            console.log("通讯录", data);
            var HL = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["AddressBook"]);
            HL.friends_list = [];
            //   for(let i=0;i<data.List.length;i++){
            //     let FriItem:FriendItem = new(FriendItem);
            //     FriItem.ID=data.List[i].Id;
            //     FriItem.Name=data.List[i].Name;
            //     FriItem.Headimg=data.List[i].Headimg;
            //     FriItem.Isgroup=data.List[i].Isgroup;
            //     FriItem.Counter=data.List[i].Counter;
            //     this.wsFriendList.List.push(FriItem)
            //     let Ht = new(Hist);
            //     Ht.ID = data.List[i].Id;
            //     Ht.Isgroup = data.List[i].Isgroup;
            //     HL.List.push(Ht)
            //   }
            //   this.HistoryMessage(HL)
        });
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], WebsocketService);
    return WebsocketService;
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

module.exports = __webpack_require__(/*! /home/goworks/src/MessageSystem/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map