import * as $protobuf from "protobufjs";
/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a Pack. */
    interface IPack {

        /** Pack type */
        type?: (Protocol.Pack.PackType|null);

        /** Pack body */
        body?: (Uint8Array|null);
    }

    /** Represents a Pack. */
    class Pack implements IPack {

        /**
         * Constructs a new Pack.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IPack);

        /** Pack type. */
        public type: Protocol.Pack.PackType;

        /** Pack body. */
        public body: Uint8Array;

        /**
         * Creates a new Pack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pack instance
         */
        public static create(properties?: Protocol.IPack): Protocol.Pack;

        /**
         * Encodes the specified Pack message. Does not implicitly {@link Protocol.Pack.verify|verify} messages.
         * @param message Pack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IPack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pack message, length delimited. Does not implicitly {@link Protocol.Pack.verify|verify} messages.
         * @param message Pack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IPack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.Pack;

        /**
         * Decodes a Pack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.Pack;

        /**
         * Verifies a Pack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pack
         */
        public static fromObject(object: { [k: string]: any }): Protocol.Pack;

        /**
         * Creates a plain object from a Pack message. Also converts values to other types if specified.
         * @param message Pack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.Pack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Pack {

        /** PackType enum. */
        enum PackType {
            Auth_Request = 0,
            Auth_Response = 1,
            C2CSend_Request = 2,
            C2CSend_Response = 3,
            C2CPush_Request = 4,
            C2CPush_Response = 5,
            C2GSend_Request = 6,
            C2GSend_Response = 7,
            C2GPush_Request = 8,
            C2GPush_Response = 9,
            CtrlSend_Request = 10,
            CtrlSend_Response = 11,
            CtrlPush_Request = 12,
            CtrlPush_Response = 13,
            Kickout_Request = 14,
            Pull_Request = 15,
            Pull_Msg = 16,
            Pull_Response = 17
        }
    }
}
