/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Protocol = (function() {

    /**
     * Namespace Protocol.
     * @exports Protocol
     * @namespace
     */
    var Protocol = {};

    Protocol.KickoutRequest = (function() {

        /**
         * Properties of a KickoutRequest.
         * @memberof Protocol
         * @interface IKickoutRequest
         * @property {Protocol.KickoutRequest.Reasion|null} [reasion] KickoutRequest reasion
         */

        /**
         * Constructs a new KickoutRequest.
         * @memberof Protocol
         * @classdesc Represents a KickoutRequest.
         * @implements IKickoutRequest
         * @constructor
         * @param {Protocol.IKickoutRequest=} [properties] Properties to set
         */
        function KickoutRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickoutRequest reasion.
         * @member {Protocol.KickoutRequest.Reasion} reasion
         * @memberof Protocol.KickoutRequest
         * @instance
         */
        KickoutRequest.prototype.reasion = 0;

        /**
         * Creates a new KickoutRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.KickoutRequest
         * @static
         * @param {Protocol.IKickoutRequest=} [properties] Properties to set
         * @returns {Protocol.KickoutRequest} KickoutRequest instance
         */
        KickoutRequest.create = function create(properties) {
            return new KickoutRequest(properties);
        };

        /**
         * Encodes the specified KickoutRequest message. Does not implicitly {@link Protocol.KickoutRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.KickoutRequest
         * @static
         * @param {Protocol.IKickoutRequest} message KickoutRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickoutRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reasion != null && message.hasOwnProperty("reasion"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reasion);
            return writer;
        };

        /**
         * Encodes the specified KickoutRequest message, length delimited. Does not implicitly {@link Protocol.KickoutRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.KickoutRequest
         * @static
         * @param {Protocol.IKickoutRequest} message KickoutRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickoutRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickoutRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.KickoutRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.KickoutRequest} KickoutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickoutRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.KickoutRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reasion = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickoutRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.KickoutRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.KickoutRequest} KickoutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickoutRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickoutRequest message.
         * @function verify
         * @memberof Protocol.KickoutRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickoutRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reasion != null && message.hasOwnProperty("reasion"))
                switch (message.reasion) {
                default:
                    return "reasion: enum value expected";
                case 0:
                    break;
                }
            return null;
        };

        /**
         * Creates a KickoutRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.KickoutRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.KickoutRequest} KickoutRequest
         */
        KickoutRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.KickoutRequest)
                return object;
            var message = new $root.Protocol.KickoutRequest();
            switch (object.reasion) {
            case "OTHER_LOGIN":
            case 0:
                message.reasion = 0;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a KickoutRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.KickoutRequest
         * @static
         * @param {Protocol.KickoutRequest} message KickoutRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickoutRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reasion = options.enums === String ? "OTHER_LOGIN" : 0;
            if (message.reasion != null && message.hasOwnProperty("reasion"))
                object.reasion = options.enums === String ? $root.Protocol.KickoutRequest.Reasion[message.reasion] : message.reasion;
            return object;
        };

        /**
         * Converts this KickoutRequest to JSON.
         * @function toJSON
         * @memberof Protocol.KickoutRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickoutRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Reasion enum.
         * @name Protocol.KickoutRequest.Reasion
         * @enum {string}
         * @property {number} OTHER_LOGIN=0 OTHER_LOGIN value
         */
        KickoutRequest.Reasion = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OTHER_LOGIN"] = 0;
            return values;
        })();

        return KickoutRequest;
    })();

    return Protocol;
})();

module.exports = $root;
