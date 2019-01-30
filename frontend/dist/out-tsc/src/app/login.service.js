import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.configUrl = 'http://localhost:9876/api';
        this.loginUrl = this.configUrl + "/login";
        this.signupUrl = this.configUrl + '/signup';
        this.quitUrl = this.configUrl + '/quit';
    }
    LoginService.prototype.postLoginData = function (data) {
        return this.http.post(this.loginUrl, data);
    };
    LoginService.prototype.postSignupData = function (data) {
        return this.http.post(this.signupUrl, data);
    };
    LoginService.prototype.quit = function () {
        return this.http.get(this.quitUrl);
    };
    LoginService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map