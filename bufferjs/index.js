var provide = provide || function () {};
(function () {
  "use strict";

  require('./concat');
  require('./add-chunk');
  require('./indexOf');

  provide('buffer');
}());
