"use strict";

$.SplashScreen = {

    start: function() {

      $.Draw.visible("splash", "block");

      setTimeout(function(){

        $.current_status = 1;

        $.Draw.visible("splash", "none");

      }, 3000);

    },
    render: function() {

      $.Draw.clear();

    }
};
