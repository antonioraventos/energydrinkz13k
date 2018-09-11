"use strict";

$.Stage = function () {

  this.stage = "";
  this.stage_name = "";
  this.stage_tiles = [];
  this.tile_height = 48;
  this.tile_height_factor = 72;

};

$.Stage.prototype.entities = function (entities) {

  for (var m = 0; m < $.stageMap["d"].length;m++) {

    var x = (m % $.stageMap["w"]);
    var y = Math.floor(m / $.stageMap["w"]);
    var h = 0;
    var data = $.stageMap["d"][m];

    if (data > 0) {

      var properties = $.stageMapEntities[data];

      var tile = new $.Tile((x - y) * this.tile_height,(x + y) * this.tile_height / 2 - (h * this.tile_height_factor),$.cubeset.getResource(properties["f"]),properties,$.stageMap["d"].length - m);

      entities.push(tile);

    }

  }

  var entities_keys = Object.keys($.stageMapEntities);

  for (var e = 0; e < entities_keys.length;e++) {

    var entity = $.stageMapEntities[entities_keys[e]];
    var properties = $.stageMapEntities[data];

    switch(entity.m) {
      case "npc":
        entities.push(new $.Npc((parseInt(entity.cx) - parseInt(entity.cy)) * this.tile_height,(parseInt(entity.cx) + parseInt(entity.cy)) * this.tile_height / 2 - (1 * this.tile_height_factor),$.cubeset.getResource(entity.f + "-0"),entity,entities_keys[e]));
      break;
      case "item":
        entities.push(new $.Item((parseInt(entity.cx) - parseInt(entity.cy)) * this.tile_height,(parseInt(entity.cx) + parseInt(entity.cy)) * this.tile_height / 2 - (1 * this.tile_height_factor),$.cubeset.getResource(entity.f),entity,entities_keys[e]));
      break;
      case "enemy":
        var x = (parseInt(entity.cx) - parseInt(entity.cy)) * this.tile_height;
        var y = (parseInt(entity.cx) + parseInt(entity.cy)) * this.tile_height / 2 - (1 * this.tile_height_factor);

        var to_x = (parseInt(entity.cx_to) - parseInt(entity.cy_to)) * this.tile_height;
        var to_y = (parseInt(entity.cx_to) + parseInt(entity.cy_to)) * this.tile_height / 2 - (1 * this.tile_height_factor);

        var direction = -1;

        if (x != to_x && y != to_y) {

          direction = 0;

          if (entity.cx < entity.cx_to && entity.cy == entity.cy_to) {

              direction = 1;

          } else if (entity.cy > entity.cy_to && entity.cx == entity.cx_to) {

              direction = 3;

          } else if (entity.cy < entity.cy_to && entity.cx == entity.cx_to) {

              direction = 2;

          }

        }

        entities.push(new $.Enemy(x,y,$.cubeset.getResource("enemy-face1-green" + "-0"),entity,entities_keys[e],to_x,to_y,direction));

      break;
    }

  }

  entities.push($.character);

}
