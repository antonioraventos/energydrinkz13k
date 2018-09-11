"use strict";

$.PlayScreen = {

    start: function() {

      $.character = new $.Character();
      $.entities = [];

      $.entities.splice(0,$.entities.length)

      $.stage = new $.Stage();
      $.stage.entities($.entities);

      this.orderLayers();

      $.scroll_x = $.character.x + 144;
      $.scroll_y = $.character.y;

      this.talk = 0;
      this.talk_i = 0;
      this.messages = "";
      this.message_index = 0;
      this.message_action_item = "";
      this.win = false;
      this.walking = false;

      $.Draw.visible("hud", "block");
      $.character.stop();
      $.s = this;

      $.Subscribe.addSubscribeEvent("game", "keyboard", function(keyboard) {

        if ($.s.talk == 1) {

          $.s.nextLine();

        } else {

          if ($.s.walking == false) {

            $.character.changeDirection(0);

            $.s.walking = true;

          } else {

            if (keyboard.k == $.actions['top'] || keyboard.k == $.actions['jump']) {

              $.character.jump();

            } else if (keyboard.k == $.actions['left']) {

              $.character.half(0);

            } else if (keyboard.k == $.actions['right']) {

              $.character.half(1);

            }

          }

        }

      });

      $.Subscribe.addSubscribeEvent("game", "click", function(mousePos) {

        if ($.s.walking == false) {

          $.character.changeDirection(0);

          $.s.walking = true;

        } else {

          $.character.half(mousePos.h);

          $.s.nextLine();

        }

      });

    },
    update: function() {

      if ($.pause == true)
        return false;

      for (var i = 0; i < $.entities.length; i++) {

        $.entities[i].update();

      }

      var ground = false;
      for (var i = 0; i < $.entities.length; i++) {

        if ($.character.collision().x < $.entities[i].collision().x + $.entities[i].collision().width &&
           $.character.collision().x + $.character.collision().width > $.entities[i].collision().x &&
           $.character.collision().y < $.entities[i].collision().y + $.entities[i].collision().height &&
           $.character.collision().height + $.character.collision().y > $.entities[i].collision().y) {
            // ¡colision detectada!

          if ($.entities[i].parameters == undefined)
            continue ;

          if ($.entities[i].parameters.m == "item") {

              if ($.entities[i].parameters.t == "item_key") {

                this.item_id_off(i);

                this.block_color_on($.entities[i].parameters.actions.on);

              }

            } else if ($.entities[i].parameters.m == "enemy") {

                $.current_status = 3;

            } else if ($.entities[i].parameters.m == "npc" && this.talk == 0) {

                $.Draw.visible("hud", "none");

                $.character.stop();

                $.pause = true;

                this.talk = 1;
                this.talk_i = i;

                if ($.entities[i].parameters.actions.on != undefined && $.entities[i].parameters.actions.on == "finnish_gam") {
                  this.win = true;
                }

                this.messages = "";
                this.messages = $.entities[i].parameters.actions.message.split("|");
                this.message_index = 0;
                this.message_action_item = $.entities[i].parameters.actions.on || '';

                $.entities[i].parameters = undefined;

                this.showTalkLine(this.messages[this.message_index],"");

                $.Draw.visible("talk", "block");

            } else if ($.entities[i].parameters.m == "b") {

              ground = true;

            }

        }

      }

      if (ground == false && $.jumping == false) {

        $.falling = true;

      }

    },
    render: function() {

      this.orderLayers();

      $.Draw.clear();

      for (var i = 0; i < $.entities.length; i++) {

          $.entities[i].render();

      }

    },
    showTalkLine: function(line,class_style) {

      document.getElementById('talk').innerHTML = "<p class=" + class_style + ">" + line + "</p>";

    },
    nextLine: function() {

      if (this.talk == 1) {

        if (++this.message_index < this.messages.length) {

          if (this.message_index % 2 == 0) {
            this.showTalkLine(this.messages[this.message_index],"");
          } else {
            this.showTalkLine(this.messages[this.message_index],"other");
          }

        } else {

          if (this.win == true) {

            $.Draw.visible("talk", "none");

            $.current_status = 4;

          } else {

            $.Draw.visible("talk", "none");

            $.Draw.visible("hud", "block");

            this.item_id_off(this.talk_i);

            this.talk = 0;
            this.talk_i = 0;

            this.item_on(this.message_action_item);

          }

          $.pause = false;

        }

      }

    },
    item_on: function(item) {

      this.getEntityByName(item).e.showing = 1;

    },
    item_off: function(item) {

      this.getEntityByName(item).e.showing = 0;

    },
    item_id_on: function(item) {

      $.entities[item].showing = 1;

    },
    item_id_off: function(item) {

      $.entities[item].showing = 0;

    },
    block_color_on: function(color) {

      for (var i = 0; i < $.entities.length; i++) {

        if ($.entities[i].parameters == undefined || $.entities[i].parameters.clr == undefined)
          continue ;

        if ($.entities[i].parameters.m == "b" && $.entities[i].showing == 0 && $.entities[i].parameters.clr == color) {

          $.entities[i].showing = 1;

        }

      }

    },
    orderLayers: function() {

      $.entities.sort(function compare(a,b) {

        if (a.z < b.z)
          return -1;
        else if (a.z > b.z)
          return 1;
        else
          return 0;

      });

    },
    getEntityByName: function(name) {

      for (var i = 1; i < $.entities.length;i++) {

        if ($.entities[i].name == name) {

            return {i:i,e:$.entities[i]};

        }

      }

      return null;
    }
};
