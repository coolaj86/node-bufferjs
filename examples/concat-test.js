(function () {
  "use strict";

  require('../lib/concat');

  var abc = new Buffer('abc'),
    def = new Buffer('def'),
    ghi = new Buffer('ghi'),
    data = Buffer.concat(abc, def, ghi); 

  console.log(data.toString());

  data = Buffer.concat([abc, def, ghi]);
  console.log(data.toString());
  console.log("Passed if both strings were 'abcdefghi'");
}());
