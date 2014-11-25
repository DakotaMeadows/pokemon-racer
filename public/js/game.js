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

  var conditions = setInterval(function() {
    if (pikachu.x + pikachu.width === track.width) {
      $("h2").html("Pikachu WINS!");
      Mousetrap.unbind('p', 'keyup');
      clearInterval(conditions);
      setTimeout(function() {window.location.href = "http://127.0.0.1:9393/"}, 1000);
    }
    else if (lugia.x + lugia.width === track.width) {
      $("h2").html("Lugia WINS!");
      Mousetrap.unbind('q', 'keyup');
      clearInterval(conditions);
      setTimeout(function() {window.location.href = "http://127.0.0.1:9393/"}, 1000);
    };

  })

});


