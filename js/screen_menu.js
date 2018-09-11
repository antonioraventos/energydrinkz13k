"use strict";

$.MenuScreen = {

    start: function() {

      $.Draw.visible("background-wrap", "block");
      $.Draw.visible("menu", "block");

      $.game_lives = 0;
      $.game_score = 0;
      $.game_time = 0;

      $.last_status = $.current_status;
      $.s = this;

      $.Subscribe.addSubscribeEvent("start", "click", function(mousePos) {

        $.s.change_screen();

      });

      $.Subscribe.addSubscribeEvent("game", "keyboard", function(keyboard) {

        $.s.change_screen();

      });

    },
    change_screen: function() {

      $.Draw.visible("menu", "none");
      $.Draw.visible("controller", "none");
      $.Draw.visible("story", "none");

      if ($.story_seen == false) {

        $.Draw.visible("story", "block");

        $.story_seen = true;

      } else if ($.controller_seen == false) {

        $.Draw.visible("controller", "block");

        $.controller_seen = true;

      } else if ($.story_seen == true && $.controller_seen == true) {

        $.current_status = 2;

      }
    },
    render: function() {

      $.Draw.clear();

    }
};
