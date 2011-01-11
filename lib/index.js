(function () {
  "use strict";

  require('./concat');
  require('./add-chunk');

  if ('undefined' === typeof provide) { provide = function() {}; }
  provide('buffer');
}());
