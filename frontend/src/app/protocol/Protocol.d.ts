import * as $protobuf from "protobufjs";
import {Long} from "protobufjs";
/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a MessageRequest. */
    interface IMessageRequest {

        /** MessageRequest TypeOfMsg */
        TypeOfMsg?: (Protocol.MessageRequest.RequestType|null);

        /** MessageRequest from */
        from?: (number|Long|null);

        /** MessageRequest to */
        to?: (number|Long|null);

        /** MessageRequest group */
        group?: (number|Long|null);

        /** MessageRequest content */
        content?: (string|null);

        /** MessageRequest uid */
        uid?: (number|Long|null);

        /** MessageRequest msgid */
        msgid?: (number|Long|null);

        /** MessageRequest token */
        token?: (string|null);

        /** MessageRequest timestamp */
        timestamp?: (number|Long|null);

        /** MessageRequest TypeOfCtrl */
        TypeOfCtrl?: (Protocol.MessageRequest.CtrlType|null);

        /** MessageRequest reasion */
        reasion?: (Protocol.MessageRequest.Reasion|null);

        /** MessageRequest offset */
        offset?: (number|Long|null);

        /** MessageRequest limit */
        limit?: (number|null);
    }

    /** Represents a MessageRequest. */
    class MessageRequest implements IMessageRequest {

        /**
         * Constructs a new MessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IMessageRequest);

        /** MessageRequest TypeOfMsg. */
        public TypeOfMsg: Protocol.MessageRequest.RequestType;

        /** MessageRequest from. */
        public from: (number|Long);

        /** MessageRequest to. */
        public to: (number|Long);

        /** MessageRequest group. */
        public group: (number|Long);

        /** MessageRequest content. */
        public content: string;

        /** MessageRequest uid. */
        public uid: (number|Long);

        /** MessageRequest msgid. */
        public msgid: (number|Long);

        /** MessageRequest token. */
        public token: string;

        /** MessageRequest timestamp. */
        public timestamp: (number|Long);

        /** MessageRequest TypeOfCtrl. */
        public TypeOfCtrl: Protocol.MessageRequest.CtrlType;

        /** MessageRequest reasion. */
        public reasion: Protocol.MessageRequest.Reasion;

        /** MessageRequest offset. */
        public offset: (number|Long);

        /** MessageRequest limit. */
        public limit: number;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageRequest instance
         */
        public static create(properties?: Protocol.IMessageRequest): Protocol.MessageRequest;

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link Protocol.MessageRequest.verify|verify} messages.
         * @param message MessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link Protocol.MessageRequest.verify|verify} messages.
         * @param message MessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.MessageRequest;

        /**
         * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.MessageRequest;

        /**
         * Verifies a MessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.MessageRequest;

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @param message MessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.MessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MessageRequest {

        /** RequestType enum. */
        enum RequestType {
            AUTH_REQUEST = 0,
            C2CSEND_REQUEST = 1,
            C2CPUSH_REQUEST = 2,
            C2GSEND_REQUEST = 3,
            C2GPUSH_REQUEST = 4,
            CtrlSEND_REQUEST = 5,
            CtrPUSH_REQUEST = 6,
            KICKOUT_REQUEST = 7,
            PULL_REQUEST = 8,
            CONTROL_REQUEST = 9
        }

        /** CtrlType enum. */
        enum CtrlType {
            CREATE_GROUP = 0,
            GROUP_ADDMEMBERS = 1,
            GROUP_EXIT = 3,
            GROUP_DELETE = 4,
            MSG_BACK = 5
        }

        /** Reasion enum. */
        enum Reasion {
            OTHER_LOGIN = 0
        }
    }

    /** Properties of a PullMsg. */
    interface IPullMsg {

        /** PullMsg from */
        from?: (number|Long|null);

        /** PullMsg to */
        to?: (number|Long|null);

        /** PullMsg group */
        group?: (number|Long|null);

        /** PullMsg content */
        content?: (string|null);

        /** PullMsg msgid */
        msgid?: (number|Long|null);

        /** PullMsg cmdid */
        cmdid?: (number|null);

        /** PullMsg sendTime */
        sendTime?: (number|Long|null);
    }

    /** Represents a PullMsg. */
    class PullMsg implements IPullMsg {

        /**
         * Constructs a new PullMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IPullMsg);

        /** PullMsg from. */
        public from: (number|Long);

        /** PullMsg to. */
        public to: (number|Long);

        /** PullMsg group. */
        public group: (number|Long);

        /** PullMsg content. */
        public content: string;

        /** PullMsg msgid. */
        public msgid: (number|Long);

        /** PullMsg cmdid. */
        public cmdid: number;

        /** PullMsg sendTime. */
        public sendTime: (number|Long);

        /**
         * Creates a new PullMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullMsg instance
         */
        public static create(properties?: Protocol.IPullMsg): Protocol.PullMsg;

        /**
         * Encodes the specified PullMsg message. Does not implicitly {@link Protocol.PullMsg.verify|verify} messages.
         * @param message PullMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IPullMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullMsg message, length delimited. Does not implicitly {@link Protocol.PullMsg.verify|verify} messages.
         * @param message PullMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IPullMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PullMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.PullMsg;

        /**
         * Decodes a PullMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PullMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.PullMsg;

        /**
         * Verifies a PullMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullMsg
         */
        public static fromObject(object: { [k: string]: any }): Protocol.PullMsg;

        /**
         * Creates a plain object from a PullMsg message. Also converts values to other types if specified.
         * @param message PullMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.PullMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageResponse. */
    interface IMessageResponse {

        /** MessageResponse TypeOfResponse */
        TypeOfResponse?: (Protocol.MessageResponse.ResponseType|null);

        /** MessageResponse msgid */
        msgid?: (number|Long|null);

        /** MessageResponse msgTo */
        msgTo?: (number|Long|null);

        /** MessageResponse msgFrom */
        msgFrom?: (number|Long|null);

        /** MessageResponse msgGroup */
        msgGroup?: (number|Long|null);

        /** MessageResponse content */
        content?: (string|null);

        /** MessageResponse timestamp */
        timestamp?: (number|Long|null);

        /** MessageResponse status */
        status?: (Protocol.MessageResponse.Status|null);

        /** MessageResponse errCode */
        errCode?: (number|null);

        /** MessageResponse errMsg */
        errMsg?: (string|null);

        /** MessageResponse msglist */
        msglist?: (Protocol.IPullMsg[]|null);
    }

    /** Represents a MessageResponse. */
    class MessageResponse implements IMessageResponse {

        /**
         * Constructs a new MessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IMessageResponse);

        /** MessageResponse TypeOfResponse. */
        public TypeOfResponse: Protocol.MessageResponse.ResponseType;

        /** MessageResponse msgid. */
        public msgid: (number|Long);

        /** MessageResponse msgTo. */
        public msgTo: (number|Long);

        /** MessageResponse msgFrom. */
        public msgFrom: (number|Long);

        /** MessageResponse msgGroup. */
        public msgGroup: (number|Long);

        /** MessageResponse content. */
        public content: string;

        /** MessageResponse timestamp. */
        public timestamp: (number|Long);

        /** MessageResponse status. */
        public status: Protocol.MessageResponse.Status;

        /** MessageResponse errCode. */
        public errCode: number;

        /** MessageResponse errMsg. */
        public errMsg: string;

        /** MessageResponse msglist. */
        public msglist: Protocol.IPullMsg[];

        /**
         * Creates a new MessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageResponse instance
         */
        public static create(properties?: Protocol.IMessageResponse): Protocol.MessageResponse;

        /**
         * Encodes the specified MessageResponse message. Does not implicitly {@link Protocol.MessageResponse.verify|verify} messages.
         * @param message MessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageResponse message, length delimited. Does not implicitly {@link Protocol.MessageResponse.verify|verify} messages.
         * @param message MessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.MessageResponse;

        /**
         * Decodes a MessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.MessageResponse;

        /**
         * Verifies a MessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.MessageResponse;

        /**
         * Creates a plain object from a MessageResponse message. Also converts values to other types if specified.
         * @param message MessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.MessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MessageResponse {

        /** Status enum. */
        enum Status {
            OK = 0,
            Err = 1
        }

        /** ResponseType enum. */
        enum ResponseType {
            Auth_ACK_RESPONSE = 0,
            C2CSEND_ACK_RESPONSE = 1,
            C2GSEND_ACK_RESPONSE = 2,
            CtrlSEND_ACK_RESPONSE = 3,
            C2CPUSH_RESPONSE = 4,
            C2GPUSH_RESPONSE = 5,
            CtrlPUSH_RESPONSE = 6,
            PULL_RESPONSE = 7
        }
    }

    /** Properties of a ACKResponse. */
    interface IACKResponse {

        /** ACKResponse msgid */
        msgid?: (number|Long|null);

        /** ACKResponse timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a ACKResponse. */
    class ACKResponse implements IACKResponse {

        /**
         * Constructs a new ACKResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IACKResponse);

        /** ACKResponse msgid. */
        public msgid: (number|Long);

        /** ACKResponse timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new ACKResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ACKResponse instance
         */
        public static create(properties?: Protocol.IACKResponse): Protocol.ACKResponse;

        /**
         * Encodes the specified ACKResponse message. Does not implicitly {@link Protocol.ACKResponse.verify|verify} messages.
         * @param message ACKResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IACKResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ACKResponse message, length delimited. Does not implicitly {@link Protocol.ACKResponse.verify|verify} messages.
         * @param message ACKResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IACKResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ACKResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ACKResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.ACKResponse;

        /**
         * Decodes a ACKResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ACKResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.ACKResponse;

        /**
         * Verifies a ACKResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ACKResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ACKResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.ACKResponse;

        /**
         * Creates a plain object from a ACKResponse message. Also converts values to other types if specified.
         * @param message ACKResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.ACKResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ACKResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmptyRequest. */
    interface IEmptyRequest {
    }

    /** Represents an EmptyRequest. */
    class EmptyRequest implements IEmptyRequest {

        /**
         * Constructs a new EmptyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IEmptyRequest);

        /**
         * Creates a new EmptyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmptyRequest instance
         */
        public static create(properties?: Protocol.IEmptyRequest): Protocol.EmptyRequest;

        /**
         * Encodes the specified EmptyRequest message. Does not implicitly {@link Protocol.EmptyRequest.verify|verify} messages.
         * @param message EmptyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IEmptyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmptyRequest message, length delimited. Does not implicitly {@link Protocol.EmptyRequest.verify|verify} messages.
         * @param message EmptyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IEmptyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.EmptyRequest;

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.EmptyRequest;

        /**
         * Verifies an EmptyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.EmptyRequest;

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @param message EmptyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.EmptyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a ToServerMsg */
    class ToServerMsg extends $protobuf.rpc.Service {

        /**
         * Constructs a new ToServerMsg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ToServerMsg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ToServerMsg;

        /**
         * Calls SendMsg.
         * @param request MessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ACKResponse
         */
        public sendMsg(request: Protocol.IMessageRequest, callback: Protocol.ToServerMsg.SendMsgCallback): void;

        /**
         * Calls SendMsg.
         * @param request MessageRequest message or plain object
         * @returns Promise
         */
        public sendMsg(request: Protocol.IMessageRequest): Promise<Protocol.ACKResponse>;

        /**
         * Calls ResponseToGate.
         * @param request EmptyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MessageResponse
         */
        public responseToGate(request: Protocol.IEmptyRequest, callback: Protocol.ToServerMsg.ResponseToGateCallback): void;

        /**
         * Calls ResponseToGate.
         * @param request EmptyRequest message or plain object
         * @returns Promise
         */
        public responseToGate(request: Protocol.IEmptyRequest): Promise<Protocol.MessageResponse>;
    }

    namespace ToServerMsg {

        /**
         * Callback as used by {@link Protocol.ToServerMsg#sendMsg}.
         * @param error Error, if any
         * @param [response] ACKResponse
         */
        type SendMsgCallback = (error: (Error|null), response?: Protocol.ACKResponse) => void;

        /**
         * Callback as used by {@link Protocol.ToServerMsg#responseToGate}.
         * @param error Error, if any
         * @param [response] MessageResponse
         */
        type ResponseToGateCallback = (error: (Error|null), response?: Protocol.MessageResponse) => void;
    }
}
