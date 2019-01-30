import { Server } from 'ws';
var wsServer = new Server({ port: 9876 });
//当有任何一个客户端连接到服务器时，给这个客户端推送一条消息
wsServer.on("connection", function (websocket) {
    websocket.send("这个消息是服务器主动推送的");
    websocket.on("message", function (message) {
        console.log("接收到客户端发送的消息，消息内容是：" + message);
    });
});
// setInterval(() => {//定时发送消息
//     //服务器连上的所有客户端
//     if(wsServer.clients){
//         wsServer.clients.forEach(client => {
//             client.send("这是定时推送的消息")
//         })
//     }
// },2000)
//# sourceMappingURL=auction_server.js.map