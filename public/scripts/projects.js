$(document).ready(function(){
$('.project-link').click(function() {
  var classes = this.classList;
 
  console.log(classes[1]); 
  var dataContainer = $('.projectdata')
  var show = $('.section.' + classes[1]);

  $(dataContainer).children().addClass('hide');
  $(show).removeClass('hide');
});
});
