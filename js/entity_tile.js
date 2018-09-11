"use strict";

$.Tile = function (x,y,sprite, parameters,z) {

    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.parameters = parameters;
    this.colision = {};
    this.name = "";
    this.t = 0;
    this.showing = parameters.s || 1;
    this.z = -z;

};

$.Tile.prototype.render = function () {

  if (this.showing == 0)
    return false;

  $.ctx.drawImage(this.sprite, this.x + $.scroll_x, this.y + $.scroll_y);

};

$.Tile.prototype.update = function () {

  if (this.showing == 0)
    return false;

  this.colision = {x: this.x + $.scroll_x, y: this.y + $.scroll_y,sx: this.x + $.scroll_x, sy: this.y + $.scroll_y + 72, width: 48, height: 48};

};

$.Tile.prototype.collision = function () {

  if (this.showing == 0)
    return {x:0,y:0,sx:0,sy:0,w:0,h:0}
  else
    return this.colision;

};

$.Tile.prototype.getParameters = function(){

  return this.parameters;

};
