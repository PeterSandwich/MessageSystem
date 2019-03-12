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






var routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
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

module.exports = "<nz-layout class=\"layout\">\r\n  <nz-content style=\"padding:0 50px;\">\r\n    <div style=\" padding: 24px; min-height: 1000px;\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </nz-content>\r\n</nz-layout>"

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
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(login, router, ws) {
        this.login = login;
        this.router = router;
        this.ws = ws;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(["/login"]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]])
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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _app_file_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/file.service */ "./src/app/file.service.ts");

















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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            ],
            providers: [_websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"], _user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["en_US"] }, _app_file_service__WEBPACK_IMPORTED_MODULE_16__["UploadService"]],
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

module.exports = ".container{\r\n  background-color: #DDDDDD;\r\n  width: 1024px;\r\n  height: 675px;\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n}\r\n.avatar{\r\n  /* 1 */\r\n  background-color: rgb(198, 228, 98);\r\n  height: 40px;\r\n  width: 240px;\r\n  height: 30px;\r\n}\r\n.him{\r\n  /* 2 */\r\n  background-color: rgb(101, 216, 206);\r\n  width: 790px;\r\n  height: 60px;\r\n  color: #444444;\r\n  padding-left: 20px;\r\n}\r\n.avatar2{\r\n  /* 3 */\r\n  background-color: rgb(121, 202, 128);\r\n  height: 35px;\r\n  width: 790px;\r\n}\r\n.inputmes{\r\n  /* 5 */\r\n  background-color: rgb(240, 244, 255);\r\n  vertical-align: top;\r\n  width: 790px;\r\n  height: 190px;\r\n  /* background-color: white; */\r\n}\r\n.tool{\r\n  /* 6 */\r\n  width: 790px;\r\n  height: 35px;\r\n  background-color: rgb(233, 173, 168);\r\n\r\n}\r\n.list{\r\n  /* 4 */\r\n  background-color: rgb(229, 155, 226);\r\n\r\n  width: 240px;\r\n  height: 550px;\r\n  overflow-x: none;\r\n  overflow-y: auto;\r\n  vertical-align: top;\r\n\r\n}\r\n.list li{\r\n    height: 65px;\r\n    list-style-type: none;\r\n    vertical-align: middle;\r\n    padding: 15px;\r\n}\r\n.item{\r\n    color: white;\r\n    border-bottom:1px solid #EEE;\r\n    height: 65px;\r\n    font-size: 12px;\r\n    /* font-display: center; */\r\n    vertical-align: middle;\r\n    /* text-align: center; */\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.list li:hover{\r\n  background-color: bisque;\r\n}\r\n.list li.selected:hover{\r\n  background-color: aquamarine !important\r\n}\r\n.selected{\r\n  background-color: aqua !important\r\n}\r\n.search{\r\n  background-color: rgb(46, 64, 230);\r\n  height: 35px;\r\n  width: 240px;\r\n}\r\n.bar{\r\n  background-color: rgb(133, 91, 78);\r\n  height: 35px;\r\n  width: 240px;\r\n}\r\n.bartool{\r\n  width: 70px;\r\n}\r\n.dropdown{\r\n  z-index: 100;\r\n}\r\n.grad{\r\n  width: 70px;\r\n  background-color:transparent;\r\n  border: 0px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  height: 25px;\r\n}\r\n.img{\r\n  /* margin: 5px; */\r\n  /* margin-top: 10px; */\r\n  height:40px; \r\n  width:40px; \r\n  position: relative;\r\n  /* border-radius:50%;  */\r\n  overflow:hidden;\r\n}\r\n.send{\r\n  position: absolute;\r\n  margin-left: 720px;\r\n  margin-top: 155px;\r\n  z-index: 100;\r\n}\r\n.textarea{\r\n  background-color: white;\r\n  resize: none;\r\n  width: 790px;\r\n  height: 150px;\r\n  position: absolute;\r\n  padding: 15px;\r\n  border: none;\r\n  outline: none;\r\n  /* margin-top: 30px; */\r\n}\r\n#box{          \r\n  /* line-height: 50px;         */     \r\n  word-break: break-word;        \r\n  color: white;        \r\n\r\n\r\n    position: relative;\r\n    left:30px; \r\n    /* width: 140px; */\r\n    min-height: 30px;\r\n    max-width: 300px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    min-width: 30px;\r\n    line-height: 20px;\r\n    margin-left: 10px;\r\n    word-wrap: 5px;\r\n    background: #088cb7;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    margin-top:15px;\r\n    vertical-align: middle;\r\n    text-align: left;\r\n}\r\n/*左方说话*/\r\n#box:before{\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    right: 100%;\r\n    top: 9px;\r\n    border-top: 5px solid transparent;\r\n    border-right: 13px solid #088cb7;\r\n    border-bottom: 6px solid transparent;\r\n}\r\n/*右方说话*/\r\n#box1{          \r\n  min-height: 30px;           \r\n  /* line-height: 50px;         */\r\n  /* margin-right: 10px;         */\r\n  /* right: 10px; */\r\n  /* float: right; */\r\n  right: 30px;\r\n  margin: 0 0 0 auto;\r\n  word-break: break-word;        \r\n  color: white;        \r\n  padding: 10px;        \r\n  line-height: 18px;\r\n\r\n  position: relative;\r\n  /* left:780px;  */\r\n  /* width: 140px; */\r\n  max-width: 300px;\r\n  min-width: 30px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n\r\n  /* height: 30px; */\r\n  background: #088cb7;\r\n  border-radius: 4px;\r\n  /* padding: 10px; */\r\n  margin-top:15px;\r\n  vertical-align: middle;\r\n  text-align: left;\r\n}\r\n#box1:before{\r\n  position: absolute;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    left: 100%;\r\n    top: 9px;\r\n    border-top: 5px solid transparent;\r\n    border-left: 13px solid #088cb7;\r\n    border-bottom: 6px solid transparent;\r\n}\r\n.message1{\r\n  width: 790px;\r\n  height: 430px;\r\n  background-color: #F9F9F9;\r\n  padding: 10px;\r\n  overflow-y: auto;\r\n  overflow-x: none;\r\n  vertical-align: top;\r\n}\r\n.mesback{\r\n  cursor: pointer;\r\n}\r\n.upload-btn {\r\n  background-color: #337ab7;\r\n  color: #fff;\r\n  border-radius: 2px;\r\n  border: none;\r\n  /* padding: .5rem 1.3rem; */\r\n  cursor: pointer;\r\n  height: 30px;\r\n  }\r\n.picture {\r\n  width: 7rem;\r\n  height: 7rem;\r\n  margin-right: 1rem;\r\n  background-size: cover;\r\n  }\r\n.picture2 {\r\n     max-width: 100%; \r\n     max-height: 100%;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    }\r\n.action-box {\r\n  margin-left: 1rem;\r\n  }\r\n.hint {\r\n  color: #909090;\r\n  font-size: 1.7rem;\r\n  margin-bottom: 1.5rem;\r\n  }\r\n.dropdown{\r\n    z-index: 2;\r\n    position:absolute;\r\n    margin-left: 16px;\r\n    /* background-position-y: 7rem;   */\r\n    width: 80px;\r\n    height: 25px;\r\n  }\r\n.headportrait{\r\n    position: relative;\r\n    width:7rem;\r\n    height:7rem;\r\n    cursor:pointer;\r\n}\r\n:host ::ng-deep .headportrait img{\r\n    width:100%;height:100%;\r\n\r\n}\r\n.mask  {    \r\n    position: absolute;    \r\n    width: 100%;    \r\n    height: 100%;      \r\n    background: #868c89;    \r\n    opacity: 0;\t\r\n    color: black;\r\n    text-align: center;\r\n    line-height:7rem;\r\n    margin-top: -7rem;\r\n}\r\n/*hover状态（按你的需求）控制显示。opacity/display/z-index都可以*/\r\n.headportrait:hover .mask {    opacity: .5;\t}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLE1BQU07RUFDTixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLE1BQU07RUFDTixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxNQUFNO0VBQ04sb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLE1BQU07RUFDTixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxNQUFNO0VBQ04sWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7O0FBRXRDO0FBQ0E7RUFDRSxNQUFNO0VBQ04sb0NBQW9DOztFQUVwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1COztBQUVyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLFlBQVk7OztJQUdWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUduQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0EsT0FBTztBQUNQO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxvQ0FBb0M7QUFDeEM7QUFDQSxPQUFPO0FBQ1A7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCOztFQUVqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBR25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0Isb0NBQW9DO0FBQ3hDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFlBQVk7RUFDWjtBQUVBO0VBQ0EsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCO0FBQ0E7S0FDRyxlQUFlO0tBQ2YsZ0JBQWdCO0lBQ2pCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEI7QUFDRjtFQUNBLGlCQUFpQjtFQUNqQjtBQUNBO0VBQ0EsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckI7QUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVLENBQUMsV0FBVzs7QUFFMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQUMsZ0RBQWdEO0FBQ2pELCtCQUErQixXQUFXLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcclxuICB3aWR0aDogMTAyNHB4O1xyXG4gIGhlaWdodDogNjc1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uYXZhdGFye1xyXG4gIC8qIDEgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMjgsIDk4KTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4uaGlte1xyXG4gIC8qIDIgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAyMTYsIDIwNik7XHJcbiAgd2lkdGg6IDc5MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBjb2xvcjogIzQ0NDQ0NDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmF2YXRhcjJ7XHJcbiAgLyogMyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDIwMiwgMTI4KTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDc5MHB4O1xyXG59XHJcblxyXG4uaW5wdXRtZXN7XHJcbiAgLyogNSAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0NCwgMjU1KTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiA3OTBweDtcclxuICBoZWlnaHQ6IDE5MHB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG59XHJcbi50b29se1xyXG4gIC8qIDYgKi9cclxuICB3aWR0aDogNzkwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDE3MywgMTY4KTtcclxuXHJcbn1cclxuLmxpc3R7XHJcbiAgLyogNCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDE1NSwgMjI2KTtcclxuXHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbiAgb3ZlcmZsb3cteDogbm9uZTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG59XHJcbi5saXN0IGxpe1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLml0ZW17XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRUVFO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLyogZm9udC1kaXNwbGF5OiBjZW50ZXI7ICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5saXN0IGxpOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxufVxyXG4ubGlzdCBsaS5zZWxlY3RlZDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lICFpbXBvcnRhbnRcclxufVxyXG4uc2VsZWN0ZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YSAhaW1wb3J0YW50XHJcbn1cclxuLnNlYXJjaHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDY0LCAyMzApO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMjQwcHg7XHJcbn1cclxuLmJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCA5MSwgNzgpO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMjQwcHg7XHJcbn1cclxuLmJhcnRvb2x7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbn1cclxuLmRyb3Bkb3due1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG4uZ3JhZHtcclxuICB3aWR0aDogNzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG4uaW1ne1xyXG4gIC8qIG1hcmdpbjogNXB4OyAqL1xyXG4gIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXHJcbiAgaGVpZ2h0OjQwcHg7IFxyXG4gIHdpZHRoOjQwcHg7IFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBib3JkZXItcmFkaXVzOjUwJTsgICovXHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbi5zZW5ke1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogNzIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTU1cHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcbi50ZXh0YXJlYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgd2lkdGg6IDc5MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgLyogbWFyZ2luLXRvcDogMzBweDsgKi9cclxufVxyXG4jYm94eyAgICAgICAgICBcclxuICAvKiBsaW5lLWhlaWdodDogNTBweDsgICAgICAgICAqLyAgICAgXHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDsgICAgICAgIFxyXG4gIGNvbG9yOiB3aGl0ZTsgICAgICAgIFxyXG5cclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OjMwcHg7IFxyXG4gICAgLyogd2lkdGg6IDE0MHB4OyAqL1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd29yZC13cmFwOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDg4Y2I3O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4vKuW3puaWueivtOivnSovXHJcbiNib3g6YmVmb3Jle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDlweDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMTNweCBzb2xpZCAjMDg4Y2I3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi8q5Y+z5pa56K+06K+dKi9cclxuI2JveDF7ICAgICAgICAgIFxyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7ICAgICAgICAgICBcclxuICAvKiBsaW5lLWhlaWdodDogNTBweDsgICAgICAgICAqL1xyXG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgICAgICAgICAqL1xyXG4gIC8qIHJpZ2h0OiAxMHB4OyAqL1xyXG4gIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICByaWdodDogMzBweDtcclxuICBtYXJnaW46IDAgMCAwIGF1dG87XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDsgICAgICAgIFxyXG4gIGNvbG9yOiB3aGl0ZTsgICAgICAgIFxyXG4gIHBhZGRpbmc6IDEwcHg7ICAgICAgICBcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIGxlZnQ6NzgwcHg7ICAqL1xyXG4gIC8qIHdpZHRoOiAxNDBweDsgKi9cclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gIC8qIGhlaWdodDogMzBweDsgKi9cclxuICBiYWNrZ3JvdW5kOiAjMDg4Y2I3O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gIG1hcmdpbi10b3A6MTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuI2JveDE6YmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB0b3A6IDlweDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkICMwODhjYjc7XHJcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm1lc3NhZ2Uxe1xyXG4gIHdpZHRoOiA3OTBweDtcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IG5vbmU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4ubWVzYmFja3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4udXBsb2FkLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC8qIHBhZGRpbmc6IC41cmVtIDEuM3JlbTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAucGljdHVyZSB7XHJcbiAgd2lkdGg6IDdyZW07XHJcbiAgaGVpZ2h0OiA3cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAucGljdHVyZTIge1xyXG4gICAgIG1heC13aWR0aDogMTAwJTsgXHJcbiAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gIC5hY3Rpb24tYm94IHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcbiAgLmhpbnQge1xyXG4gIGNvbG9yOiAjOTA5MDkwO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3due1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDdyZW07ICAgKi9cclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRwb3J0cmFpdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOjdyZW07XHJcbiAgICBoZWlnaHQ6N3JlbTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhlYWRwb3J0cmFpdCBpbWd7XHJcbiAgICB3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1xyXG5cclxufVxyXG5cclxuLm1hc2sgIHsgICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgIFxyXG4gICAgYmFja2dyb3VuZDogIzg2OGM4OTsgICAgXHJcbiAgICBvcGFjaXR5OiAwO1x0XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDo3cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTdyZW07XHJcbn0vKmhvdmVy54q25oCB77yI5oyJ5L2g55qE6ZyA5rGC77yJ5o6n5Yi25pi+56S644CCb3BhY2l0eS9kaXNwbGF5L3otaW5kZXjpg73lj6/ku6UqL1x0XHJcbi5oZWFkcG9ydHJhaXQ6aG92ZXIgLm1hc2sgeyAgICBvcGFjaXR5OiAuNTtcdH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\" >\r\n    <!--聊天窗口-->\r\n    <table class = \"table\">\r\n      <tr>\r\n        <th class = \"avatar\" rowspan=\"2\" colspan=\"3\">\r\n          <!-- 1 -->\r\n          <div>\r\n              <!--个人信息-->\r\n                <img src = {{my_img_url}} style = \"height:60px; width:60px; border-radius:50%; overflow:hidden; position:absolute;left:15px; top:20px;\">\r\n                <div>\r\n                    <div style = \"left: 90px; top:30px; position: absolute\">{{my_name}}</div>\r\n                    <div style = \"left:90px; top:55px; position: absolute; color:#999999\">个性签名</div>\r\n                </div>\r\n            </div>\r\n        </th>\r\n        <th class = \"him\"  >\r\n          <!-- 2 -->\r\n          {{to_name}}\r\n          <nz-dropdown class = \"dropdown\" *ngIf=\"isgroup\" [nzTrigger]=\"'click'\">\r\n              <button nz-button nz-dropdown nzType=\"primary\"  (click)=\"showGroupMember()\">成员</button>\r\n            <ul nz-menu nzSelectable>\r\n              <li nz-menu-item *ngFor=\"let item of groupMemberList\">\r\n                <img src = \"{{item.head_img}}\" class = \"img\">\r\n                <a>{{item.name}}</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n          <div>\r\n          <button nz-button nzType=\"primary\" *ngIf=\"isgroup\" nzShape=\"circle\" (click)=\"showAddMemberModal()\">加</button>\r\n        </div>\r\n        </th>\r\n      </tr>\r\n      <tr class = \"avatar2\" >\r\n          <td rowspan=\"4\"  >\r\n            <!-- 3 -->\r\n            <div class = \"message1\" id=\"scrolldIV\" >\r\n                <div *ngFor=\"let item of showmsg; let i = index; let last = last\" >\r\n                    <div *ngIf=\"item.from != my_id\" id = \"box\"><!--接受的消息-->\r\n                        <div *ngIf=\"item.content_type == 0\">{{item.content}}</div>\r\n                        <div *ngIf=\"item.content_type == 1\">     \r\n                          <div class=\"headportrait\">\r\n                            <div class=\"picture\" [ngStyle]=\"{ 'background-image': 'url('+item.content+')'}\"></div>\r\n                            <div class=\"mask\">\r\n                                <p (click)=\"showpicModal(item.content)\">查看原图</p>\r\n                            </div>\r\n                          </div>                          \r\n                        </div>\r\n                        <div *ngIf=\"item.content_type == 2\"  (mouseup)=\"he($event, item, i, item.msgid)\" (contextmenu)=\"his($event)\">\r\n                            <img [src]=\"switchpng(item.content)\" class=\"picture\" >\r\n                            <button class=\"upload-btn\" (click)=\" downloadFile(item.content)\"> 下载\r\n                            </button>\r\n                        </div>\r\n                        <div *ngIf=\"item.content_type == 3\"  (mouseup)=\"he($event, item, i, item.msgid)\" (contextmenu)=\"his($event)\">\r\n                                <i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\r\n                                <button class=\"upload-btn\" (click)=\"showvideoModal(item.content)\"> 播放\r\n                                </button>\r\n                            </div>\r\n                    </div>\r\n                    <div *ngIf=\"item.from == my_id && item.content != ''\" id=\"box1\"><!--发送的消息-->\r\n                        <div *ngIf=\"item.content_type != 1 && item.content_type != 2 && item.content_type != 3\"  >\r\n                          <div (contextmenu)=\"contextMenu($event,template)\">\r\n                            <ng-template #template>\r\n                              <ul nz-menu nzInDropDown (nzClick)=\"close($event)\">\r\n                                <li nz-menu-item (click)=\"backdata(item)\">撤回</li>\r\n                              </ul>\r\n                            </ng-template>\r\n                            <span >{{item.content}}</span>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.content_type == 1\"  (mouseup)=\"he($event, item)\" (contextmenu)=\"his($event)\">     \r\n                          <div class=\"headportrait\">\r\n                            <div class=\"picture\" [ngStyle]=\"{ 'background-image': 'url('+item.content+')'}\"></div>\r\n                            <div class=\"mask\">\r\n                                <p (click)=\"showpicModal(item.content)\">查看原图</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.content_type == 2\"  (mouseup)=\"he($event, item)\" (contextmenu)=\"his($event)\">\r\n                            <img src=\"/files/uknow.png\" class=\"picture\" >\r\n                            <button class=\"upload-btn\" (click)=\" downloadFile(item.content)\"> 下载\r\n                            </button>\r\n                        </div>\r\n                        <div *ngIf=\"item.content_type == 3\"  (mouseup)=\"he($event, item)\" (contextmenu)=\"his($event)\">\r\n                                 <i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\r\n                                <button class=\"upload-btn\" (click)=\"showvideoModal(item.content)\"> 播放\r\n                                </button>\r\n                            </div>\r\n                    </div>\r\n                    <span *ngIf=\"last\">{{scollbuttom()}}</span>\r\n                  </div>\r\n              </div>\r\n          </td>\r\n      </tr>\r\n      <tr >\r\n          <td colspan=\"3\" class = \"search\" colspan=\"3\">\r\n            <!-- 7 -->\r\n              <div>\r\n                  <nz-input-group [nzSuffix]=\"suffixIconSearch1\"> \r\n                      <input type=\"text\" [(ngModel)]=\"searchFriend\" nz-input placeholder=\"输入搜索内容\" id = \"search\">\r\n                  </nz-input-group> \r\n        \r\n                  <ng-template #suffixIconSearch1>\r\n                      <i nz-icon type=\"search\" class = \"icon\"></i>\r\n                  </ng-template>\r\n        \r\n                  <div>\r\n                      <div *ngIf=\"isVisible\">\r\n                          <div *ngIf=\"!searchFriend\">\r\n                            正在搜索内容\r\n                          </div>\r\n                          <div *ngIf=\"searchFriend\">\r\n                              <div *ngIf=\"flag;else Show\">查无此人</div>\r\n                              <ng-template #Show>\r\n                                  <!-- <div *ngFor=\"let item of userlist\">\r\n                                      <img src = \"{{item.Img_url}}\" class = \"img\">\r\n                                      {{item.Name}}\r\n                                  </div> -->\r\n                              </ng-template>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </td>\r\n      </tr>\r\n      <tr class = \"bar\">\r\n        <td class = \"bartool\">\r\n            <button class = \"grad\" (click) = \"showNearestContactList()\">聊天</button>|\r\n        </td>\r\n        <td class = \"bartool\">\r\n            <button class = \"grad\" (click) = \"showAddressBook()\">通讯录</button>|\r\n        </td>\r\n        <td class = \"bartool\">\r\n            <nz-dropdown class = \"dropdown\">\r\n                <a nz-dropdown>\r\n                    &nbsp; &nbsp;添加 <i nz-icon type=\"down\"></i>\r\n                </a>\r\n                <ul nz-menu nzSelectable>\r\n                    <li nz-menu-item (click)=\"showAddFriendModal()\">\r\n                        <a>添加好友</a>\r\n                    </li>\r\n                    <li nz-menu-item (click) = \"showAddGroupModal()\">\r\n                        <a>创建群聊</a>\r\n                    </li>\r\n                </ul>\r\n            </nz-dropdown>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td rowspan=\"3\" colspan=\"3\">\r\n            <!-- 4 -->\r\n            <div class = \"list\" >\r\n                <li  class = \"item\" [class.selected]=\"item == friend\" *ngFor=\"let item of  userListDisplay; let i = index\" (click) = \"selectOneUser(i, item.id,item.name, item.head_img, item.is_group)\">\r\n                    <nz-badge [nzCount]=\"item.count\" *ngIf=\"list!=NULL\">\r\n                        <img src = \"{{item.head_img}}\" class = \"img\">\r\n                    </nz-badge>\r\n                    <i style=\"color:tomato\" *ngIf=\"item.is_group\">群 </i>\r\n                 {{item.name}}\r\n                </li>\r\n            </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class = \"tool\">\r\n          <!-- 6 -->\r\n          <div  *ngIf=\"isselect\">\r\n              <div >\r\n                <!-- <i nz-icon type=\"folder\" theme=\"outline\" style=\"font-size: 25px\" class = \"icon\"></i>            \r\n                <i nz-icon type=\"picture\" theme=\"outline\" style=\"font-size: 25px\" class = \"icon\"></i>        -->\r\n                <input id=\"upfile\" type=\"file\" style=\"display: none;\" (change)=\"selectFile($event)\" accept=\".pdf,.doc,.txt,.jpg,.zip,.jpeg,.ppt,.mp4,.mp3\">\r\n                <div class=\"action-box\">\r\n                    \r\n                  <button  nz-button nzType=\"primary\" onclick = \"upfile.click()\" ><i nz-icon type=\"upload\"></i>点击上传</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </td>\r\n      </tr>\r\n      <tr class = \"inputmes\">\r\n    <!-- 输入框 -->\r\n        <td>\r\n        <!-- 5 -->\r\n          <div  *ngIf=\"isselect\">\r\n            <textarea class = \"textarea\" [(ngModel)] = \"content\" (keyup) = \"enterToSendMsg($event)\"></textarea>\r\n            <button class = \"send\" nz-button nzType=\"primary\" (click) = \"clickToSendMsg()\"  >发送</button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n    \r\n  \r\n  <!-- 创建群聊 -->\r\n  <nz-modal [(nzVisible)]=\"isAddGroupVisible\" [nzTitle]=\"modalTitle1\" [nzContent]=\"modalContent1\" [nzFooter]=\"modalFooter1\" (nzOnCancel)=\"handleAddGroupCancel()\">\r\n      <ng-template #modalTitle1>\r\n        创建群\r\n      </ng-template>\r\n      <ng-template #modalContent1>\r\n        <!-- <div class = \"list\" > -->\r\n          <div class = \"item\" *ngFor=\"let item of createGroupList.contact_list\" >\r\n              <label nz-checkbox [(ngModel)]=\"item.selected\">\r\n                  <img src = \"{{item.head_img}}\" class = \"img\">\r\n                  {{item.name}}\r\n              </label>\r\n          </div>\r\n        <!-- </div> -->\r\n      </ng-template>\r\n      <ng-template #modalFooter1>\r\n          <input nz-input placeholder=\"群名字\"[(ngModel)]=\"GroupName\">\r\n          <button nz-button nzType=\"default\" (click)=\"handleAddGroupCancel()\">取消</button>\r\n          <button nz-button nzType=\"primary\" (click)=\"handleAddGroupOk()\" >创建</button>\r\n      </ng-template>\r\n  </nz-modal>\r\n    \r\n    \r\n    <!-- 添加好友 -->\r\n  <nz-modal [(nzVisible)]=\"isAddFriendVisible\" [nzTitle]=\"modalTitle2\" [nzContent]=\"modalContent2\"   [nzFooter]=\"modalFooter2\" (nzOnCancel)=\"handleAddFriendCancel()\">\r\n      <ng-template #modalTitle2>\r\n          添加好友\r\n          <nz-input-group [nzSuffix]=\"suffixIconSearch\"> \r\n              <input type=\"text\" [(ngModel)]=\"searchContent\" nz-input placeholder=\"输入搜索的用户名\" \r\n              id = \"search\" (keyup) = \"keyUpSearch(searchContent)\">\r\n          </nz-input-group> \r\n  \r\n          <ng-template #suffixIconSearch>\r\n              <i nz-icon type=\"search\" class = \"icon\" (click) = \"search()\"></i>\r\n          </ng-template>\r\n      </ng-template>\r\n    \r\n      <ng-template #modalContent2>\r\n          <div *ngIf=\"!searchContent\">\r\n              请输入进行查找\r\n          </div>\r\n            <div *ngIf=\"searchContent\">\r\n                <div *ngIf=\"flag;else Show\">查无此人</div>\r\n                <ng-template #Show>\r\n                <div *ngFor=\"let item of userlist\">\r\n                    <img src = \"{{item.head_img}}\" class = \"img\">\r\n                      {{item.name}}\r\n                    <button (click) = \"addfriend(item.id)\">添加好友</button>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n      </ng-template>\r\n      <ng-template #modalFooter2>\r\n          <button nz-button nzType=\"primary\" (click)=\"handleAddFriendCancel()\">完成</button>\r\n      </ng-template>\r\n  </nz-modal>\r\n  \r\n\r\n\r\n   <!-- 群添加成员 -->\r\n   <nz-modal [(nzVisible)]=\"isAddMemberVisible\" [nzTitle]=\"modalTitle3\" [nzContent]=\"modalContent3\" [nzFooter]=\"modalFooter3\" (nzOnCancel)=\"handleAddMemberCancel()\">\r\n      <ng-template #modalTitle3>\r\n        添加成员\r\n      </ng-template>\r\n      <ng-template #modalContent3>\r\n        <!-- <div class = \"list\" > -->\r\n          <div class = \"item\" *ngFor=\"let item of addMemberList\" >\r\n              <label nz-checkbox [(ngModel)]=\"item.selected\" [nzDisabled]=\"item.existed\">\r\n                  <img src = \"{{item.head_img}}\" class = \"img\">\r\n                  {{item.name}}\r\n              </label>\r\n          </div>\r\n      </ng-template>\r\n      <ng-template #modalFooter3>\r\n          <button nz-button nzType=\"default\" (click)=\"handleAddMemberCancel()\">取消</button>\r\n          <button nz-button nzType=\"primary\" (click)=\"handleAddMemberOK()\">添加</button>\r\n      </ng-template>\r\n  </nz-modal>\r\n\r\n\r\n  <div  id = \"mesback1\"  *ngIf=\"pressBoolean\">\r\n      <input type = button value=\"撤回\" class = \"mesback\" (click) = \"backdata(id)\" [ngStyle]=\"{'left': px, 'top':py, 'z-index':'400', 'background-color':'red'}\" >\r\n  </div>\r\n\r\n\r\n\r\n<button type=\"button\"  (click)=\"showvideoModal()\" >查看比赛视频</button>\r\n\r\n<nz-modal [(nzVisible)]=\"isshowpicVisible\"   (nzOnCancel)=\"handleshowpicCancel()\" (nzOnOk)=\"handleshowpicCancel()\">\r\n   <div  >\r\n     <img class=\"picture2\" src=\"{{a}}\">\r\n   </div>\r\n</nz-modal>\r\n\r\n\r\n<nz-modal [(nzVisible)]=\"isshowvideoVisible\"   (nzOnCancel)=\"handleshowvideoCancel()\" (nzOnOk)=\"handleshowvideoCancel()\">\r\n    <div >\r\n        <div >\r\n          <h5>sadasdasdassdas</h5>\r\n          <video [src]=\"videourl\" controls=\"controls\" #theVideo></video>\r\n        </div>\r\n    </div>\r\n  </nz-modal>\r\n\r\n\r\n\r\n<!-- <button type=\"button\"  data-toggle=\"modal\" data-target=\"#video\" >查看比赛视频</button>-->\r\n\r\n<!-- \r\n<i class=\"fa fa-file-video-o fa-6\" aria-hidden=\"true\"></i>\r\n\r\n<div class=\"modal fade\" id=\"video\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"video\" aria-hidden=\"true\" (blur)=\"theVideo.pause()\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\" >\r\n          <h5>sadasdasdassdas</h5>\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">播放视频</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div >\r\n              <h5>sadasdasdassdas</h5>\r\n              <video [src]=\"videourl\" controls=\"controls\" #theVideo></video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div> -->"

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
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../file.service */ "./src/app/file.service.ts");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../protocol/Protocol */ "./src/app/protocol/Protocol.js");
/* harmony import */ var _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_im__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/im */ "./src/app/common/im.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");












var ChatComponent = /** @class */ (function () {
    function ChatComponent(ws, us, // 里面有 我的Id: this.us.MyUserId
    upload, el, _d, nzDropdownService, message) {
        this.ws = ws;
        this.us = us;
        this.upload = upload;
        this.el = el;
        this._d = _d;
        this.nzDropdownService = nzDropdownService;
        this.message = message;
        this.from_id = 1;
        this.to_id = 0;
        this.id = 0;
        this.to_name = "";
        this.to_img = "";
        this.content = "";
        this.searchFriend = '';
        this.list = [];
        this.searchContent = "";
        this.isVisible = false;
        this.isgroup = false;
        this.pressBoolean = false;
        this.px = "";
        this.py = "";
        // mesItem = MessageItem;
        this.contentType = 0;
        this.isPress = false;
        this.index = 0;
        this.flag = false;
        this.fileurl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + '/upload';
        this.dfileurl = 'http://localhost:9988/files/9edbe55433e4_compress.jpg';
        this.filep = "";
        this.aaaa = "9edbe55433e4_compress.jpg";
        this.isshowpicVisible = false;
        this.isshowvideoVisible = false;
        /////////////////////////////////////////
        //// 创建群//////////////////////////////
        ////////////////////////////////////////
        this.GroupName = '';
        this.isAddGroupVisible = false;
        /////////////////////////////////////////
        //// 添加成员//////////////////////////////
        ////////////////////////////////////////
        this.isAddFriendVisible = false;
        this.isAddFriendConfirmLoading = false;
        this.isAddMemberVisible = false;
    }
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.ws.createSocket(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].websocketUrl + "?session_id=" + this.us.session_id);
        this.ws.global_message.chat_room_list = new Map();
        this.ws.nearest_contact.contact_list = [];
        this.ws.address_book.contact_list = [];
        this.userListDisplay = [];
        this.createGroupList = new (_common_im__WEBPACK_IMPORTED_MODULE_8__["CreateGroup"]);
        this.createGroupList.contact_list = [];
        this.groupMemberList = [];
        this.addMemberList = [];
        // 初始化最近聊天列表及其聊天历史消息
        this.getNearestListAndMessage();
        this.getAddress();
        this.showNearestContactList();
        this.my_id = this.us.MyUserId;
        this.my_img_url = this.us.myImg;
        this.my_name = this.us.myName;
        this.scollbuttom();
        this.show = false;
        this.pressBoolean = false;
        this.isPress = false;
    };
    // 显示 最近联系人列表
    ChatComponent.prototype.showNearestContactList = function () {
        this.userListDisplay = this.ws.nearest_contact.contact_list;
    };
    // 显示 通讯录列表
    ChatComponent.prototype.showAddressBook = function () {
        this.userListDisplay = this.ws.address_book.contact_list;
    };
    ChatComponent.prototype.he = function (event, item, id) {
        if (event.button != 2) {
            this.pressBoolean = false;
            this.isPress = false;
            return;
        }
        this.isPress = true;
        this.backMes = item;
    };
    ChatComponent.prototype.backdata = function (item) {
        ///////////////////////////////////////////////////////////
        //有一个bug需解决，撤回消息后聊天框仍存在，以后再改23333333333333//
        ///////////////////////////////////////////////////////////
        console.log("撤回", item);
        var at = parseInt(item.arrive_time.toString());
        var now = Date.now();
        if (now - at > 120000) {
            this.message.create('warning', "\u65F6\u95F4\u8D85\u8FC7\u4E24\u5206\u949F\uFF0C\u65E0\u6CD5\u64A4\u56DE");
            return;
        }
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.Type.REQUEST; //消息的类型的请求类型
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.CtrlType.MSG_BACK; // 消息撤回
        msg.from = this.us.MyUserId; // 消息发送方
        msg.to = item.to; //消息接收方
        msg.content = item.content; //消息内容
        msg.contentType = item.content_type; //消息类型
        msg.isgroup = item.is_group; //是不是群组消息
        msg.msgid = item.id;
        msg.sendTime = Date.now();
        this.ws.sendMessage(msg);
    };
    ChatComponent.prototype.selectOneUser = function (index, id, name, img, isgroup) {
        // 发送ACK消息回后端，让后端知道这消息已读，徽标数清零
        //////////////////////////////////////////
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.Type.ACK;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.CtrlType.NONE;
        msg.from = this.us.MyUserId;
        msg.to = id;
        msg.content = this.content;
        msg.contentType = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.ContentType.TEXT;
        this.contentType = msg.contentType;
        msg.isgroup = isgroup;
        msg.sendTime = Date.now();
        this.ws.sendMessage(msg);
        ///////////////////////////////////
        this.to_id = id;
        this.index = index;
        this.isselect = true;
        console.log("this.id", id);
        this.to_name = name;
        this.to_img = img;
        this.isgroup = isgroup;
        var flag = false;
        if (this.ws.global_message.chat_room_list.has(id)) {
            this.showmsg = this.ws.global_message.chat_room_list.get(id).message_list;
            this.isgroup = this.ws.global_message.chat_room_list.get(id).is_group;
            console.log("showmsg = ", this.showmsg);
            flag = true;
        }
        // 徽标数清零
        var i = this.ws.nearest_contact.contact_list.findIndex(function (e) { return e.id == id; });
        this.ws.nearest_contact.contact_list[i].count = 0;
        if (!flag) {
            this.showmsg = [];
        }
        this.scollbuttom();
    };
    //在输入框回车发送消息
    ChatComponent.prototype.enterToSendMsg = function (event) {
        if (event.keyCode != (13 || false)) {
            return;
        }
        this.sendTextMessage();
    };
    //点击 发送 按钮发送消息
    ChatComponent.prototype.clickToSendMsg = function () {
        this.sendTextMessage();
    };
    //发送文本消息
    ChatComponent.prototype.sendTextMessage = function () {
        this.content = this.content.replace(/^\s*/, ''); //去除左边空格
        if (this.content == "") {
            console.log("内容不能为空");
            return;
        }
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.CtrlType.NONE;
        msg.from = this.us.MyUserId;
        msg.to = this.to_id;
        msg.content = this.content;
        msg.contentType = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.ContentType.TEXT;
        this.contentType = msg.contentType;
        msg.isgroup = this.isgroup;
        msg.sendTime = Date.now();
        this.ws.sendMessage(msg);
        this.content = "";
        this.scollbuttom();
    };
    ChatComponent.prototype.addfriend = function (to) {
        if (to == this.us.MyUserId) {
            alert("不能添加自己为好友");
            return;
        }
        for (var i = 0; i < this.ws.nearest_contact.contact_list.length; i++) {
            if (this.ws.nearest_contact.contact_list[i].id == to) {
                alert("已是好友");
                return;
            }
        }
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.CtrlType.CREATE_SESSION;
        msg.from = this.us.MyUserId;
        msg.to = to;
        msg.sendTime = Date.now();
        this.ws.sendMessage(msg);
    };
    ChatComponent.prototype.keyUpSearch = function (name) {
        var _this = this;
        // this.ws.
        // this.ws.getUserList(this.searchContent).subscribe(data => {
        //   console.log("data2 = ", data.Ulist);
        //   this.userlist = data.Ulist;
        // })
        if (this.searchContent == '')
            return;
        this.us.getuserlist(this.searchContent).subscribe(function (data) {
            // this.userlist = data
            console.log("userlist=", data);
            if (data['user_list'].length == 0) {
                _this.flag = true;
            }
            _this.userlist = data['user_list'];
            _this.flag = false;
        });
    };
    ChatComponent.prototype.search = function () {
        // console.log("search=", this.searchContent);
        // this.ws.getAddress(this.searchContent).subscribe(data => {
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
        if (file.size > 200 * 1024 * 1024) {
            console.log("file is too big!");
            return;
        }
        //console.log(file.type)
        console.log(file.name);
        console.log(file.type);
        this.filename = file.name;
        this.upload.uploadFile(this.fileurl, file).subscribe(function (response) {
            //.log(response);
            var filetype = -1;
            if (response["body"] != null) {
                // console.log(response)
                if (response["body"] != null) {
                    _this.filep = response["body"]["originalfile"];
                    _this.dfileurl = response["body"]["thumbnail"];
                    filetype = response["body"]["filetype"];
                    _this.show = true;
                }
                var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message);
                msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.Type.REQUEST;
                msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.CtrlType.NONE;
                msg.from = _this.us.MyUserId;
                msg.to = _this.to_id;
                msg.content = _this.dfileurl;
                if (filetype == 2 || filetype == 3) {
                    msg.content = _this.filep;
                }
                msg.contentType = filetype;
                _this.contentType = msg.contentType;
                msg.isgroup = _this.isgroup;
                _this.ws.sendMessage(msg);
                _this.content = "";
            }
        }, function (err) {
            console.log("Upload Error:", err);
        }, function () {
            console.log("Upload done");
        });
    };
    ChatComponent.prototype.switchpng = function (url) {
        this.imgurl = url.split(".");
        var src;
        switch (this.imgurl[1]) {
            case 'doc':
                src = "/files/DOC.png";
                break;
            case 'pdf':
                src = "/files/pdf.png";
                break;
            case 'ppt':
                src = "/files/ppt.png";
                break;
            case 'zip':
                src = "/files/RAR.png";
                break;
            case 'txt':
                src = "/files/txt.png";
                break;
        }
        return src;
    };
    ChatComponent.prototype.showpicModal = function (aaaa) {
        this.aaa = aaaa.split(".");
        this.aa = this.aaa[0].split("_");
        this.a = this.aa[0] + "." + this.aaa[1];
        console.log("this.a=", this.a);
        this.isshowpicVisible = true;
    };
    ChatComponent.prototype.handleshowpicCancel = function () {
        this.isshowpicVisible = false;
    };
    ChatComponent.prototype.showvideoModal = function (url) {
        console.log(url);
        this.videourl = url;
        this.isshowvideoVisible = true;
    };
    ChatComponent.prototype.handleshowvideoCancel = function () {
        this.isshowvideoVisible = false;
    };
    ChatComponent.prototype.download = function (filepath) {
        window.open(filepath, '_blank');
        return;
    };
    // 调用浏览器的下载
    ChatComponent.prototype.downloadFile = function (filepath) {
        var a = document.createElement('a');
        a.href = filepath;
        var Removesuffix = filepath.split(".");
        var Removeprefix = Removesuffix[0].split("/");
        var name = Removeprefix[1];
        a.download = name;
        a.click();
        a.remove();
        console.log('download:' + a.href);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  by: pjw    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //获取最近联系人及其历史消息
    ChatComponent.prototype.getNearestListAndMessage = function () {
        var _this = this;
        this.ws.getNearestContactAndMessage().subscribe(function (data) {
            console.log("一登录获取最近联系人及其历史消息", data);
            if (data.status == 255) {
                alert(data.body["Error"]);
                return;
            }
            for (var i = 0; i < data.body['chat_room_list'].length; i++) {
                //最近联系人的（相当与一个chat room）
                var FriItem = new (_common_im__WEBPACK_IMPORTED_MODULE_8__["ContactListItem"]);
                FriItem.id = data.body['chat_room_list'][i].id;
                FriItem.name = data.body['chat_room_list'][i].name;
                FriItem.head_img = data.body['chat_room_list'][i].head_img;
                FriItem.is_group = data.body['chat_room_list'][i].is_group;
                FriItem.count = data.body['chat_room_list'][i].count;
                _this.ws.nearest_contact.contact_list.push(FriItem);
                //历史消息 使用 this.global_message.chat_room_list[人或群的ID]获取历史消息
                var chat_room = new (_common_im__WEBPACK_IMPORTED_MODULE_8__["ChatRoom"]);
                chat_room.id = data.body['chat_room_list'][i].id;
                chat_room.name = data.body['chat_room_list'][i].name;
                chat_room.is_group = data.body['chat_room_list'][i].is_group;
                chat_room.message_list = data.body['chat_room_list'][i].message_list;
                _this.ws.global_message.chat_room_list.set(chat_room.id, chat_room);
            }
            console.log("contact_list = ", _this.ws.nearest_contact.contact_list);
            console.log("global_messgae = ", _this.ws.global_message.chat_room_list);
        });
    };
    //获取通讯录
    ChatComponent.prototype.getAddress = function () {
        var _this = this;
        this.ws.getAddressBook().subscribe(function (data) {
            if (_this.ws.address_book.contact_list.length > 0) {
                _this.ws.address_book.contact_list = [];
            }
            if (data == null) {
                console.log("通讯录为空");
                return;
            }
            for (var i = 0; i < data.friends_list.length; i++) {
                var FriItem = new (_common_im__WEBPACK_IMPORTED_MODULE_8__["ContactListItem"]);
                FriItem.id = data['friends_list'][i].id;
                FriItem.name = data['friends_list'][i].name;
                FriItem.head_img = data['friends_list'][i].head_img;
                FriItem.is_group = data['friends_list'][i].is_group;
                FriItem.count = 0;
                _this.ws.address_book.contact_list.push(FriItem);
            }
            console.log("this.address_book=", _this.ws.address_book);
        });
    };
    ChatComponent.prototype.showAddGroupModal = function () {
        var list = this.ws.address_book.contact_list;
        if (list.length == 0) {
            alert("列表无联系人，不可创建群");
            return;
        }
        console.log("list:", this.ws.address_book.contact_list);
        for (var i = 0; i < list.length; i++) {
            if (list[i].is_group == false) {
                var item = new _common_im__WEBPACK_IMPORTED_MODULE_8__["CreateGroupItem"];
                item.id = list[i].id;
                item.name = list[i].name;
                item.head_img = list[i].head_img;
                item.selected = false;
                this.createGroupList.contact_list.push(item);
            }
        }
        this.isAddGroupVisible = true;
        console.log("创建群组显示列表：", this.createGroupList.contact_list);
    };
    ChatComponent.prototype.handleAddGroupCancel = function () {
        this.isAddGroupVisible = false;
        this.createGroupList.contact_list = [];
        this.GroupName = '';
    };
    ChatComponent.prototype.handleAddGroupOk = function () {
        if (this.GroupName == '') {
            alert("注意：群名不能为空");
            this.GroupName = '';
            this.createGroupList.contact_list = [];
            return;
        }
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.CtrlType.CREATE_GROUP;
        msg.from = this.us.MyUserId;
        msg.content = this.GroupName;
        msg.contentType = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.ContentType.TEXT;
        msg.isgroup = true;
        msg.userlist = [];
        for (var i = 0; i < this.createGroupList.contact_list.length; i++) {
            if (this.createGroupList.contact_list[i].selected) {
                msg.userlist.push(this.createGroupList.contact_list[i].id);
            }
        }
        if (msg.userlist.length == 0) {
            alert("注意：至少选择一个人");
            return;
        }
        this.createGroupList.contact_list = [];
        this.GroupName = '';
        this.isAddGroupVisible = false;
        this.ws.sendMessage(msg);
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
    ChatComponent.prototype.showGroupMember = function () {
        var _this = this;
        this.us.getGroupMember(this.to_id).subscribe(function (data) {
            _this.groupMemberList = [];
            console.log(data);
            for (var i = 0; i < data['length']; i++) {
                var item = new _common_im__WEBPACK_IMPORTED_MODULE_8__["ContactListItem"];
                item.id = data[i]['id'];
                item.name = data[i]['name'];
                item.head_img = data[i]['head_img'];
                _this.groupMemberList.push(item);
            }
        });
    };
    ChatComponent.prototype.showAddMemberModal = function () {
        var _this = this;
        var list = this.ws.address_book.contact_list;
        if (list.length == 0) {
            alert("列表无联系人，群不可加人");
            return;
        }
        this.us.getGroupMember(this.to_id).subscribe(function (data) {
            _this.groupMemberList = [];
            console.log(data);
            for (var i = 0; i < data['length']; i++) {
                var item = new _common_im__WEBPACK_IMPORTED_MODULE_8__["ContactListItem"];
                item.id = data[i]['id'];
                item.name = data[i]['name'];
                item.head_img = data[i]['head_img'];
                _this.groupMemberList.push(item);
            }
            _this.addMemberList = [];
            var _loop_1 = function (i) {
                if (list[i].is_group == false) {
                    var item_1 = new _common_im__WEBPACK_IMPORTED_MODULE_8__["AddMemberItem"];
                    item_1.id = list[i].id;
                    item_1.name = list[i].name;
                    item_1.head_img = list[i].head_img;
                    item_1.selected = false;
                    item_1.existed = false;
                    if (_this.groupMemberList.findIndex(function (e) { return e.id == item_1.id; }) > 0) {
                        item_1.existed = true;
                    }
                    _this.addMemberList.push(item_1);
                }
            };
            for (var i = 0; i < list.length; i++) {
                _loop_1(i);
            }
            _this.isAddMemberVisible = true;
        });
    };
    ChatComponent.prototype.handleAddMemberCancel = function () {
        this.isAddMemberVisible = false;
    };
    ChatComponent.prototype.handleAddMemberOK = function () {
        var msg = new (_protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message);
        msg.type = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.Type.REQUEST;
        msg.cmd = _protocol_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].Message.CtrlType.GROUP_ADDMEMBERS;
        msg.from = this.us.MyUserId;
        msg.to = this.to_id;
        msg.isgroup = true;
        msg.userlist = [];
        for (var i = 0; i < this.addMemberList.length; i++) {
            if (this.addMemberList[i].selected) {
                msg.userlist.push(this.addMemberList[i].id);
            }
        }
        if (msg.userlist.length == 0) {
            alert("注意：至少选择一个人");
            return;
        }
        console.log("选择添加的人:", msg.userlist);
        this.ws.sendMessage(msg);
        this.isAddMemberVisible = false;
    };
    ChatComponent.prototype.addMember = function () {
    };
    ChatComponent.prototype.contextMenu = function ($event, template) {
        this.dropdown = this.nzDropdownService.create($event, template);
    };
    ChatComponent.prototype.close = function (e) {
        console.log(e);
        this.dropdown.close();
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _file_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDropdownService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/common/im.ts":
/*!******************************!*\
  !*** ./src/app/common/im.ts ***!
  \******************************/
/*! exports provided: MessageItem, HistoryMessage, ContactListItem, NearestContact, AddressBook, GlobalMessage, ChatRoom, AllChatRoom, CreateGroupItem, CreateGroup, AddMemberItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItem", function() { return MessageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryMessage", function() { return HistoryMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListItem", function() { return ContactListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearestContact", function() { return NearestContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBook", function() { return AddressBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalMessage", function() { return GlobalMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoom", function() { return ChatRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllChatRoom", function() { return AllChatRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupItem", function() { return CreateGroupItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroup", function() { return CreateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberItem", function() { return AddMemberItem; });
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

// 最近联系人
var ContactListItem = /** @class */ (function () {
    function ContactListItem() {
    }
    return ContactListItem;
}());

var NearestContact = /** @class */ (function () {
    function NearestContact() {
    }
    return NearestContact;
}());

// 通讯录相关
var AddressBook = /** @class */ (function () {
    function AddressBook() {
    }
    return AddressBook;
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

var CreateGroupItem = /** @class */ (function () {
    function CreateGroupItem() {
    }
    return CreateGroupItem;
}());

var CreateGroup = /** @class */ (function () {
    function CreateGroup() {
    }
    return CreateGroup;
}());

var AddMemberItem = /** @class */ (function () {
    function AddMemberItem() {
    }
    return AddMemberItem;
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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-bg{\r\n    background: #00b4ef;\r\n}\r\n.form-horizontal{\r\n    background: #fff;\r\n    padding-bottom: 40px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n}\r\n.form-horizontal .heading{\r\n    display: block;\r\n    font-size: 35px;\r\n    font-weight: 700;\r\n    padding: 35px 0;\r\n    border-bottom: 1px solid #f0f0f0;\r\n    margin-bottom: 30px;\r\n}\r\n.form-horizontal .form-group{\r\n    padding: 0 40px;\r\n    margin: 0 0 25px 0;\r\n    position: relative;\r\n}\r\n.form-horizontal .form-control{\r\n    background: #f0f0f0;\r\n    border: none;\r\n    border-radius: 20px;\r\n    box-shadow: none;\r\n    padding: 0 20px 0 45px;\r\n    height: 40px;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus{\r\n    background: #e0e0e0;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n}\r\n.form-horizontal .form-group i{\r\n    position: absolute;\r\n    top: 12px;\r\n    left: 60px;\r\n    font-size: 17px;\r\n    color: #c8c8c8;\r\n    transition : all 0.5s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus + i{\r\n    color: #00b4ef;\r\n}\r\n.form-horizontal .fa-question-circle{\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 12px;\r\n    right: 60px;\r\n    font-size: 20px;\r\n    color: #808080;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n.form-horizontal .fa-question-circle:hover{\r\n    color: #000;\r\n}\r\n.form-horizontal .main-checkbox{\r\n    float: left;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: #11a3fc;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin: 5px 0 0 5px;\r\n    border: 1px solid #11a3fc;\r\n}\r\n.form-horizontal .main-checkbox label{\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n}\r\n.form-horizontal .main-checkbox label:after{\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 5px;\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 4px;\r\n    border: 3px solid #fff;\r\n    border-top: none;\r\n    border-right: none;\r\n    background: transparent;\r\n    opacity: 0;\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]{\r\n    visibility: hidden;\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{\r\n    opacity: 1;\r\n}\r\n.form-horizontal .text{\r\n    float: left;\r\n    margin-left: 7px;\r\n    line-height: 20px;\r\n    padding-top: 5px;\r\n    text-transform: capitalize;\r\n}\r\n.form-horizontal .btn{\r\n    float: right;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: #00b4ef;\r\n    border-radius: 30px;\r\n    padding: 10px 25px;\r\n    border: none;\r\n    text-transform: capitalize;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n@media only screen and (max-width: 479px){\r\n    .form-horizontal .form-group{\r\n        padding: 0 25px;\r\n    }\r\n    .form-horizontal .form-group i{\r\n        left: 45px;\r\n    }\r\n    .form-horizontal .btn{\r\n        padding: 10px 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1iZ3tcclxuICAgIGJhY2tncm91bmQ6ICMwMGI0ZWY7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuaGVhZGluZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3Vwe1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMjVweCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tY29udHJvbHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogMCBub25lO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAgaXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogI2M4YzhjODtcclxuICAgIHRyYW5zaXRpb24gOiBhbGwgMC41cyBlYXNlIDBzO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tY29udHJvbDpmb2N1cyArIGl7XHJcbiAgICBjb2xvcjogIzAwYjRlZjtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mYS1xdWVzdGlvbi1jaXJjbGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICByaWdodDogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mYS1xdWVzdGlvbi1jaXJjbGU6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5tYWluLWNoZWNrYm94e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMWEzZmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDVweCAwIDAgNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzExYTNmYztcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5tYWluLWNoZWNrYm94IGxhYmVse1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLm1haW4tY2hlY2tib3ggbGFiZWw6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLm1haW4tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF17XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAubWFpbi1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLnRleHR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5idG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwMGI0ZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xyXG4gICAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cHtcclxuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwIGl7XHJcbiAgICAgICAgbGVmdDogNDVweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWhvcml6b250YWwgLmJ0bntcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\r\n     <div class=\"row\">\r\n         <div class=\"col-md-offset-3 col-md-6\">\r\n             <form class=\"form-horizontal\">\r\n                 <span class=\"heading\">用户登录</span>\r\n                 <div class=\"form-group\">\r\n                     <input type=\"email\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"inputEmail3\" placeholder=\"用户名或电子邮件\">\r\n                     <i class=\"fa fa-user\"></i>\r\n                 </div>\r\n                 <div class=\"form-group help\">\r\n                     <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"inputPassword3\" placeholder=\"密　码\">\r\n                     <i class=\"fa fa-lock\"></i>\r\n                     <a href=\"#\" class=\"fa fa-question-circle\"></a>\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                    <button (click)=\"submit()\" class=\"btn btn-default\">登录</button>\r\n                    <button class=\"btn btn-default\" routerLink=\"/signup\" routerLinkActive=\"active\">注册</button>    \r\n                 </div>\r\n             </form>\r\n         </div>\r\n     </div>\r\n </div>"

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
            // console.log("data.status=", data.status)
            if (data.status == 200) {
                var respond = data["body"];
                console.log("登录成功");
                _this.us.isLogin = true;
                _this.us.MyUserId = respond['id'];
                _this.us.myImg = respond['head_img'];
                _this.us.myName = respond['name'];
                _this.us.session_id = respond['session_id'];
                _this.router.navigate(['chat']);
                // console.log("data=", data, this.us.MyUserId, this.us.myName);
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
         * @property {string|null} [content] Message content
         * @property {Protocol.Message.ContentType|null} [contentType] Message contentType
         * @property {boolean|null} [isgroup] Message isgroup
         * @property {number|Long|null} [msgid] Message msgid
         * @property {number|Long|null} [arriveTime] Message arriveTime
         * @property {number|Long|null} [sendTime] Message sendTime
         * @property {Array.<number|Long>|null} [userlist] Message userlist
         * @property {Protocol.Message.ErrorCode|null} [errcode] Message errcode
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
         * Message isgroup.
         * @member {boolean} isgroup
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.isgroup = false;

        /**
         * Message msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message arriveTime.
         * @member {number|Long} arriveTime
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.arriveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message sendTime.
         * @member {number|Long} sendTime
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message userlist.
         * @member {Array.<number|Long>} userlist
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.userlist = $util.emptyArray;

        /**
         * Message errcode.
         * @member {Protocol.Message.ErrorCode} errcode
         * @memberof Protocol.Message
         * @instance
         */
        Message.prototype.errcode = 0;

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
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.contentType);
            if (message.isgroup != null && message.hasOwnProperty("isgroup"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isgroup);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.msgid);
            if (message.arriveTime != null && message.hasOwnProperty("arriveTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.arriveTime);
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.sendTime);
            if (message.userlist != null && message.userlist.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (var i = 0; i < message.userlist.length; ++i)
                    writer.int64(message.userlist[i]);
                writer.ldelim();
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.errcode);
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
                    message.content = reader.string();
                    break;
                case 6:
                    message.contentType = reader.int32();
                    break;
                case 7:
                    message.isgroup = reader.bool();
                    break;
                case 8:
                    message.msgid = reader.int64();
                    break;
                case 9:
                    message.arriveTime = reader.int64();
                    break;
                case 10:
                    message.sendTime = reader.int64();
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
                case 12:
                    message.errcode = reader.int32();
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
                case 4:
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
                case 3:
                    break;
                }
            if (message.isgroup != null && message.hasOwnProperty("isgroup"))
                if (typeof message.isgroup !== "boolean")
                    return "isgroup: boolean expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.arriveTime != null && message.hasOwnProperty("arriveTime"))
                if (!$util.isInteger(message.arriveTime) && !(message.arriveTime && $util.isInteger(message.arriveTime.low) && $util.isInteger(message.arriveTime.high)))
                    return "arriveTime: integer|Long expected";
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            if (message.userlist != null && message.hasOwnProperty("userlist")) {
                if (!Array.isArray(message.userlist))
                    return "userlist: array expected";
                for (var i = 0; i < message.userlist.length; ++i)
                    if (!$util.isInteger(message.userlist[i]) && !(message.userlist[i] && $util.isInteger(message.userlist[i].low) && $util.isInteger(message.userlist[i].high)))
                        return "userlist: integer|Long[] expected";
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                switch (message.errcode) {
                default:
                    return "errcode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
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
            case "ERROR":
            case 4:
                message.type = 4;
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
            case "VIDEO":
            case 3:
                message.contentType = 3;
                break;
            }
            if (object.isgroup != null)
                message.isgroup = Boolean(object.isgroup);
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            if (object.arriveTime != null)
                if ($util.Long)
                    (message.arriveTime = $util.Long.fromValue(object.arriveTime)).unsigned = false;
                else if (typeof object.arriveTime === "string")
                    message.arriveTime = parseInt(object.arriveTime, 10);
                else if (typeof object.arriveTime === "number")
                    message.arriveTime = object.arriveTime;
                else if (typeof object.arriveTime === "object")
                    message.arriveTime = new $util.LongBits(object.arriveTime.low >>> 0, object.arriveTime.high >>> 0).toNumber();
            if (object.sendTime != null)
                if ($util.Long)
                    (message.sendTime = $util.Long.fromValue(object.sendTime)).unsigned = false;
                else if (typeof object.sendTime === "string")
                    message.sendTime = parseInt(object.sendTime, 10);
                else if (typeof object.sendTime === "number")
                    message.sendTime = object.sendTime;
                else if (typeof object.sendTime === "object")
                    message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
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
            switch (object.errcode) {
            case "REQUEST_BODY_PARAMS_ERROR":
            case 0:
                message.errcode = 0;
                break;
            case "GROUP_CREATION_FAILED":
            case 1:
                message.errcode = 1;
                break;
            case "WITHDRAW_MESSAGE_FAILED":
            case 2:
                message.errcode = 2;
                break;
            case "CHAT_SESSION_CREATION_FAILED":
            case 3:
                message.errcode = 3;
                break;
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
                object.content = "";
                object.contentType = options.enums === String ? "TEXT" : 0;
                object.isgroup = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.arriveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.arriveTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTime = options.longs === String ? "0" : 0;
                object.errcode = options.enums === String ? "REQUEST_BODY_PARAMS_ERROR" : 0;
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
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                object.contentType = options.enums === String ? $root.Protocol.Message.ContentType[message.contentType] : message.contentType;
            if (message.isgroup != null && message.hasOwnProperty("isgroup"))
                object.isgroup = message.isgroup;
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            if (message.arriveTime != null && message.hasOwnProperty("arriveTime"))
                if (typeof message.arriveTime === "number")
                    object.arriveTime = options.longs === String ? String(message.arriveTime) : message.arriveTime;
                else
                    object.arriveTime = options.longs === String ? $util.Long.prototype.toString.call(message.arriveTime) : options.longs === Number ? new $util.LongBits(message.arriveTime.low >>> 0, message.arriveTime.high >>> 0).toNumber() : message.arriveTime;
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (typeof message.sendTime === "number")
                    object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
                else
                    object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
            if (message.userlist && message.userlist.length) {
                object.userlist = [];
                for (var j = 0; j < message.userlist.length; ++j)
                    if (typeof message.userlist[j] === "number")
                        object.userlist[j] = options.longs === String ? String(message.userlist[j]) : message.userlist[j];
                    else
                        object.userlist[j] = options.longs === String ? $util.Long.prototype.toString.call(message.userlist[j]) : options.longs === Number ? new $util.LongBits(message.userlist[j].low >>> 0, message.userlist[j].high >>> 0).toNumber() : message.userlist[j];
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = options.enums === String ? $root.Protocol.Message.ErrorCode[message.errcode] : message.errcode;
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
         * @property {number} ERROR=4 ERROR value
         */
        Message.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ACK"] = 0;
            values[valuesById[1] = "REQUEST"] = 1;
            values[valuesById[2] = "NOTIFICATION"] = 2;
            values[valuesById[4] = "ERROR"] = 4;
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
         * @property {number} VIDEO=3 VIDEO value
         */
        Message.ContentType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TEXT"] = 0;
            values[valuesById[1] = "IMG"] = 1;
            values[valuesById[2] = "FILE"] = 2;
            values[valuesById[3] = "VIDEO"] = 3;
            return values;
        })();

        /**
         * ErrorCode enum.
         * @name Protocol.Message.ErrorCode
         * @enum {string}
         * @property {number} REQUEST_BODY_PARAMS_ERROR=0 REQUEST_BODY_PARAMS_ERROR value
         * @property {number} GROUP_CREATION_FAILED=1 GROUP_CREATION_FAILED value
         * @property {number} WITHDRAW_MESSAGE_FAILED=2 WITHDRAW_MESSAGE_FAILED value
         * @property {number} CHAT_SESSION_CREATION_FAILED=3 CHAT_SESSION_CREATION_FAILED value
         */
        Message.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REQUEST_BODY_PARAMS_ERROR"] = 0;
            values[valuesById[1] = "GROUP_CREATION_FAILED"] = 1;
            values[valuesById[2] = "WITHDRAW_MESSAGE_FAILED"] = 2;
            values[valuesById[3] = "CHAT_SESSION_CREATION_FAILED"] = 3;
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

module.exports = ".form-bg{\r\n    background: #00b4ef;\r\n}\r\n.form-horizontal{\r\n    background: #fff;\r\n    padding-bottom: 40px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n}\r\n.form-horizontal .heading{\r\n    display: block;\r\n    font-size: 35px;\r\n    font-weight: 700;\r\n    padding: 35px 0;\r\n    border-bottom: 1px solid #f0f0f0;\r\n    margin-bottom: 30px;\r\n}\r\n.form-horizontal .form-group{\r\n    padding: 0 40px;\r\n    margin: 0 0 25px 0;\r\n    position: relative;\r\n}\r\n.form-horizontal .form-control{\r\n    background: #f0f0f0;\r\n    border: none;\r\n    border-radius: 20px;\r\n    box-shadow: none;\r\n    padding: 0 20px 0 45px;\r\n    height: 40px;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus{\r\n    background: #e0e0e0;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n}\r\n.form-horizontal .form-group i{\r\n    position: absolute;\r\n    top: 12px;\r\n    left: 60px;\r\n    font-size: 17px;\r\n    color: #c8c8c8;\r\n    transition : all 0.5s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus + i{\r\n    color: #00b4ef;\r\n}\r\n.form-horizontal .fa-question-circle{\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 12px;\r\n    right: 60px;\r\n    font-size: 20px;\r\n    color: #808080;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n.form-horizontal .fa-question-circle:hover{\r\n    color: #000;\r\n}\r\n.form-horizontal .main-checkbox{\r\n    float: left;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: #11a3fc;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin: 5px 0 0 5px;\r\n    border: 1px solid #11a3fc;\r\n}\r\n.form-horizontal .main-checkbox label{\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n}\r\n.form-horizontal .main-checkbox label:after{\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 5px;\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 4px;\r\n    border: 3px solid #fff;\r\n    border-top: none;\r\n    border-right: none;\r\n    background: transparent;\r\n    opacity: 0;\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]{\r\n    visibility: hidden;\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{\r\n    opacity: 1;\r\n}\r\n.form-horizontal .text{\r\n    float: left;\r\n    margin-left: 7px;\r\n    line-height: 20px;\r\n    padding-top: 5px;\r\n    text-transform: capitalize;\r\n}\r\n.form-horizontal .btn{\r\n    float: right;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: #00b4ef;\r\n    border-radius: 30px;\r\n    padding: 10px 25px;\r\n    border: none;\r\n    text-transform: capitalize;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n@media only screen and (max-width: 479px){\r\n    .form-horizontal .form-group{\r\n        padding: 0 25px;\r\n    }\r\n    .form-horizontal .form-group i{\r\n        left: 45px;\r\n    }\r\n    .form-horizontal .btn{\r\n        padding: 10px 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiNGVmO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmhlYWRpbmd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIG1hcmdpbjogMCAwIDI1cHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDAgbm9uZTtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwIGl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICNjOGM4Yzg7XHJcbiAgICB0cmFuc2l0aW9uIDogYWxsIDAuNXMgZWFzZSAwcztcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWNvbnRyb2w6Zm9jdXMgKyBpe1xyXG4gICAgY29sb3I6ICMwMGI0ZWY7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuZmEtcXVlc3Rpb24tY2lyY2xle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgcmlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuZmEtcXVlc3Rpb24tY2lyY2xlOmhvdmVye1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAubWFpbi1jaGVja2JveHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTFhM2ZjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA1cHggMCAwIDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMWEzZmM7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAubWFpbi1jaGVja2JveCBsYWJlbHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5tYWluLWNoZWNrYm94IGxhYmVsOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5tYWluLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLm1haW4tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmFmdGVye1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC50ZXh0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuYnRue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiNGVmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KXtcclxuICAgIC5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cCBpe1xyXG4gICAgICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ob3Jpem9udGFsIC5idG57XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-offset-3 col-md-6\">\r\n            <form class=\"form-horizontal\">\r\n                <span class=\"heading\">用户注册</span>\r\n                <div class=\"form-group\">\r\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"inputEmail3\" placeholder=\"用户名或电子邮件\">\r\n                    <i class=\"fa fa-user\"></i>\r\n                </div>\r\n                <div class=\"form-group help\">\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"inputPassword3\" placeholder=\"密　码\">\r\n                    <i class=\"fa fa-lock\"></i>\r\n                    <a href=\"#\" class=\"fa fa-question-circle\"></a>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"head_img\" name=\"head_img\" id=\"inputE\" placeholder=\"头像url\">\r\n                    <i class=\"fa fa-user\"></i>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                   <button (click)=\"signup()\" class=\"btn btn-default\">注册</button>  \r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(login, router) {
        this.login = login;
        this.router = router;
        this.name = '';
        this.password = '';
        this.head_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPDSqHLwSCvXoVaKQSai926DXs5MufxblRa_yZf0tFYN6ks-_';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var body = { name: this.name, password: this.password, head_img: this.head_img };
        this.login.postSignupData(body).subscribe(function (data) {
            // console.log(data);
            if (data.status == 200)
                alert("注册成功");
            _this.router.navigate(['login']);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
        this.signupUrl = this.configUrl + '/register';
        this.quitUrl = this.configUrl + '/quit';
    }
    UserService.prototype.postLoginData = function (data) {
        return this.http.post(this.loginUrl, data, { observe: 'response' });
    };
    UserService.prototype.postSignupData = function (data) {
        return this.http.post(this.signupUrl, data, { observe: 'response' });
    };
    UserService.prototype.quit = function () {
        return this.http.post(this.quitUrl, "", { headers: this.createSessionHeader() });
    };
    UserService.prototype.getUserbyId = function (id) {
        var url = this.configUrl + '/user-info/' + id;
        return this.http.get(url);
    };
    UserService.prototype.getGroupById = function (id) {
        var url = this.configUrl + '/group-info/' + id;
        return this.http.get(url);
    };
    UserService.prototype.getuserlist = function (name) {
        var url = this.configUrl + '/users/' + name;
        return this.http.get(url);
    };
    UserService.prototype.getGroupMember = function (id) {
        var url = this.configUrl + '/group-members/' + id;
        return this.http.get(url);
    };
    UserService.prototype.createSessionHeader = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('X-Session-Id', this.session_id);
        console.log("header session=", this.session_id);
        return headers;
    };
    UserService.prototype.userList = function (name) {
        this.getuserlist(name).subscribe(function (data) {
            console.log("getuserlist=", data);
        });
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
        this.global_message = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["GlobalMessage"]);
        this.global_message.chat_room_list = new Map();
        this.nearest_contact = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["NearestContact"]);
        this.nearest_contact.contact_list = [];
        this.address_book = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["AddressBook"]);
        this.address_book.contact_list = [];
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
                that.parseNotification(conn); //收到消息解析后分析消息
            };
        };
        this.ws.onclose = function () { console.log("WebSocket关闭"); };
    };
    // 断开websocket连接
    WebsocketService.prototype.closeSocket = function () {
        if (!(this.ws.CLOSED && this.ws.CLOSING)) {
            this.ws.close();
        }
    };
    // 请求头部设置x-session-id
    WebsocketService.prototype.createSessionHeader = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('X-Session-Id', this.us.session_id);
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
    WebsocketService.prototype.getNearestContactAndMessage = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/recent-contact-message";
        return this.http.get(url, { headers: this.createSessionHeader(), observe: 'response' });
    };
    // 发送信息，不在这里构造消息体
    WebsocketService.prototype.sendMessage = function (m) {
        //先发送出数据
        console.log("websocket发送前的数据:", m);
        this.ws.send(_protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.encode(m).finish());
        if (m.type == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.REQUEST) {
            if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.NONE) {
                this.DisplayMessagesLocally(m, m.to); // 说明是一条 单发或群发消息，在本地显示
            }
            else if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.MSG_BACK) {
                if (m.msgid == 0) {
                    alert("消息ＩＤ不存在，无法撤回");
                }
            }
        }
    };
    //分析消息
    WebsocketService.prototype.parseNotification = function (m) {
        console.log("收到一条消息", m);
        if (m.type == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.NOTIFICATION) {
            console.log("NOTIFICATION");
            if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.NONE) {
                if (m.isgroup) {
                    this.DisplayMessagesLocally(m, m.to);
                    this.countInc(m.to);
                }
                else {
                    this.DisplayMessagesLocally(m, m.from); // 说明是一条 单发或群发消息，在本地显示
                    this.countInc(m.from);
                }
            }
            else if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_SESSION) {
                // 说明是陌生人主动找你聊天,需要在本地创建和他聊天的chatroom
                if (m.isgroup) {
                    alert("出现错误：创建会话（添加好友）时，isgroup应为false");
                    return;
                }
                this.newC2cChatRoom(m.from);
            }
            else if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_GROUP || m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.GROUP_ADDMEMBERS) {
                // 需要在本地创建和群聊天的chatroom
                if (!m.isgroup) {
                    alert("出现错误：创建会话（创建群组）时，isgroup应为true");
                    return;
                }
                this.newGroupChatRoom(m.to);
            }
            else if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.MSG_BACK) { // 消息撤回 需要删除本地消息,以示撤回
                if (m.isgroup) {
                    this.callBackMessage(m.to, m.msgid);
                }
                else {
                    this.callBackMessage(m.from, m.msgid);
                }
            }
        }
        else if (m.type == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.Type.ACK) {
            if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.NONE) {
                // 发送的消息已经确认，把回送的 message id加入到那条信息 
                if (this.global_message.chat_room_list.has(m.to)) {
                    var index = this.global_message.chat_room_list.get(m.to).message_list.findIndex(function (e) { return e.send_time == m.sendTime; });
                    if (index < 0) {
                        console.log("找不到那条消息记录", this.global_message.chat_room_list.get(m.to).message_list);
                        return;
                    }
                    this.global_message.chat_room_list.get(m.to).message_list[index].id = m.msgid;
                    this.global_message.chat_room_list.get(m.to).message_list[index].arrive_time = m.arriveTime;
                    console.log("收到自己发消息的确认", this.global_message.chat_room_list.get(m.to).message_list);
                }
            }
            else if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_SESSION) {
                if (m.isgroup) {
                    alert("出现错误：创建会话（添加好友）时，isgroup应为false");
                    return;
                }
                this.newC2cChatRoom(m.to);
            }
            else if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.CREATE_GROUP) {
                if (!m.isgroup) {
                    alert("出现错误：创建会话（创建群组）时，isgroup应为true");
                    return;
                }
                this.newGroupChatRoom(m.to);
            }
            else if (m.cmd == _protocol_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Message.CtrlType.MSG_BACK) { // 消息撤回 需要删除本地消息,以示撤回
                this.callBackMessage(m.to, m.msgid);
            }
        }
    };
    //下面是处理消息的
    WebsocketService.prototype.DisplayMessagesLocally = function (m, room_id) {
        if (!this.global_message.chat_room_list.has(room_id)) {
            console.log("没有这个会话，本地创建会话");
            var chat = new _common_im__WEBPACK_IMPORTED_MODULE_6__["ChatRoom"];
            chat.id = room_id;
            chat.is_group = m.isgroup;
            chat.message_list = [];
            var index = this.address_book.contact_list.findIndex(function (e) { return e.id == room_id; });
            chat.name = this.address_book.contact_list[index].name;
            //加入全局消息
            this.global_message.chat_room_list.set(m.from, chat);
            //加入最近联系人
            this.nearest_contact.contact_list.unshift(this.address_book.contact_list[index]);
        }
        var chat_room = this.global_message.chat_room_list.get(room_id);
        if (!(chat_room.id == room_id && chat_room.is_group == m.isgroup)) {
            console.log("消息与会话的信息不符合");
            return;
        }
        if (chat_room.message_list == null) {
            chat_room.message_list = [];
        }
        var newMsg = new (_common_im__WEBPACK_IMPORTED_MODULE_6__["MessageItem"]);
        newMsg.id = m.msgid;
        newMsg.from = m.from;
        newMsg.to = m.to;
        newMsg.content = m.content;
        newMsg.content_type = m.contentType;
        newMsg.is_group = m.isgroup;
        newMsg.send_time = m.sendTime;
        newMsg.arrive_time = m.arriveTime;
        chat_room.message_list.push(newMsg);
    };
    WebsocketService.prototype.callBackMessage = function (who, mid) {
        if (this.global_message.chat_room_list.has(who)) {
            var list = this.global_message.chat_room_list.get(who).message_list;
            var index = list.findIndex(function (e) { return e.id == mid; });
            if (index < 0) {
                console.log("撤回失败");
                return;
            }
            ;
            list.splice(index, 1);
            this.global_message.chat_room_list.get(who).message_list = list;
        }
    };
    WebsocketService.prototype.countInc = function (id) {
        var i = this.nearest_contact.contact_list.findIndex(function (e) { return e.id == id; });
        var newCount = Number(this.nearest_contact.contact_list[i].count);
        newCount += 1;
        this.nearest_contact.contact_list[i].count = newCount;
        console.log("一次上移");
        var top = this.nearest_contact.contact_list.splice(i, 1);
        this.nearest_contact.contact_list.unshift(top[0]);
    };
    WebsocketService.prototype.newC2cChatRoom = function (room_id) {
        var _this = this;
        var i = this.nearest_contact.contact_list.findIndex(function (e) { return e.id == room_id; });
        if (i >= 0 || this.global_message.chat_room_list.has(room_id)) {
            console.log("会话已存在，不创建会话");
            return;
        }
        var item = new _common_im__WEBPACK_IMPORTED_MODULE_6__["ContactListItem"];
        this.us.getUserbyId(room_id).subscribe(function (data) {
            console.log("创建会话时", data);
            item.id = room_id;
            item.name = data['name'];
            item.head_img = data['head_img'];
            item.count = 1;
            item.is_group = false;
            _this.address_book.contact_list.unshift(item);
            _this.nearest_contact.contact_list.unshift(item);
            var chat_room = new _common_im__WEBPACK_IMPORTED_MODULE_6__["ChatRoom"];
            chat_room.id = room_id;
            chat_room.name = item.name;
            chat_room.is_group = false;
            chat_room.message_list = [];
            _this.global_message.chat_room_list.set(room_id, chat_room);
            console.log("会话（添加好友）完成");
        });
    };
    WebsocketService.prototype.newGroupChatRoom = function (room_id) {
        var _this = this;
        var i = this.nearest_contact.contact_list.findIndex(function (e) { return e.id == room_id; });
        if (i >= 0 || this.global_message.chat_room_list.has(room_id)) {
            console.log("会话已存在，不创建会话");
            return;
        }
        var item = new _common_im__WEBPACK_IMPORTED_MODULE_6__["ContactListItem"];
        this.us.getGroupById(room_id).subscribe(function (data) {
            console.log("创建群会话时", data);
            item.id = room_id;
            item.name = data['name'];
            item.head_img = data['head_img'];
            item.count = 1;
            item.is_group = true;
            _this.address_book.contact_list.unshift(item);
            _this.nearest_contact.contact_list.unshift(item);
            var chat_room = new _common_im__WEBPACK_IMPORTED_MODULE_6__["ChatRoom"];
            chat_room.id = room_id;
            chat_room.name = item.name;
            chat_room.is_group = true;
            chat_room.message_list = [];
            _this.global_message.chat_room_list.set(room_id, chat_room);
            console.log("会话（创建群）完成");
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

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\GoProject\src\MessageSystem\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map