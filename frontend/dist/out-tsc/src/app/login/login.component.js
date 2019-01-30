import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../login.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(login) {
        this.login = login;
        this.name = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        var body = { name: this.name, password: this.password };
        this.login.postLoginData(body).subscribe(function (data) {
            console.log(data);
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map