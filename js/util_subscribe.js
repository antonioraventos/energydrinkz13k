"use strict";

$.Subscribe = {

  addSubscribeEvent:function(n,type,cb) {

    for (var s = 0; s<$.subscribers;s++) {

        if ($.subscribers[s].n == n && $.subscribers[s].type == type) {
          return false;
        }
    }

    $.subscribers.push({"n":n,"t":type,"c":cb});

  },
  removeSubscribeEvents: function(n,type,cb) {

    $.subscribers = [];

  },
  mouseMovement: function() {

    $.canvas.addEventListener('mousemove', function(e) {

      for (var s =0; s < $.subscribers.length;s++) {

        if ($.subscribers[s].t=="mousemove") {

          $.subscribers[s].c({x:e.clientX - $.canvas.getBoundingClientRect().left - $.scroll_x,y:e.clientY-$.canvas.getBoundingClientRect().top - $.scroll_y});

        }

      }

    });

  },
  mouseClick: function() {

    window.document.addEventListener('click', function(e) {

        for (var s =0; s < $.subscribers.length;s++) {

        if ($.subscribers[s].t=="click") {

          var h = 1;
          if (e.clientX - $.canvas.getBoundingClientRect().left < (window.innerWidth / 2)) {
              h = 0;
          }

          $.subscribers[s].c({"h": h, x:e.clientX - $.canvas.getBoundingClientRect().left - $.scroll_x,y:e.clientY-$.canvas.getBoundingClientRect().top - $.scroll_y,tx:Math.floor(e.clientX - $.canvas.getBoundingClientRect().left / $.scale),ty:Math.floor(e.clientY-$.canvas.getBoundingClientRect().top / $.scale),c: Math.floor((e.clientX - $.canvas.getBoundingClientRect().left  - $.scroll_x) / $.scale) + Math.floor((e.clientY-$.canvas.getBoundingClientRect().top  - $.scroll_y) / $.scale) * $.stage_txy});

        }
      }
    });

  },
  keyboard: function() {

    window.addEventListener('keydown',function(e) {

      for (var s =0; s < $.subscribers.length;s++) {

        if ($.subscribers[s].t=="keyboard") {

          var direction = null;
          if (e.keyCode == 38) {

            direction = $.actions['top'];

          } else if (e.keyCode == 37) {

            direction = $.actions['left'];

          } else if (e.keyCode == 39) {

            direction = $.actions['right'];

          } else if (e.keyCode == 40) {

            direction = $.actions['bottom'];

          } else if (e.keyCode == 32) {

            direction = $.actions['jump'];

          }

          if (direction != null) {
            $.subscribers[s].c({k:direction});
          }
        }
      }

    },false);

  },
  controlDebug: function(spr,callback) {

    document.getElementById("debug_up").addEventListener("click", function() {

      callback(spr,document.getElementById("debug_up"));

    });

  }

};
