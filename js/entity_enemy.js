"use strict";

$.Enemy = function (x, y, sprite, parameters,name,to_x,to_y,direction) {

    this.sprite = sprite;
    this.x = x;
    this.y = y;

    this.d_x = 256;
    this.d = 0;

    this.parameters = parameters;
    this.colision = {};
    this.name = name;
    this.showing = parameters.s || 1;
    this.z = 1;
        
    this.direction = direction;
    this.inverseDirection = this.inverseDirection(direction);
    this.velocity = 0.15;

};

$.Enemy.prototype.swipeDirections = function () {

  this.tmp = this.direction;
  this.direction = this.inverseDirection;
  this.inverseDirection = this.tmp;
  this.d = 0;

}

$.Enemy.prototype.inverseDirection = function (direction) {

  if (direction == 0) {

    return 1;

  } else if (direction == 1) {

    return 0;

  } else if (direction == 2) {

    return 3;

  } else if (direction == 3) {

    return 2;

  }

}

$.Enemy.prototype.render = function () {

  if (this.showing == 0)
    return ;

  $.ctx.drawImage(this.sprite, this.x + $.scroll_x, this.y + $.scroll_y);

};

$.Enemy.prototype.update = function () {

  if ($.pause == true)
      return false;

  if (this.showing == 0)
    return false;

  if (this.direction >= 0)
    this.moving();

  this.colision = {x: this.x + $.scroll_x, y: this.y + $.scroll_y + 72,sx: this.x + $.scroll_x, sy: this.y + $.scroll_y + 72, width: 48, height: 24};

};

$.Enemy.prototype.moving = function () {

  if (this.direction == 0) {

      this.d += 1 * this.velocity * $.delta + 0.5 * this.velocity * $.delta;

      this.x -= 1 * this.velocity * $.delta;
      this.y -= 0.5 * this.velocity * $.delta;

      if (this.d > this.d_x) {

        this.swipeDirections();

      }


  } else if (this.direction == 1) {

      this.d += 1 * this.velocity * $.delta + 0.5 * this.velocity * $.delta;

      this.x -= -1 * this.velocity * $.delta;
      this.y += 0.5 * this.velocity * $.delta;

      if (this.d > this.d_x) {

        this.swipeDirections();

      }


  } else if (this.direction == 2) {

      this.d += 1 * this.velocity * $.delta + 0.5 * this.velocity * $.delta;

      this.x += -1 * this.velocity * $.delta;
      this.y += 0.5 * this.velocity * $.delta;

      if (this.d > this.d_x) {

        this.swipeDirections();

      }

  } else if (this.direction == 3) {

      this.d += 1 * this.velocity * $.delta + 0.5 * this.velocity * $.delta;

      this.x += 1 * this.velocity * $.delta;
      this.y -= 0.5 * this.velocity * $.delta;

      if (this.d > this.d_x) {

        this.swipeDirections();

      }

  }

};

$.Enemy.prototype.collision = function () {

  if (this.showing == 0)
    return {x:0,y:0,sx:0,sy:0,w:0,h:0}
  else
    return this.colision;

};

$.Enemy.prototype.getParameters = function(){

  return this.parameters;

};
