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

    Protocol.PullRequest = (function() {

        /**
         * Properties of a PullRequest.
         * @memberof Protocol
         * @interface IPullRequest
         * @property {number|Long|null} [uid] PullRequest uid
         * @property {number|Long|null} [offset] PullRequest offset
         * @property {number|null} [limit] PullRequest limit
         */

        /**
         * Constructs a new PullRequest.
         * @memberof Protocol
         * @classdesc Represents a PullRequest.
         * @implements IPullRequest
         * @constructor
         * @param {Protocol.IPullRequest=} [properties] Properties to set
         */
        function PullRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PullRequest uid.
         * @member {number|Long} uid
         * @memberof Protocol.PullRequest
         * @instance
         */
        PullRequest.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PullRequest offset.
         * @member {number|Long} offset
         * @memberof Protocol.PullRequest
         * @instance
         */
        PullRequest.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PullRequest limit.
         * @member {number} limit
         * @memberof Protocol.PullRequest
         * @instance
         */
        PullRequest.prototype.limit = 0;

        /**
         * Creates a new PullRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.PullRequest
         * @static
         * @param {Protocol.IPullRequest=} [properties] Properties to set
         * @returns {Protocol.PullRequest} PullRequest instance
         */
        PullRequest.create = function create(properties) {
            return new PullRequest(properties);
        };

        /**
         * Encodes the specified PullRequest message. Does not implicitly {@link Protocol.PullRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.PullRequest
         * @static
         * @param {Protocol.IPullRequest} message PullRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PullRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.offset != null && message.hasOwnProperty("offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.offset);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified PullRequest message, length delimited. Does not implicitly {@link Protocol.PullRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.PullRequest
         * @static
         * @param {Protocol.IPullRequest} message PullRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PullRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PullRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.PullRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.PullRequest} PullRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PullRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.PullRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.offset = reader.int64();
                    break;
                case 3:
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
         * Decodes a PullRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.PullRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.PullRequest} PullRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PullRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PullRequest message.
         * @function verify
         * @memberof Protocol.PullRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PullRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset) && !(message.offset && $util.isInteger(message.offset.low) && $util.isInteger(message.offset.high)))
                    return "offset: integer|Long expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a PullRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.PullRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.PullRequest} PullRequest
         */
        PullRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.PullRequest)
                return object;
            var message = new $root.Protocol.PullRequest();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
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
         * Creates a plain object from a PullRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.PullRequest
         * @static
         * @param {Protocol.PullRequest} message PullRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PullRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.offset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.offset = options.longs === String ? "0" : 0;
                object.limit = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
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
         * Converts this PullRequest to JSON.
         * @function toJSON
         * @memberof Protocol.PullRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PullRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PullRequest;
    })();

    Protocol.PullMsg = (function() {

        /**
         * Properties of a PullMsg.
         * @memberof Protocol
         * @interface IPullMsg
         * @property {number|Long|null} [from] PullMsg from
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
            if (message.group != null && message.hasOwnProperty("group"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.group);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.msgid);
            if (message.cmdid != null && message.hasOwnProperty("cmdid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cmdid);
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.sendTime);
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
                    message.group = reader.int64();
                    break;
                case 3:
                    message.content = reader.string();
                    break;
                case 4:
                    message.msgid = reader.int64();
                    break;
                case 5:
                    message.cmdid = reader.int32();
                    break;
                case 6:
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

    Protocol.PullResponse = (function() {

        /**
         * Properties of a PullResponse.
         * @memberof Protocol
         * @interface IPullResponse
         * @property {Array.<Protocol.IPullMsg>|null} [msg] PullResponse msg
         */

        /**
         * Constructs a new PullResponse.
         * @memberof Protocol
         * @classdesc Represents a PullResponse.
         * @implements IPullResponse
         * @constructor
         * @param {Protocol.IPullResponse=} [properties] Properties to set
         */
        function PullResponse(properties) {
            this.msg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PullResponse msg.
         * @member {Array.<Protocol.IPullMsg>} msg
         * @memberof Protocol.PullResponse
         * @instance
         */
        PullResponse.prototype.msg = $util.emptyArray;

        /**
         * Creates a new PullResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.PullResponse
         * @static
         * @param {Protocol.IPullResponse=} [properties] Properties to set
         * @returns {Protocol.PullResponse} PullResponse instance
         */
        PullResponse.create = function create(properties) {
            return new PullResponse(properties);
        };

        /**
         * Encodes the specified PullResponse message. Does not implicitly {@link Protocol.PullResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.PullResponse
         * @static
         * @param {Protocol.IPullResponse} message PullResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PullResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.msg.length)
                for (var i = 0; i < message.msg.length; ++i)
                    $root.Protocol.PullMsg.encode(message.msg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PullResponse message, length delimited. Does not implicitly {@link Protocol.PullResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.PullResponse
         * @static
         * @param {Protocol.IPullResponse} message PullResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PullResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PullResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.PullResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.PullResponse} PullResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PullResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.PullResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
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
         * Decodes a PullResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.PullResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.PullResponse} PullResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PullResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PullResponse message.
         * @function verify
         * @memberof Protocol.PullResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PullResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * Creates a PullResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.PullResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.PullResponse} PullResponse
         */
        PullResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.PullResponse)
                return object;
            var message = new $root.Protocol.PullResponse();
            if (object.msg) {
                if (!Array.isArray(object.msg))
                    throw TypeError(".Protocol.PullResponse.msg: array expected");
                message.msg = [];
                for (var i = 0; i < object.msg.length; ++i) {
                    if (typeof object.msg[i] !== "object")
                        throw TypeError(".Protocol.PullResponse.msg: object expected");
                    message.msg[i] = $root.Protocol.PullMsg.fromObject(object.msg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PullResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.PullResponse
         * @static
         * @param {Protocol.PullResponse} message PullResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PullResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.msg = [];
            if (message.msg && message.msg.length) {
                object.msg = [];
                for (var j = 0; j < message.msg.length; ++j)
                    object.msg[j] = $root.Protocol.PullMsg.toObject(message.msg[j], options);
            }
            return object;
        };

        /**
         * Converts this PullResponse to JSON.
         * @function toJSON
         * @memberof Protocol.PullResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PullResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PullResponse;
    })();

    return Protocol;
})();

module.exports = $root;
