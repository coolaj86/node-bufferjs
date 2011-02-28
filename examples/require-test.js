require('bufferjs');
require('bufferjs/concat');
require('bufferjs/add-chunk');

console.log('Buffer.concat:');
console.log(Buffer.concat);

console.log('buffer.addChunk:');
console.log((new Buffer(1).addChunk));
