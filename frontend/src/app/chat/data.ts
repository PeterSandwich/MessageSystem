// export class MesList {
//     from: number = 0;
//     to: number = 0;
//     msgid: number = 0;
//     content: string = "";
//     img_url: string = "";
//   }

// //好友列表
// export class FriendList{
//     List: FriendItem[];
// }
// export class FriendItem {
//     ID :number = 0;
//     NAME: string = "";
//     HEADIMG: string = "";
//     ISGROUP: boolean = false;
//     Counter: number = 0;
// }

// //聊天信息
// export class MessageList{
//     List: Session[];
//  }
// export class  Session{
//     ID: number;
//     ISGROUP: boolean;
//     Message: MessageItem[]
// }
// export class MessageItem{
//     Mid: number = 0;
//     From: number = 0;
//     To: number = 0;
//     Gid: number = 0;//群组TD
//     Content: string = "";
//     ContentType: number = 0;
//     Time: number = 0;
// } 
import * as com from '../common/im';

export const addressList : com.AddressBookItem[] = [
    {id: 1, name: "abc", head_img: "aaa", is_group: false},
    {id: 2, name: "bcd", head_img: "aaa", is_group: false},
    {id: 3, name: "cde", head_img: "aaa", is_group: false},
    {id: 4, name: "def", head_img: "aaa", is_group: true},
    {id: 5, name: "efg", head_img: "aaa", is_group: true},
    {id: 6, name: "fgh", head_img: "aaa", is_group: true},
]

// export const nearContractList : com.NearestContactItem[] = [
//     {id: 100021, name: "mmm", head_img: "aaa", count: 5, is_group: false},
//     {id: 100017, name: "pjw", head_img: "aaa", count: 1, is_group: false},
//     {id: 1008, name: "你有一条新的消息", head_img: "aaa", count: 12, is_group: false},
//     {id: 1009, name: "testGGG", head_img: "aaa", count: 6, is_group: true},
//     {id: 1010, name: "GGGGGGGGGGGG", head_img: "aaa", count: 2, is_group: true},
//     {id: 100019, name: "hql", head_img: "aaa", count: 2, is_group: true},
//     {id: 100018, name: "gct", head_img: "aaa", count: 2, is_group: true},

// ]

export const id_1_message : com.MessageItem[] = [
    {id: 1001, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000001, is_group: false},
    {id: 1002, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000002, is_group: false},
    {id: 1003, from: 1, to: 100018, content: "测试", content_type: 0, arrive_time: 1000003, is_group: false},
    {id: 1004, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000004, is_group: false},
    {id: 1005, from: 1, to: 100018, content: "测试", content_type: 0, arrive_time: 1000005, is_group: false},
    {id: 1006, from: 1, to: 100018, content: "测试", content_type: 0, arrive_time: 1000006, is_group: false},
    {id: 1007, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000007, is_group: false},
    {id: 1008, from: 100018, to: 1, content: "测试", content_type: 0, arrive_time: 1000008, is_group: false},
]
export const id_2_message : com.MessageItem[] = [
    {id:501,from:100019,to:100017,content:"dasdasdasd",content_type:0,arrive_time:1550047381671,is_group:false},
    {id:505,from:100019,to:100017,content:"fsafasfa",content_type:0,arrive_time:1550047384788,is_group:false},
    {id:509,from:100017,to:100019,content:"dasdasdas",content_type:0,arrive_time:1550047388021,is_group:false},
    {id:513,from:100017,to:100019,content:"dasdasda",content_type:0,arrive_time:1550047392531,is_group:false},
    {id:517,from:100019,to:100017,content:"files/4b06426a7a8e_compress.jpg",content_type:1,arrive_time:1550047406461,is_group:false},
    {id:521,from:100017,to:100019,content:"files/4b06426a7a8e_compress.jpg",content_type:1,arrive_time:1550047414312,is_group:false},
    {id:525,from:100017,to:100019,content:"777777",content_type:0,arrive_time:1550047437582,is_group:false},
    {id:529,from:100017,to:100019,content:"",content_type:0,arrive_time:1550047451365,is_group:false},
    {id:549,from:100019,to:100017,content:"files/9edbe55433e4_compress.jpg",content_type:1,arrive_time:1550047514194,is_group:false},
    {id:553,from:100019,to:100017,content:"files/9edbe55433e4_compress.jpg",content_type:1,arrive_time:1550047517339,is_group:false}
]
export const id_3_message : com.MessageItem[] = [
    {id:565,from:100018,to:1008,content:"11111",content_type:0,arrive_time:1550294670186,is_group:true},
    {id:569,from:100018,to:1008,content:"111111",content_type:0,arrive_time:1550294671863,is_group:true},
    {id:573,from:100018,to:1008,content:"222222222",content_type:0,arrive_time:1550294673907,is_group:true},
    {id:577,from:100018,to:1008,content:"3333333333",content_type:0,arrive_time:1550294675796,is_group:true},
    {id:581,from:100018,to:1008,content:"aaaaaa",content_type:0,arrive_time:1550294678035,is_group:true},
    {id:585,from:100018,to:1008,content:"hhhhhhhhhhh",content_type:0,arrive_time:1550294683810,is_group:true},
    {id:589,from:100018,to:1008,content:"ffffffff",content_type:0,arrive_time:1550294686338,is_group:true},
    {id:593,from:100018,to:1008,content:"qwr",content_type:0,arrive_time:1550294688195,is_group:true},
    {id:597,from:100018,to:1008,content:"adf",content_type:0,arrive_time:1550294690621,is_group:true},
    {id:601,from:100018,to:1008,content:"hello",content_type:0,arrive_time:1550309859874,is_group:true},
]

export const chatRoom : com.ChatRoom[] = [
    { id:100021,name:"mmm",is_group:false,message_list:[]},
    { id:100017,name:"pjw",is_group:false,message_list:[]},
    { id:1008,name:"你有一条新的消息",is_group:true,message_list: id_3_message},
    {id:1009,name:"testGGG",is_group:true,"message_list":[]},
    {id:1010,name:"GGGGGGGGGGGG",is_group:true,"message_list":[]},
    {id:100019,name:"hql",is_group:false,"message_list":id_2_message},
    {id:100018,name:"gct",is_group:false,"message_list":[]}


]

export const chatroom : com.AllChatRoom = {
    size:7, 
    message_list: id_3_message
}