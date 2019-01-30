import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../login.service';
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
    SignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map