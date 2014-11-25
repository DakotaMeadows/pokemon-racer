function Lugia(x, y, track) {
  this.track = track;
  this.x = x;
  this.y = y;
  this.$sprite = $('<div id="standing_lugia"><img src="/img/lugia_standing.gif"/></div>');
  $('#track').append(this.$sprite);
  this.height = this.$sprite.height();
  this.width = this.$sprite.height();
  this.updateSpritePosition();
}

Lugia.prototype.updateSpritePosition = Pikachu.prototype.updateSpritePosition;

Lugia.prototype.run = function() {
  var old_x = this.x;
  $('#standing_lugia img').attr('src', '/img/lugia_flying.gif')
  this.x += 100;
  if  (((this.x - this.width / 2) < 0) ||
      ((this.x + this.width / 2) > this.track.width)) {
      this.x = old_x;
      this.collided = true;
      $('#standing_lugia img').attr('src', '/img/lugia_standing.gif')
  }
  this.updateSpritePosition();
}
