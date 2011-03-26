(function () {
  "use strict";

  require('../bufferjs/concat');
  var assert = require('assert');

  var abc = new Buffer('abc'),
    def = 'def', // Accepts Strings as well
    ghi = new Buffer('ghi'),
    realResult = abc + def + ghi,
    data = Buffer.concat(abc, def, ghi); 

  console.log(data.toString());
  assert.equal(abc+def+ghi, data.toString());

  data = Buffer.concat([abc, def, ghi]);
  console.log(data.toString());
  assert.equal(abc+def+ghi, data.toString());
}());
