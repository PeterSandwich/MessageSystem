import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";
var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        this.collection = new (Protocol.MessageRequest);
    }
    WebsocketService.prototype.createSocket = function (url) {
        this.ws = new WebSocket(url);
        this.ws.onopen = function () {
            console.log("流打开");
        };
        this.ws.onmessage = function (evt) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(evt.data);
            reader.onload = function (e) {
                var buf = new Uint8Array(reader.result);
                var conn = Protocol.MessageResponse.decode(buf);
                console.log(conn);
            };
        };
        this.ws.onclose = function () {
            console.log("流结束");
        };
    };
    WebsocketService.prototype.test = function () {
        var msg = new (Protocol.MessageResponse);
        msg.content = "testing websocket protocol buf";
        msg.msgid = 28;
        this.ws.send(Protocol.MessageRequest.encode(msg).finish());
    };
    WebsocketService.prototype.sendMessage = function (message) {
        this.ws.send(message);
    };
    WebsocketService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());
export { WebsocketService };
//# sourceMappingURL=websocket.service.js.map