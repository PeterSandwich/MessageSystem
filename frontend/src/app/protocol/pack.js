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

    Protocol.Pack = (function() {

        /**
         * Properties of a Pack.
         * @memberof Protocol
         * @interface IPack
         * @property {Protocol.Pack.PackType|null} [type] Pack type
         * @property {Uint8Array|null} [body] Pack body
         */

        /**
         * Constructs a new Pack.
         * @memberof Protocol
         * @classdesc Represents a Pack.
         * @implements IPack
         * @constructor
         * @param {Protocol.IPack=} [properties] Properties to set
         */
        function Pack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pack type.
         * @member {Protocol.Pack.PackType} type
         * @memberof Protocol.Pack
         * @instance
         */
        Pack.prototype.type = 0;

        /**
         * Pack body.
         * @member {Uint8Array} body
         * @memberof Protocol.Pack
         * @instance
         */
        Pack.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Pack instance using the specified properties.
         * @function create
         * @memberof Protocol.Pack
         * @static
         * @param {Protocol.IPack=} [properties] Properties to set
         * @returns {Protocol.Pack} Pack instance
         */
        Pack.create = function create(properties) {
            return new Pack(properties);
        };

        /**
         * Encodes the specified Pack message. Does not implicitly {@link Protocol.Pack.verify|verify} messages.
         * @function encode
         * @memberof Protocol.Pack
         * @static
         * @param {Protocol.IPack} message Pack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified Pack message, length delimited. Does not implicitly {@link Protocol.Pack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.Pack
         * @static
         * @param {Protocol.IPack} message Pack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pack message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.Pack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.Pack} Pack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.Pack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.Pack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.Pack} Pack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pack message.
         * @function verify
         * @memberof Protocol.Pack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                    break;
                }
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a Pack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.Pack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.Pack} Pack
         */
        Pack.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.Pack)
                return object;
            var message = new $root.Protocol.Pack();
            switch (object.type) {
            case "Auth_Request":
            case 0:
                message.type = 0;
                break;
            case "Auth_Response":
            case 1:
                message.type = 1;
                break;
            case "C2CSend_Request":
            case 2:
                message.type = 2;
                break;
            case "C2CSend_Response":
            case 3:
                message.type = 3;
                break;
            case "C2CPush_Request":
            case 4:
                message.type = 4;
                break;
            case "C2CPush_Response":
            case 5:
                message.type = 5;
                break;
            case "C2GSend_Request":
            case 6:
                message.type = 6;
                break;
            case "C2GSend_Response":
            case 7:
                message.type = 7;
                break;
            case "C2GPush_Request":
            case 8:
                message.type = 8;
                break;
            case "C2GPush_Response":
            case 9:
                message.type = 9;
                break;
            case "CtrlSend_Request":
            case 10:
                message.type = 10;
                break;
            case "CtrlSend_Response":
            case 11:
                message.type = 11;
                break;
            case "CtrlPush_Request":
            case 12:
                message.type = 12;
                break;
            case "CtrlPush_Response":
            case 13:
                message.type = 13;
                break;
            case "Kickout_Request":
            case 14:
                message.type = 14;
                break;
            case "Pull_Request":
            case 15:
                message.type = 15;
                break;
            case "Pull_Msg":
            case 16:
                message.type = 16;
                break;
            case "Pull_Response":
            case 17:
                message.type = 17;
                break;
            }
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a Pack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.Pack
         * @static
         * @param {Protocol.Pack} message Pack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "Auth_Request" : 0;
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Protocol.Pack.PackType[message.type] : message.type;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this Pack to JSON.
         * @function toJSON
         * @memberof Protocol.Pack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * PackType enum.
         * @name Protocol.Pack.PackType
         * @enum {string}
         * @property {number} Auth_Request=0 Auth_Request value
         * @property {number} Auth_Response=1 Auth_Response value
         * @property {number} C2CSend_Request=2 C2CSend_Request value
         * @property {number} C2CSend_Response=3 C2CSend_Response value
         * @property {number} C2CPush_Request=4 C2CPush_Request value
         * @property {number} C2CPush_Response=5 C2CPush_Response value
         * @property {number} C2GSend_Request=6 C2GSend_Request value
         * @property {number} C2GSend_Response=7 C2GSend_Response value
         * @property {number} C2GPush_Request=8 C2GPush_Request value
         * @property {number} C2GPush_Response=9 C2GPush_Response value
         * @property {number} CtrlSend_Request=10 CtrlSend_Request value
         * @property {number} CtrlSend_Response=11 CtrlSend_Response value
         * @property {number} CtrlPush_Request=12 CtrlPush_Request value
         * @property {number} CtrlPush_Response=13 CtrlPush_Response value
         * @property {number} Kickout_Request=14 Kickout_Request value
         * @property {number} Pull_Request=15 Pull_Request value
         * @property {number} Pull_Msg=16 Pull_Msg value
         * @property {number} Pull_Response=17 Pull_Response value
         */
        Pack.PackType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Auth_Request"] = 0;
            values[valuesById[1] = "Auth_Response"] = 1;
            values[valuesById[2] = "C2CSend_Request"] = 2;
            values[valuesById[3] = "C2CSend_Response"] = 3;
            values[valuesById[4] = "C2CPush_Request"] = 4;
            values[valuesById[5] = "C2CPush_Response"] = 5;
            values[valuesById[6] = "C2GSend_Request"] = 6;
            values[valuesById[7] = "C2GSend_Response"] = 7;
            values[valuesById[8] = "C2GPush_Request"] = 8;
            values[valuesById[9] = "C2GPush_Response"] = 9;
            values[valuesById[10] = "CtrlSend_Request"] = 10;
            values[valuesById[11] = "CtrlSend_Response"] = 11;
            values[valuesById[12] = "CtrlPush_Request"] = 12;
            values[valuesById[13] = "CtrlPush_Response"] = 13;
            values[valuesById[14] = "Kickout_Request"] = 14;
            values[valuesById[15] = "Pull_Request"] = 15;
            values[valuesById[16] = "Pull_Msg"] = 16;
            values[valuesById[17] = "Pull_Response"] = 17;
            return values;
        })();

        return Pack;
    })();

    return Protocol;
})();

module.exports = $root;
