import * as $protobuf from "protobufjs";
/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a C2CSendRequest. */
    interface IC2CSendRequest {

        /** C2CSendRequest from */
        from?: (number|Long|null);

        /** C2CSendRequest to */
        to?: (number|Long|null);

        /** C2CSendRequest content */
        content?: (string|null);
    }

    /** Represents a C2CSendRequest. */
    class C2CSendRequest implements IC2CSendRequest {

        /**
         * Constructs a new C2CSendRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IC2CSendRequest);

        /** C2CSendRequest from. */
        public from: (number|Long);

        /** C2CSendRequest to. */
        public to: (number|Long);

        /** C2CSendRequest content. */
        public content: string;

        /**
         * Creates a new C2CSendRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2CSendRequest instance
         */
        public static create(properties?: Protocol.IC2CSendRequest): Protocol.C2CSendRequest;

        /**
         * Encodes the specified C2CSendRequest message. Does not implicitly {@link Protocol.C2CSendRequest.verify|verify} messages.
         * @param message C2CSendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IC2CSendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2CSendRequest message, length delimited. Does not implicitly {@link Protocol.C2CSendRequest.verify|verify} messages.
         * @param message C2CSendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IC2CSendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2CSendRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2CSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.C2CSendRequest;

        /**
         * Decodes a C2CSendRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2CSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.C2CSendRequest;

        /**
         * Verifies a C2CSendRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2CSendRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2CSendRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.C2CSendRequest;

        /**
         * Creates a plain object from a C2CSendRequest message. Also converts values to other types if specified.
         * @param message C2CSendRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.C2CSendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2CSendRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2CSendResponse. */
    interface IC2CSendResponse {

        /** C2CSendResponse msgid */
        msgid?: (number|Long|null);

        /** C2CSendResponse timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a C2CSendResponse. */
    class C2CSendResponse implements IC2CSendResponse {

        /**
         * Constructs a new C2CSendResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IC2CSendResponse);

        /** C2CSendResponse msgid. */
        public msgid: (number|Long);

        /** C2CSendResponse timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new C2CSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2CSendResponse instance
         */
        public static create(properties?: Protocol.IC2CSendResponse): Protocol.C2CSendResponse;

        /**
         * Encodes the specified C2CSendResponse message. Does not implicitly {@link Protocol.C2CSendResponse.verify|verify} messages.
         * @param message C2CSendResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IC2CSendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2CSendResponse message, length delimited. Does not implicitly {@link Protocol.C2CSendResponse.verify|verify} messages.
         * @param message C2CSendResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IC2CSendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2CSendResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2CSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.C2CSendResponse;

        /**
         * Decodes a C2CSendResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2CSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.C2CSendResponse;

        /**
         * Verifies a C2CSendResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2CSendResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2CSendResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.C2CSendResponse;

        /**
         * Creates a plain object from a C2CSendResponse message. Also converts values to other types if specified.
         * @param message C2CSendResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.C2CSendResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2CSendResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2CPushRequest. */
    interface IC2CPushRequest {

        /** C2CPushRequest from */
        from?: (number|Long|null);

        /** C2CPushRequest content */
        content?: (string|null);

        /** C2CPushRequest msgid */
        msgid?: (number|Long|null);

        /** C2CPushRequest timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a C2CPushRequest. */
    class C2CPushRequest implements IC2CPushRequest {

        /**
         * Constructs a new C2CPushRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IC2CPushRequest);

        /** C2CPushRequest from. */
        public from: (number|Long);

        /** C2CPushRequest content. */
        public content: string;

        /** C2CPushRequest msgid. */
        public msgid: (number|Long);

        /** C2CPushRequest timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new C2CPushRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2CPushRequest instance
         */
        public static create(properties?: Protocol.IC2CPushRequest): Protocol.C2CPushRequest;

        /**
         * Encodes the specified C2CPushRequest message. Does not implicitly {@link Protocol.C2CPushRequest.verify|verify} messages.
         * @param message C2CPushRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IC2CPushRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2CPushRequest message, length delimited. Does not implicitly {@link Protocol.C2CPushRequest.verify|verify} messages.
         * @param message C2CPushRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IC2CPushRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2CPushRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2CPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.C2CPushRequest;

        /**
         * Decodes a C2CPushRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2CPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.C2CPushRequest;

        /**
         * Verifies a C2CPushRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2CPushRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2CPushRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.C2CPushRequest;

        /**
         * Creates a plain object from a C2CPushRequest message. Also converts values to other types if specified.
         * @param message C2CPushRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.C2CPushRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2CPushRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2CPushResponse. */
    interface IC2CPushResponse {

        /** C2CPushResponse msgid */
        msgid?: (number|Long|null);
    }

    /** Represents a C2CPushResponse. */
    class C2CPushResponse implements IC2CPushResponse {

        /**
         * Constructs a new C2CPushResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IC2CPushResponse);

        /** C2CPushResponse msgid. */
        public msgid: (number|Long);

        /**
         * Creates a new C2CPushResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2CPushResponse instance
         */
        public static create(properties?: Protocol.IC2CPushResponse): Protocol.C2CPushResponse;

        /**
         * Encodes the specified C2CPushResponse message. Does not implicitly {@link Protocol.C2CPushResponse.verify|verify} messages.
         * @param message C2CPushResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IC2CPushResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2CPushResponse message, length delimited. Does not implicitly {@link Protocol.C2CPushResponse.verify|verify} messages.
         * @param message C2CPushResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IC2CPushResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2CPushResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2CPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.C2CPushResponse;

        /**
         * Decodes a C2CPushResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2CPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.C2CPushResponse;

        /**
         * Verifies a C2CPushResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2CPushResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2CPushResponse
         */
        public static fromObject(object: { [k: string]: any }): Protocol.C2CPushResponse;

        /**
         * Creates a plain object from a C2CPushResponse message. Also converts values to other types if specified.
         * @param message C2CPushResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.C2CPushResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2CPushResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
