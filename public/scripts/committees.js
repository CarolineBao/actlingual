$(document).ready(function(){
$('.committee-link').click(function() {
  var classes = this.classList;

  console.log(classes[1]);
  var dataContainer = $('.committeedata')
  var show = $('.section.' + classes[1]);

  $(dataContainer).children().addClass('hide');
  $(show).removeClass('hide');
});
});
