import * as $protobuf from "protobufjs";
import {Long} from "protobufjs";

/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a CtrlSendRequest. */
    interface ICtrlSendRequest {

        /** CtrlSendRequest from */
        from?: (number|Long|null);

        /** CtrlSendRequest type */
        type?: (Protocol.CtrlSendRequest.CtrlSendType|null);

        /** CtrlSendRequest to */
        to?: (number|Long|null);

        /** CtrlSendRequest msgid */
        msgid?: (number|Long|null);

        /** CtrlSendRequest content */
        content?: (string|null);
    }

    /** Represents a CtrlSendRequest. */
    class CtrlSendRequest implements ICtrlSendRequest {

        /**
         * Constructs a new CtrlSendRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICtrlSendRequest);

        /** CtrlSendRequest from. */
        public from: (number|Long);

        /** CtrlSendRequest type. */
        public type: Protocol.CtrlSendRequest.CtrlSendType;

        /** CtrlSendRequest to. */
        public to: (number|Long);

        /** CtrlSendRequest msgid. */
        public msgid: (number|Long);

        /** CtrlSendRequest content. */
        public content: string;

        /**
         * Creates a new CtrlSendRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CtrlSendRequest instance
         */
        public static create(properties?: Protocol.ICtrlSendRequest): Protocol.CtrlSendRequest;

        /**
         * Encodes the specified CtrlSendRequest message. Does not implicitly {@link Protocol.CtrlSendRequest.verify|verify} messages.
         * @param message CtrlSendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICtrlSendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CtrlSendRequest message, length delimited. Does not implicitly {@link Protocol.CtrlSendRequest.verify|verify} messages.
         * @param message CtrlSendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICtrlSendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CtrlSendRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CtrlSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.CtrlSendRequest;

        /**
         * Decodes a CtrlSendRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CtrlSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.CtrlSendRequest;

        /**
         * Verifies a CtrlSendRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CtrlSendRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CtrlSendRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.CtrlSendRequest;

        /**
         * Creates a plain object from a CtrlSendRequest message. Also converts values to other types if specified.
         * @param message CtrlSendRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.CtrlSendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CtrlSendRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CtrlSendRequest {

        /** CtrlSendType enum. */
        enum CtrlSendType {
            CREATE_GROUP = 0,
            GROUP_ADDMEMBERS = 1,
            GROUP_EXIT = 3,
            GROUP_DELETE = 4,
            MSG_BACK = 5
        }
    }

    /** Properties of a CtrlSendResponse. */
    interface ICtrlSendResponse {

        /** CtrlSendResponse msgid */
        msgid?: (number|Long|null);

        /** CtrlSendResponse timestamp */
        timestamp?: (number|Long|null);

        /** CtrlSendResponse content */
        content?: (string|null);
    }

    /** Represents a CtrlSendResponse. */
    class CtrlSendResponse implements ICtrlSendResponse {

        /**
         * Constructs a new CtrlSendResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICtrlSendResponse);

        /** CtrlSendResponse msgid. */
        public msgid: (number|Long);

        /** CtrlSendResponse timestamp. */
        public timestamp: (number|Long);

        /** CtrlSendResponse content. */
        public content: string;

        /**
         * Creates a new CtrlSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CtrlSendResponse instance
         */
        public static create(properties?: Protocol.ICtrlSendResponse): Protocol.CtrlSendResponse;

        /**
         * Encodes the specified CtrlSendResponse message. Does not implicitly {@link Protocol.CtrlSendResponse.verify|verify} messages.
         * @param message CtrlSendResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICtrlSendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CtrlSendResponse message, length delimited. Does not implicitly {@link Protocol.CtrlSendResponse.verify|verify} messages.
         * @param message CtrlSendResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICtrlSendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CtrlSendResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CtrlSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.CtrlSendResponse;

        /**
         * Decodes a CtrlSendResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CtrlSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.CtrlSendResponse;

        /**
         * Verifies a CtrlSendResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CtrlSendResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CtrlSendResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.CtrlSendResponse;

        /**
         * Creates a plain object from a CtrlSendResponse message. Also converts values to other types if specified.
         * @param message CtrlSendResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.CtrlSendResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CtrlSendResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CtrPushRequest. */
    interface ICtrPushRequest {

        /** CtrPushRequest from */
        from?: (number|Long|null);

        /** CtrPushRequest type */
        type?: (Protocol.CtrPushRequest.CtrlPushType|null);

        /** CtrPushRequest to */
        to?: (number|Long|null);

        /** CtrPushRequest msgid */
        msgid?: (number|Long|null);

        /** CtrPushRequest content */
        content?: (string|null);
    }

    /** Represents a CtrPushRequest. */
    class CtrPushRequest implements ICtrPushRequest {

        /**
         * Constructs a new CtrPushRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICtrPushRequest);

        /** CtrPushRequest from. */
        public from: (number|Long);

        /** CtrPushRequest type. */
        public type: Protocol.CtrPushRequest.CtrlPushType;

        /** CtrPushRequest to. */
        public to: (number|Long);

        /** CtrPushRequest msgid. */
        public msgid: (number|Long);

        /** CtrPushRequest content. */
        public content: string;

        /**
         * Creates a new CtrPushRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CtrPushRequest instance
         */
        public static create(properties?: Protocol.ICtrPushRequest): Protocol.CtrPushRequest;

        /**
         * Encodes the specified CtrPushRequest message. Does not implicitly {@link Protocol.CtrPushRequest.verify|verify} messages.
         * @param message CtrPushRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICtrPushRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CtrPushRequest message, length delimited. Does not implicitly {@link Protocol.CtrPushRequest.verify|verify} messages.
         * @param message CtrPushRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICtrPushRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CtrPushRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CtrPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.CtrPushRequest;

        /**
         * Decodes a CtrPushRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CtrPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.CtrPushRequest;

        /**
         * Verifies a CtrPushRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CtrPushRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CtrPushRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.CtrPushRequest;

        /**
         * Creates a plain object from a CtrPushRequest message. Also converts values to other types if specified.
         * @param message CtrPushRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.CtrPushRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CtrPushRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CtrPushRequest {

        /** CtrlPushType enum. */
        enum CtrlPushType {
            CREATE_GROUP = 0,
            GROUP_ADDMEMBERS = 1,
            GROUP_EXIT = 3,
            GROUP_DELETE = 4
        }
    }

    /** Properties of a CtrlPushResponse. */
    interface ICtrlPushResponse {

        /** CtrlPushResponse msgid */
        msgid?: (number|Long|null);

        /** CtrlPushResponse timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a CtrlPushResponse. */
    class CtrlPushResponse implements ICtrlPushResponse {

        /**
         * Constructs a new CtrlPushResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICtrlPushResponse);

        /** CtrlPushResponse msgid. */
        public msgid: (number|Long);

        /** CtrlPushResponse timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new CtrlPushResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CtrlPushResponse instance
         */
        public static create(properties?: Protocol.ICtrlPushResponse): Protocol.CtrlPushResponse;

        /**
         * Encodes the specified CtrlPushResponse message. Does not implicitly {@link Protocol.CtrlPushResponse.verify|verify} messages.
         * @param message CtrlPushResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICtrlPushResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CtrlPushResponse message, length delimited. Does not implicitly {@link Protocol.CtrlPushResponse.verify|verify} messages.
         * @param message CtrlPushResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICtrlPushResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CtrlPushResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CtrlPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.CtrlPushResponse;

        /**
         * Decodes a CtrlPushResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CtrlPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.CtrlPushResponse;

        /**
         * Verifies a CtrlPushResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CtrlPushResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CtrlPushResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.CtrlPushResponse;

        /**
         * Creates a plain object from a CtrlPushResponse message. Also converts values to other types if specified.
         * @param message CtrlPushResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.CtrlPushResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CtrlPushResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
