require('bufferjs');
require('bufferjs/concat');
require('bufferjs/add-chunk');
console.log(Buffer.concat);
console.log((new Buffer(1).addChunk));
