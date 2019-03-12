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

module.exports = "<nz-layout class=\"layout\">\n  <nz-content style=\"padding:0 50px;\">\n    <div style=\" padding: 24px; min-height: 1000px;\">\n      <router-outlet></router-outlet>\n    </div>\n  </nz-content>\n</nz-layout>"

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

module.exports = ".container{\n  background-color: #DDDDDD;\n  width: 1024px;\n  height: 675px;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.avatar{\n  /* 1 */\n  background-color: rgb(198, 228, 98);\n  height: 40px;\n  width: 240px;\n  height: 30px;\n}\n.him{\n  /* 2 */\n  background-color: rgb(101, 216, 206);\n  width: 790px;\n  height: 60px;\n  color: #444444;\n  padding-left: 20px;\n}\n.avatar2{\n  /* 3 */\n  background-color: rgb(121, 202, 128);\n  height: 35px;\n  width: 790px;\n}\n.inputmes{\n  /* 5 */\n  background-color: rgb(240, 244, 255);\n  vertical-align: top;\n  width: 790px;\n  height: 190px;\n  /* background-color: white; */\n}\n.tool{\n  /* 6 */\n  width: 790px;\n  height: 35px;\n  background-color: rgb(233, 173, 168);\n\n}\n.list{\n  /* 4 */\n  background-color: rgb(229, 155, 226);\n\n  width: 240px;\n  height: 550px;\n  overflow-x: none;\n  overflow-y: auto;\n  vertical-align: top;\n\n}\n.list li{\n    height: 65px;\n    list-style-type: none;\n    vertical-align: middle;\n    padding: 15px;\n}\n.item{\n    color: white;\n    border-bottom:1px solid #EEE;\n    height: 65px;\n    font-size: 12px;\n    /* font-display: center; */\n    vertical-align: middle;\n    /* text-align: center; */\n    position: relative;\n    cursor: pointer;\n}\n.list li:hover{\n  background-color: bisque;\n}\n.list li.selected:hover{\n  background-color: aquamarine !important\n}\n.selected{\n  background-color: aqua !important\n}\n.search{\n  background-color: rgb(46, 64, 230);\n  height: 35px;\n  width: 240px;\n}\n.bar{\n  background-color: rgb(133, 91, 78);\n  height: 35px;\n  width: 240px;\n}\n.bartool{\n  width: 70px;\n}\n.dropdown{\n  z-index: 100;\n}\n.grad{\n  width: 70px;\n  background-color:transparent;\n  border: 0px;\n  outline: none;\n  cursor: pointer;\n  height: 25px;\n}\n.img{\n  /* margin: 5px; */\n  /* margin-top: 10px; */\n  height:40px; \n  width:40px; \n  position: relative;\n  /* border-radius:50%;  */\n  overflow:hidden;\n}\n.send{\n  position: absolute;\n  margin-left: 720px;\n  margin-top: 155px;\n  z-index: 100;\n}\n.textarea{\n  background-color: white;\n  resize: none;\n  width: 790px;\n  height: 150px;\n  position: absolute;\n  padding: 15px;\n  border: none;\n  outline: none;\n  /* margin-top: 30px; */\n}\n#box{          \n  /* line-height: 50px;         */     \n  word-break: break-word;        \n  color: white;        \n\n\n    position: relative;\n    left:30px; \n    /* width: 140px; */\n    min-height: 30px;\n    max-width: 300px;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    min-width: 30px;\n    line-height: 20px;\n    margin-left: 10px;\n    word-wrap: 5px;\n    background: #088cb7;\n    border-radius: 4px;\n    padding: 10px;\n    margin-top:15px;\n    vertical-align: middle;\n    text-align: left;\n}\n/*左方说话*/\n#box:before{\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    right: 100%;\n    top: 9px;\n    border-top: 5px solid transparent;\n    border-right: 13px solid #088cb7;\n    border-bottom: 6px solid transparent;\n}\n/*右方说话*/\n#box1{          \n  min-height: 30px;           \n  /* line-height: 50px;         */\n  /* margin-right: 10px;         */\n  /* right: 10px; */\n  /* float: right; */\n  right: 30px;\n  margin: 0 0 0 auto;\n  word-break: break-word;        \n  color: white;        \n  padding: 10px;        \n  line-height: 18px;\n\n  position: relative;\n  /* left:780px;  */\n  /* width: 140px; */\n  max-width: 300px;\n  min-width: 30px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n\n  /* height: 30px; */\n  background: #088cb7;\n  border-radius: 4px;\n  /* padding: 10px; */\n  margin-top:15px;\n  vertical-align: middle;\n  text-align: left;\n}\n#box1:before{\n  position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    left: 100%;\n    top: 9px;\n    border-top: 5px solid transparent;\n    border-left: 13px solid #088cb7;\n    border-bottom: 6px solid transparent;\n}\n.message1{\n  width: 790px;\n  height: 430px;\n  background-color: #F9F9F9;\n  padding: 10px;\n  overflow-y: auto;\n  overflow-x: none;\n  vertical-align: top;\n}\n.mesback{\n  cursor: pointer;\n}\n.upload-btn {\n  background-color: #337ab7;\n  color: #fff;\n  border-radius: 2px;\n  border: none;\n  /* padding: .5rem 1.3rem; */\n  cursor: pointer;\n  height: 30px;\n  }\n.picture {\n  width: 7rem;\n  height: 7rem;\n  margin-right: 1rem;\n  background-size: cover;\n  }\n.picture2 {\n     max-width: 100%; \n     max-height: 100%;\n    background-attachment: fixed;\n    background-size: cover;\n    }\n.action-box {\n  margin-left: 1rem;\n  }\n.hint {\n  color: #909090;\n  font-size: 1.7rem;\n  margin-bottom: 1.5rem;\n  }\n.dropdown{\n    z-index: 2;\n    position:absolute;\n    margin-left: 16px;\n    /* background-position-y: 7rem;   */\n    width: 80px;\n    height: 25px;\n  }\n.headportrait{\n    position: relative;\n    width:7rem;\n    height:7rem;\n    cursor:pointer;\n}\n:host ::ng-deep .headportrait img{\n    width:100%;height:100%;\n\n}\n.mask  {    \n    position: absolute;    \n    width: 100%;    \n    height: 100%;      \n    background: #868c89;    \n    opacity: 0;\t\n    color: black;\n    text-align: center;\n    line-height:7rem;\n    margin-top: -7rem;\n}\n/*hover状态（按你的需求）控制显示。opacity/display/z-index都可以*/\n.headportrait:hover .mask {    opacity: .5;\t}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLE1BQU07RUFDTixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLE1BQU07RUFDTixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxNQUFNO0VBQ04sb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLE1BQU07RUFDTixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxNQUFNO0VBQ04sWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7O0FBRXRDO0FBQ0E7RUFDRSxNQUFNO0VBQ04sb0NBQW9DOztFQUVwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1COztBQUVyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLFlBQVk7OztJQUdWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUduQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0EsT0FBTztBQUNQO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxvQ0FBb0M7QUFDeEM7QUFDQSxPQUFPO0FBQ1A7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCOztFQUVqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBR25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0Isb0NBQW9DO0FBQ3hDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFlBQVk7RUFDWjtBQUVBO0VBQ0EsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCO0FBQ0E7S0FDRyxlQUFlO0tBQ2YsZ0JBQWdCO0lBQ2pCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEI7QUFDRjtFQUNBLGlCQUFpQjtFQUNqQjtBQUNBO0VBQ0EsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckI7QUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVLENBQUMsV0FBVzs7QUFFMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQUMsZ0RBQWdEO0FBQ2pELCtCQUErQixXQUFXLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG4gIHdpZHRoOiAxMDI0cHg7XG4gIGhlaWdodDogNjc1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uYXZhdGFye1xuICAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIyOCwgOTgpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmhpbXtcbiAgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAyMTYsIDIwNik7XG4gIHdpZHRoOiA3OTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmF2YXRhcjJ7XG4gIC8qIDMgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMjAyLCAxMjgpO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA3OTBweDtcbn1cblxuLmlucHV0bWVze1xuICAvKiA1ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0NCwgMjU1KTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDc5MHB4O1xuICBoZWlnaHQ6IDE5MHB4O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbn1cbi50b29se1xuICAvKiA2ICovXG4gIHdpZHRoOiA3OTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAxNzMsIDE2OCk7XG5cbn1cbi5saXN0e1xuICAvKiA0ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDE1NSwgMjI2KTtcblxuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogNTUwcHg7XG4gIG92ZXJmbG93LXg6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cbn1cbi5saXN0IGxpe1xuICAgIGhlaWdodDogNjVweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLml0ZW17XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNFRUU7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvKiBmb250LWRpc3BsYXk6IGNlbnRlcjsgKi9cbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpc3QgbGk6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbn1cbi5saXN0IGxpLnNlbGVjdGVkOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lICFpbXBvcnRhbnRcbn1cbi5zZWxlY3RlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YSAhaW1wb3J0YW50XG59XG4uc2VhcmNoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDY0LCAyMzApO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAyNDBweDtcbn1cbi5iYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDkxLCA3OCk7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDI0MHB4O1xufVxuLmJhcnRvb2x7XG4gIHdpZHRoOiA3MHB4O1xufVxuLmRyb3Bkb3due1xuICB6LWluZGV4OiAxMDA7XG59XG4uZ3JhZHtcbiAgd2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMjVweDtcbn1cbi5pbWd7XG4gIC8qIG1hcmdpbjogNXB4OyAqL1xuICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xuICBoZWlnaHQ6NDBweDsgXG4gIHdpZHRoOjQwcHg7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGJvcmRlci1yYWRpdXM6NTAlOyAgKi9cbiAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuLnNlbmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDcyMHB4O1xuICBtYXJnaW4tdG9wOiAxNTVweDtcbiAgei1pbmRleDogMTAwO1xufVxuLnRleHRhcmVhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcmVzaXplOiBub25lO1xuICB3aWR0aDogNzkwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBtYXJnaW4tdG9wOiAzMHB4OyAqL1xufVxuI2JveHsgICAgICAgICAgXG4gIC8qIGxpbmUtaGVpZ2h0OiA1MHB4OyAgICAgICAgICovICAgICBcbiAgd29yZC1icmVhazogYnJlYWstd29yZDsgICAgICAgIFxuICBjb2xvcjogd2hpdGU7ICAgICAgICBcblxuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6MzBweDsgXG4gICAgLyogd2lkdGg6IDE0MHB4OyAqL1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdvcmQtd3JhcDogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwODhjYjc7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi8q5bem5pa56K+06K+dKi9cbiNib3g6YmVmb3Jle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICByaWdodDogMTAwJTtcbiAgICB0b3A6IDlweDtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkICMwODhjYjc7XG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLyrlj7Pmlrnor7Tor50qL1xuI2JveDF7ICAgICAgICAgIFxuICBtaW4taGVpZ2h0OiAzMHB4OyAgICAgICAgICAgXG4gIC8qIGxpbmUtaGVpZ2h0OiA1MHB4OyAgICAgICAgICovXG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgICAgICAgICAqL1xuICAvKiByaWdodDogMTBweDsgKi9cbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICByaWdodDogMzBweDtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyAgICAgICAgXG4gIGNvbG9yOiB3aGl0ZTsgICAgICAgIFxuICBwYWRkaW5nOiAxMHB4OyAgICAgICAgXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogbGVmdDo3ODBweDsgICovXG4gIC8qIHdpZHRoOiAxNDBweDsgKi9cbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xuICBiYWNrZ3JvdW5kOiAjMDg4Y2I3O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLyogcGFkZGluZzogMTBweDsgKi9cbiAgbWFyZ2luLXRvcDoxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2JveDE6YmVmb3Jle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbGVmdDogMTAwJTtcbiAgICB0b3A6IDlweDtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDEzcHggc29saWQgIzA4OGNiNztcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubWVzc2FnZTF7XG4gIHdpZHRoOiA3OTBweDtcbiAgaGVpZ2h0OiA0MzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5tZXNiYWNre1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLnVwbG9hZC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC8qIHBhZGRpbmc6IC41cmVtIDEuM3JlbTsgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5waWN0dXJlIHtcbiAgd2lkdGg6IDdyZW07XG4gIGhlaWdodDogN3JlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5waWN0dXJlMiB7XG4gICAgIG1heC13aWR0aDogMTAwJTsgXG4gICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgLmFjdGlvbi1ib3gge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxuICAuaGludCB7XG4gIGNvbG9yOiAjOTA5MDkwO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG4gIFxuICAuZHJvcGRvd257XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDdyZW07ICAgKi9cbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cblxuICAuaGVhZHBvcnRyYWl0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDo3cmVtO1xuICAgIGhlaWdodDo3cmVtO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhlYWRwb3J0cmFpdCBpbWd7XG4gICAgd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcblxufVxuXG4ubWFzayAgeyAgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgIHdpZHRoOiAxMDAlOyAgICBcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICAgXG4gICAgYmFja2dyb3VuZDogIzg2OGM4OTsgICAgXG4gICAgb3BhY2l0eTogMDtcdFxuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6N3JlbTtcbiAgICBtYXJnaW4tdG9wOiAtN3JlbTtcbn0vKmhvdmVy54q25oCB77yI5oyJ5L2g55qE6ZyA5rGC77yJ5o6n5Yi25pi+56S644CCb3BhY2l0eS9kaXNwbGF5L3otaW5kZXjpg73lj6/ku6UqL1x0XG4uaGVhZHBvcnRyYWl0OmhvdmVyIC5tYXNrIHsgICAgb3BhY2l0eTogLjU7XHR9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" >\n    <!--聊天窗口-->\n    <table class = \"table\">\n      <tr>\n        <th class = \"avatar\" rowspan=\"2\" colspan=\"3\">\n          <!-- 1 -->\n          <div>\n              <!--个人信息-->\n                <img src = {{my_img_url}} style = \"height:60px; width:60px; border-radius:50%; overflow:hidden; position:absolute;left:15px; top:20px;\">\n                <div>\n                    <div style = \"left: 90px; top:30px; position: absolute\">{{my_name}}</div>\n                    <div style = \"left:90px; top:55px; position: absolute; color:#999999\">个性签名</div>\n                </div>\n            </div>\n        </th>\n        <th class = \"him\"  >\n          <!-- 2 -->\n          {{to_name}}\n          <nz-dropdown class = \"dropdown\" *ngIf=\"isgroup\" [nzTrigger]=\"'click'\">\n              <button nz-button nz-dropdown nzType=\"primary\"  (click)=\"showGroupMember()\">成员</button>\n            <ul nz-menu nzSelectable>\n              <li nz-menu-item *ngFor=\"let item of groupMemberList\">\n                <img src = \"{{item.head_img}}\" class = \"img\">\n                <a>{{item.name}}</a>\n              </li>\n            </ul>\n          </nz-dropdown>\n          <div>\n          <button nz-button nzType=\"primary\" *ngIf=\"isgroup\" nzShape=\"circle\" (click)=\"showAddMemberModal()\">加</button>\n        </div>\n        </th>\n      </tr>\n      <tr class = \"avatar2\" >\n          <td rowspan=\"4\"  >\n            <!-- 3 -->\n            <div class = \"message1\" id=\"scrolldIV\" >\n                <div *ngFor=\"let item of showmsg; let i = index; let last = last\" >\n                    <div *ngIf=\"item.from != my_id\" id = \"box\"><!--接受的消息-->\n                        <div *ngIf=\"item.content_type == 0\">{{item.content}}</div>\n                        <div *ngIf=\"item.content_type == 1\">     \n                          <div class=\"headportrait\">\n                            <div class=\"picture\" [ngStyle]=\"{ 'background-image': 'url('+item.content+')'}\"></div>\n                            <div class=\"mask\">\n                                <p (click)=\"showpicModal(item.content)\">查看原图</p>\n                            </div>\n                          </div>                          \n                        </div>\n                        <div *ngIf=\"item.content_type == 2\"  (mouseup)=\"he($event, item, i, item.msgid)\" (contextmenu)=\"his($event)\">\n                            <img [src]=\"switchpng(item.content)\" class=\"picture\" >\n                            <button class=\"upload-btn\" (click)=\" downloadFile(item.content)\"> 下载\n                            </button>\n                        </div>\n                        <div *ngIf=\"item.content_type == 3\"  (mouseup)=\"he($event, item, i, item.msgid)\" (contextmenu)=\"his($event)\">\n                                <i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n                                <button class=\"upload-btn\" (click)=\"showvideoModal(item.content)\"> 播放\n                                </button>\n                            </div>\n                    </div>\n                    <div *ngIf=\"item.from == my_id && item.content != ''\" id=\"box1\"><!--发送的消息-->\n                        <div *ngIf=\"item.content_type != 1 && item.content_type != 2 && item.content_type != 3\"  >\n                          <div (contextmenu)=\"contextMenu($event,template)\">\n                            <ng-template #template>\n                              <ul nz-menu nzInDropDown (nzClick)=\"close($event)\">\n                                <li nz-menu-item (click)=\"backdata(item)\">撤回</li>\n                              </ul>\n                            </ng-template>\n                            <span >{{item.content}}</span>\n                          </div>\n                        </div>\n                        <div *ngIf=\"item.content_type == 1\"  (mouseup)=\"he($event, item)\" (contextmenu)=\"his($event)\">     \n                          <div class=\"headportrait\">\n                            <div class=\"picture\" [ngStyle]=\"{ 'background-image': 'url('+item.content+')'}\"></div>\n                            <div class=\"mask\">\n                                <p (click)=\"showpicModal(item.content)\">查看原图</p>\n                            </div>\n                          </div>\n                        </div>\n                        <div *ngIf=\"item.content_type == 2\"  (mouseup)=\"he($event, item)\" (contextmenu)=\"his($event)\">\n                          <img [src]=\"switchpng(item.content)\" class=\"picture\" >\n                            <button class=\"upload-btn\" (click)=\" downloadFile(item.content)\"> 下载\n                            </button>\n                        </div>\n                        <div *ngIf=\"item.content_type == 3\"  (mouseup)=\"he($event, item)\" (contextmenu)=\"his($event)\">\n                                 <i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n                                <button class=\"upload-btn\" (click)=\"showvideoModal(item.content)\"> 播放\n                                </button>\n                            </div>\n                    </div>\n                    <span *ngIf=\"last\">{{scollbuttom()}}</span>\n                  </div>\n              </div>\n          </td>\n      </tr>\n      <tr >\n          <td colspan=\"3\" class = \"search\" colspan=\"3\">\n            <!-- 7 -->\n              <div>\n                  <nz-input-group [nzSuffix]=\"suffixIconSearch1\"> \n                      <input type=\"text\" [(ngModel)]=\"searchFriend\" nz-input placeholder=\"输入搜索内容\" id = \"search\">\n                  </nz-input-group> \n        \n                  <ng-template #suffixIconSearch1>\n                      <i nz-icon type=\"search\" class = \"icon\"></i>\n                  </ng-template>\n        \n                  <div>\n                      <div *ngIf=\"isVisible\">\n                          <div *ngIf=\"!searchFriend\">\n                            正在搜索内容\n                          </div>\n                          <div *ngIf=\"searchFriend\">\n                              <div *ngIf=\"flag;else Show\">查无此人</div>\n                              <ng-template #Show>\n                                  <!-- <div *ngFor=\"let item of userlist\">\n                                      <img src = \"{{item.Img_url}}\" class = \"img\">\n                                      {{item.Name}}\n                                  </div> -->\n                              </ng-template>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </td>\n      </tr>\n      <tr class = \"bar\">\n        <td class = \"bartool\">\n            <button class = \"grad\" (click) = \"showNearestContactList()\">聊天</button>|\n        </td>\n        <td class = \"bartool\">\n            <button class = \"grad\" (click) = \"showAddressBook()\">通讯录</button>|\n        </td>\n        <td class = \"bartool\">\n            <nz-dropdown class = \"dropdown\">\n                <a nz-dropdown>\n                    &nbsp; &nbsp;添加 <i nz-icon type=\"down\"></i>\n                </a>\n                <ul nz-menu nzSelectable>\n                    <li nz-menu-item (click)=\"showAddFriendModal()\">\n                        <a>添加好友</a>\n                    </li>\n                    <li nz-menu-item (click) = \"showAddGroupModal()\">\n                        <a>创建群聊</a>\n                    </li>\n                </ul>\n            </nz-dropdown>\n        </td>\n      </tr>\n      <tr>\n        <td rowspan=\"3\" colspan=\"3\">\n            <!-- 4 -->\n            <div class = \"list\" >\n                <li  class = \"item\" [class.selected]=\"item == friend\" *ngFor=\"let item of  userListDisplay; let i = index\" (click) = \"selectOneUser(i, item.id,item.name, item.head_img, item.is_group)\">\n                    <nz-badge [nzCount]=\"item.count\" *ngIf=\"list!=NULL\">\n                        <img src = \"{{item.head_img}}\" class = \"img\">\n                    </nz-badge>\n                    <i style=\"color:tomato\" *ngIf=\"item.is_group\">群 </i>\n                 {{item.name}}\n                </li>\n            </div>\n        </td>\n      </tr>\n      <tr>\n        <td class = \"tool\">\n          <!-- 6 -->\n          <div  *ngIf=\"isselect\">\n              <div >\n                <!-- <i nz-icon type=\"folder\" theme=\"outline\" style=\"font-size: 25px\" class = \"icon\"></i>            \n                <i nz-icon type=\"picture\" theme=\"outline\" style=\"font-size: 25px\" class = \"icon\"></i>        -->\n                <input id=\"upfile\" type=\"file\" style=\"display: none;\" (change)=\"selectFile($event)\" accept=\".pdf,.doc,.txt,.jpg,.zip,.jpeg,.ppt,.mp4,.mp3\">\n                <div class=\"action-box\">\n                    \n                  <button  nz-button nzType=\"primary\" onclick = \"upfile.click()\" ><i nz-icon type=\"upload\"></i>点击上传</button>\n                </div>\n              </div>\n            </div>\n        </td>\n      </tr>\n      <tr class = \"inputmes\">\n    <!-- 输入框 -->\n        <td>\n        <!-- 5 -->\n          <div  *ngIf=\"isselect\">\n            <textarea class = \"textarea\" [(ngModel)] = \"content\" (keyup) = \"enterToSendMsg($event)\"></textarea>\n            <button class = \"send\" nz-button nzType=\"primary\" (click) = \"clickToSendMsg()\"  >发送</button>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </div>\n    \n  \n  <!-- 创建群聊 -->\n  <nz-modal [(nzVisible)]=\"isAddGroupVisible\" [nzTitle]=\"modalTitle1\" [nzContent]=\"modalContent1\" [nzFooter]=\"modalFooter1\" (nzOnCancel)=\"handleAddGroupCancel()\">\n      <ng-template #modalTitle1>\n        创建群\n      </ng-template>\n      <ng-template #modalContent1>\n        <!-- <div class = \"list\" > -->\n          <div class = \"item\" *ngFor=\"let item of createGroupList.contact_list\" >\n              <label nz-checkbox [(ngModel)]=\"item.selected\">\n                  <img src = \"{{item.head_img}}\" class = \"img\">\n                  {{item.name}}\n              </label>\n          </div>\n        <!-- </div> -->\n      </ng-template>\n      <ng-template #modalFooter1>\n          <input nz-input placeholder=\"群名字\"[(ngModel)]=\"GroupName\">\n          <button nz-button nzType=\"default\" (click)=\"handleAddGroupCancel()\">取消</button>\n          <button nz-button nzType=\"primary\" (click)=\"handleAddGroupOk()\" >创建</button>\n      </ng-template>\n  </nz-modal>\n    \n    \n    <!-- 添加好友 -->\n  <nz-modal [(nzVisible)]=\"isAddFriendVisible\" [nzTitle]=\"modalTitle2\" [nzContent]=\"modalContent2\"   [nzFooter]=\"modalFooter2\" (nzOnCancel)=\"handleAddFriendCancel()\">\n      <ng-template #modalTitle2>\n          添加好友\n          <nz-input-group [nzSuffix]=\"suffixIconSearch\"> \n              <input type=\"text\" [(ngModel)]=\"searchContent\" nz-input placeholder=\"输入搜索的用户名\" \n              id = \"search\" (keyup) = \"keyUpSearch(searchContent)\">\n          </nz-input-group> \n  \n          <ng-template #suffixIconSearch>\n              <i nz-icon type=\"search\" class = \"icon\" (click) = \"search()\"></i>\n          </ng-template>\n      </ng-template>\n    \n      <ng-template #modalContent2>\n          <div *ngIf=\"!searchContent\">\n              请输入进行查找\n          </div>\n            <div *ngIf=\"searchContent\">\n                <div *ngIf=\"flag;else Show\">查无此人</div>\n                <ng-template #Show>\n                <div *ngFor=\"let item of userlist\">\n                    <img src = \"{{item.head_img}}\" class = \"img\">\n                      {{item.name}}\n                    <button (click) = \"addfriend(item.id)\">添加好友</button>\n                </div>\n              </ng-template>\n            </div>\n      </ng-template>\n      <ng-template #modalFooter2>\n          <button nz-button nzType=\"primary\" (click)=\"handleAddFriendCancel()\">完成</button>\n      </ng-template>\n  </nz-modal>\n  \n\n\n   <!-- 群添加成员 -->\n   <nz-modal [(nzVisible)]=\"isAddMemberVisible\" [nzTitle]=\"modalTitle3\" [nzContent]=\"modalContent3\" [nzFooter]=\"modalFooter3\" (nzOnCancel)=\"handleAddMemberCancel()\">\n      <ng-template #modalTitle3>\n        添加成员\n      </ng-template>\n      <ng-template #modalContent3>\n        <!-- <div class = \"list\" > -->\n          <div class = \"item\" *ngFor=\"let item of addMemberList\" >\n              <label nz-checkbox [(ngModel)]=\"item.selected\" [nzDisabled]=\"item.existed\">\n                  <img src = \"{{item.head_img}}\" class = \"img\">\n                  {{item.name}}\n              </label>\n          </div>\n      </ng-template>\n      <ng-template #modalFooter3>\n          <button nz-button nzType=\"default\" (click)=\"handleAddMemberCancel()\">取消</button>\n          <button nz-button nzType=\"primary\" (click)=\"handleAddMemberOK()\">添加</button>\n      </ng-template>\n  </nz-modal>\n\n\n  <div  id = \"mesback1\"  *ngIf=\"pressBoolean\">\n      <input type = button value=\"撤回\" class = \"mesback\" (click) = \"backdata(id)\" [ngStyle]=\"{'left': px, 'top':py, 'z-index':'400', 'background-color':'red'}\" >\n  </div>\n\n\n\n<!-- <button type=\"button\"  (click)=\"showvideoModal()\" >查看比赛视频</button> -->\n\n<nz-modal [(nzVisible)]=\"isshowpicVisible\"   (nzOnCancel)=\"handleshowpicCancel()\" (nzOnOk)=\"handleshowpicCancel()\">\n   <div  >\n     <img class=\"picture2\" src=\"{{a}}\">\n   </div>\n</nz-modal>\n\n\n<nz-modal [(nzVisible)]=\"isshowvideoVisible\"   (nzOnCancel)=\"handleshowvideoCancel()\" (nzOnOk)=\"handleshowvideoCancel()\">\n    <div >\n        <div >\n          <h5>sadasdasdassdas</h5>\n          <video [src]=\"videourl\" controls=\"controls\" #theVideo></video>\n        </div>\n    </div>\n  </nz-modal>\n\n\n\n<!-- <button type=\"button\"  data-toggle=\"modal\" data-target=\"#video\" >查看比赛视频</button>-->\n\n<!-- \n<i class=\"fa fa-file-video-o fa-6\" aria-hidden=\"true\"></i>\n\n<div class=\"modal fade\" id=\"video\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"video\" aria-hidden=\"true\" (blur)=\"theVideo.pause()\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\" >\n          <h5>sadasdasdassdas</h5>\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitleapplication/zip\">播放视频</h5>\n          </div>\n          <div class=\"modal-body\">\n            <div >\n              <h5>sadasdasdassdas</h5>\n              <video [src]=\"videourl\" controls=\"controls\" #theVideo></video>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div> -->"

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
        this.to_img = img; //对方头像
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

module.exports = ".form-bg{\n    background: #00b4ef;\n}\n.form-horizontal{\n    background: #fff;\n    padding-bottom: 40px;\n    border-radius: 15px;\n    text-align: center;\n}\n.form-horizontal .heading{\n    display: block;\n    font-size: 35px;\n    font-weight: 700;\n    padding: 35px 0;\n    border-bottom: 1px solid #f0f0f0;\n    margin-bottom: 30px;\n}\n.form-horizontal .form-group{\n    padding: 0 40px;\n    margin: 0 0 25px 0;\n    position: relative;\n}\n.form-horizontal .form-control{\n    background: #f0f0f0;\n    border: none;\n    border-radius: 20px;\n    box-shadow: none;\n    padding: 0 20px 0 45px;\n    height: 40px;\n    transition: all 0.3s ease 0s;\n}\n.form-horizontal .form-control:focus{\n    background: #e0e0e0;\n    box-shadow: none;\n    outline: 0 none;\n}\n.form-horizontal .form-group i{\n    position: absolute;\n    top: 12px;\n    left: 60px;\n    font-size: 17px;\n    color: #c8c8c8;\n    transition : all 0.5s ease 0s;\n}\n.form-horizontal .form-control:focus + i{\n    color: #00b4ef;\n}\n.form-horizontal .fa-question-circle{\n    display: inline-block;\n    position: absolute;\n    top: 12px;\n    right: 60px;\n    font-size: 20px;\n    color: #808080;\n    transition: all 0.5s ease 0s;\n}\n.form-horizontal .fa-question-circle:hover{\n    color: #000;\n}\n.form-horizontal .main-checkbox{\n    float: left;\n    width: 20px;\n    height: 20px;\n    background: #11a3fc;\n    border-radius: 50%;\n    position: relative;\n    margin: 5px 0 0 5px;\n    border: 1px solid #11a3fc;\n}\n.form-horizontal .main-checkbox label{\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n}\n.form-horizontal .main-checkbox label:after{\n    content: \"\";\n    width: 10px;\n    height: 5px;\n    position: absolute;\n    top: 5px;\n    left: 4px;\n    border: 3px solid #fff;\n    border-top: none;\n    border-right: none;\n    background: transparent;\n    opacity: 0;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n.form-horizontal .main-checkbox input[type=checkbox]{\n    visibility: hidden;\n}\n.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{\n    opacity: 1;\n}\n.form-horizontal .text{\n    float: left;\n    margin-left: 7px;\n    line-height: 20px;\n    padding-top: 5px;\n    text-transform: capitalize;\n}\n.form-horizontal .btn{\n    float: right;\n    font-size: 14px;\n    color: #fff;\n    background: #00b4ef;\n    border-radius: 30px;\n    padding: 10px 25px;\n    border: none;\n    text-transform: capitalize;\n    transition: all 0.5s ease 0s;\n}\n@media only screen and (max-width: 479px){\n    .form-horizontal .form-group{\n        padding: 0 25px;\n    }\n    .form-horizontal .form-group i{\n        left: 45px;\n    }\n    .form-horizontal .btn{\n        padding: 10px 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1iZ3tcbiAgICBiYWNrZ3JvdW5kOiAjMDBiNGVmO1xufVxuLmZvcm0taG9yaXpvbnRhbHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm0taG9yaXpvbnRhbCAuaGVhZGluZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAzNXB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWNvbnRyb2x7XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDAgMjBweCAwIDQ1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IDAgbm9uZTtcbn1cbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAgaXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMnB4O1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjYzhjOGM4O1xuICAgIHRyYW5zaXRpb24gOiBhbGwgMC41cyBlYXNlIDBzO1xufVxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1jb250cm9sOmZvY3VzICsgaXtcbiAgICBjb2xvcjogIzAwYjRlZjtcbn1cbi5mb3JtLWhvcml6b250YWwgLmZhLXF1ZXN0aW9uLWNpcmNsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICByaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbn1cbi5mb3JtLWhvcml6b250YWwgLmZhLXF1ZXN0aW9uLWNpcmNsZTpob3ZlcntcbiAgICBjb2xvcjogIzAwMDtcbn1cbi5mb3JtLWhvcml6b250YWwgLm1haW4tY2hlY2tib3h7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxMWEzZmM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweCAwIDAgNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMWEzZmM7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5tYWluLWNoZWNrYm94IGxhYmVse1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0taG9yaXpvbnRhbCAubWFpbi1jaGVja2JveCBsYWJlbDphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLmZvcm0taG9yaXpvbnRhbCAubWFpbi1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XXtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZm9ybS1ob3Jpem9udGFsIC5tYWluLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlcntcbiAgICBvcGFjaXR5OiAxO1xufVxuLmZvcm0taG9yaXpvbnRhbCAudGV4dHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5idG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMDBiNGVmO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCl7XG4gICAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cHtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgIH1cbiAgICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwIGl7XG4gICAgICAgIGxlZnQ6IDQ1cHg7XG4gICAgfVxuICAgIC5mb3JtLWhvcml6b250YWwgLmJ0bntcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n     <div class=\"row\">\n         <div class=\"col-md-offset-3 col-md-6\">\n             <form class=\"form-horizontal\">\n                 <span class=\"heading\">用户登录</span>\n                 <div class=\"form-group\">\n                     <input type=\"email\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"inputEmail3\" placeholder=\"用户名或电子邮件\">\n                     <i class=\"fa fa-user\"></i>\n                 </div>\n                 <div class=\"form-group help\">\n                     <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"inputPassword3\" placeholder=\"密　码\">\n                     <i class=\"fa fa-lock\"></i>\n                     <a href=\"#\" class=\"fa fa-question-circle\"></a>\n                 </div>\n                 <div class=\"form-group\">\n                    <button (click)=\"submit()\" class=\"btn btn-default\">登录</button>\n                    <button class=\"btn btn-default\" routerLink=\"/signup\" routerLinkActive=\"active\">注册</button>    \n                 </div>\n             </form>\n         </div>\n     </div>\n </div>"

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

module.exports = ".form-bg{\n    background: #00b4ef;\n}\n.form-horizontal{\n    background: #fff;\n    padding-bottom: 40px;\n    border-radius: 15px;\n    text-align: center;\n}\n.form-horizontal .heading{\n    display: block;\n    font-size: 35px;\n    font-weight: 700;\n    padding: 35px 0;\n    border-bottom: 1px solid #f0f0f0;\n    margin-bottom: 30px;\n}\n.form-horizontal .form-group{\n    padding: 0 40px;\n    margin: 0 0 25px 0;\n    position: relative;\n}\n.form-horizontal .form-control{\n    background: #f0f0f0;\n    border: none;\n    border-radius: 20px;\n    box-shadow: none;\n    padding: 0 20px 0 45px;\n    height: 40px;\n    transition: all 0.3s ease 0s;\n}\n.form-horizontal .form-control:focus{\n    background: #e0e0e0;\n    box-shadow: none;\n    outline: 0 none;\n}\n.form-horizontal .form-group i{\n    position: absolute;\n    top: 12px;\n    left: 60px;\n    font-size: 17px;\n    color: #c8c8c8;\n    transition : all 0.5s ease 0s;\n}\n.form-horizontal .form-control:focus + i{\n    color: #00b4ef;\n}\n.form-horizontal .fa-question-circle{\n    display: inline-block;\n    position: absolute;\n    top: 12px;\n    right: 60px;\n    font-size: 20px;\n    color: #808080;\n    transition: all 0.5s ease 0s;\n}\n.form-horizontal .fa-question-circle:hover{\n    color: #000;\n}\n.form-horizontal .main-checkbox{\n    float: left;\n    width: 20px;\n    height: 20px;\n    background: #11a3fc;\n    border-radius: 50%;\n    position: relative;\n    margin: 5px 0 0 5px;\n    border: 1px solid #11a3fc;\n}\n.form-horizontal .main-checkbox label{\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n}\n.form-horizontal .main-checkbox label:after{\n    content: \"\";\n    width: 10px;\n    height: 5px;\n    position: absolute;\n    top: 5px;\n    left: 4px;\n    border: 3px solid #fff;\n    border-top: none;\n    border-right: none;\n    background: transparent;\n    opacity: 0;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n.form-horizontal .main-checkbox input[type=checkbox]{\n    visibility: hidden;\n}\n.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{\n    opacity: 1;\n}\n.form-horizontal .text{\n    float: left;\n    margin-left: 7px;\n    line-height: 20px;\n    padding-top: 5px;\n    text-transform: capitalize;\n}\n.form-horizontal .btn{\n    float: right;\n    font-size: 14px;\n    color: #fff;\n    background: #00b4ef;\n    border-radius: 30px;\n    padding: 10px 25px;\n    border: none;\n    text-transform: capitalize;\n    transition: all 0.5s ease 0s;\n}\n@media only screen and (max-width: 479px){\n    .form-horizontal .form-group{\n        padding: 0 25px;\n    }\n    .form-horizontal .form-group i{\n        left: 45px;\n    }\n    .form-horizontal .btn{\n        padding: 10px 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYmd7XG4gICAgYmFja2dyb3VuZDogIzAwYjRlZjtcbn1cbi5mb3JtLWhvcml6b250YWx7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtLWhvcml6b250YWwgLmhlYWRpbmd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogMzVweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3Vwe1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBtYXJnaW46IDAgMCAyNXB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1jb250cm9se1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCA0NXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1jb250cm9sOmZvY3Vze1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiAwIG5vbmU7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwIGl7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogI2M4YzhjODtcbiAgICB0cmFuc2l0aW9uIDogYWxsIDAuNXMgZWFzZSAwcztcbn1cbi5mb3JtLWhvcml6b250YWwgLmZvcm0tY29udHJvbDpmb2N1cyArIGl7XG4gICAgY29sb3I6ICMwMGI0ZWY7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5mYS1xdWVzdGlvbi1jaXJjbGV7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgcmlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5mYS1xdWVzdGlvbi1jaXJjbGU6aG92ZXJ7XG4gICAgY29sb3I6ICMwMDA7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5tYWluLWNoZWNrYm94e1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTFhM2ZjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA1cHggMCAwIDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTFhM2ZjO1xufVxuLmZvcm0taG9yaXpvbnRhbCAubWFpbi1jaGVja2JveCBsYWJlbHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtLWhvcml6b250YWwgLm1haW4tY2hlY2tib3ggbGFiZWw6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5mb3JtLWhvcml6b250YWwgLm1haW4tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF17XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmZvcm0taG9yaXpvbnRhbCAubWFpbi1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXJ7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5mb3JtLWhvcml6b250YWwgLnRleHR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmZvcm0taG9yaXpvbnRhbCAuYnRue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzAwYjRlZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpe1xuICAgIC5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICB9XG4gICAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cCBpe1xuICAgICAgICBsZWZ0OiA0NXB4O1xuICAgIH1cbiAgICAuZm9ybS1ob3Jpem9udGFsIC5idG57XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-offset-3 col-md-6\">\n            <form class=\"form-horizontal\">\n                <span class=\"heading\">用户注册</span>\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"inputEmail3\" placeholder=\"用户名或电子邮件\">\n                    <i class=\"fa fa-user\"></i>\n                </div>\n                <div class=\"form-group help\">\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"inputPassword3\" placeholder=\"密　码\">\n                    <i class=\"fa fa-lock\"></i>\n                    <a href=\"#\" class=\"fa fa-question-circle\"></a>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"head_img\" name=\"head_img\" id=\"inputE\" placeholder=\"头像url\">\n                    <i class=\"fa fa-user\"></i>\n                </div>\n                <div class=\"form-group\">\n                   <button (click)=\"signup()\" class=\"btn btn-default\">注册</button>  \n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

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

module.exports = __webpack_require__(/*! /home/pjw/GoProject/src/MessageSystem/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map