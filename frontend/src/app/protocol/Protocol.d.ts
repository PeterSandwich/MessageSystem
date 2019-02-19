import * as $protobuf from "protobufjs";
import { Long } from "protobufjs";
/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a Message. */
    interface IMessage {

        /** Message type */
        type?: (Protocol.Message.Type|null);

        /** Message cmd */
        cmd?: (Protocol.Message.CtrlType|null);

        /** Message from */
        from?: (number|Long|null);

        /** Message to */
        to?: (number|Long|null);

        /** Message isgroup */
        isgroup?: (boolean|null);

        /** Message content */
        content?: (string|null);

        /** Message contentType */
        contentType?: (Protocol.Message.ContentType|null);

        /** Message msgid */
        msgid?: (number|Long|null);

        /** Message time */
        time?: (number|Long|null);

        /** Message userlist */
        userlist?: ((number|Long)[]|null);

        /** Message errcode */
        errcode?: (Protocol.Message.ErrorCode|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IMessage);

        /** Message type. */
        public type: Protocol.Message.Type;

        /** Message cmd. */
        public cmd: Protocol.Message.CtrlType;

        /** Message from. */
        public from: (number|Long);

        /** Message to. */
        public to: (number|Long);

        /** Message isgroup. */
        public isgroup: boolean;

        /** Message content. */
        public content: string;

        /** Message contentType. */
        public contentType: Protocol.Message.ContentType;

        /** Message msgid. */
        public msgid: (number|Long);

        /** Message time. */
        public time: (number|Long);

        /** Message userlist. */
        public userlist: (number|Long)[];

        /** Message errcode. */
        public errcode: Protocol.Message.ErrorCode;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: Protocol.IMessage): Protocol.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link Protocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Protocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): Protocol.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Message {

        /** Type enum. */
        enum Type {
            ACK = 0,
            REQUEST = 1,
            NOTIFICATION = 2,
            ERROR = 4
        }

        /** CtrlType enum. */
        enum CtrlType {
            NONE = 0,
            CREATE_GROUP = 1,
            GROUP_ADDMEMBERS = 2,
            MSG_BACK = 3,
            CREATE_SESSION = 4
        }

        /** ContentType enum. */
        enum ContentType {
            TEXT = 0,
            IMG = 1,
            FILE = 2
        }

        /** ErrorCode enum. */
        enum ErrorCode {
            REQUEST_BODY_PARAMS_ERROR = 0,
            GROUP_CREATION_FAILED = 1,
            WITHDRAW_MESSAGE_FAILED = 2,
            CHAT_SESSION_CREATION_FAILED = 3
        }
    }
}
