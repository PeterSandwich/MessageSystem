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

    Protocol.CtrlSendRequest = (function() {

        /**
         * Properties of a CtrlSendRequest.
         * @memberof Protocol
         * @interface ICtrlSendRequest
         * @property {number|Long|null} [from] CtrlSendRequest from
         * @property {Protocol.CtrlSendRequest.CtrlSendType|null} [type] CtrlSendRequest type
         * @property {number|Long|null} [to] CtrlSendRequest to
         * @property {number|Long|null} [msgid] CtrlSendRequest msgid
         * @property {string|null} [content] CtrlSendRequest content
         */

        /**
         * Constructs a new CtrlSendRequest.
         * @memberof Protocol
         * @classdesc Represents a CtrlSendRequest.
         * @implements ICtrlSendRequest
         * @constructor
         * @param {Protocol.ICtrlSendRequest=} [properties] Properties to set
         */
        function CtrlSendRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CtrlSendRequest from.
         * @member {number|Long} from
         * @memberof Protocol.CtrlSendRequest
         * @instance
         */
        CtrlSendRequest.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrlSendRequest type.
         * @member {Protocol.CtrlSendRequest.CtrlSendType} type
         * @memberof Protocol.CtrlSendRequest
         * @instance
         */
        CtrlSendRequest.prototype.type = 0;

        /**
         * CtrlSendRequest to.
         * @member {number|Long} to
         * @memberof Protocol.CtrlSendRequest
         * @instance
         */
        CtrlSendRequest.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrlSendRequest msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.CtrlSendRequest
         * @instance
         */
        CtrlSendRequest.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrlSendRequest content.
         * @member {string} content
         * @memberof Protocol.CtrlSendRequest
         * @instance
         */
        CtrlSendRequest.prototype.content = "";

        /**
         * Creates a new CtrlSendRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.CtrlSendRequest
         * @static
         * @param {Protocol.ICtrlSendRequest=} [properties] Properties to set
         * @returns {Protocol.CtrlSendRequest} CtrlSendRequest instance
         */
        CtrlSendRequest.create = function create(properties) {
            return new CtrlSendRequest(properties);
        };

        /**
         * Encodes the specified CtrlSendRequest message. Does not implicitly {@link Protocol.CtrlSendRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.CtrlSendRequest
         * @static
         * @param {Protocol.ICtrlSendRequest} message CtrlSendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CtrlSendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.from);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.to != null && message.hasOwnProperty("to"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.to);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.msgid);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified CtrlSendRequest message, length delimited. Does not implicitly {@link Protocol.CtrlSendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.CtrlSendRequest
         * @static
         * @param {Protocol.ICtrlSendRequest} message CtrlSendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CtrlSendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CtrlSendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.CtrlSendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.CtrlSendRequest} CtrlSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CtrlSendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.CtrlSendRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.from = reader.int64();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.to = reader.int64();
                    break;
                case 4:
                    message.msgid = reader.int64();
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CtrlSendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.CtrlSendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.CtrlSendRequest} CtrlSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CtrlSendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CtrlSendRequest message.
         * @function verify
         * @memberof Protocol.CtrlSendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CtrlSendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from) && !(message.from && $util.isInteger(message.from.low) && $util.isInteger(message.from.high)))
                    return "from: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isInteger(message.to) && !(message.to && $util.isInteger(message.to.low) && $util.isInteger(message.to.high)))
                    return "to: integer|Long expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a CtrlSendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.CtrlSendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.CtrlSendRequest} CtrlSendRequest
         */
        CtrlSendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.CtrlSendRequest)
                return object;
            var message = new $root.Protocol.CtrlSendRequest();
            if (object.from != null)
                if ($util.Long)
                    (message.from = $util.Long.fromValue(object.from)).unsigned = false;
                else if (typeof object.from === "string")
                    message.from = parseInt(object.from, 10);
                else if (typeof object.from === "number")
                    message.from = object.from;
                else if (typeof object.from === "object")
                    message.from = new $util.LongBits(object.from.low >>> 0, object.from.high >>> 0).toNumber();
            switch (object.type) {
            case "CREATE_GROUP":
            case 0:
                message.type = 0;
                break;
            case "GROUP_ADDMEMBERS":
            case 1:
                message.type = 1;
                break;
            case "GROUP_EXIT":
            case 3:
                message.type = 3;
                break;
            case "GROUP_DELETE":
            case 4:
                message.type = 4;
                break;
            case "MSG_BACK":
            case 5:
                message.type = 5;
                break;
            }
            if (object.to != null)
                if ($util.Long)
                    (message.to = $util.Long.fromValue(object.to)).unsigned = false;
                else if (typeof object.to === "string")
                    message.to = parseInt(object.to, 10);
                else if (typeof object.to === "number")
                    message.to = object.to;
                else if (typeof object.to === "object")
                    message.to = new $util.LongBits(object.to.low >>> 0, object.to.high >>> 0).toNumber();
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a CtrlSendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.CtrlSendRequest
         * @static
         * @param {Protocol.CtrlSendRequest} message CtrlSendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CtrlSendRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.from = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.from = options.longs === String ? "0" : 0;
                object.type = options.enums === String ? "CREATE_GROUP" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.to = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.to = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
                object.content = "";
            }
            if (message.from != null && message.hasOwnProperty("from"))
                if (typeof message.from === "number")
                    object.from = options.longs === String ? String(message.from) : message.from;
                else
                    object.from = options.longs === String ? $util.Long.prototype.toString.call(message.from) : options.longs === Number ? new $util.LongBits(message.from.low >>> 0, message.from.high >>> 0).toNumber() : message.from;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Protocol.CtrlSendRequest.CtrlSendType[message.type] : message.type;
            if (message.to != null && message.hasOwnProperty("to"))
                if (typeof message.to === "number")
                    object.to = options.longs === String ? String(message.to) : message.to;
                else
                    object.to = options.longs === String ? $util.Long.prototype.toString.call(message.to) : options.longs === Number ? new $util.LongBits(message.to.low >>> 0, message.to.high >>> 0).toNumber() : message.to;
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this CtrlSendRequest to JSON.
         * @function toJSON
         * @memberof Protocol.CtrlSendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CtrlSendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CtrlSendType enum.
         * @name Protocol.CtrlSendRequest.CtrlSendType
         * @enum {string}
         * @property {number} CREATE_GROUP=0 CREATE_GROUP value
         * @property {number} GROUP_ADDMEMBERS=1 GROUP_ADDMEMBERS value
         * @property {number} GROUP_EXIT=3 GROUP_EXIT value
         * @property {number} GROUP_DELETE=4 GROUP_DELETE value
         * @property {number} MSG_BACK=5 MSG_BACK value
         */
        CtrlSendRequest.CtrlSendType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CREATE_GROUP"] = 0;
            values[valuesById[1] = "GROUP_ADDMEMBERS"] = 1;
            values[valuesById[3] = "GROUP_EXIT"] = 3;
            values[valuesById[4] = "GROUP_DELETE"] = 4;
            values[valuesById[5] = "MSG_BACK"] = 5;
            return values;
        })();

        return CtrlSendRequest;
    })();

    Protocol.CtrlSendResponse = (function() {

        /**
         * Properties of a CtrlSendResponse.
         * @memberof Protocol
         * @interface ICtrlSendResponse
         * @property {number|Long|null} [msgid] CtrlSendResponse msgid
         * @property {number|Long|null} [timestamp] CtrlSendResponse timestamp
         * @property {string|null} [content] CtrlSendResponse content
         */

        /**
         * Constructs a new CtrlSendResponse.
         * @memberof Protocol
         * @classdesc Represents a CtrlSendResponse.
         * @implements ICtrlSendResponse
         * @constructor
         * @param {Protocol.ICtrlSendResponse=} [properties] Properties to set
         */
        function CtrlSendResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CtrlSendResponse msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.CtrlSendResponse
         * @instance
         */
        CtrlSendResponse.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrlSendResponse timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.CtrlSendResponse
         * @instance
         */
        CtrlSendResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrlSendResponse content.
         * @member {string} content
         * @memberof Protocol.CtrlSendResponse
         * @instance
         */
        CtrlSendResponse.prototype.content = "";

        /**
         * Creates a new CtrlSendResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.CtrlSendResponse
         * @static
         * @param {Protocol.ICtrlSendResponse=} [properties] Properties to set
         * @returns {Protocol.CtrlSendResponse} CtrlSendResponse instance
         */
        CtrlSendResponse.create = function create(properties) {
            return new CtrlSendResponse(properties);
        };

        /**
         * Encodes the specified CtrlSendResponse message. Does not implicitly {@link Protocol.CtrlSendResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.CtrlSendResponse
         * @static
         * @param {Protocol.ICtrlSendResponse} message CtrlSendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CtrlSendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified CtrlSendResponse message, length delimited. Does not implicitly {@link Protocol.CtrlSendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.CtrlSendResponse
         * @static
         * @param {Protocol.ICtrlSendResponse} message CtrlSendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CtrlSendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CtrlSendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.CtrlSendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.CtrlSendResponse} CtrlSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CtrlSendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.CtrlSendResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgid = reader.int64();
                    break;
                case 2:
                    message.timestamp = reader.int64();
                    break;
                case 3:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CtrlSendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.CtrlSendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.CtrlSendResponse} CtrlSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CtrlSendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CtrlSendResponse message.
         * @function verify
         * @memberof Protocol.CtrlSendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CtrlSendResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a CtrlSendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.CtrlSendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.CtrlSendResponse} CtrlSendResponse
         */
        CtrlSendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.CtrlSendResponse)
                return object;
            var message = new $root.Protocol.CtrlSendResponse();
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
            return message;
        };

        /**
         * Creates a plain object from a CtrlSendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.CtrlSendResponse
         * @static
         * @param {Protocol.CtrlSendResponse} message CtrlSendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CtrlSendResponse.toObject = function toObject(message, options) {
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
                object.content = "";
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
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this CtrlSendResponse to JSON.
         * @function toJSON
         * @memberof Protocol.CtrlSendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CtrlSendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CtrlSendResponse;
    })();

    Protocol.CtrPushRequest = (function() {

        /**
         * Properties of a CtrPushRequest.
         * @memberof Protocol
         * @interface ICtrPushRequest
         * @property {number|Long|null} [from] CtrPushRequest from
         * @property {Protocol.CtrPushRequest.CtrlPushType|null} [type] CtrPushRequest type
         * @property {number|Long|null} [to] CtrPushRequest to
         * @property {number|Long|null} [msgid] CtrPushRequest msgid
         * @property {string|null} [content] CtrPushRequest content
         */

        /**
         * Constructs a new CtrPushRequest.
         * @memberof Protocol
         * @classdesc Represents a CtrPushRequest.
         * @implements ICtrPushRequest
         * @constructor
         * @param {Protocol.ICtrPushRequest=} [properties] Properties to set
         */
        function CtrPushRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CtrPushRequest from.
         * @member {number|Long} from
         * @memberof Protocol.CtrPushRequest
         * @instance
         */
        CtrPushRequest.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrPushRequest type.
         * @member {Protocol.CtrPushRequest.CtrlPushType} type
         * @memberof Protocol.CtrPushRequest
         * @instance
         */
        CtrPushRequest.prototype.type = 0;

        /**
         * CtrPushRequest to.
         * @member {number|Long} to
         * @memberof Protocol.CtrPushRequest
         * @instance
         */
        CtrPushRequest.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrPushRequest msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.CtrPushRequest
         * @instance
         */
        CtrPushRequest.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrPushRequest content.
         * @member {string} content
         * @memberof Protocol.CtrPushRequest
         * @instance
         */
        CtrPushRequest.prototype.content = "";

        /**
         * Creates a new CtrPushRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.CtrPushRequest
         * @static
         * @param {Protocol.ICtrPushRequest=} [properties] Properties to set
         * @returns {Protocol.CtrPushRequest} CtrPushRequest instance
         */
        CtrPushRequest.create = function create(properties) {
            return new CtrPushRequest(properties);
        };

        /**
         * Encodes the specified CtrPushRequest message. Does not implicitly {@link Protocol.CtrPushRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.CtrPushRequest
         * @static
         * @param {Protocol.ICtrPushRequest} message CtrPushRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CtrPushRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.from);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.to != null && message.hasOwnProperty("to"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.to);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.msgid);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified CtrPushRequest message, length delimited. Does not implicitly {@link Protocol.CtrPushRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.CtrPushRequest
         * @static
         * @param {Protocol.ICtrPushRequest} message CtrPushRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CtrPushRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CtrPushRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.CtrPushRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.CtrPushRequest} CtrPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CtrPushRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.CtrPushRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.from = reader.int64();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.to = reader.int64();
                    break;
                case 4:
                    message.msgid = reader.int64();
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CtrPushRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.CtrPushRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.CtrPushRequest} CtrPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CtrPushRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CtrPushRequest message.
         * @function verify
         * @memberof Protocol.CtrPushRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CtrPushRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from) && !(message.from && $util.isInteger(message.from.low) && $util.isInteger(message.from.high)))
                    return "from: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 3:
                case 4:
                    break;
                }
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isInteger(message.to) && !(message.to && $util.isInteger(message.to.low) && $util.isInteger(message.to.high)))
                    return "to: integer|Long expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a CtrPushRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.CtrPushRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.CtrPushRequest} CtrPushRequest
         */
        CtrPushRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.CtrPushRequest)
                return object;
            var message = new $root.Protocol.CtrPushRequest();
            if (object.from != null)
                if ($util.Long)
                    (message.from = $util.Long.fromValue(object.from)).unsigned = false;
                else if (typeof object.from === "string")
                    message.from = parseInt(object.from, 10);
                else if (typeof object.from === "number")
                    message.from = object.from;
                else if (typeof object.from === "object")
                    message.from = new $util.LongBits(object.from.low >>> 0, object.from.high >>> 0).toNumber();
            switch (object.type) {
            case "CREATE_GROUP":
            case 0:
                message.type = 0;
                break;
            case "GROUP_ADDMEMBERS":
            case 1:
                message.type = 1;
                break;
            case "GROUP_EXIT":
            case 3:
                message.type = 3;
                break;
            case "GROUP_DELETE":
            case 4:
                message.type = 4;
                break;
            }
            if (object.to != null)
                if ($util.Long)
                    (message.to = $util.Long.fromValue(object.to)).unsigned = false;
                else if (typeof object.to === "string")
                    message.to = parseInt(object.to, 10);
                else if (typeof object.to === "number")
                    message.to = object.to;
                else if (typeof object.to === "object")
                    message.to = new $util.LongBits(object.to.low >>> 0, object.to.high >>> 0).toNumber();
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a CtrPushRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.CtrPushRequest
         * @static
         * @param {Protocol.CtrPushRequest} message CtrPushRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CtrPushRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.from = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.from = options.longs === String ? "0" : 0;
                object.type = options.enums === String ? "CREATE_GROUP" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.to = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.to = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
                object.content = "";
            }
            if (message.from != null && message.hasOwnProperty("from"))
                if (typeof message.from === "number")
                    object.from = options.longs === String ? String(message.from) : message.from;
                else
                    object.from = options.longs === String ? $util.Long.prototype.toString.call(message.from) : options.longs === Number ? new $util.LongBits(message.from.low >>> 0, message.from.high >>> 0).toNumber() : message.from;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Protocol.CtrPushRequest.CtrlPushType[message.type] : message.type;
            if (message.to != null && message.hasOwnProperty("to"))
                if (typeof message.to === "number")
                    object.to = options.longs === String ? String(message.to) : message.to;
                else
                    object.to = options.longs === String ? $util.Long.prototype.toString.call(message.to) : options.longs === Number ? new $util.LongBits(message.to.low >>> 0, message.to.high >>> 0).toNumber() : message.to;
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this CtrPushRequest to JSON.
         * @function toJSON
         * @memberof Protocol.CtrPushRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CtrPushRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CtrlPushType enum.
         * @name Protocol.CtrPushRequest.CtrlPushType
         * @enum {string}
         * @property {number} CREATE_GROUP=0 CREATE_GROUP value
         * @property {number} GROUP_ADDMEMBERS=1 GROUP_ADDMEMBERS value
         * @property {number} GROUP_EXIT=3 GROUP_EXIT value
         * @property {number} GROUP_DELETE=4 GROUP_DELETE value
         */
        CtrPushRequest.CtrlPushType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CREATE_GROUP"] = 0;
            values[valuesById[1] = "GROUP_ADDMEMBERS"] = 1;
            values[valuesById[3] = "GROUP_EXIT"] = 3;
            values[valuesById[4] = "GROUP_DELETE"] = 4;
            return values;
        })();

        return CtrPushRequest;
    })();

    Protocol.CtrlPushResponse = (function() {

        /**
         * Properties of a CtrlPushResponse.
         * @memberof Protocol
         * @interface ICtrlPushResponse
         * @property {number|Long|null} [msgid] CtrlPushResponse msgid
         * @property {number|Long|null} [timestamp] CtrlPushResponse timestamp
         */

        /**
         * Constructs a new CtrlPushResponse.
         * @memberof Protocol
         * @classdesc Represents a CtrlPushResponse.
         * @implements ICtrlPushResponse
         * @constructor
         * @param {Protocol.ICtrlPushResponse=} [properties] Properties to set
         */
        function CtrlPushResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CtrlPushResponse msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.CtrlPushResponse
         * @instance
         */
        CtrlPushResponse.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CtrlPushResponse timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.CtrlPushResponse
         * @instance
         */
        CtrlPushResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CtrlPushResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.CtrlPushResponse
         * @static
         * @param {Protocol.ICtrlPushResponse=} [properties] Properties to set
         * @returns {Protocol.CtrlPushResponse} CtrlPushResponse instance
         */
        CtrlPushResponse.create = function create(properties) {
            return new CtrlPushResponse(properties);
        };

        /**
         * Encodes the specified CtrlPushResponse message. Does not implicitly {@link Protocol.CtrlPushResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.CtrlPushResponse
         * @static
         * @param {Protocol.ICtrlPushResponse} message CtrlPushResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CtrlPushResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified CtrlPushResponse message, length delimited. Does not implicitly {@link Protocol.CtrlPushResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.CtrlPushResponse
         * @static
         * @param {Protocol.ICtrlPushResponse} message CtrlPushResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CtrlPushResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CtrlPushResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.CtrlPushResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.CtrlPushResponse} CtrlPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CtrlPushResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.CtrlPushResponse();
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
         * Decodes a CtrlPushResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.CtrlPushResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.CtrlPushResponse} CtrlPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CtrlPushResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CtrlPushResponse message.
         * @function verify
         * @memberof Protocol.CtrlPushResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CtrlPushResponse.verify = function verify(message) {
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
         * Creates a CtrlPushResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.CtrlPushResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.CtrlPushResponse} CtrlPushResponse
         */
        CtrlPushResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.CtrlPushResponse)
                return object;
            var message = new $root.Protocol.CtrlPushResponse();
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
         * Creates a plain object from a CtrlPushResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.CtrlPushResponse
         * @static
         * @param {Protocol.CtrlPushResponse} message CtrlPushResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CtrlPushResponse.toObject = function toObject(message, options) {
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
         * Converts this CtrlPushResponse to JSON.
         * @function toJSON
         * @memberof Protocol.CtrlPushResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CtrlPushResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CtrlPushResponse;
    })();

    return Protocol;
})();

module.exports = $root;
