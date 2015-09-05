$('.horizontal .progressFill span').each(function(){
  var percent = $(this).html();
  $(this).parent().css('width', percent);
});
