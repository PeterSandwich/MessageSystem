import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from './login.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'WStest';
    }
    AppComponent.prototype.quit = function () {
        this.http.quit().subscribe(function (data) { console.log("退出"); });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map