"use strict";

var $ = {};

$.width = window.innerWidth;
$.height = window.innerHeight;
$.scale = 48;

$.subscribers = [];

$.entities = [];
$.inventory = [];

$.current_status = 0;
$.last_status = -1;

$.scroll_x = 0;
$.scroll_y = 0;

$.game_lives = 0;
$.game_score = 0;
$.game_time = 0;

$.stage_txy = 0;
$.stage = undefined;

$.lastRender = new Date();
$.delta = 0;
$.falling = false;
$.jumping = false;

$.story_seen = false;
$.controller_seen = false;

$.level = 0;
$.pause = false;
$.character = null;

$.actions = {
  'right':  0,
  'left':   1,
  'top':    2,
  'bottom': 3,
  'jump': 4
}

$.colors = [
  "#33691e","#76ff03","#ccff90",
  "#311b92","#b39ddb","#d1c4e9",
  "#448aff","#1976d2","#90caf9",
  "#eeff41","#c6ff00","#dce775",
  "#bf360c","#ff3d00","#ff8a65",
  "#1b5e20","#76ff0355","#ccff9055",
  "#311b92","#b39ddb55","#d1c4e955",
  "#448aff","#1976d255","#90caf955",
  "#eeff41","#c6ff0055","#dce77555",
];

$.init = function () {

  $.canvas = document.getElementById('game');
  $.canvas.width = $.width;
  $.canvas.height = $.height;
  $.ctx = $.canvas.getContext('2d');

  $.canvas_builder = document.getElementById('builder');
  $.canvas_builder.width = $.width;
  $.canvas_builder.height = $.height;
  $.ctx_builder = $.canvas_builder.getContext('2d');

  $.Subscribe.mouseMovement();
  $.Subscribe.mouseClick();
  $.Subscribe.keyboard();

  $.cubeset = new $.Cubeset();

  $.loop();

};

$.loop = function (timestamp) {

  $.delta= new Date() - $.lastRender;

  switch ($.current_status) {

    // Splash Screen
    case 0:

      if ($.current_status != $.last_status) {

        $.Subscribe.removeSubscribeEvents();

        $.last_status = $.current_status;

        $.SplashScreen.start();

      }

      $.SplashScreen.render();

    break;

    case 1:

      // Mostramos La pantalla de Start

      if ($.current_status != $.last_status) {

        $.Subscribe.removeSubscribeEvents();

        $.last_status = $.current_status;

        $.MenuScreen.start();

      }

      $.MenuScreen.render();

    break;

    case 2:

      // Empezamos Juego

      if ($.current_status != $.last_status) {

        $.Subscribe.removeSubscribeEvents();

        $.last_status = $.current_status;

        $.PlayScreen.start();

      }

      $.PlayScreen.update();
      $.PlayScreen.render();

    break;

    case 3:

      // Perdida de una vida
      if ($.current_status != $.last_status) {

        $.Subscribe.removeSubscribeEvents();

        $.KilledScreen.start();

        $.last_status = $.current_status;

      }

      $.KilledScreen.render();

    break;

    case 4:

      // Ganar
      if ($.current_status != $.last_status) {

        $.Subscribe.removeSubscribeEvents();

        $.WinScreen.start();

        $.last_status = $.current_status;

      }

      $.WinScreen.render();

    break;

    default:


  }

  $.lastRender = new Date();

  window.requestAnimFrame($.loop);

};

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function( callback ){
        window.setTimeout(callback, 1000 / 60);
    };
})();

window.addEventListener('load', $.init, false);

window.addEventListener('visibilitychange', function() {

  if (document.visibilityState === 'visible') {

    $.delta = new Date();
    $.lastRender = new Date();

  }

},false);
