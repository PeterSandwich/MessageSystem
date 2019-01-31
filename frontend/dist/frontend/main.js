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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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

module.exports = "/* :host ::ng-deep .demo-infinite-container {\n    height: 300px;\n    border: 1px solid #e8e8e8;\n    border-radius: 4px;\n  } */\n.avatar{\n  height: 80px;\n  width: 200px;\n\n}\n.avatar2{\n  overflow-y: auto;\n  overflow-x:none;\n  height: 80px;\n  width: 200px;\n}\n.container{\n  /* background-color:rgb(223, 219, 219); */\n  background-color: #DDDDDD;\n  width: 1002px;\n  height: 740px;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5000;\n  border-color: #616060;\n  /* border: 2px;\n  color: #000000 */\n}\n.search{\n  position:absolute;\n  margin-top: 15px;\n  margin-left: 5px;\n  width: 240px;\n}\n.list{\n  background-color: #7a7a7a;\n  width: 250px;\n  height: 600px;\n  /* color: white; */\n\n  /* overflow-y:scroll;  纵向滚动条始终显示 */\n  overflow-y: auto;\n  overflow-x:none;\n}\n.item{\n  color: white;\n  border-bottom:1px solid #EEE;\n  height: 65px;\n  font-size: 12px;\n  /* font-display: center; */\n  vertical-align: middle;\n  /* text-align: center; */\n  position: relative;\n  cursor: pointer;\n\n}\n/* nz-list-item{\n  color: white;\n} */\n.img{\n  /* margin: 5px; */\n  /* margin-top: 10px; */\n  height:40px; \n  width:40px; \n  position: relative;\n  /* border-radius:50%;  */\n  overflow:hidden;\n}\n.message{\n  width: 750px;\n  height: 480px;\n  background-color: #F9F9F9;\n  padding: 0px;\n  overflow-y: auto;\n  overflow-x: none;\n  vertical-align: top;\n}\n.message1{\n  width: 750px;\n  height: 480px;\n  background-color: #F9F9F9;\n  padding: 10px;\n  overflow-y: auto;\n  overflow-x: none;\n  vertical-align: top;\n}\n.inputmes{\n  width: 749px;\n  height: 200px;\n  background-color: white;\n}\n.him{\n  height: 60px;\n  color: #444444;\n}\n.textarea{\n  background-color: white;\n  resize: none;\n  width: 750px;\n  height: 140px;\n  position: absolute;\n  padding: 10px;\n  border: none;\n  outline: none;\n  /* margin-top: 30px; */\n}\n.tool{\n  width: 750px;\n  background-color: #EEEEEE;\n  height: 30px;\n  cursor: pointer;\n\n}\n.icon{\n  margin-left: 15px;\n  margin-top: 3px;\n  color: #777777;\n}\n.send{\n  position: absolute;\n  margin-left: 680px;\n  margin-top: 130px;\n}\n/* .arrow {\n  vertical-align: middle;\n  width:200px;\n  height:25px;\n  font-size:16px;\n  background-color: #AABBCC ;\n  margin: 15px;\n  overflow-wrap: normal;\n} */\n#box{\n  min-height: 30px;          \n  border-radius: 5px;        \n  /* line-height: 50px;         */\n  margin-left: 10px;        \n  word-break: break-word;        \n  color: white;        \n  padding: 5px;        \n  line-height: 18px;\n\n\n    position: relative;\n    left:30px; \n    width: 140px;\n    min-height: 30px;\n    line-height: 20px;\n    margin-left: 10px;\n    word-wrap: 5px;\n    background: #088cb7;\n    border-radius: 4px;\n    padding: 10px;\n    margin-top:10px;\n    vertical-align: middle;\n    text-align: center;\n}\n/*左方说话*/\n#box:before{\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    right: 100%;\n    top: 9px;\n    border-top: 5px solid transparent;\n    border-right: 13px solid #088cb7;\n    border-bottom: 6px solid transparent;\n}\n/*右方说话*/\n#box1{          \n  min-height: 30px;          \n  border-radius: 5px;        \n  /* line-height: 50px;         */\n  margin-right: 10px;        \n  word-break: break-word;        \n  color: white;        \n  padding: 5px;        \n  line-height: 18px;\n\n  position: relative;\n  left:560px; \n  width: 140px;\n  /* height: 30px; */\n  background: #088cb7;\n  border-radius: 4px;\n  /* padding: 10px; */\n  margin-top:10px;\n  vertical-align: middle;\n  text-align: center;\n}\n#box1:before{\n  position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    left: 100%;\n    top: 9px;\n    border-top: 5px solid transparent;\n    border-left: 13px solid #088cb7;\n    border-bottom: 6px solid transparent;\n}\n.tips{\n  position: relative; \n  text-align: center;\n  vertical-align: middle;;\n}\n.grad{\n  width: 75px;\n  background-color:transparent;\n  border: 0px;\n  outline: none;\n  cursor: pointer;\n}\n.point{\n  /* width: 2px; */\n  /* left: 60px; */\n  margin:5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7S0FJSztBQUNMO0VBQ0UsWUFBWTtFQUNaLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixxQkFBcUI7RUFDckI7a0JBQ2dCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7O0FBRWpCO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlOztBQUVqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBOzs7Ozs7OztHQVFHO0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCOzs7SUFHZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBR25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQSxPQUFPO0FBQ1A7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLG9DQUFvQztBQUN4QztBQUNBLE9BQU87QUFDUDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFHbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixvQ0FBb0M7QUFDeEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDpob3N0IDo6bmctZGVlcCAuZGVtby1pbmZpbml0ZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH0gKi9cbi5hdmF0YXJ7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDIwMHB4O1xuXG59XG4uYXZhdGFyMntcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDpub25lO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5jb250YWluZXJ7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDIyMywgMjE5LCAyMTkpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xuICB3aWR0aDogMTAwMnB4O1xuICBoZWlnaHQ6IDc0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA1MDAwO1xuICBib3JkZXItY29sb3I6ICM2MTYwNjA7XG4gIC8qIGJvcmRlcjogMnB4O1xuICBjb2xvcjogIzAwMDAwMCAqL1xufVxuLnNlYXJjaHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAyNDBweDtcbn1cbi5saXN0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3YTdhO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cblxuICAvKiBvdmVyZmxvdy15OnNjcm9sbDsgIOe6teWQkea7muWKqOadoeWni+e7iOaYvuekuiAqL1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14Om5vbmU7XG59XG4uaXRlbXtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRUVFO1xuICBoZWlnaHQ6IDY1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLyogZm9udC1kaXNwbGF5OiBjZW50ZXI7ICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cbi8qIG56LWxpc3QtaXRlbXtcbiAgY29sb3I6IHdoaXRlO1xufSAqL1xuLmltZ3tcbiAgLyogbWFyZ2luOiA1cHg7ICovXG4gIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXG4gIGhlaWdodDo0MHB4OyBcbiAgd2lkdGg6NDBweDsgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogYm9yZGVyLXJhZGl1czo1MCU7ICAqL1xuICBvdmVyZmxvdzpoaWRkZW47XG59XG4ubWVzc2FnZXtcbiAgd2lkdGg6IDc1MHB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ubWVzc2FnZTF7XG4gIHdpZHRoOiA3NTBweDtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5pbnB1dG1lc3tcbiAgd2lkdGg6IDc0OXB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5oaW17XG4gIGhlaWdodDogNjBweDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG59XG5cbi50ZXh0YXJlYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDc1MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLyogbWFyZ2luLXRvcDogMzBweDsgKi9cbn1cbi50b29se1xuICB3aWR0aDogNzUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIGhlaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG4uaWNvbntcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG4uc2VuZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNjgwcHg7XG4gIG1hcmdpbi10b3A6IDEzMHB4O1xufVxuLyogLmFycm93IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6MjAwcHg7XG4gIGhlaWdodDoyNXB4O1xuICBmb250LXNpemU6MTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBQkJDQyA7XG4gIG1hcmdpbjogMTVweDtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xufSAqL1xuXG4jYm94e1xuICBtaW4taGVpZ2h0OiAzMHB4OyAgICAgICAgICBcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAgICAgICAgXG4gIC8qIGxpbmUtaGVpZ2h0OiA1MHB4OyAgICAgICAgICovXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyAgICAgICAgXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7ICAgICAgICBcbiAgY29sb3I6IHdoaXRlOyAgICAgICAgXG4gIHBhZGRpbmc6IDVweDsgICAgICAgIFxuICBsaW5lLWhlaWdodDogMThweDtcblxuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6MzBweDsgXG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd29yZC13cmFwOiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzA4OGNiNztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKuW3puaWueivtOivnSovXG4jYm94OmJlZm9yZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgdG9wOiA5cHg7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTNweCBzb2xpZCAjMDg4Y2I3O1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi8q5Y+z5pa56K+06K+dKi9cbiNib3gxeyAgICAgICAgICBcbiAgbWluLWhlaWdodDogMzBweDsgICAgICAgICAgXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgICAgICAgIFxuICAvKiBsaW5lLWhlaWdodDogNTBweDsgICAgICAgICAqL1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7ICAgICAgICBcbiAgd29yZC1icmVhazogYnJlYWstd29yZDsgICAgICAgIFxuICBjb2xvcjogd2hpdGU7ICAgICAgICBcbiAgcGFkZGluZzogNXB4OyAgICAgICAgXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDo1NjBweDsgXG4gIHdpZHRoOiAxNDBweDtcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xuICBiYWNrZ3JvdW5kOiAjMDg4Y2I3O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLyogcGFkZGluZzogMTBweDsgKi9cbiAgbWFyZ2luLXRvcDoxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYm94MTpiZWZvcmV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHRvcDogOXB4O1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTNweCBzb2xpZCAjMDg4Y2I3O1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi50aXBze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7O1xufVxuLmdyYWR7XG4gIHdpZHRoOiA3NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvaW50e1xuICAvKiB3aWR0aDogMnB4OyAqL1xuICAvKiBsZWZ0OiA2MHB4OyAqL1xuICBtYXJnaW46NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <table >\n    <tr>\n      <th class = \"avatar\" rowspan=\"2\">\n        <div>\n            <img src = {{my_img_url}} style = \"height:60px; width:60px; border-radius:50%; overflow:hidden; position:absolute;left:15px; top:20px;\">\n            <div style = \"left: 90px; top:30px; position: absolute\">名字</div>\n            <div style = \"left:90px; top:55px; position: absolute; color:#999999\">个性签名</div>\n        </div>\n        <div class = \"search\">\n            <nz-input-group [nzSuffix]=\"suffixIconSearch\">\n              <input type=\"text\" nz-input placeholder=\"输入搜索内容\">\n            </nz-input-group>\n            <ng-template #suffixIconSearch>\n            <i nz-icon type=\"search\"></i>\n              </ng-template>\n              <div>\n                  <button class = \"grad\">聊天</button>|<button class = \"grad\">通讯录</button>|<button class = \"grad\">添加</button>\n              </div>    \n        </div>\n      </th>\n      <th class = \"him\">对方的名字</th>\n    </tr>\n    <tr class = \"avatar2\" >\n      <td rowspan=\"2\" class = \"message\">\n        <div *ngIf=\"!isslect\" class = \"tips\">\n          暂无新消息\n        </div>\n          <div class = \"message1\">\n              <div *ngFor=\"let item of showmsg\" >\n                <!-- <div *ngFor=\"let mes of item\"> -->\n                    <div *ngIf=\"item.To == my_id\" id=\"box\">{{item.Content}}</div>\n                    <div *ngIf=\"item.From == my_id\" id=\"box1\">{{item.Content}}</div>\n                <!-- </div> -->\n              </div>\n          </div>\n      </td>\n      \n    </tr>\n    <tr>\n      <td rowspan=\"3\">\n          <div class = \"list\" >\n            <div class = \"item\" *ngFor=\"let item of friendlist.List\" (click) = \"test2(item.ID)\">\n                <!-- <tr  > -->\n                  <!-- <td> -->\n                          <!-- <nz-avatar nzIcon=\"user\" class = \"img\" [nzShape]=\"'square'\" nzSrc={{item.img_url}} >\n                          </nz-avatar> -->\n                          <nz-badge [nzCount]=\"5\" *ngIf=\"list!=NULL\" class = \"point\" style = \"height: 5px;\">\n                              <img src = \"{{item.Headimg}}\" class = \"img\">\n                            </nz-badge>\n                          <!-- <img src = {{item.img_url}} style = \"height:40px; width:40px; border-radius:50%; overflow:hedden;\"> -->\n                      {{item.Name}}\n                  <!-- </td> -->\n                <!-- </tr> -->\n            </div>\n            \n          </div>\n      </td>\n    </tr>\n    <tr class = \"inputmes\">\n      <!-- <td > -->\n        <div></div>\n      <div  *ngIf=\"isslect\">\n        <div class = \"tool\">\n          <!-- <i nz-icon type=\"folder\" theme=\"outline\" style=\"font-size: 25px\" class = \"icon\"></i>            \n          <i nz-icon type=\"picture\" theme=\"outline\" style=\"font-size: 25px\" class = \"icon\"></i>        -->\n        </div>\n        <textarea class = \"textarea\" [(ngModel)] = \"content\"></textarea>\n        <button class = \"send\" nz-button nzType=\"primary\" (click) = \"sendMsg()\" >发送</button>\n      </div>\n    <!-- </td> -->\n    </tr>\n  </table>\n\n\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file.service */ "./src/app/file.service.ts");


// import { MesList, FriendList, FriendItem, MessageList } from './data';




var ChatComponent = /** @class */ (function () {
    function ChatComponent(ws, us, // 里面有 我的Id: this.us.MyUserId
    upload) {
        this.ws = ws;
        this.us = us;
        this.upload = upload;
        this.from_id = 1;
        this.to_id = 0;
        this.my_id = this.us.MyUserId;
        // group = 0;
        // addgtoup_id = 0;
        this.content = "";
        // group_name = '';
        this.list = [];
        this.my_img_url = "https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg";
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.friendlist = this.ws.wsFriendList;
        console.log("friendList=", this.friendlist);
        console.log("wsfriendlist=", this.ws.wsFriendList);
        this.messagelist = this.ws.wsMessageList;
        console.log("messagelist = ", this.messagelist);
    };
    ChatComponent.prototype.test2 = function (id) {
        for (var i = 0; i < this.messagelist.List.length; i++) {
            if (id == this.messagelist.List[i].ID) {
                this.showmsg = this.messagelist.List[i].MList;
            }
        }
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
            _file_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]])
    ], ChatComponent);
    return ChatComponent;
}());

// 先不要管下面的
var Old = /** @class */ (function () {
    function Old() {
    }
    Old.prototype.old = function () {
        //////////////////////////////////////////////////////////////////////////////////////
        // getalluser(){
        //   this.ws.getUserList("").subscribe(data => {
        //     console.log(data)
        //   })
        // }
        // chatto=0;
        // chatToPeo(to:number){
        //   let msg = new(Protocol.Message)
        //   msg.type = Protocol.Message.Type.REQUEST;
        //   msg.cmd = Protocol.Message.CtrlType.CREATE_SESSION;
        //   msg.from = this.us.MyUserId;
        //   msg.to = to;
        //   msg.time = Date.now();
        //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
        // }
        // c2c_to_id = 0;
        // c2c_content = ""
        // sendMsg() {
        //   let msg = new(Protocol.Message)
        //   msg.type = Protocol.Message.Type.REQUEST; //消息的类型的请求类型
        //   msg.cmd = Protocol.Message.CtrlType.NONE;// 消息的功能
        //   msg.from = this.us.MyUserId;              // 消息发送方
        //   msg.to = this.c2c_to_id;                   //消息接收方
        //   msg.content = this.c2c_content;             //消息内容
        //   msg.contentType = Protocol.Message.ContentType.TEXT;　  //消息类型
        //   msg.time = Date.now()                     //消息的发送时间
        //   msg.isgroup = false;                       //是不是群组消息
        //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
        // }
        // group_name = '';
        // createGroup(){
        //   let msg = new(Protocol.Message)
        //   msg.type = Protocol.Message.Type.REQUEST;
        //   msg.cmd = Protocol.Message.CtrlType.CREATE_GROUP;
        //   msg.from = this.us.MyUserId;
        //   msg.content = this.group_name;
        //   msg.userlist.push(this.us.MyUserId);
        //   msg.time = Date.now()
        //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
        // }
        // add_mem_id = 0;
        // gtoup_id = 0;
        // addMemToGoup() {
        //   let msg = new(Protocol.Message)
        //   msg.type = Protocol.Message.Type.REQUEST;
        //   msg.cmd = Protocol.Message.CtrlType.GROUP_ADDMEMBERS;
        //   msg.from = this.us.MyUserId;
        //   msg.group = this.gtoup_id;
        //   msg.userlist.push(this.add_mem_id);
        //   msg.time = Date.now()
        //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
        // }
        // c2g_group_id = 0;
        // c2g_content = "";
        // sendToGoup() {
        //   let msg = new(Protocol.Message)
        //   msg.type = Protocol.Message.Type.REQUEST;
        //   msg.cmd = Protocol.Message.CtrlType.NONE;
        //   msg.from =  this.us.MyUserId;
        //   msg.group  = this.c2g_group_id;
        //   msg.content = this.c2g_content;
        //   msg.isgroup = true;
        //   msg.time = Date.now();
        //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
        // }
        // picpath: string
        // GetPicUrl = "http://localhost:9988/getpic/"
        // picurl: string
        // fileurl = 'http://localhost:9988/upload'
        // dfileurl=""
        // filep = ""
        // filename: string
        // selectFile(event: any) {
        //   let fileList: FileList = event.target.files;
        //   this.uploadFile(fileList);
        // }
        // uploadFile(files: FileList) {
        //   if (files.length == 0) {
        //     console.log("No file selected!");
        //     return
        //   }
        //   let file: File = files[0];
        //   console.log(file.name)
        //   this.filename = file.name;
        //   this.upload.uploadFile(this.fileurl, file)
        //     .subscribe(
        //       (response: any) => {
        //         //.log(response);
        //         if (response["body"] != null) {
        //           if (response["body"]["code"] != 1) {
        //             console.log(response["body"]["data"]);
        //             this.filep = response["body"]["data"]["filepath"];
        //             this.dfileurl=response["body"]["data"]["fileurl"];
        //            // this.show = true;
        //           }
        //         }
        //         // if (event.type == HttpEventType.UploadProgress) {
        //         //   const percentDone = Math.round(100 * event.loaded / event.total);
        //         //   console.log(`File is ${percentDone}% loaded.`);
        //         // } else if (event instanceof HttpResponse) {
        //         //   console.log('File is completely loaded!');
        //         // }
        //       },
        //       (err) => {
        //         console.log("Upload Error:", err);
        //       }, () => {
        //         console.log("Upload done");
        //       }
        //     )
        //   //this.getpath();
        // }
        // getpath() {
        //   this.filep = "getpic/3ea62ac5fb0758efadb15e36_compress.jpg"
        //   console.log(this.filep);
        // }
        // download() {
        //   this.fileurl = "http://localhost:9876/files";
        //   window.open(this.fileurl, '_blank');
        //   return;
        // }
        //   // 调用浏览器的下载
        //   downloadFile() {
        //     const a: HTMLAnchorElement = document.createElement('a');
        //     a.href = this.dfileurl;
        //     a.download = 'download';
        //     a.click();
        //     a.remove();
        //     console.log('download:' + a.href);
        //   }
    };
    return Old;
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
                _this.ws.InitChatList();
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
    UserService.prototype.getUserbyId = function (id) {
        var url = this.configUrl + '/user?id=' + id;
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
/*! exports provided: WebsocketService, FriendItem, FriendList, MessageItem, Session, MessageList, Hist, HistList, ChatItem, ChatList, MsgItem, MsgList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendItem", function() { return FriendItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendList", function() { return FriendList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItem", function() { return MessageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageList", function() { return MessageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hist", function() { return Hist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistList", function() { return HistList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatItem", function() { return ChatItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatList", function() { return ChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgItem", function() { return MsgItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgList", function() { return MsgList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protocol/Protocol */ "./src/app/protocol/Protocol.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");






var WebsocketService = /** @class */ (function () {
    function WebsocketService(http, us) {
        this.http = http;
        this.us = us;
        this.collection = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message);
        this.wsFriendList = new (FriendList);
        this.wsFriendList.List = [];
        this.wsMessageList = new (MessageList);
        this.wsMessageList.List = [];
    }
    // 建立websocket链接
    WebsocketService.prototype.createSocket = function (url) {
        var that = this;
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
                that.parseNotification(conn); //收到消息解析后分析消息
            };
        };
        this.ws.onclose = function () {
            console.log("WebSocket结束");
        };
    };
    //分析消息
    WebsocketService.prototype.parseNotification = function (conn) {
        if (conn.type == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.NOTIFICATION) {
            console.log("NOTIFICATION");
            if (conn.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.NONE) {
                console.log("NONE");
                for (var i = 0; i < this.wsMessageList.List.length; i++) {
                    if (conn.from == this.wsMessageList.List[i].ID && conn.isgroup == this.wsMessageList.List[i].Isgroup) {
                        var item = new (MessageItem);
                        item.Mid = conn.msgid;
                        item.From = conn.from;
                        item.To = conn.to;
                        item.Content = conn.content;
                        item.ContentType = conn.contentType;
                        item.Time = conn.time;
                        this.wsMessageList.List[i].MList.push(item);
                        break;
                    }
                }
            }
            else if (conn.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_SESSION) { //添加好友请求
                this.createSessById(conn, conn.from);
            }
            else if (conn.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_GROUP || conn.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.GROUP_ADDMEMBERS) {
            }
        }
        else if (conn.type == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.ACK) {
            if (conn.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.NONE) {
                for (var i = 0; i < this.wsMessageList.List.length; i++) {
                    if (conn.from == this.wsMessageList.List[i].ID && conn.isgroup == this.wsMessageList.List[i].Isgroup) {
                        for (var j = 0; j < this.wsMessageList.List[i].MList.length; j++) {
                            if (this.wsMessageList.List[i].MList[j].Time == conn.time) {
                                this.wsMessageList.List[i].MList[j].Mid = conn.msgid;
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            else if (conn.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_SESSION) { //添加好友请求确认信息
                this.createSessById(conn, conn.to);
            }
        }
    };
    WebsocketService.prototype.createSessById = function (conn, uid) {
        var item = new (FriendItem);
        item.ID = uid;
        this.us.getUserbyId(item.ID).subscribe(function (data) {
            item.Name = data["Name"];
            item.Headimg = data["Img_url"];
        });
        item.Counter = 1;
        item.Isgroup = false;
        this.wsFriendList.List.push(item);
        var sess = new (Session);
        sess.ID = item.ID;
        sess.Isgroup = false;
        sess.MList = [];
        this.wsMessageList.List.push(sess);
    };
    // 发送信息，不在这里构造消息体
    WebsocketService.prototype.sendMessage = function (message) {
        message.time = Date.now();
        if (message.type == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.REQUEST) {
            if (message.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.NONE) { // 单聊或群聊
                for (var i = 0; i < this.wsMessageList.List.length; i++) {
                    if (message.to == this.wsMessageList.List[i].ID && message.isgroup == this.wsMessageList.List[i].Isgroup) {
                        var item = new (MessageItem);
                        item.Mid = 0;
                        item.From = message.from;
                        item.To = message.to;
                        item.Content = message.content;
                        item.ContentType = message.contentType;
                        item.Time = message.time;
                        this.wsMessageList.List[i].MList.push(item);
                        break;
                    }
                }
            }
            else if (message.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.MSG_BACK) { // 撤回消息
                if (message.msgid == 0) {
                    alert("消息ＩＤ不存在，无法撤回");
                }
                for (var i = 0; i < this.wsMessageList.List.length; i++) {
                    if (message.to == this.wsMessageList.List[i].ID && message.isgroup == this.wsMessageList.List[i].Isgroup) {
                        for (var j = 0; j < this.wsMessageList.List[i].MList.length; j++) {
                            if (this.wsMessageList.List[i].MList[j].Mid == message.msgid) {
                                this.wsMessageList.List[i].MList.slice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
        }
        this.ws.send(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.encode(message).finish());
    };
    // 按名字取得用户列表
    WebsocketService.prototype.getUserList = function (name) {
        if (name === void 0) { name = ""; }
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/userlist?name" + name;
        return this.http.get(url);
    };
    WebsocketService.prototype.getChatMessageList = function (data) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/histchat";
        return this.http.post(url, JSON.stringify(data));
    };
    //  下面函数是登录的时候初始数据 
    //
    // 获取聊天列表，或者是好友聊天列表
    WebsocketService.prototype.getChatList = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/chatlist";
        return this.http.get(url);
    };
    WebsocketService.prototype.InitChatList = function () {
        var _this = this;
        this.getChatList().subscribe(function (data) {
            var HL = new (HistList);
            HL.List = [];
            for (var i = 0; i < data.List.length; i++) {
                var FriItem = new (FriendItem);
                FriItem.ID = data.List[i].Id;
                FriItem.Name = data.List[i].Name;
                FriItem.Headimg = data.List[i].Headimg;
                FriItem.Isgroup = data.List[i].Isgroup;
                FriItem.Counter = data.List[i].Counter;
                _this.wsFriendList.List.push(FriItem);
                var Ht = new (Hist);
                Ht.ID = data.List[i].Id;
                Ht.Isgroup = data.List[i].Isgroup;
                HL.List.push(Ht);
            }
            _this.HistoryMessage(HL);
        });
    };
    WebsocketService.prototype.HistoryMessage = function (info) {
        var _this = this;
        this.getChatMessageList(info).subscribe(function (data) {
            console.log("HistoryMessage-data=", data);
            _this.wsMessageList.List = [];
            for (var i = 0; i < data.List.length; i++) {
                var session = new (Session);
                session.MList = [];
                if (data.List[i].length > 0) {
                    session.ID = data.List[i][0].From;
                    if (session.ID == _this.us.MyUserId) {
                        session.ID = data.List[i][0].To;
                    }
                    session.Isgroup = data.List[i][0].Isgroup;
                }
                for (var j = 0; j < data.List[i].length; j++) {
                    var Item = new (MessageItem);
                    Item.Mid = data.List[i][j].Mid;
                    Item.From = data.List[i][j].From;
                    Item.To = data.List[i][j].To;
                    Item.Content = data.List[i][j].Content;
                    Item.ContentType = data.List[i][j].ContentType;
                    Item.Time = data.List[i][j].Time;
                    session.MList.push(Item);
                }
                _this.wsMessageList.List.push(session);
            }
        });
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
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

/////////////////////////////////////////////////////////////////
// FriendList = [
//   {ID:1000021,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 1},
//   {ID:1000022,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 9},
//   {ID:1000023,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 0},
//   {ID:1000024,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 4},
//   {ID:1000025,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 5},
//   {ID:1000026,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 3},
// ];
// MessageList = [
//   {ID:1000021,ISGROUP: false,Message: [
//     {Mid: 1,From: 1,To: 1000021, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
//     {Mid: 1,From: 1000021,To:1, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
//     {Mid: 1,From: 1,To: 1000021, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
//   ]},
//   {ID:1000022,ISGROUP: false,Message: [
//     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
//     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
//     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
//   ]},
//   {ID:100001,ISGROUP: false,Message: [
//     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
//     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
//     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
//     {Mid: 0,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
//   ]}
// ]


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