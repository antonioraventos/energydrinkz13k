"use strict";

$.Item = function (x,y,sprite, parameters,name) {

    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.name = name;
    this.parameters = parameters;
    this.colision = {};
    this.showing = parameters.s;
    this.z = 1;

};

$.Item.prototype.render = function () {

  if (this.showing == 0)
    return ;

  $.ctx.save();
  $.ctx.drawImage(this.sprite, this.x + $.scroll_x, this.y + $.scroll_y);
  $.ctx.restore();

  this.z = this.x + $.scroll_x + this.y + $.scroll_y + 96;

  if (this.z < 0)
    this.z = 0;

};

$.Item.prototype.update = function () {

  if (this.showing == 0)
    return false;

  this.colision = {x: this.x + $.scroll_x, y: this.y + $.scroll_y + 72,sx: this.x + $.scroll_x, sy: this.y + $.scroll_y + 72, width: 48, height: 24};

};

$.Item.prototype.collision = function () {

  if (this.showing == 0)
    return {x:0,y:0,sx:0,sy:0,w:0,h:0}
  else
    return this.colision;

};

$.Item.prototype.getParameters = function(){

  return this.parameters;

};
