import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { Protocol } from '../protocol/Protocol';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(ws) {
        this.ws = ws;
        this.from_id = 0;
        this.to_id = 0;
        this.group = 0;
        this.addgtoup_id = 0;
        this.content = "";
        this.group_name = '';
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.ws.createSocket("ws://localhost:9876/ws");
    };
    ChatComponent.prototype.sendMsg = function () {
        console.log("had send message");
        var msg = new (Protocol.MessageRequest);
        msg.from = this.from_id;
        msg.to = this.to_id;
        msg.content = this.content;
        msg.TypeOfMsg = Protocol.MessageRequest.RequestType.C2CSEND_REQUEST;
        this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish());
    };
    ChatComponent.prototype.sendToGoup = function () {
        console.log("had send message");
        var msg = new (Protocol.MessageRequest);
        msg.from = this.from_id;
        msg.group = this.group;
        msg.content = this.content;
        msg.TypeOfMsg = Protocol.MessageRequest.RequestType.C2GSEND_REQUEST;
        this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish());
    };
    ChatComponent.prototype.addMemToGoup = function () {
        console.log("had send message");
        var msg = new (Protocol.MessageRequest);
        msg.to = this.to_id;
        msg.group = this.addgtoup_id;
        msg.TypeOfMsg = Protocol.MessageRequest.RequestType.CONTROL_REQUEST;
        msg.TypeOfCtrl = Protocol.MessageRequest.CtrlType.GROUP_ADDMEMBERS;
        this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish());
    };
    ChatComponent.prototype.createGroup = function () {
        console.log("had send message");
        var msg = new (Protocol.MessageRequest);
        msg.from = this.from_id;
        msg.content = this.group_name;
        msg.TypeOfMsg = Protocol.MessageRequest.RequestType.CONTROL_REQUEST;
        msg.TypeOfCtrl = Protocol.MessageRequest.CtrlType.CREATE_GROUP;
        this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish());
    };
    ChatComponent.prototype.test = function () {
        var msg = new (Protocol.MessageResponse);
        msg.content = "testing websocket protocol buf";
        msg.msgid = 28;
        console.log(Protocol.MessageRequest.encode(msg).finish());
    };
    ChatComponent = tslib_1.__decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [WebsocketService])
    ], ChatComponent);
    return ChatComponent;
}());
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map