require('bufferjs/indexOf');
var assert = require('assert');

// Test the static version, Buffer needle
function test1() {
  var haystack = new Buffer(10);
  var needle = new Buffer(1);
  needle[0] = haystack[0] = 255;
  assert.equal(Buffer.indexOf(haystack, needle), 0);
  assert.equal(Buffer.indexOf(haystack, new Buffer(haystack.length)), -1);
}

// Test the OO version, String needle
function test2() {
  var haystack = new Buffer(20);
  var needle = '\r\n';
  var index  = 5;
  haystack.write(needle, index);
  assert.equal(haystack.indexOf(needle), index);
  assert.equal(haystack.indexOf('should not be found'), -1);
}


test1();
test2();

console.log("Done. `indexOf` tests passed!");
