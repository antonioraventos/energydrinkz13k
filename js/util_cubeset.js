"use strict";

$.Cubeset = function () {

  this.s_width = 96;
  this.s_height = 48;
  this.s_extra_height = 120 - this.s_height;

  this.spriteSheet = [];

  for (var i = 0; i < $.dSpriteSheet.length; i++) {

    var resources = this.createResource($.dSpriteSheet[i]);

    for (var r = 0; r < resources.length; r++) {

      this.spriteSheet.push(resources[r]);

    }

  }

};

$.Cubeset.prototype.createResource = function(face) {

  this.resources = [];

  switch(face) {
    case "block-green":
      this.resources.push(this.createCube(face,0,""));
    break;
    case "block-purple":
      this.resources.push(this.createCube(face,1,"",""));
    break;
    case "block-blue":
      this.resources.push(this.createCube(face,3,"",""));
    break;
    case "block-yellow":
      this.resources.push(this.createCube(face,2,"",""));
    break;
    case "block-red":
      this.resources.push(this.createCube(face,4,"",""));
    break;
    case "item-key-green":
      this.resources.push(this.createCube(face,5,"🍺","#ffffffaa"));
    break;
    case "item-key-purple":
      this.resources.push(this.createCube(face,6,"👓","#ffffffaa"));
    break;
    case "item-key-blue":
      this.resources.push(this.createCube(face,8,"☢","#000000aa"));
    break;
    case "item-key-yellow":
      this.resources.push(this.createCube(face,7,"🔑","#ffff00"));
    break;
    case "item-key-red":
      this.resources.push(this.createCube(face,9,"",""));
    break;
    case "npc-face1-green":
      this.resources.push(this.createCharacter(face,"#1b5e20","#76ff0377","#ccff9077",true,0,0,"0"));
    break;
    case "npc-face1-purple":
      this.resources.push(this.createCharacter(face,"#422771","#b39ddb77","#d1c4e977",true,0,0,"0"));
    break;
    case "npc-face1-yellow": //AZUL
      this.resources.push(this.createCharacter(face,"#448aff","#1976d277","#90caf977",true,0,0,"0"));
    break;
    case "npc-face1-blue": // yellow
      this.resources.push(this.createCharacter(face,"#eeff41","#c6ff0077","#dce77775",true,0,0,"0"));
    break;
    case "npc-face1-red":
      this.resources.push(this.createCharacter(face,"#bf360c","#ff3d0077","#ff8a6775",true,0,0,"0"));
    break;
    case "enemy-face1-green":
      this.resources.push(this.createCharacter(face,"#d50000","#b71c1c","#e53935",true,0,0,"0"));
    break;
    case "character":

      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,0,"0"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,4,"0-1"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,8,"0-2"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,12,"0-3"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,16,"0-4"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,20,"0-5"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,24,"0-6"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,28,"0-7"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,0,32,"0-8"));

      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,1,0,"1"));

      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,2,0,"2"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,0,"3"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,4,"3-1"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,8,"3-2"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,12,"3-3"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,16,"3-4"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,20,"3-5"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,24,"3-6"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,28,"3-7"));
      this.resources.push(this.createCharacter(face,"#0d47a1","#1565c0","#1976d2",true,3,32,"3-8"));

    break;

  }

  return this.resources;

};

$.Cubeset.prototype.getResource = function(face) {

  for (var m = 0; m < this.spriteSheet.length;m++) {

    if (this.spriteSheet[m].face == face) {

      return this.spriteSheet[m].sprite;

    }

  }

  return undefined;

}

$.Cubeset.prototype.createCube = function(face,color,decoration,color_decoration) {

  var color_1 = $.colors[color * 3];
  var color_2 = $.colors[color * 3 + 1];
  var color_3 = $.colors[color * 3 + 2];

  $.canvas_builder.width = this.s_width;
  $.canvas_builder.height = this.s_extra_height + this.s_height;

  $.ctx_builder.clearRect(0, 0, $.width, $.height);

  $.ctx_builder.fillStyle="#00000000";
  $.ctx_builder.clearRect(0, 0, this.s_width, this.s_height);
  $.ctx_builder.fillRect(0,0,this.s_width,this.s_height);

  $.ctx_builder.fillStyle=color_1;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(this.s_height, 0);
  $.ctx_builder.lineTo(0, this.s_height / 2);
  $.ctx_builder.lineTo(this.s_width, this.s_height / 2);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(0, this.s_height / 2);
  $.ctx_builder.lineTo(this.s_height, this.s_height);
  $.ctx_builder.lineTo(this.s_width, this.s_height / 2);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  if (decoration !="") {

    $.ctx_builder.font = "bold 36px Arial";
    $.ctx_builder.fillStyle = color_decoration;

    var gradient= $.ctx_builder.createLinearGradient(0,0,this.s_width,0);
    gradient.addColorStop("0","#f3e5f5");
    gradient.addColorStop("0.5","#8e24aa");
    gradient.addColorStop("1.0","#aa00ff");

    //$.ctx_builder.fillStyle = gradient;

    $.ctx_builder.fillText(decoration, this.s_width / 2 - 18, this.s_height - 16);

  }

  $.ctx_builder.fillStyle=color_2;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(0, this.s_height / 2);
  $.ctx_builder.lineTo(0, this.s_height * 2);
  $.ctx_builder.lineTo(this.s_width / 2, this.s_height * 2 + this.s_height / 2);
  $.ctx_builder.lineTo(this.s_width / 2, this.s_height);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  $.ctx_builder.fillStyle=color_3;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(this.s_width, this.s_height / 2);
  $.ctx_builder.lineTo(this.s_width, this.s_height * 2);
  $.ctx_builder.lineTo(this.s_width / 2 , this.s_height * 2 + this.s_height / 2);
  $.ctx_builder.lineTo(this.s_width / 2, this.s_height);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  var tmp = document.createElement('img');
  tmp.src = $.canvas_builder.toDataURL();
  tmp.id = face;
  tmp.style = "display:none";
  document.body.appendChild(tmp);

  return {"face": face, "sprite": document.getElementById(face)};

}

$.Cubeset.prototype.createCharacter = function(face,color_1,color_2,color_3, eye, dir, mouth,extra_name) {

  $.canvas_builder.width = this.s_width;
  $.canvas_builder.height = this.s_extra_height + this.s_height;

  $.ctx_builder.clearRect(0, 0, $.width, $.height);

  $.ctx_builder.fillStyle="#00000000";
  $.ctx_builder.clearRect(0, 0, this.s_width, this.s_height);
  $.ctx_builder.fillRect(0, 0,this.s_width,this.s_height);

  $.ctx_builder.fillStyle=color_1;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(this.s_height, 0);
  $.ctx_builder.lineTo(0, this.s_height / 2);
  $.ctx_builder.lineTo(this.s_width - 16, this.s_height / 2);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(10, this.s_height / 2);
  $.ctx_builder.lineTo(this.s_height, this.s_height);
  $.ctx_builder.lineTo(this.s_width, this.s_height / 2);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(0, this.s_height / 2);
  $.ctx_builder.lineTo(this.s_height, this.s_height);
  $.ctx_builder.lineTo(this.s_width, this.s_height / 2);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  $.ctx_builder.fillStyle=color_2;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(0, this.s_height / 2);
  $.ctx_builder.lineTo(0, this.s_height * 2);
  $.ctx_builder.lineTo(this.s_width / 2, this.s_height * 2 + this.s_height / 2);
  $.ctx_builder.lineTo(this.s_width / 2, this.s_height);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  $.ctx_builder.fillStyle=color_3;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(this.s_width, this.s_height / 2);
  $.ctx_builder.lineTo(this.s_width, this.s_height * 2);
  $.ctx_builder.lineTo(this.s_width / 2 , this.s_height * 2 + this.s_height / 2);
  $.ctx_builder.lineTo(this.s_width / 2, this.s_height);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  var mouth = mouth || 0;

  if (eye == true) {

    if (dir == 0) {


      this.drawEye("white","black","cyan",64,54,24,36,0);
      this.drawMouth("white",58,100,32 - mouth,4);

    }

    if (dir == 3) {

      this.drawEye("white","black","cyan",12,48,24,36,dir);
      this.drawMouth("white",6,88,32 - mouth,4,dir);

    }

  }

  var tmp = document.createElement('img');
  tmp.src = $.canvas_builder.toDataURL();
  tmp.id = face + "-" + extra_name;
  tmp.style = "display:none";
  document.body.appendChild(tmp);

  return {"face": face + "-" + extra_name, "sprite": document.getElementById(tmp.id)};

}

$.Cubeset.prototype.drawEye = function(color_1,color_2,color_3,x,y,size_x, size_y,dir) {

  $.ctx_builder.fillStyle=color_1;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(x, y);

  var y1p = y - (size_x * 0.5);
  var y2p = y + size_y - (size_x * 0.5);

  if (dir == 3) {

    var y1p = y + (size_x * 0.5);
    var y2p = y + size_y + (size_x * 0.5);

  }

  var y3p = y + size_y;

  $.ctx_builder.lineTo(x + size_x, y1p);
  $.ctx_builder.lineTo(x + size_x, y2p);
  $.ctx_builder.lineTo(x, y3p);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  size_x -= 8;
  size_y -= 16;
  var desp_x = 4;
  var desp_y = 6;

  y1p = y - (size_x * 0.5);
  y2p = y + size_y - (size_x * 0.5);

  if (dir == 3) {

    y1p = y + (size_x * 0.5);
    y2p = y + size_y + (size_x * 0.5);

  }

  $.ctx_builder.fillStyle=color_2;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(x + desp_x, y + desp_y);
  $.ctx_builder.lineTo(x + size_x + desp_x,y1p + desp_y);
  $.ctx_builder.lineTo(x + size_x + desp_x, y2p + desp_y);
  $.ctx_builder.lineTo(x + desp_x, y + size_y + desp_y);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

  size_x = 8;
  size_y = 8;
  var desp_x = 8;
  var desp_y = 12;

  y1p = y - (size_x * 0.5);
  y2p = y + size_y - (size_x * 0.5);

  if (dir == 3) {

    y1p = y + (size_x * 0.5);
    y2p = y + size_y + (size_x * 0.5);

  }

  $.ctx_builder.fillStyle=color_3;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(x + desp_x, y + desp_y);
  $.ctx_builder.lineTo(x + size_x + desp_x, y1p + desp_y);
  $.ctx_builder.lineTo(x + size_x + desp_x, y2p + desp_y);
  $.ctx_builder.lineTo(x + desp_x, y + size_y + desp_y);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

}

$.Cubeset.prototype.drawMouth = function(color_1,x,y,size_x, size_y,dir) {

  var y1p = y - (size_x * 0.5);
  var y2p = y + size_y - (size_x * 0.5);

  if (dir == 3) {

    y1p = y + (size_x * 0.5);
    y2p = y + size_y + (size_x * 0.5);

  }

  $.ctx_builder.fillStyle = color_1;
  $.ctx_builder.beginPath();
  $.ctx_builder.moveTo(x, y);
  $.ctx_builder.lineTo(x + size_x, y1p);
  $.ctx_builder.lineTo(x + size_x, y2p);
  $.ctx_builder.lineTo(x, y + size_y);
  $.ctx_builder.closePath();
  $.ctx_builder.fill();

}
