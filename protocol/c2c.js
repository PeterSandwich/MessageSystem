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

    Protocol.C2CSendRequest = (function() {

        /**
         * Properties of a C2CSendRequest.
         * @memberof Protocol
         * @interface IC2CSendRequest
         * @property {number|Long|null} [from] C2CSendRequest from
         * @property {number|Long|null} [to] C2CSendRequest to
         * @property {string|null} [content] C2CSendRequest content
         */

        /**
         * Constructs a new C2CSendRequest.
         * @memberof Protocol
         * @classdesc Represents a C2CSendRequest.
         * @implements IC2CSendRequest
         * @constructor
         * @param {Protocol.IC2CSendRequest=} [properties] Properties to set
         */
        function C2CSendRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2CSendRequest from.
         * @member {number|Long} from
         * @memberof Protocol.C2CSendRequest
         * @instance
         */
        C2CSendRequest.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2CSendRequest to.
         * @member {number|Long} to
         * @memberof Protocol.C2CSendRequest
         * @instance
         */
        C2CSendRequest.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2CSendRequest content.
         * @member {string} content
         * @memberof Protocol.C2CSendRequest
         * @instance
         */
        C2CSendRequest.prototype.content = "";

        /**
         * Creates a new C2CSendRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.C2CSendRequest
         * @static
         * @param {Protocol.IC2CSendRequest=} [properties] Properties to set
         * @returns {Protocol.C2CSendRequest} C2CSendRequest instance
         */
        C2CSendRequest.create = function create(properties) {
            return new C2CSendRequest(properties);
        };

        /**
         * Encodes the specified C2CSendRequest message. Does not implicitly {@link Protocol.C2CSendRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.C2CSendRequest
         * @static
         * @param {Protocol.IC2CSendRequest} message C2CSendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2CSendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.from);
            if (message.to != null && message.hasOwnProperty("to"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.to);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified C2CSendRequest message, length delimited. Does not implicitly {@link Protocol.C2CSendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.C2CSendRequest
         * @static
         * @param {Protocol.IC2CSendRequest} message C2CSendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2CSendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2CSendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.C2CSendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.C2CSendRequest} C2CSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2CSendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.C2CSendRequest();
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
         * Decodes a C2CSendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.C2CSendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.C2CSendRequest} C2CSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2CSendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2CSendRequest message.
         * @function verify
         * @memberof Protocol.C2CSendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2CSendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from) && !(message.from && $util.isInteger(message.from.low) && $util.isInteger(message.from.high)))
                    return "from: integer|Long expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isInteger(message.to) && !(message.to && $util.isInteger(message.to.low) && $util.isInteger(message.to.high)))
                    return "to: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a C2CSendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.C2CSendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.C2CSendRequest} C2CSendRequest
         */
        C2CSendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.C2CSendRequest)
                return object;
            var message = new $root.Protocol.C2CSendRequest();
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
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a C2CSendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.C2CSendRequest
         * @static
         * @param {Protocol.C2CSendRequest} message C2CSendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2CSendRequest.toObject = function toObject(message, options) {
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
                object.content = "";
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
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this C2CSendRequest to JSON.
         * @function toJSON
         * @memberof Protocol.C2CSendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2CSendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2CSendRequest;
    })();

    Protocol.C2CSendResponse = (function() {

        /**
         * Properties of a C2CSendResponse.
         * @memberof Protocol
         * @interface IC2CSendResponse
         * @property {number|Long|null} [msgid] C2CSendResponse msgid
         * @property {number|Long|null} [timestamp] C2CSendResponse timestamp
         */

        /**
         * Constructs a new C2CSendResponse.
         * @memberof Protocol
         * @classdesc Represents a C2CSendResponse.
         * @implements IC2CSendResponse
         * @constructor
         * @param {Protocol.IC2CSendResponse=} [properties] Properties to set
         */
        function C2CSendResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2CSendResponse msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.C2CSendResponse
         * @instance
         */
        C2CSendResponse.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2CSendResponse timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.C2CSendResponse
         * @instance
         */
        C2CSendResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2CSendResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.C2CSendResponse
         * @static
         * @param {Protocol.IC2CSendResponse=} [properties] Properties to set
         * @returns {Protocol.C2CSendResponse} C2CSendResponse instance
         */
        C2CSendResponse.create = function create(properties) {
            return new C2CSendResponse(properties);
        };

        /**
         * Encodes the specified C2CSendResponse message. Does not implicitly {@link Protocol.C2CSendResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.C2CSendResponse
         * @static
         * @param {Protocol.IC2CSendResponse} message C2CSendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2CSendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified C2CSendResponse message, length delimited. Does not implicitly {@link Protocol.C2CSendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.C2CSendResponse
         * @static
         * @param {Protocol.IC2CSendResponse} message C2CSendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2CSendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2CSendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.C2CSendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.C2CSendResponse} C2CSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2CSendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.C2CSendResponse();
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
         * Decodes a C2CSendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.C2CSendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.C2CSendResponse} C2CSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2CSendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2CSendResponse message.
         * @function verify
         * @memberof Protocol.C2CSendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2CSendResponse.verify = function verify(message) {
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
         * Creates a C2CSendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.C2CSendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.C2CSendResponse} C2CSendResponse
         */
        C2CSendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.C2CSendResponse)
                return object;
            var message = new $root.Protocol.C2CSendResponse();
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
         * Creates a plain object from a C2CSendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.C2CSendResponse
         * @static
         * @param {Protocol.C2CSendResponse} message C2CSendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2CSendResponse.toObject = function toObject(message, options) {
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
         * Converts this C2CSendResponse to JSON.
         * @function toJSON
         * @memberof Protocol.C2CSendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2CSendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2CSendResponse;
    })();

    Protocol.C2CPushRequest = (function() {

        /**
         * Properties of a C2CPushRequest.
         * @memberof Protocol
         * @interface IC2CPushRequest
         * @property {number|Long|null} [from] C2CPushRequest from
         * @property {string|null} [content] C2CPushRequest content
         * @property {number|Long|null} [msgid] C2CPushRequest msgid
         * @property {number|Long|null} [timestamp] C2CPushRequest timestamp
         */

        /**
         * Constructs a new C2CPushRequest.
         * @memberof Protocol
         * @classdesc Represents a C2CPushRequest.
         * @implements IC2CPushRequest
         * @constructor
         * @param {Protocol.IC2CPushRequest=} [properties] Properties to set
         */
        function C2CPushRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2CPushRequest from.
         * @member {number|Long} from
         * @memberof Protocol.C2CPushRequest
         * @instance
         */
        C2CPushRequest.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2CPushRequest content.
         * @member {string} content
         * @memberof Protocol.C2CPushRequest
         * @instance
         */
        C2CPushRequest.prototype.content = "";

        /**
         * C2CPushRequest msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.C2CPushRequest
         * @instance
         */
        C2CPushRequest.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2CPushRequest timestamp.
         * @member {number|Long} timestamp
         * @memberof Protocol.C2CPushRequest
         * @instance
         */
        C2CPushRequest.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2CPushRequest instance using the specified properties.
         * @function create
         * @memberof Protocol.C2CPushRequest
         * @static
         * @param {Protocol.IC2CPushRequest=} [properties] Properties to set
         * @returns {Protocol.C2CPushRequest} C2CPushRequest instance
         */
        C2CPushRequest.create = function create(properties) {
            return new C2CPushRequest(properties);
        };

        /**
         * Encodes the specified C2CPushRequest message. Does not implicitly {@link Protocol.C2CPushRequest.verify|verify} messages.
         * @function encode
         * @memberof Protocol.C2CPushRequest
         * @static
         * @param {Protocol.IC2CPushRequest} message C2CPushRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2CPushRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.from);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.msgid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified C2CPushRequest message, length delimited. Does not implicitly {@link Protocol.C2CPushRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.C2CPushRequest
         * @static
         * @param {Protocol.IC2CPushRequest} message C2CPushRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2CPushRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2CPushRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.C2CPushRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.C2CPushRequest} C2CPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2CPushRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.C2CPushRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.from = reader.int64();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.msgid = reader.int64();
                    break;
                case 4:
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
         * Decodes a C2CPushRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.C2CPushRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.C2CPushRequest} C2CPushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2CPushRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2CPushRequest message.
         * @function verify
         * @memberof Protocol.C2CPushRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2CPushRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from) && !(message.from && $util.isInteger(message.from.low) && $util.isInteger(message.from.high)))
                    return "from: integer|Long expected";
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
         * Creates a C2CPushRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.C2CPushRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.C2CPushRequest} C2CPushRequest
         */
        C2CPushRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.C2CPushRequest)
                return object;
            var message = new $root.Protocol.C2CPushRequest();
            if (object.from != null)
                if ($util.Long)
                    (message.from = $util.Long.fromValue(object.from)).unsigned = false;
                else if (typeof object.from === "string")
                    message.from = parseInt(object.from, 10);
                else if (typeof object.from === "number")
                    message.from = object.from;
                else if (typeof object.from === "object")
                    message.from = new $util.LongBits(object.from.low >>> 0, object.from.high >>> 0).toNumber();
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
         * Creates a plain object from a C2CPushRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.C2CPushRequest
         * @static
         * @param {Protocol.C2CPushRequest} message C2CPushRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2CPushRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.from = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.from = options.longs === String ? "0" : 0;
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
         * Converts this C2CPushRequest to JSON.
         * @function toJSON
         * @memberof Protocol.C2CPushRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2CPushRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2CPushRequest;
    })();

    Protocol.C2CPushResponse = (function() {

        /**
         * Properties of a C2CPushResponse.
         * @memberof Protocol
         * @interface IC2CPushResponse
         * @property {number|Long|null} [msgid] C2CPushResponse msgid
         */

        /**
         * Constructs a new C2CPushResponse.
         * @memberof Protocol
         * @classdesc Represents a C2CPushResponse.
         * @implements IC2CPushResponse
         * @constructor
         * @param {Protocol.IC2CPushResponse=} [properties] Properties to set
         */
        function C2CPushResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2CPushResponse msgid.
         * @member {number|Long} msgid
         * @memberof Protocol.C2CPushResponse
         * @instance
         */
        C2CPushResponse.prototype.msgid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2CPushResponse instance using the specified properties.
         * @function create
         * @memberof Protocol.C2CPushResponse
         * @static
         * @param {Protocol.IC2CPushResponse=} [properties] Properties to set
         * @returns {Protocol.C2CPushResponse} C2CPushResponse instance
         */
        C2CPushResponse.create = function create(properties) {
            return new C2CPushResponse(properties);
        };

        /**
         * Encodes the specified C2CPushResponse message. Does not implicitly {@link Protocol.C2CPushResponse.verify|verify} messages.
         * @function encode
         * @memberof Protocol.C2CPushResponse
         * @static
         * @param {Protocol.IC2CPushResponse} message C2CPushResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2CPushResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgid);
            return writer;
        };

        /**
         * Encodes the specified C2CPushResponse message, length delimited. Does not implicitly {@link Protocol.C2CPushResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.C2CPushResponse
         * @static
         * @param {Protocol.IC2CPushResponse} message C2CPushResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2CPushResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2CPushResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.C2CPushResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.C2CPushResponse} C2CPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2CPushResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.C2CPushResponse();
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
         * Decodes a C2CPushResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.C2CPushResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.C2CPushResponse} C2CPushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2CPushResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2CPushResponse message.
         * @function verify
         * @memberof Protocol.C2CPushResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2CPushResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid) && !(message.msgid && $util.isInteger(message.msgid.low) && $util.isInteger(message.msgid.high)))
                    return "msgid: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2CPushResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.C2CPushResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.C2CPushResponse} C2CPushResponse
         */
        C2CPushResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.C2CPushResponse)
                return object;
            var message = new $root.Protocol.C2CPushResponse();
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
         * Creates a plain object from a C2CPushResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.C2CPushResponse
         * @static
         * @param {Protocol.C2CPushResponse} message C2CPushResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2CPushResponse.toObject = function toObject(message, options) {
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
         * Converts this C2CPushResponse to JSON.
         * @function toJSON
         * @memberof Protocol.C2CPushResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2CPushResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2CPushResponse;
    })();

    return Protocol;
})();

module.exports = $root;
