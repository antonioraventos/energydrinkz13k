"use strict";

$.Draw = {

    clear: function() {
      $.ctx.clearRect(0, 0, $.width, $.height);
    },
    visible: function(id,show) {
      document.getElementById(id).style.display = show;
    }

};
