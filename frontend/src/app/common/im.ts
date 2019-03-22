import { Long } from 'protobufjs';


//一条消息的消息体
export class MessageItem{
    id: number|Long
    from: number|Long
    to: number|Long
    content: string
    content_type: number
    arrive_time: number|Long
    send_time: number|Long
    is_group: boolean
    loading_percent: number
}


// 单个会话的历史消息
export class HistoryMessage{
     message_list: MessageItem[]
}




// 最近联系人
export class ContactListItem{
    id: number|Long
    name: string
    head_img: string
    count: number|Long
    is_group: boolean
}

export class NearestContact{
    contact_list: ContactListItem[]
}

// 通讯录相关
export class AddressBook{
    contact_list: ContactListItem[]
}


//全局显示消息集合
export class GlobalMessage {
    chat_room_list: Map<number|Long,ChatRoom>
}

//聊天室
export class ChatRoom{
    id: number|Long
    name: string
    is_group: boolean
    message_list: MessageItem[]
}

export class AllChatRoom {
    size : number;
    message_list : MessageItem[];
}


export class CreateGroupItem{
    id: number|Long
    name: string
    head_img: string
    selected: boolean
}
export class CreateGroup{
    contact_list: CreateGroupItem[];
}

export class AddMemberItem{
    id: number|Long
    name: string
    head_img: string
    selected: boolean
    existed: boolean
}
