"use strict";

$.KilledScreen = {

    start: function() {

      $.Draw.visible("hud", "none");
      $.Draw.visible("killed", "block");

      $.Subscribe.addSubscribeEvent("lost", "click", function(mousePos) {

        $.falling = false;

        $.Draw.visible("killed", "none");

        $.current_status = 2;

      });

      $.Subscribe.addSubscribeEvent("game", "keyboard", function(keyboard) {

        $.falling = false;

        $.Draw.visible("killed", "none");

        $.current_status = 2;

      });

      document.getElementById("killed_img").src = document.getElementById("character-0").src;

    },
    render: function() {

      $.Draw.clear();

    }
};
