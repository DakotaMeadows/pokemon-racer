$(document).ready(function() {
  track = new Track(900, 1400);
  pikachu = new Pikachu(100, 700, track);
  lugia = new Lugia(100, 80, track);


  Mousetrap.bind('q', function() {
    pikachu.run();
  }, 'keyup')

  Mousetrap.bind('p', function() {
    lugia.run();
  }, 'keyup')

  setInterval(function () {
    if (pikachu.x + pikachu.width === track.width) {
      $("#victory").html("Pikachu WINS!");
      Mousetrap.unbind('p', 'keyup');
    }
    else if (lugia.x + lugia.width === track.width) {
      $("#victory").html("Lugia WINS!");
      Mousetrap.unbind('q', 'keyup');
    };
  })
});
