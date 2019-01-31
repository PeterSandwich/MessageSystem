import * as $protobuf from "protobufjs";
import {Long} from "protobufjs";

/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a PullRequest. */
    interface IPullRequest {

        /** PullRequest uid */
        uid?: (number|Long|null);

        /** PullRequest offset */
        offset?: (number|Long|null);

        /** PullRequest limit */
        limit?: (number|null);
    }

    /** Represents a PullRequest. */
    class PullRequest implements IPullRequest {

        /**
         * Constructs a new PullRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IPullRequest);

        /** PullRequest uid. */
        public uid: (number|Long);

        /** PullRequest offset. */
        public offset: (number|Long);

        /** PullRequest limit. */
        public limit: number;

        /**
         * Creates a new PullRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullRequest instance
         */
        public static create(properties?: Protocol.IPullRequest): Protocol.PullRequest;

        /**
         * Encodes the specified PullRequest message. Does not implicitly {@link Protocol.PullRequest.verify|verify} messages.
         * @param message PullRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IPullRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullRequest message, length delimited. Does not implicitly {@link Protocol.PullRequest.verify|verify} messages.
         * @param message PullRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IPullRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PullRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.PullRequest;

        /**
         * Decodes a PullRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PullRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.PullRequest;

        /**
         * Verifies a PullRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.PullRequest;

        /**
         * Creates a plain object from a PullRequest message. Also converts values to other types if specified.
         * @param message PullRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.PullRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PullMsg. */
    interface IPullMsg {

        /** PullMsg from */
        from?: (number|Long|null);

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

    /** Properties of a PullResponse. */
    interface IPullResponse {

        /** PullResponse msg */
        msg?: (Protocol.IPullMsg[]|null);
    }

    /** Represents a PullResponse. */
    class PullResponse implements IPullResponse {

        /**
         * Constructs a new PullResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IPullResponse);

        /** PullResponse msg. */
        public msg: Protocol.IPullMsg[];

        /**
         * Creates a new PullResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullResponse instance
         */
        public static create(properties?: Protocol.IPullResponse): Protocol.PullResponse;

        /**
         * Encodes the specified PullResponse message. Does not implicitly {@link Protocol.PullResponse.verify|verify} messages.
         * @param message PullResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IPullResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullResponse message, length delimited. Does not implicitly {@link Protocol.PullResponse.verify|verify} messages.
         * @param message PullResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IPullResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PullResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.PullResponse;

        /**
         * Decodes a PullResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PullResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.PullResponse;

        /**
         * Verifies a PullResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.PullResponse;

        /**
         * Creates a plain object from a PullResponse message. Also converts values to other types if specified.
         * @param message PullResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.PullResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
