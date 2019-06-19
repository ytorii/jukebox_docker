/**
 * @fileoverview gRPC-Web generated client stub for jukebox
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.jukebox = require('./juke_box_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.jukebox.JukeBoxClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.jukebox.JukeBoxPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.jukebox.TitleRequest,
 *   !proto.jukebox.TitleResponse>}
 */
const methodInfo_JukeBox_Choose = new grpc.web.AbstractClientBase.MethodInfo(
  proto.jukebox.TitleResponse,
  /** @param {!proto.jukebox.TitleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.jukebox.TitleResponse.deserializeBinary
);


/**
 * @param {!proto.jukebox.TitleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.jukebox.TitleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.jukebox.TitleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.jukebox.JukeBoxClient.prototype.choose =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/jukebox.JukeBox/Choose',
      request,
      metadata || {},
      methodInfo_JukeBox_Choose,
      callback);
};


/**
 * @param {!proto.jukebox.TitleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.jukebox.TitleResponse>}
 *     A native promise that resolves to the response
 */
proto.jukebox.JukeBoxPromiseClient.prototype.choose =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/jukebox.JukeBox/Choose',
      request,
      metadata || {},
      methodInfo_JukeBox_Choose);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.jukebox.SongRequest,
 *   !proto.jukebox.LylicResponse>}
 */
const methodInfo_JukeBox_Play = new grpc.web.AbstractClientBase.MethodInfo(
  proto.jukebox.LylicResponse,
  /** @param {!proto.jukebox.SongRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.jukebox.LylicResponse.deserializeBinary
);


/**
 * @param {!proto.jukebox.SongRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.jukebox.LylicResponse>}
 *     The XHR Node Readable Stream
 */
proto.jukebox.JukeBoxClient.prototype.play =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/jukebox.JukeBox/Play',
      request,
      metadata || {},
      methodInfo_JukeBox_Play);
};


/**
 * @param {!proto.jukebox.SongRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.jukebox.LylicResponse>}
 *     The XHR Node Readable Stream
 */
proto.jukebox.JukeBoxPromiseClient.prototype.play =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/jukebox.JukeBox/Play',
      request,
      metadata || {},
      methodInfo_JukeBox_Play);
};


module.exports = proto.jukebox;

