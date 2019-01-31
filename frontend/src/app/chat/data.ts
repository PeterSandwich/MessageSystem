export class MesList {
    from: number = 0;
    to: number = 0;
    msgid: number = 0;
    content: string = "";
    img_url: string = "";
  }

//好友列表
export class FriendList{
    List: FriendItem[];
}
export class FriendItem {
    ID :number = 0;
    NAME: string = "";
    HEADIMG: string = "";
    ISGROUP: boolean = false;
    Counter: number = 0;
}

//聊天信息
export class MessageList{
    List: Session[];
 }
export class  Session{
    ID: number;
    ISGROUP: boolean;
    Message: MessageItem[]
}
export class MessageItem{
    Mid: number = 0;
    From: number = 0;
    To: number = 0;
    Gid: number = 0;//群组ＩＤ
    Content: string = "";
    ContentType: number = 0;
    Time: number = 0;
} 