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

    Protocol.MessageRequest = (function() {

        /**
         * Properties of a MessageRequest.
         * @memberof Protocol
         * @interface IMessageRequest
         * @property {Protocol.MessageRequest.RequestType|null} [TypeOfMsg] MessageRequest TypeOfMsg
         * @property {number|Long|null} [from] MessageRequest from
         * @property {number|Long|null} [to] MessageRequest to
         * @property {number|Long|null} [group] MessageRequest group
         * @property {string|null} [content] MessageRequest content
         * @property {number|Long|null} [uid] MessageRequest uid
         * @property {number|Long|null} [msgid] MessageRequest msgid
         * @property {string|null} [token] MessageRequest token
         * @property {number|Long|null} [timestamp] MessageRequest timestamp
         * @property {Protocol.MessageRequest.CtrlType|null} [TypeOfCtrl] MessageRequest TypeOfCtrl
         * @property {Protocol.MessageRequest.Reasion|null} [reasion] MessageRequest reasion
         * @property {number|Long|null} [offset] MessageRequest offset
         * @property {number|null} [limit] MessageRequest limit
         */

        /**
         * Constructs a new MessageRequest.
         * @memberof Protocol
         * @classdesc Represents a MessageRequest.
         * @implements IMessageRequest
         * @constructor
         * @param {Protocol.IMessageRequest=} [properties] Properties to set
         */
        function MessageRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageRequest TypeOfMsg.
         * @member {Protocol.MessageRequest.RequestType} TypeOfMsg
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.TypeOfMsg = 0;

        /**
         * MessageRequest from.
         * @member {number|Long} from
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageRequest to.
         * @member {number|Long} to
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageRequest group.
         * @member {number|Long} group
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.group = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageRequest content.
         * @member {string} content
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.content = "";

        /**
         * MessageRequest uid.
         * @member {number|Long} uid
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageRequest msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageRequest token.
         * @member {string} token
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.token = "";

        /**
         * MessageRequest timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageRequest TypeOfCtrl.
         * @member {Protocol.MessageRequest.CtrlType} TypeOfCtrl
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.TypeOfCtrl = 0;

        /**
         * MessageRequest reasion.
         * @member {Protocol.MessageRequest.Reasion} reasion
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.reasion = 0;

        /**
         * MessageRequest offset.
         * @member {number|Long} offset
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageRequest limit.
         * @member {number} limit
         * @memberof Protocol.MessageRequest
         * @instance
         */
        MessageRequest.prototype.limit = 0;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.MessageRequest
         * @static
         * @param {Protocol.IMessageRequest=} [properties] Properties to set
         * @returns {Protocol.MessageRequest} MessageRequest instance
         */
        MessageRequest.create = function create(properties) {
            return new MessageRequest(properties);
        };

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link Protocol.MessageRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.MessageRequest
         * @static
         * @param {Protocol.IMessageRequest} message MessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TypeOfMsg != null && message.hasOwnProperty("TypeOfMsg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TypeOfMsg);
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.from);
            if (message.to != null && message.hasOwnProperty("to"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.to);
            if (message.group != null && message.hasOwnProperty("group"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.group);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.uid);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.msgid);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.token);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.timestamp);
            if (message.TypeOfCtrl != null && message.hasOwnProperty("TypeOfCtrl"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.TypeOfCtrl);
            if (message.reasion != null && message.hasOwnProperty("reasion"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.reasion);
            if (message.offset != null && message.hasOwnProperty("offset"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.offset);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link Protocol.MessageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.MessageRequest
         * @static
         * @param {Protocol.IMessageRequest} message MessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.MessageRequest} MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.MessageRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TypeOfMsg = reader.int32();
                    break;
                case 2:
                    message.from = reader.int64();
                    break;
                case 3:
                    message.to = reader.int64();
                    break;
                case 4:
                    message.group = reader.int64();
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                case 6:
                    message.uid = reader.int64();
                    break;
                case 7:
                    message.msgid = reader.int64();
                    break;
                case 8:
                    message.token = reader.string();
                    break;
                case 9:
                    message.timestamp = reader.int64();
                    break;
                case 10:
                    message.TypeOfCtrl = reader.int32();
                    break;
                case 11:
                    message.reasion = reader.int32();
                    break;
                case 12:
                    message.offset = reader.int64();
                    break;
                case 13:
                    message.limit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.MessageRequest} MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageRequest message.
         * @function verify
         * @memberof Protocol.MessageRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TypeOfMsg != null && message.hasOwnProperty("TypeOfMsg"))
                switch (message.TypeOfMsg) {
                default:
                    return "TypeOfMsg: enum value expected";
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
                    break;
                }
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from) && !(message.from && $util.isInteger(message.from.low) && $util.isInteger(message.from.high)))
                    return "from: integer|Long expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isInteger(message.to) && !(message.to && $util.isInteger(message.to.low) && $util.isInteger(message.to.high)))
                    return "to: integer|Long expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isInteger(message.group) && !(message.group && $util.isInteger(message.group.low) && $util.isInteger(message.group.high)))
                    return "group: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.TypeOfCtrl != null && message.hasOwnProperty("TypeOfCtrl"))
                switch (message.TypeOfCtrl) {
                default:
                    return "TypeOfCtrl: enum value expected";
                case 0:
                case 1:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.reasion != null && message.hasOwnProperty("reasion"))
                switch (message.reasion) {
                default:
                    return "reasion: enum value expected";
                case 0:
                    break;
                }
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset) && !(message.offset && $util.isInteger(message.offset.low) && $util.isInteger(message.offset.high)))
                    return "offset: integer|Long expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.MessageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.MessageRequest} MessageRequest
         */
        MessageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.MessageRequest)
                return object;
            var message = new $root.Protocol.MessageRequest();
            switch (object.TypeOfMsg) {
            case "AUTH_REQUEST":
            case 0:
                message.TypeOfMsg = 0;
                break;
            case "C2CSEND_REQUEST":
            case 1:
                message.TypeOfMsg = 1;
                break;
            case "C2CPUSH_REQUEST":
            case 2:
                message.TypeOfMsg = 2;
                break;
            case "C2GSEND_REQUEST":
            case 3:
                message.TypeOfMsg = 3;
                break;
            case "C2GPUSH_REQUEST":
            case 4:
                message.TypeOfMsg = 4;
                break;
            case "CtrlSEND_REQUEST":
            case 5:
                message.TypeOfMsg = 5;
                break;
            case "CtrPUSH_REQUEST":
            case 6:
                message.TypeOfMsg = 6;
                break;
            case "KICKOUT_REQUEST":
            case 7:
                message.TypeOfMsg = 7;
                break;
            case "PULL_REQUEST":
            case 8:
                message.TypeOfMsg = 8;
                break;
            case "CONTROL_REQUEST":
            case 9:
                message.TypeOfMsg = 9;
                break;
            }
            if (object.from != null)
                if ($util.Long)
                    (message.from = $util.Long.fromValue(object.from)).unsigned = false;
                else if (typeof object.from === "string")
                    message.from = parseInt(object.from, 10);
                else if (typeof object.from === "number")
                    message.from = object.from;
                else if (typeof object.from === "object")
                    message.from = new $util.LongBits(object.from.low >>> 0, object.from.high >>> 0).toNumber();
            if (object.to != null)
                if ($util.Long)
                    (message.to = $util.Long.fromValue(object.to)).unsigned = false;
                else if (typeof object.to === "string")
                    message.to = parseInt(object.to, 10);
                else if (typeof object.to === "number")
                    message.to = object.to;
                else if (typeof object.to === "object")
                    message.to = new $util.LongBits(object.to.low >>> 0, object.to.high >>> 0).toNumber();
            if (object.group != null)
                if ($util.Long)
                    (message.group = $util.Long.fromValue(object.group)).unsigned = false;
                else if (typeof object.group === "string")
                    message.group = parseInt(object.group, 10);
                else if (typeof object.group === "number")
                    message.group = object.group;
                else if (typeof object.group === "object")
                    message.group = new $util.LongBits(object.group.low >>> 0, object.group.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            switch (object.TypeOfCtrl) {
            case "CREATE_GROUP":
            case 0:
                message.TypeOfCtrl = 0;
                break;
            case "GROUP_ADDMEMBERS":
            case 1:
                message.TypeOfCtrl = 1;
                break;
            case "GROUP_EXIT":
            case 3:
                message.TypeOfCtrl = 3;
                break;
            case "GROUP_DELETE":
            case 4:
                message.TypeOfCtrl = 4;
                break;
            case "MSG_BACK":
            case 5:
                message.TypeOfCtrl = 5;
                break;
            }
            switch (object.reasion) {
            case "OTHER_LOGIN":
            case 0:
                message.reasion = 0;
                break;
            }
            if (object.offset != null)
                if ($util.Long)
                    (message.offset = $util.Long.fromValue(object.offset)).unsigned = false;
                else if (typeof object.offset === "string")
                    message.offset = parseInt(object.offset, 10);
                else if (typeof object.offset === "number")
                    message.offset = object.offset;
                else if (typeof object.offset === "object")
                    message.offset = new $util.LongBits(object.offset.low >>> 0, object.offset.high >>> 0).toNumber();
            if (object.limit != null)
                message.limit = object.limit | 0;
            return message;
        };

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.MessageRequest
         * @static
         * @param {Protocol.MessageRequest} message MessageRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TypeOfMsg = options.enums === String ? "AUTH_REQUEST" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.from = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.from = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.to = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.to = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.group = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.group = options.longs === String ? "0" : 0;
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
                object.token = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.TypeOfCtrl = options.enums === String ? "CREATE_GROUP" : 0;
                object.reasion = options.enums === String ? "OTHER_LOGIN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.offset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.offset = options.longs === String ? "0" : 0;
                object.limit = 0;
            }
            if (message.TypeOfMsg != null && message.hasOwnProperty("TypeOfMsg"))
                object.TypeOfMsg = options.enums === String ? $root.Protocol.MessageRequest.RequestType[message.TypeOfMsg] : message.TypeOfMsg;
            if (message.from != null && message.hasOwnProperty("from"))
                if (typeof message.from === "number")
                    object.from = options.longs === String ? String(message.from) : message.from;
                else
                    object.from = options.longs === String ? $util.Long.prototype.toString.call(message.from) : options.longs === Number ? new $util.LongBits(message.from.low >>> 0, message.from.high >>> 0).toNumber() : message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                if (typeof message.to === "number")
                    object.to = options.longs === String ? String(message.to) : message.to;
                else
                    object.to = options.longs === String ? $util.Long.prototype.toString.call(message.to) : options.longs === Number ? new $util.LongBits(message.to.low >>> 0, message.to.high >>> 0).toNumber() : message.to;
            if (message.group != null && message.hasOwnProperty("group"))
                if (typeof message.group === "number")
                    object.group = options.longs === String ? String(message.group) : message.group;
                else
                    object.group = options.longs === String ? $util.Long.prototype.toString.call(message.group) : options.longs === Number ? new $util.LongBits(message.group.low >>> 0, message.group.high >>> 0).toNumber() : message.group;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.TypeOfCtrl != null && message.hasOwnProperty("TypeOfCtrl"))
                object.TypeOfCtrl = options.enums === String ? $root.Protocol.MessageRequest.CtrlType[message.TypeOfCtrl] : message.TypeOfCtrl;
            if (message.reasion != null && message.hasOwnProperty("reasion"))
                object.reasion = options.enums === String ? $root.Protocol.MessageRequest.Reasion[message.reasion] : message.reasion;
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (typeof message.offset === "number")
                    object.offset = options.longs === String ? String(message.offset) : message.offset;
                else
                    object.offset = options.longs === String ? $util.Long.prototype.toString.call(message.offset) : options.longs === Number ? new $util.LongBits(message.offset.low >>> 0, message.offset.high >>> 0).toNumber() : message.offset;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this MessageRequest to JSON.
         * @function toJSON
         * @memberof Protocol.MessageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * RequestType enum.
         * @name Protocol.MessageRequest.RequestType
         * @enum {string}
         * @property {number} AUTH_REQUEST=0 AUTH_REQUEST value
         * @property {number} C2CSEND_REQUEST=1 C2CSEND_REQUEST value
         * @property {number} C2CPUSH_REQUEST=2 C2CPUSH_REQUEST value
         * @property {number} C2GSEND_REQUEST=3 C2GSEND_REQUEST value
         * @property {number} C2GPUSH_REQUEST=4 C2GPUSH_REQUEST value
         * @property {number} CtrlSEND_REQUEST=5 CtrlSEND_REQUEST value
         * @property {number} CtrPUSH_REQUEST=6 CtrPUSH_REQUEST value
         * @property {number} KICKOUT_REQUEST=7 KICKOUT_REQUEST value
         * @property {number} PULL_REQUEST=8 PULL_REQUEST value
         * @property {number} CONTROL_REQUEST=9 CONTROL_REQUEST value
         */
        MessageRequest.RequestType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AUTH_REQUEST"] = 0;
            values[valuesById[1] = "C2CSEND_REQUEST"] = 1;
            values[valuesById[2] = "C2CPUSH_REQUEST"] = 2;
            values[valuesById[3] = "C2GSEND_REQUEST"] = 3;
            values[valuesById[4] = "C2GPUSH_REQUEST"] = 4;
            values[valuesById[5] = "CtrlSEND_REQUEST"] = 5;
            values[valuesById[6] = "CtrPUSH_REQUEST"] = 6;
            values[valuesById[7] = "KICKOUT_REQUEST"] = 7;
            values[valuesById[8] = "PULL_REQUEST"] = 8;
            values[valuesById[9] = "CONTROL_REQUEST"] = 9;
            return values;
        })();

        /**
         * CtrlType enum.
         * @name Protocol.MessageRequest.CtrlType
         * @enum {string}
         * @property {number} CREATE_GROUP=0 CREATE_GROUP value
         * @property {number} GROUP_ADDMEMBERS=1 GROUP_ADDMEMBERS value
         * @property {number} GROUP_EXIT=3 GROUP_EXIT value
         * @property {number} GROUP_DELETE=4 GROUP_DELETE value
         * @property {number} MSG_BACK=5 MSG_BACK value
         */
        MessageRequest.CtrlType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CREATE_GROUP"] = 0;
            values[valuesById[1] = "GROUP_ADDMEMBERS"] = 1;
            values[valuesById[3] = "GROUP_EXIT"] = 3;
            values[valuesById[4] = "GROUP_DELETE"] = 4;
            values[valuesById[5] = "MSG_BACK"] = 5;
            return values;
        })();

        /**
         * Reasion enum.
         * @name Protocol.MessageRequest.Reasion
         * @enum {string}
         * @property {number} OTHER_LOGIN=0 OTHER_LOGIN value
         */
        MessageRequest.Reasion = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OTHER_LOGIN"] = 0;
            return values;
        })();

        return MessageRequest;
    })();

    Protocol.PullMsg = (function() {

        /**
         * Properties of a PullMsg.
         * @memberof Protocol
         * @interface IPullMsg
         * @property {number|Long|null} [from] PullMsg from
         * @property {number|Long|null} [to] PullMsg to
         * @property {number|Long|null} [group] PullMsg group
         * @property {string|null} [content] PullMsg content
         * @property {number|Long|null} [msgid] PullMsg msgid
         * @property {number|null} [cmdid] PullMsg cmdid
         * @property {number|Long|null} [sendTime] PullMsg sendTime
         */

        /**
         * Constructs a new PullMsg.
         * @memberof Protocol
         * @classdesc Represents a PullMsg.
         * @implements IPullMsg
         * @constructor
         * @param {Protocol.IPullMsg=} [properties] Properties to set
         */
        function PullMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PullMsg from.
         * @member {number|Long} from
         * @memberof Protocol.PullMsg
         * @instance
         */
        PullMsg.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PullMsg to.
         * @member {number|Long} to
         * @memberof Protocol.PullMsg
         * @instance
         */
        PullMsg.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PullMsg group.
         * @member {number|Long} group
         * @memberof Protocol.PullMsg
         * @instance
         */
        PullMsg.prototype.group = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PullMsg content.
         * @member {string} content
         * @memberof Protocol.PullMsg
         * @instance
         */
        PullMsg.prototype.content = "";

        /**
         * PullMsg msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.PullMsg
         * @instance
         */
        PullMsg.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PullMsg cmdid.
         * @member {number} cmdid
         * @memberof Protocol.PullMsg
         * @instance
         */
        PullMsg.prototype.cmdid = 0;

        /**
         * PullMsg sendTime.
         * @member {number|Long} sendTime
         * @memberof Protocol.PullMsg
         * @instance
         */
        PullMsg.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PullMsg instance using the specified properties.
         * @function create
         * @memberof Protocol.PullMsg
         * @static
         * @param {Protocol.IPullMsg=} [properties] Properties to set
         * @returns {Protocol.PullMsg} PullMsg instance
         */
        PullMsg.create = function create(properties) {
            return new PullMsg(properties);
        };

        /**
         * Encodes the specified PullMsg message. Does not implicitly {@link Protocol.PullMsg.verify|verify} messages.
         * @function encode
         * @memberof Protocol.PullMsg
         * @static
         * @param {Protocol.IPullMsg} message PullMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PullMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.from);
            if (message.to != null && message.hasOwnProperty("to"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.to);
            if (message.group != null && message.hasOwnProperty("group"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.group);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.msgid);
            if (message.cmdid != null && message.hasOwnProperty("cmdid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cmdid);
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sendTime);
            return writer;
        };

        /**
         * Encodes the specified PullMsg message, length delimited. Does not implicitly {@link Protocol.PullMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.PullMsg
         * @static
         * @param {Protocol.IPullMsg} message PullMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PullMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PullMsg message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.PullMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.PullMsg} PullMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PullMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.PullMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.from = reader.int64();
                    break;
                case 2:
                    message.to = reader.int64();
                    break;
                case 3:
                    message.group = reader.int64();
                    break;
                case 4:
                    message.content = reader.string();
                    break;
                case 5:
                    message.msgid = reader.int64();
                    break;
                case 6:
                    message.cmdid = reader.int32();
                    break;
                case 7:
                    message.sendTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PullMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.PullMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.PullMsg} PullMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PullMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PullMsg message.
         * @function verify
         * @memberof Protocol.PullMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PullMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from) && !(message.from && $util.isInteger(message.from.low) && $util.isInteger(message.from.high)))
                    return "from: integer|Long expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isInteger(message.to) && !(message.to && $util.isInteger(message.to.low) && $util.isInteger(message.to.high)))
                    return "to: integer|Long expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isInteger(message.group) && !(message.group && $util.isInteger(message.group.low) && $util.isInteger(message.group.high)))
                    return "group: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.cmdid != null && message.hasOwnProperty("cmdid"))
                if (!$util.isInteger(message.cmdid))
                    return "cmdid: integer expected";
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a PullMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.PullMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.PullMsg} PullMsg
         */
        PullMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.PullMsg)
                return object;
            var message = new $root.Protocol.PullMsg();
            if (object.from != null)
                if ($util.Long)
                    (message.from = $util.Long.fromValue(object.from)).unsigned = false;
                else if (typeof object.from === "string")
                    message.from = parseInt(object.from, 10);
                else if (typeof object.from === "number")
                    message.from = object.from;
                else if (typeof object.from === "object")
                    message.from = new $util.LongBits(object.from.low >>> 0, object.from.high >>> 0).toNumber();
            if (object.to != null)
                if ($util.Long)
                    (message.to = $util.Long.fromValue(object.to)).unsigned = false;
                else if (typeof object.to === "string")
                    message.to = parseInt(object.to, 10);
                else if (typeof object.to === "number")
                    message.to = object.to;
                else if (typeof object.to === "object")
                    message.to = new $util.LongBits(object.to.low >>> 0, object.to.high >>> 0).toNumber();
            if (object.group != null)
                if ($util.Long)
                    (message.group = $util.Long.fromValue(object.group)).unsigned = false;
                else if (typeof object.group === "string")
                    message.group = parseInt(object.group, 10);
                else if (typeof object.group === "number")
                    message.group = object.group;
                else if (typeof object.group === "object")
                    message.group = new $util.LongBits(object.group.low >>> 0, object.group.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            if (object.cmdid != null)
                message.cmdid = object.cmdid | 0;
            if (object.sendTime != null)
                if ($util.Long)
                    (message.sendTime = $util.Long.fromValue(object.sendTime)).unsigned = false;
                else if (typeof object.sendTime === "string")
                    message.sendTime = parseInt(object.sendTime, 10);
                else if (typeof object.sendTime === "number")
                    message.sendTime = object.sendTime;
                else if (typeof object.sendTime === "object")
                    message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PullMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.PullMsg
         * @static
         * @param {Protocol.PullMsg} message PullMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PullMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.from = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.from = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.to = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.to = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.group = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.group = options.longs === String ? "0" : 0;
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
                object.cmdid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTime = options.longs === String ? "0" : 0;
            }
            if (message.from != null && message.hasOwnProperty("from"))
                if (typeof message.from === "number")
                    object.from = options.longs === String ? String(message.from) : message.from;
                else
                    object.from = options.longs === String ? $util.Long.prototype.toString.call(message.from) : options.longs === Number ? new $util.LongBits(message.from.low >>> 0, message.from.high >>> 0).toNumber() : message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                if (typeof message.to === "number")
                    object.to = options.longs === String ? String(message.to) : message.to;
                else
                    object.to = options.longs === String ? $util.Long.prototype.toString.call(message.to) : options.longs === Number ? new $util.LongBits(message.to.low >>> 0, message.to.high >>> 0).toNumber() : message.to;
            if (message.group != null && message.hasOwnProperty("group"))
                if (typeof message.group === "number")
                    object.group = options.longs === String ? String(message.group) : message.group;
                else
                    object.group = options.longs === String ? $util.Long.prototype.toString.call(message.group) : options.longs === Number ? new $util.LongBits(message.group.low >>> 0, message.group.high >>> 0).toNumber() : message.group;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            if (message.cmdid != null && message.hasOwnProperty("cmdid"))
                object.cmdid = message.cmdid;
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (typeof message.sendTime === "number")
                    object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
                else
                    object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
            return object;
        };

        /**
         * Converts this PullMsg to JSON.
         * @function toJSON
         * @memberof Protocol.PullMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PullMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PullMsg;
    })();

    Protocol.MessageResponse = (function() {

        /**
         * Properties of a MessageResponse.
         * @memberof Protocol
         * @interface IMessageResponse
         * @property {Protocol.MessageResponse.ResponseType|null} [TypeOfResponse] MessageResponse TypeOfResponse
         * @property {number|Long|null} [msgTo] MessageResponse msgTo
         * @property {Protocol.MessageResponse.Status|null} [status] MessageResponse status
         * @property {number|null} [errCode] MessageResponse errCode
         * @property {string|null} [errMsg] MessageResponse errMsg
         * @property {number|Long|null} [msgid] MessageResponse msgid
         * @property {number|Long|null} [timestamp] MessageResponse timestamp
         * @property {string|null} [content] MessageResponse content
         * @property {Array.<Protocol.IPullMsg>|null} [msg] MessageResponse msg
         */

        /**
         * Constructs a new MessageResponse.
         * @memberof Protocol
         * @classdesc Represents a MessageResponse.
         * @implements IMessageResponse
         * @constructor
         * @param {Protocol.IMessageResponse=} [properties] Properties to set
         */
        function MessageResponse(properties) {
            this.msg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageResponse TypeOfResponse.
         * @member {Protocol.MessageResponse.ResponseType} TypeOfResponse
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.TypeOfResponse = 0;

        /**
         * MessageResponse msgTo.
         * @member {number|Long} msgTo
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.msgTo = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageResponse status.
         * @member {Protocol.MessageResponse.Status} status
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.status = 0;

        /**
         * MessageResponse errCode.
         * @member {number} errCode
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.errCode = 0;

        /**
         * MessageResponse errMsg.
         * @member {string} errMsg
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.errMsg = "";

        /**
         * MessageResponse msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageResponse timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageResponse content.
         * @member {string} content
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.content = "";

        /**
         * MessageResponse msg.
         * @member {Array.<Protocol.IPullMsg>} msg
         * @memberof Protocol.MessageResponse
         * @instance
         */
        MessageResponse.prototype.msg = $util.emptyArray;

        /**
         * Creates a new MessageResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.MessageResponse
         * @static
         * @param {Protocol.IMessageResponse=} [properties] Properties to set
         * @returns {Protocol.MessageResponse} MessageResponse instance
         */
        MessageResponse.create = function create(properties) {
            return new MessageResponse(properties);
        };

        /**
         * Encodes the specified MessageResponse message. Does not implicitly {@link Protocol.MessageResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.MessageResponse
         * @static
         * @param {Protocol.IMessageResponse} message MessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TypeOfResponse != null && message.hasOwnProperty("TypeOfResponse"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TypeOfResponse);
            if (message.msgTo != null && message.hasOwnProperty("msgTo"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.msgTo);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.errCode);
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.errMsg);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.msgid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.content);
            if (message.msg != null && message.msg.length)
                for (var i = 0; i < message.msg.length; ++i)
                    $root.Protocol.PullMsg.encode(message.msg[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MessageResponse message, length delimited. Does not implicitly {@link Protocol.MessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.MessageResponse
         * @static
         * @param {Protocol.IMessageResponse} message MessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.MessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.MessageResponse} MessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.MessageResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TypeOfResponse = reader.int32();
                    break;
                case 2:
                    message.msgTo = reader.int64();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.errCode = reader.int32();
                    break;
                case 5:
                    message.errMsg = reader.string();
                    break;
                case 6:
                    message.msgid = reader.int64();
                    break;
                case 7:
                    message.timestamp = reader.int64();
                    break;
                case 8:
                    message.content = reader.string();
                    break;
                case 9:
                    if (!(message.msg && message.msg.length))
                        message.msg = [];
                    message.msg.push($root.Protocol.PullMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.MessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.MessageResponse} MessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageResponse message.
         * @function verify
         * @memberof Protocol.MessageResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TypeOfResponse != null && message.hasOwnProperty("TypeOfResponse"))
                switch (message.TypeOfResponse) {
                default:
                    return "TypeOfResponse: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.msgTo != null && message.hasOwnProperty("msgTo"))
                if (!$util.isInteger(message.msgTo) && !(message.msgTo && $util.isInteger(message.msgTo.low) && $util.isInteger(message.msgTo.high)))
                    return "msgTo: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.msg != null && message.hasOwnProperty("msg")) {
                if (!Array.isArray(message.msg))
                    return "msg: array expected";
                for (var i = 0; i < message.msg.length; ++i) {
                    var error = $root.Protocol.PullMsg.verify(message.msg[i]);
                    if (error)
                        return "msg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MessageResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.MessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.MessageResponse} MessageResponse
         */
        MessageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.MessageResponse)
                return object;
            var message = new $root.Protocol.MessageResponse();
            switch (object.TypeOfResponse) {
            case "Auth_RESPONSE":
            case 0:
                message.TypeOfResponse = 0;
                break;
            case "C2CSEND_RESPONSE":
            case 1:
                message.TypeOfResponse = 1;
                break;
            case "C2CPUSH_RESPONSE":
            case 2:
                message.TypeOfResponse = 2;
                break;
            case "C2GSEND_RESPONSE":
            case 3:
                message.TypeOfResponse = 3;
                break;
            case "C2GPUSH_RESPONSE":
            case 4:
                message.TypeOfResponse = 4;
                break;
            case "CtrlSEND_RESPONSE":
            case 5:
                message.TypeOfResponse = 5;
                break;
            case "CtrlPUSH_RESPONSE":
            case 6:
                message.TypeOfResponse = 6;
                break;
            case "PULL_RESPONSE":
            case 7:
                message.TypeOfResponse = 7;
                break;
            }
            if (object.msgTo != null)
                if ($util.Long)
                    (message.msgTo = $util.Long.fromValue(object.msgTo)).unsigned = false;
                else if (typeof object.msgTo === "string")
                    message.msgTo = parseInt(object.msgTo, 10);
                else if (typeof object.msgTo === "number")
                    message.msgTo = object.msgTo;
                else if (typeof object.msgTo === "object")
                    message.msgTo = new $util.LongBits(object.msgTo.low >>> 0, object.msgTo.high >>> 0).toNumber();
            switch (object.status) {
            case "OK":
            case 0:
                message.status = 0;
                break;
            case "Err":
            case 1:
                message.status = 1;
                break;
            }
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            if (object.msg) {
                if (!Array.isArray(object.msg))
                    throw TypeError(".Protocol.MessageResponse.msg: array expected");
                message.msg = [];
                for (var i = 0; i < object.msg.length; ++i) {
                    if (typeof object.msg[i] !== "object")
                        throw TypeError(".Protocol.MessageResponse.msg: object expected");
                    message.msg[i] = $root.Protocol.PullMsg.fromObject(object.msg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.MessageResponse
         * @static
         * @param {Protocol.MessageResponse} message MessageResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.msg = [];
            if (options.defaults) {
                object.TypeOfResponse = options.enums === String ? "Auth_RESPONSE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgTo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgTo = options.longs === String ? "0" : 0;
                object.status = options.enums === String ? "OK" : 0;
                object.errCode = 0;
                object.errMsg = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.content = "";
            }
            if (message.TypeOfResponse != null && message.hasOwnProperty("TypeOfResponse"))
                object.TypeOfResponse = options.enums === String ? $root.Protocol.MessageResponse.ResponseType[message.TypeOfResponse] : message.TypeOfResponse;
            if (message.msgTo != null && message.hasOwnProperty("msgTo"))
                if (typeof message.msgTo === "number")
                    object.msgTo = options.longs === String ? String(message.msgTo) : message.msgTo;
                else
                    object.msgTo = options.longs === String ? $util.Long.prototype.toString.call(message.msgTo) : options.longs === Number ? new $util.LongBits(message.msgTo.low >>> 0, message.msgTo.high >>> 0).toNumber() : message.msgTo;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Protocol.MessageResponse.Status[message.status] : message.status;
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.msg && message.msg.length) {
                object.msg = [];
                for (var j = 0; j < message.msg.length; ++j)
                    object.msg[j] = $root.Protocol.PullMsg.toObject(message.msg[j], options);
            }
            return object;
        };

        /**
         * Converts this MessageResponse to JSON.
         * @function toJSON
         * @memberof Protocol.MessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Status enum.
         * @name Protocol.MessageResponse.Status
         * @enum {string}
         * @property {number} OK=0 OK value
         * @property {number} Err=1 Err value
         */
        MessageResponse.Status = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "Err"] = 1;
            return values;
        })();

        /**
         * ResponseType enum.
         * @name Protocol.MessageResponse.ResponseType
         * @enum {string}
         * @property {number} Auth_RESPONSE=0 Auth_RESPONSE value
         * @property {number} C2CSEND_RESPONSE=1 C2CSEND_RESPONSE value
         * @property {number} C2CPUSH_RESPONSE=2 C2CPUSH_RESPONSE value
         * @property {number} C2GSEND_RESPONSE=3 C2GSEND_RESPONSE value
         * @property {number} C2GPUSH_RESPONSE=4 C2GPUSH_RESPONSE value
         * @property {number} CtrlSEND_RESPONSE=5 CtrlSEND_RESPONSE value
         * @property {number} CtrlPUSH_RESPONSE=6 CtrlPUSH_RESPONSE value
         * @property {number} PULL_RESPONSE=7 PULL_RESPONSE value
         */
        MessageResponse.ResponseType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Auth_RESPONSE"] = 0;
            values[valuesById[1] = "C2CSEND_RESPONSE"] = 1;
            values[valuesById[2] = "C2CPUSH_RESPONSE"] = 2;
            values[valuesById[3] = "C2GSEND_RESPONSE"] = 3;
            values[valuesById[4] = "C2GPUSH_RESPONSE"] = 4;
            values[valuesById[5] = "CtrlSEND_RESPONSE"] = 5;
            values[valuesById[6] = "CtrlPUSH_RESPONSE"] = 6;
            values[valuesById[7] = "PULL_RESPONSE"] = 7;
            return values;
        })();

        return MessageResponse;
    })();

    Protocol.ACKResponse = (function() {

        /**
         * Properties of a ACKResponse.
         * @memberof Protocol
         * @interface IACKResponse
         * @property {number|Long|null} [msgid] ACKResponse msgid
         * @property {number|Long|null} [timestamp] ACKResponse timestamp
         */

        /**
         * Constructs a new ACKResponse.
         * @memberof Protocol
         * @classdesc Represents a ACKResponse.
         * @implements IACKResponse
         * @constructor
         * @param {Protocol.IACKResponse=} [properties] Properties to set
         */
        function ACKResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ACKResponse msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.ACKResponse
         * @instance
         */
        ACKResponse.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ACKResponse timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.ACKResponse
         * @instance
         */
        ACKResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ACKResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.ACKResponse
         * @static
         * @param {Protocol.IACKResponse=} [properties] Properties to set
         * @returns {Protocol.ACKResponse} ACKResponse instance
         */
        ACKResponse.create = function create(properties) {
            return new ACKResponse(properties);
        };

        /**
         * Encodes the specified ACKResponse message. Does not implicitly {@link Protocol.ACKResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.ACKResponse
         * @static
         * @param {Protocol.IACKResponse} message ACKResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ACKResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified ACKResponse message, length delimited. Does not implicitly {@link Protocol.ACKResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.ACKResponse
         * @static
         * @param {Protocol.IACKResponse} message ACKResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ACKResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ACKResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.ACKResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.ACKResponse} ACKResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ACKResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.ACKResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgid = reader.int64();
                    break;
                case 2:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ACKResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.ACKResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.ACKResponse} ACKResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ACKResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ACKResponse message.
         * @function verify
         * @memberof Protocol.ACKResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ACKResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a ACKResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.ACKResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.ACKResponse} ACKResponse
         */
        ACKResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.ACKResponse)
                return object;
            var message = new $root.Protocol.ACKResponse();
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ACKResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.ACKResponse
         * @static
         * @param {Protocol.ACKResponse} message ACKResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ACKResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this ACKResponse to JSON.
         * @function toJSON
         * @memberof Protocol.ACKResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ACKResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ACKResponse;
    })();

    Protocol.EmptyRequest = (function() {

        /**
         * Properties of an EmptyRequest.
         * @memberof Protocol
         * @interface IEmptyRequest
         */

        /**
         * Constructs a new EmptyRequest.
         * @memberof Protocol
         * @classdesc Represents an EmptyRequest.
         * @implements IEmptyRequest
         * @constructor
         * @param {Protocol.IEmptyRequest=} [properties] Properties to set
         */
        function EmptyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new EmptyRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.EmptyRequest
         * @static
         * @param {Protocol.IEmptyRequest=} [properties] Properties to set
         * @returns {Protocol.EmptyRequest} EmptyRequest instance
         */
        EmptyRequest.create = function create(properties) {
            return new EmptyRequest(properties);
        };

        /**
         * Encodes the specified EmptyRequest message. Does not implicitly {@link Protocol.EmptyRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.EmptyRequest
         * @static
         * @param {Protocol.IEmptyRequest} message EmptyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified EmptyRequest message, length delimited. Does not implicitly {@link Protocol.EmptyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.EmptyRequest
         * @static
         * @param {Protocol.IEmptyRequest} message EmptyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.EmptyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.EmptyRequest} EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.EmptyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.EmptyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.EmptyRequest} EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmptyRequest message.
         * @function verify
         * @memberof Protocol.EmptyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.EmptyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.EmptyRequest} EmptyRequest
         */
        EmptyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.EmptyRequest)
                return object;
            return new $root.Protocol.EmptyRequest();
        };

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.EmptyRequest
         * @static
         * @param {Protocol.EmptyRequest} message EmptyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EmptyRequest to JSON.
         * @function toJSON
         * @memberof Protocol.EmptyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmptyRequest;
    })();

    Protocol.ToServerMsg = (function() {

        /**
         * Constructs a new ToServerMsg service.
         * @memberof Protocol
         * @classdesc Represents a ToServerMsg
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ToServerMsg(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ToServerMsg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ToServerMsg;

        /**
         * Creates new ToServerMsg service using the specified rpc implementation.
         * @function create
         * @memberof Protocol.ToServerMsg
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ToServerMsg} RPC service. Useful where requests and/or responses are streamed.
         */
        ToServerMsg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link Protocol.ToServerMsg#sendMsg}.
         * @memberof Protocol.ToServerMsg
         * @typedef SendMsgCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Protocol.ACKResponse} [response] ACKResponse
         */

        /**
         * Calls SendMsg.
         * @function sendMsg
         * @memberof Protocol.ToServerMsg
         * @instance
         * @param {Protocol.IMessageRequest} request MessageRequest message or plain object
         * @param {Protocol.ToServerMsg.SendMsgCallback} callback Node-style callback called with the error, if any, and ACKResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ToServerMsg.prototype.sendMsg = function sendMsg(request, callback) {
            return this.rpcCall(sendMsg, $root.Protocol.MessageRequest, $root.Protocol.ACKResponse, request, callback);
        }, "name", { value: "SendMsg" });

        /**
         * Calls SendMsg.
         * @function sendMsg
         * @memberof Protocol.ToServerMsg
         * @instance
         * @param {Protocol.IMessageRequest} request MessageRequest message or plain object
         * @returns {Promise<Protocol.ACKResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link Protocol.ToServerMsg#responseToGate}.
         * @memberof Protocol.ToServerMsg
         * @typedef ResponseToGateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Protocol.MessageResponse} [response] MessageResponse
         */

        /**
         * Calls ResponseToGate.
         * @function responseToGate
         * @memberof Protocol.ToServerMsg
         * @instance
         * @param {Protocol.IEmptyRequest} request EmptyRequest message or plain object
         * @param {Protocol.ToServerMsg.ResponseToGateCallback} callback Node-style callback called with the error, if any, and MessageResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ToServerMsg.prototype.responseToGate = function responseToGate(request, callback) {
            return this.rpcCall(responseToGate, $root.Protocol.EmptyRequest, $root.Protocol.MessageResponse, request, callback);
        }, "name", { value: "ResponseToGate" });

        /**
         * Calls ResponseToGate.
         * @function responseToGate
         * @memberof Protocol.ToServerMsg
         * @instance
         * @param {Protocol.IEmptyRequest} request EmptyRequest message or plain object
         * @returns {Promise<Protocol.MessageResponse>} Promise
         * @variation 2
         */

        return ToServerMsg;
    })();

    return Protocol;
})();

module.exports = $root;
