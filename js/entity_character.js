"use strict";

$.Character = function() {

  this.sprites = {
    0: {
      0: $.cubeset.getResource("character-0"),
      1: $.cubeset.getResource("character-0-1"),
      2: $.cubeset.getResource("character-0-2"),
      3: $.cubeset.getResource("character-0-3"),
      4: $.cubeset.getResource("character-0-4"),
      5: $.cubeset.getResource("character-0-5"),
      6: $.cubeset.getResource("character-0-6"),
      7: $.cubeset.getResource("character-0-7"),
      8: $.cubeset.getResource("character-0-8")
    },
    1: {
      0: $.cubeset.getResource("character-1"),
    },
    2: {
      0:  $.cubeset.getResource("character-2"),
    },
    3: {
      0: $.cubeset.getResource("character-3"),
      1: $.cubeset.getResource("character-3-1"),
      2: $.cubeset.getResource("character-3-2"),
      3: $.cubeset.getResource("character-3-3"),
      4: $.cubeset.getResource("character-3-4"),
      5: $.cubeset.getResource("character-3-5"),
      6: $.cubeset.getResource("character-3-6"),
      7: $.cubeset.getResource("character-3-7"),
      8: $.cubeset.getResource("character-3-8")
    }
  };

  this.colision = {};

  this.x = ($.width / 2);
  this.y = ($.height / 2 );

  this.direction = 0;
  this.velocity = 0;
  this.velocity_y = 0;
  this.save_y = 0;
  this.z = 1;

  this.jumpHeightSquared = 8;
  this.jumpHeightSquaredTmp = 0;
  this.gravityAccelerationY = 0.6;
  this.die = false;

  this.animationKey = 0;
  this.animationTicks = 0;

};

$.Character.prototype.half = function(h) {

  var new_direction = -1;
  if (h == 0) {

    if (this.direction == 0) {
      new_direction = 2;
    } else if (this.direction == 2) {
      new_direction = 1;
    } else if (this.direction == 1) {
      new_direction = 3;
    } else {
      new_direction = 0;
    }

  } else {

    if (this.direction == 0) {
      new_direction = 3;
    } else if (this.direction == 3) {
      new_direction = 1;
    } else if (this.direction == 1) {
      new_direction = 2;
    } else {
      new_direction = 0;
    }

  }

  this.changeDirection(new_direction);

}

$.Character.prototype.jump = function() {

  if ($.jumping == false && $.falling == false) {

      this.jumpHeightSquaredTmp = -this.jumpHeightSquared;

      $.jumping = true;

      this.save_y = this.y;

  }

};

$.Character.prototype.changeDirection = function(direction) {

  if ($.pause == true)
    return false;

  if (direction >= 0 && direction <=3) {

    if (this.direction != direction && direction != 3 && direction !=0) {

      this.animationKey = 0;

    }

    this.direction = direction;
    this.velocity = 0.30 + (($.level / 2 ) * 0.10);

  }

};

$.Character.prototype.stop = function() {

  this.velocity = 0;

};

$.Character.prototype.render = function() {

  $.ctx.save();
  $.ctx.globalAlpha = this.die ? 0.2 : 1;
  $.ctx.drawImage(this.sprites[this.direction][this.animationKey], this.x, this.y);
  $.ctx.restore();

  this.z = this.x + $.scroll_x + this.y - $.scroll_y;

  if (this.animationTicks > 150 && this.animationKey < Object.keys(this.sprites[this.direction]).length - 1) {

    this.animationKey++;
    this.animationTicks = 0;

  }

  if (this.animationKey >= Object.keys(this.sprites[this.direction]).length - 1) {

    this.animationKey = 0;
    this.animationTicks = 0;

  }

  this.animationTicks+=$.delta;

};

$.Character.prototype.update = function() {

  if ($.pause == true)
    return false;

  if ($.falling) {

    this.colision = {x: 0, y: 0,sx: 0, sy: 0, width: 0, height: 0,c_x: 0, c_y: 0};

    this.y += this.gravityAccelerationY * $.delta;

    if (this.die == false) {

      this.die = true;

      setTimeout(function(){

        $.current_status = 3;

      }, 100);

    }

  } else {

    if ($.jumping == true) {

      this.jumpHeightSquaredTmp += 0.05 * $.delta;

      this.y += this.jumpHeightSquaredTmp;

      if (this.jumpHeightSquaredTmp > this.jumpHeightSquared) {

          $.jumping = false;

          this.jumpHeightSquaredTmp = 0;
          this.y = this.save_y;

      }

    }

    if (this.direction == 0) {

        $.scroll_x -= 1 * this.velocity * $.delta;
        $.scroll_y -= 0.5 * this.velocity * $.delta;

    } else if (this.direction == 1) {

        $.scroll_x -= -1 * this.velocity * $.delta;
        $.scroll_y += 0.5 * this.velocity * $.delta;

    } else if (this.direction == 2) {

        $.scroll_x += -1 * this.velocity * $.delta;
        $.scroll_y += 0.5 * this.velocity * $.delta;

    } else if (this.direction == 3) {

        $.scroll_x += 1 * this.velocity * $.delta;
        $.scroll_y -= 0.5 * this.velocity * $.delta;

    }

    this.colision = {x: this.x, y: this.y + 72,sx: this.x - $.scroll_x, sy: this.y - $.scroll_y + 72, width: 48, height: 24,c_x: (this.x - $.scroll_x) / 48, c_y: (this.y - $.scroll_y) / 48 * 2};

  }

};

$.Character.prototype.collision = function() {

  if ($.jumping == true)
    return {x:0,y:0,sx:0,sy:0,w:0,h:0,cx:0,cy:0};

  return this.colision;

};
