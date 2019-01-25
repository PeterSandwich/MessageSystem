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

    Protocol.C2GSendRequest = (function() {

        /**
         * Properties of a C2GSendRequest.
         * @memberof Protocol
         * @interface IC2GSendRequest
         * @property {number|Long|null} [from] C2GSendRequest from
         * @property {number|Long|null} [group] C2GSendRequest group
         * @property {string|null} [content] C2GSendRequest content
         */

        /**
         * Constructs a new C2GSendRequest.
         * @memberof Protocol
         * @classdesc Represents a C2GSendRequest.
         * @implements IC2GSendRequest
         * @constructor
         * @param {Protocol.IC2GSendRequest=} [properties] Properties to set
         */
        function C2GSendRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSendRequest from.
         * @member {number|Long} from
         * @memberof Protocol.C2GSendRequest
         * @instance
         */
        C2GSendRequest.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2GSendRequest group.
         * @member {number|Long} group
         * @memberof Protocol.C2GSendRequest
         * @instance
         */
        C2GSendRequest.prototype.group = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2GSendRequest content.
         * @member {string} content
         * @memberof Protocol.C2GSendRequest
         * @instance
         */
        C2GSendRequest.prototype.content = "";

        /**
         * Creates a new C2GSendRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.C2GSendRequest
         * @static
         * @param {Protocol.IC2GSendRequest=} [properties] Properties to set
         * @returns {Protocol.C2GSendRequest} C2GSendRequest instance
         */
        C2GSendRequest.create = function create(properties) {
            return new C2GSendRequest(properties);
        };

        /**
         * Encodes the specified C2GSendRequest message. Does not implicitly {@link Protocol.C2GSendRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.C2GSendRequest
         * @static
         * @param {Protocol.IC2GSendRequest} message C2GSendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.from);
            if (message.group != null && message.hasOwnProperty("group"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.group);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified C2GSendRequest message, length delimited. Does not implicitly {@link Protocol.C2GSendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.C2GSendRequest
         * @static
         * @param {Protocol.IC2GSendRequest} message C2GSendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.C2GSendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.C2GSendRequest} C2GSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.C2GSendRequest();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2GSendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.C2GSendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.C2GSendRequest} C2GSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSendRequest message.
         * @function verify
         * @memberof Protocol.C2GSendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSendRequest.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a C2GSendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.C2GSendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.C2GSendRequest} C2GSendRequest
         */
        C2GSendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.C2GSendRequest)
                return object;
            var message = new $root.Protocol.C2GSendRequest();
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
            return message;
        };

        /**
         * Creates a plain object from a C2GSendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.C2GSendRequest
         * @static
         * @param {Protocol.C2GSendRequest} message C2GSendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSendRequest.toObject = function toObject(message, options) {
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
            return object;
        };

        /**
         * Converts this C2GSendRequest to JSON.
         * @function toJSON
         * @memberof Protocol.C2GSendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSendRequest;
    })();

    Protocol.C2GSendResponse = (function() {

        /**
         * Properties of a C2GSendResponse.
         * @memberof Protocol
         * @interface IC2GSendResponse
         * @property {number|Long|null} [msgid] C2GSendResponse msgid
         * @property {number|Long|null} [timestamp] C2GSendResponse timestamp
         */

        /**
         * Constructs a new C2GSendResponse.
         * @memberof Protocol
         * @classdesc Represents a C2GSendResponse.
         * @implements IC2GSendResponse
         * @constructor
         * @param {Protocol.IC2GSendResponse=} [properties] Properties to set
         */
        function C2GSendResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSendResponse msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.C2GSendResponse
         * @instance
         */
        C2GSendResponse.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2GSendResponse timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.C2GSendResponse
         * @instance
         */
        C2GSendResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2GSendResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.C2GSendResponse
         * @static
         * @param {Protocol.IC2GSendResponse=} [properties] Properties to set
         * @returns {Protocol.C2GSendResponse} C2GSendResponse instance
         */
        C2GSendResponse.create = function create(properties) {
            return new C2GSendResponse(properties);
        };

        /**
         * Encodes the specified C2GSendResponse message. Does not implicitly {@link Protocol.C2GSendResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.C2GSendResponse
         * @static
         * @param {Protocol.IC2GSendResponse} message C2GSendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified C2GSendResponse message, length delimited. Does not implicitly {@link Protocol.C2GSendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.C2GSendResponse
         * @static
         * @param {Protocol.IC2GSendResponse} message C2GSendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.C2GSendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.C2GSendResponse} C2GSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.C2GSendResponse();
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
         * Decodes a C2GSendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.C2GSendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.C2GSendResponse} C2GSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSendResponse message.
         * @function verify
         * @memberof Protocol.C2GSendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSendResponse.verify = function verify(message) {
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
         * Creates a C2GSendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.C2GSendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.C2GSendResponse} C2GSendResponse
         */
        C2GSendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.C2GSendResponse)
                return object;
            var message = new $root.Protocol.C2GSendResponse();
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
         * Creates a plain object from a C2GSendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.C2GSendResponse
         * @static
         * @param {Protocol.C2GSendResponse} message C2GSendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSendResponse.toObject = function toObject(message, options) {
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
         * Converts this C2GSendResponse to JSON.
         * @function toJSON
         * @memberof Protocol.C2GSendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSendResponse;
    })();

    Protocol.C2GPushRequest = (function() {

        /**
         * Properties of a C2GPushRequest.
         * @memberof Protocol
         * @interface IC2GPushRequest
         * @property {number|Long|null} [from] C2GPushRequest from
         * @property {number|Long|null} [group] C2GPushRequest group
         * @property {string|null} [content] C2GPushRequest content
         * @property {number|Long|null} [msgid] C2GPushRequest msgid
         * @property {number|Long|null} [timestamp] C2GPushRequest timestamp
         */

        /**
         * Constructs a new C2GPushRequest.
         * @memberof Protocol
         * @classdesc Represents a C2GPushRequest.
         * @implements IC2GPushRequest
         * @constructor
         * @param {Protocol.IC2GPushRequest=} [properties] Properties to set
         */
        function C2GPushRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GPushRequest from.
         * @member {number|Long} from
         * @memberof Protocol.C2GPushRequest
         * @instance
         */
        C2GPushRequest.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2GPushRequest group.
         * @member {number|Long} group
         * @memberof Protocol.C2GPushRequest
         * @instance
         */
        C2GPushRequest.prototype.group = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2GPushRequest content.
         * @member {string} content
         * @memberof Protocol.C2GPushRequest
         * @instance
         */
        C2GPushRequest.prototype.content = "";

        /**
         * C2GPushRequest msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.C2GPushRequest
         * @instance
         */
        C2GPushRequest.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2GPushRequest timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.C2GPushRequest
         * @instance
         */
        C2GPushRequest.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2GPushRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.C2GPushRequest
         * @static
         * @param {Protocol.IC2GPushRequest=} [properties] Properties to set
         * @returns {Protocol.C2GPushRequest} C2GPushRequest instance
         */
        C2GPushRequest.create = function create(properties) {
            return new C2GPushRequest(properties);
        };

        /**
         * Encodes the specified C2GPushRequest message. Does not implicitly {@link Protocol.C2GPushRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.C2GPushRequest
         * @static
         * @param {Protocol.IC2GPushRequest} message C2GPushRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GPushRequest.encode = function encode(message, writer) {
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
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified C2GPushRequest message, length delimited. Does not implicitly {@link Protocol.C2GPushRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.C2GPushRequest
         * @static
         * @param {Protocol.IC2GPushRequest} message C2GPushRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GPushRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GPushRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.C2GPushRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.C2GPushRequest} C2GPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GPushRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.C2GPushRequest();
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
         * Decodes a C2GPushRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.C2GPushRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.C2GPushRequest} C2GPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GPushRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GPushRequest message.
         * @function verify
         * @memberof Protocol.C2GPushRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GPushRequest.verify = function verify(message) {
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
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2GPushRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.C2GPushRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.C2GPushRequest} C2GPushRequest
         */
        C2GPushRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.C2GPushRequest)
                return object;
            var message = new $root.Protocol.C2GPushRequest();
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
         * Creates a plain object from a C2GPushRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.C2GPushRequest
         * @static
         * @param {Protocol.C2GPushRequest} message C2GPushRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GPushRequest.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
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
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this C2GPushRequest to JSON.
         * @function toJSON
         * @memberof Protocol.C2GPushRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GPushRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GPushRequest;
    })();

    Protocol.C2GPushResponse = (function() {

        /**
         * Properties of a C2GPushResponse.
         * @memberof Protocol
         * @interface IC2GPushResponse
         * @property {number|Long|null} [msgid] C2GPushResponse msgid
         */

        /**
         * Constructs a new C2GPushResponse.
         * @memberof Protocol
         * @classdesc Represents a C2GPushResponse.
         * @implements IC2GPushResponse
         * @constructor
         * @param {Protocol.IC2GPushResponse=} [properties] Properties to set
         */
        function C2GPushResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GPushResponse msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.C2GPushResponse
         * @instance
         */
        C2GPushResponse.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2GPushResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.C2GPushResponse
         * @static
         * @param {Protocol.IC2GPushResponse=} [properties] Properties to set
         * @returns {Protocol.C2GPushResponse} C2GPushResponse instance
         */
        C2GPushResponse.create = function create(properties) {
            return new C2GPushResponse(properties);
        };

        /**
         * Encodes the specified C2GPushResponse message. Does not implicitly {@link Protocol.C2GPushResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.C2GPushResponse
         * @static
         * @param {Protocol.IC2GPushResponse} message C2GPushResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GPushResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgid);
            return writer;
        };

        /**
         * Encodes the specified C2GPushResponse message, length delimited. Does not implicitly {@link Protocol.C2GPushResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.C2GPushResponse
         * @static
         * @param {Protocol.IC2GPushResponse} message C2GPushResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GPushResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GPushResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.C2GPushResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.C2GPushResponse} C2GPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GPushResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.C2GPushResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgid = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2GPushResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.C2GPushResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.C2GPushResponse} C2GPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GPushResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GPushResponse message.
         * @function verify
         * @memberof Protocol.C2GPushResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GPushResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2GPushResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.C2GPushResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.C2GPushResponse} C2GPushResponse
         */
        C2GPushResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.C2GPushResponse)
                return object;
            var message = new $root.Protocol.C2GPushResponse();
            if (object.msgid != null)
                if ($util.Long)
                    (message.msgid = $util.Long.fromValue(object.msgid)).unsigned = false;
                else if (typeof object.msgid === "string")
                    message.msgid = parseInt(object.msgid, 10);
                else if (typeof object.msgid === "number")
                    message.msgid = object.msgid;
                else if (typeof object.msgid === "object")
                    message.msgid = new $util.LongBits(object.msgid.low >>> 0, object.msgid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a C2GPushResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.C2GPushResponse
         * @static
         * @param {Protocol.C2GPushResponse} message C2GPushResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GPushResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.msgid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgid = options.longs === String ? "0" : 0;
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (typeof message.msgid === "number")
                    object.msgid = options.longs === String ? String(message.msgid) : message.msgid;
                else
                    object.msgid = options.longs === String ? $util.Long.prototype.toString.call(message.msgid) : options.longs === Number ? new $util.LongBits(message.msgid.low >>> 0, message.msgid.high >>> 0).toNumber() : message.msgid;
            return object;
        };

        /**
         * Converts this C2GPushResponse to JSON.
         * @function toJSON
         * @memberof Protocol.C2GPushResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GPushResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GPushResponse;
    })();

    return Protocol;
})();

module.exports = $root;
