var provide = provide || function () {};
(function () {
  "use strict";

  require('./concat');
  require('./add-chunk');

  provide('buffer');
}());
