function Track(height, width) {
  this.height = height;
  this.width = width;
  this.$element = $('<div id="track"></div>');
  this.$element.css('height', height);
  this.$element.css('width', width);
  $('body').append(this.$element);
}

// <img src="public/img/background.jpg"/>
