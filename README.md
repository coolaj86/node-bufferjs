node-bufferjs
====

Pure JavaScript utils which extend the global `Buffer` object in Node.JS.

    npm install bufferjs

API
====

    require('bufferjs');

Buffer.concat(b1, b2, ...)
----

Returns a new `Buffer` with the contents of b1, b2, ....

    require('bufferjs/concat');

    var b1 = new Buffer("abc"),
      b2 = new Buffer("def"),
      b3 = new Buffer("ghi"),
      buffer;

    buffer = Buffer.concat(b1, b2, b3);
    console.log(buffer.toString());
    // abcdefghi

Buffer.concat([b1, b2, ...])
----

Returns a new `Buffer` with the contents of all buffers in the `Array`.

    require('bufferjs/concat');

    var buffers = [
        new Buffer("abc"),
        new Buffer("def"),
        new Buffer("ghi")
      ],
      buffer;

    buffer = Buffer.concat(buffers);
    console.log(buffer.toString());
    // abcdefghi


buffer.addChunk(chunk)
----

Adds a buffer `chunk` to `buffer`.

Returns `true` when full

Returns `new Buffer` if buffer overflows

    require('bufferjs/add-chunk');

    var buffer = new Buffer(9),
      overflow;

    buffer.addChunk(new Buffer("abc"));
    buffer.addChunk(new Buffer("def"));
    buffer.toString(); // "abcdef???"
    // Note: "???" is whatever random garbage was internally `malloc`d.    


    console.log(true === buffer.addChunk(new Buffer("ghi"))); // true, buffer is full
    // true when buffer is full


    // adding past the index will throw an error
    overflow = buffer.addChunk(new Buffer("jkl"));
    buffer.toString(); // abcdefghi
    overflow.toString(); // jkl


Buffer.indexOf(haystack, needle, startIndex)
----

Searches the given _haystack_ Buffer for the given _needle_ Buffer. Returns the index
of the first occurence of `needle`, or `-1` if the pattern was not found. `needle` may also
be a regular String, for convenience. `startIndex` tells at which index to begin the search.

    require('bufferjs/indexOf');

    var haystack = new Buffer(10);
    var needle = '\r\n';
    haystack.write(needle, 5);
    
    Buffer.indexOf(haystack, needle); // 5
    Buffer.indexOf(haystack, 'NOT_IN_HAYSTACK'); // -1


buffer.indexOf(needle, startIndex)
----

OO-style variant of `Buffer.indexOf`. `this` is the _haystack_, and only _needle_ needs
to be supplied when called.

    require('bufferjs/indexOf');
  
    var haystack = new Buffer(10);
    var needle = '\r\n';
    haystack.write(needle, 5);

    haystack.indexOf(needle); // 5
    haystack.indexOf('NOT_IN_HAYSTACK'); // -1


TODO
---

use `assert` in all tests
