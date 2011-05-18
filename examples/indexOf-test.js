(function () {
  "use strict";

  require('../bufferjs/indexOf');

  var assert = require('assert');

  // Test the static version, Buffer needle
  function test1() {
    var haystack = new Buffer(10)
      , needle = new Buffer(1);

    needle[0] = haystack[0] = 255;
    assert.equal(Buffer.indexOf(haystack, needle), 0);
    assert.equal(Buffer.indexOf(haystack, new Buffer(haystack.length)), -1);
  }

  // Test the OO version, String needle
  function test2() {
    var haystack = new Buffer(20)
      , needle = '\r\n'
      , index = 5;

    haystack.write(needle, index);
    assert.equal(haystack.indexOf(needle), index);
    assert.equal(haystack.indexOf('should not be found'), -1);
  }

  // Test starting from a specified index
  function testFromSpecifiedIndex() {
    var haystack = new Buffer('abracadabra')
      , needle = new Buffer('a');

    assert.equal(haystack.indexOf(needle), 0);
    assert.equal(Buffer.indexOf(haystack, needle, 1), 3);
    assert.equal(haystack.indexOf(needle, 4), 5);
    assert.equal(Buffer.indexOf(haystack, needle, 6), 7);
    assert.equal(haystack.indexOf(needle, 8), 10);
  }

  test1();
  test2();
  testFromSpecifiedIndex();

  console.log("Done. `indexOf` tests passed!");
}());
