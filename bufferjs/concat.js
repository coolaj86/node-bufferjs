/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true eqeqeq:true immed:true latedef:true*/
(function () {
  "use strict";

  function concat(bufs) {
    if (!Array.isArray(bufs)) {
      console.error('[ERROR] use Buffer.concat(list, [totalLength])');
      console.error('see http://nodejs.org/api/buffer.html#buffer_class_method_buffer_concat_list_totallength');
      bufs = Array.prototype.slice.call(arguments);
    }

    var bufsToConcat = [], length = 0
      , concatBuf = new Buffer(length)
      , index = 0
      ;

    bufs.forEach(function (buf) {
      if (buf) {
        if (!Buffer.isBuffer(buf)) {
          buf = new Buffer(buf);
        }
        length += buf.length;
        bufsToConcat.push(buf);
      }
    });

    bufsToConcat.forEach(function (buf) {
      buf.copy(concatBuf, index, 0, buf.length);
      index += buf.length;
    });

    return concatBuf;
  }
  
  Buffer.concat = concat;
  if (Buffer.concat) {
    console.warn('Native Buffer.concat found. Deprecation messages are on. Please fix your app and upgrade to bufferjs 2.0');
    console.warn('see http://nodejs.org/api/buffer.html#buffer_class_method_buffer_concat_list_totallength');
  }
}());
