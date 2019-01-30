import * as $protobuf from "protobufjs";
/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a KickoutRequest. */
    interface IKickoutRequest {

        /** KickoutRequest reasion */
        reasion?: (Protocol.KickoutRequest.Reasion|null);
    }

    /** Represents a KickoutRequest. */
    class KickoutRequest implements IKickoutRequest {

        /**
         * Constructs a new KickoutRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IKickoutRequest);

        /** KickoutRequest reasion. */
        public reasion: Protocol.KickoutRequest.Reasion;

        /**
         * Creates a new KickoutRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickoutRequest instance
         */
        public static create(properties?: Protocol.IKickoutRequest): Protocol.KickoutRequest;

        /**
         * Encodes the specified KickoutRequest message. Does not implicitly {@link Protocol.KickoutRequest.verify|verify} messages.
         * @param message KickoutRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IKickoutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickoutRequest message, length delimited. Does not implicitly {@link Protocol.KickoutRequest.verify|verify} messages.
         * @param message KickoutRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IKickoutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickoutRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickoutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.KickoutRequest;

        /**
         * Decodes a KickoutRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickoutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.KickoutRequest;

        /**
         * Verifies a KickoutRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickoutRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickoutRequest
         */
        public static fromObject(object: { [k: string]: any }): Protocol.KickoutRequest;

        /**
         * Creates a plain object from a KickoutRequest message. Also converts values to other types if specified.
         * @param message KickoutRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.KickoutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickoutRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace KickoutRequest {

        /** Reasion enum. */
        enum Reasion {
            OTHER_LOGIN = 0
        }
    }
}
