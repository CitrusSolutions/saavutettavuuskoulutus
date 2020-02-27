$(document).ready(function() {

  $('#haku').submit(function(e) {
    var input = $('#haku input').first().val();
    if (input.match(/^kis.*/)) {
      e.preventDefault();
      $('.navbar').after('<div class="container"><div class="alert alert-primary mt-1 mb-1" role="banner" aria-live="assertive">Löysit kissa-aarteen. Hae lisää pizzaa.</div></div>');
    }
  });

});
