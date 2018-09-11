"use strict";

$.WinScreen = {

    start: function() {

      $.Draw.visible("hud", "none");
      $.Draw.visible("talk", "none");
      $.Draw.visible("win", "block");

      $.level++;

      document.getElementById('hud_level').innerHTML = $.level + 1;

      $.Subscribe.addSubscribeEvent("start", "click", function(mousePos) {

        $.Draw.visible("win", "none");

        $.current_status = 2;

      });

      $.Subscribe.addSubscribeEvent("game", "keyboard", function(keyboard) {

        $.Draw.visible("win", "none");

        $.current_status = 2;

      });

    },
    render: function() {

      $.Draw.clear();


    }
};
