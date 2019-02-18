import { Long } from 'protobufjs';


//一条消息的消息体
export class MessageItem{
    id: number|Long
    from: number|Long
    to: number|Long
    content: string
    content_type: number
    arrive_time: number|Long
    is_group: boolean
}


// 单个会话的历史消息
export class HistoryMessage{
     message_list: MessageItem[]
}


// 通讯录相关
export class AddressBookItem{
    id: number|Long
    name: string
    head_img: string
    is_group: boolean

}
export class AddressBook{
    friends_list: AddressBookItem[]
}

// 最近联系人
export class NearestContactItem{
    id: number|Long
    name: string
    head_img: string
    count: number|Long
    is_group: boolean
}

export class NearestContact{
    contact_list: NearestContactItem[]
}


//全局显示消息集合
export class GlobalMessage {
    chat_room_list: Map<number|Long,ChatRoom[]>
}

//聊天室
export class ChatRoom{
    id: number|Long
    name: string
    is_group: boolean
    message_list: MessageItem[]
}
