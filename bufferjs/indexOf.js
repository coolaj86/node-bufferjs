(function () {
  "use strict";

  /**
   * A naiive 'Buffer.indexOf' function. Requires both the
   * needle and haystack to be Buffer instances.
   */
  function indexOf(haystack, needle) {
    if (!Buffer.isBuffer(needle)) needle = new Buffer(needle);
    for (var i=0, l=haystack.length-needle.length+1; i<l; i++) {
      var good = true;
      for (var j=0, n=needle.length; j<n; j++) {
        if (haystack[i+j] !== needle[j]) {
          good = false;
          break;
        }
      }
      if (good) return i;
    }
    return -1;
  }
  Buffer.indexOf = indexOf;
  Buffer.prototype.indexOf = function(needle) {
    return Buffer.indexOf(this, needle);
  }

})();
