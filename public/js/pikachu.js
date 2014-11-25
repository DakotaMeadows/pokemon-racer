function Pikachu(x, y, track) {
  this.track = track;
  this.x = x;
  this.y = y;
  this.$sprite = $('<div id="standing_pikachu"><img src="/img/pikachu_standing.png"/></div>');
  $('#track').append(this.$sprite);
  this.height = this.$sprite.height();
  this.width = this.$sprite.height();
  this.updateSpritePosition();
}

Pikachu.prototype.updateSpritePosition = function() {
  this.$sprite.css('left', this.x - this.width / 2);
  this.$sprite.css('top', this.y - this.height / 2);
}

Pikachu.prototype.run = function() {
  var old_x = this.x;
  $('#standing_pikachu img').attr('src', '/img/pikachu_running.gif')
  this.x += 100;
  if  (((this.x - this.width / 2) < 0) ||
      ((this.x + this.width / 2) > this.track.width)) {
      this.x = old_x;
      this.collided = true;
      $('#standing_pikachu img').attr('src', '/img/pikachu_standing.png')
  }
  this.updateSpritePosition();
}


