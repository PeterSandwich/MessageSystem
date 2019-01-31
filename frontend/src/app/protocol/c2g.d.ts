import * as $protobuf from "protobufjs";
import {Long} from "protobufjs";

/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a C2GSendRequest. */
    interface IC2GSendRequest {

        /** C2GSendRequest from */
        from?: (number|Long|null);

        /** C2GSendRequest group */
        group?: (number|Long|null);

        /** C2GSendRequest content */
        content?: (string|null);
    }

    /** Represents a C2GSendRequest. */
    class C2GSendRequest implements IC2GSendRequest {

        /**
         * Constructs a new C2GSendRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IC2GSendRequest);

        /** C2GSendRequest from. */
        public from: (number|Long);

        /** C2GSendRequest group. */
        public group: (number|Long);

        /** C2GSendRequest content. */
        public content: string;

        /**
         * Creates a new C2GSendRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSendRequest instance
         */
        public static create(properties?: Protocol.IC2GSendRequest): Protocol.C2GSendRequest;

        /**
         * Encodes the specified C2GSendRequest message. Does not implicitly {@link Protocol.C2GSendRequest.verify|verify} messages.
         * @param message C2GSendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IC2GSendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSendRequest message, length delimited. Does not implicitly {@link Protocol.C2GSendRequest.verify|verify} messages.
         * @param message C2GSendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IC2GSendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSendRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.C2GSendRequest;

        /**
         * Decodes a C2GSendRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.C2GSendRequest;

        /**
         * Verifies a C2GSendRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSendRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSendRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.C2GSendRequest;

        /**
         * Creates a plain object from a C2GSendRequest message. Also converts values to other types if specified.
         * @param message C2GSendRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.C2GSendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSendRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GSendResponse. */
    interface IC2GSendResponse {

        /** C2GSendResponse msgid */
        msgid?: (number|Long|null);

        /** C2GSendResponse timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a C2GSendResponse. */
    class C2GSendResponse implements IC2GSendResponse {

        /**
         * Constructs a new C2GSendResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IC2GSendResponse);

        /** C2GSendResponse msgid. */
        public msgid: (number|Long);

        /** C2GSendResponse timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new C2GSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSendResponse instance
         */
        public static create(properties?: Protocol.IC2GSendResponse): Protocol.C2GSendResponse;

        /**
         * Encodes the specified C2GSendResponse message. Does not implicitly {@link Protocol.C2GSendResponse.verify|verify} messages.
         * @param message C2GSendResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IC2GSendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSendResponse message, length delimited. Does not implicitly {@link Protocol.C2GSendResponse.verify|verify} messages.
         * @param message C2GSendResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IC2GSendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSendResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.C2GSendResponse;

        /**
         * Decodes a C2GSendResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.C2GSendResponse;

        /**
         * Verifies a C2GSendResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSendResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSendResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.C2GSendResponse;

        /**
         * Creates a plain object from a C2GSendResponse message. Also converts values to other types if specified.
         * @param message C2GSendResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.C2GSendResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSendResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GPushRequest. */
    interface IC2GPushRequest {

        /** C2GPushRequest from */
        from?: (number|Long|null);

        /** C2GPushRequest group */
        group?: (number|Long|null);

        /** C2GPushRequest content */
        content?: (string|null);

        /** C2GPushRequest msgid */
        msgid?: (number|Long|null);

        /** C2GPushRequest timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a C2GPushRequest. */
    class C2GPushRequest implements IC2GPushRequest {

        /**
         * Constructs a new C2GPushRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IC2GPushRequest);

        /** C2GPushRequest from. */
        public from: (number|Long);

        /** C2GPushRequest group. */
        public group: (number|Long);

        /** C2GPushRequest content. */
        public content: string;

        /** C2GPushRequest msgid. */
        public msgid: (number|Long);

        /** C2GPushRequest timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new C2GPushRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GPushRequest instance
         */
        public static create(properties?: Protocol.IC2GPushRequest): Protocol.C2GPushRequest;

        /**
         * Encodes the specified C2GPushRequest message. Does not implicitly {@link Protocol.C2GPushRequest.verify|verify} messages.
         * @param message C2GPushRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IC2GPushRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GPushRequest message, length delimited. Does not implicitly {@link Protocol.C2GPushRequest.verify|verify} messages.
         * @param message C2GPushRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IC2GPushRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GPushRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.C2GPushRequest;

        /**
         * Decodes a C2GPushRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.C2GPushRequest;

        /**
         * Verifies a C2GPushRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GPushRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GPushRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.C2GPushRequest;

        /**
         * Creates a plain object from a C2GPushRequest message. Also converts values to other types if specified.
         * @param message C2GPushRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.C2GPushRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GPushRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GPushResponse. */
    interface IC2GPushResponse {

        /** C2GPushResponse msgid */
        msgid?: (number|Long|null);
    }

    /** Represents a C2GPushResponse. */
    class C2GPushResponse implements IC2GPushResponse {

        /**
         * Constructs a new C2GPushResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IC2GPushResponse);

        /** C2GPushResponse msgid. */
        public msgid: (number|Long);

        /**
         * Creates a new C2GPushResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GPushResponse instance
         */
        public static create(properties?: Protocol.IC2GPushResponse): Protocol.C2GPushResponse;

        /**
         * Encodes the specified C2GPushResponse message. Does not implicitly {@link Protocol.C2GPushResponse.verify|verify} messages.
         * @param message C2GPushResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IC2GPushResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GPushResponse message, length delimited. Does not implicitly {@link Protocol.C2GPushResponse.verify|verify} messages.
         * @param message C2GPushResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IC2GPushResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GPushResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.C2GPushResponse;

        /**
         * Decodes a C2GPushResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.C2GPushResponse;

        /**
         * Verifies a C2GPushResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GPushResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GPushResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.C2GPushResponse;

        /**
         * Creates a plain object from a C2GPushResponse message. Also converts values to other types if specified.
         * @param message C2GPushResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.C2GPushResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GPushResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
