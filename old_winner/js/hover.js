$(function(){

 var bgColor = $('.bgColor');
 //bgColor.click(function(event){event.preventDefault();}); 
 bgColor.append('<span class="hover_slow"></span>').each(function() {
        var $span = $('> span.hover_slow', this).css('opacity', 0);
		
        $(this).hover(function() {
            $span.stop().fadeTo(250, 1);
        }, function() {
            $span.stop().fadeTo(500, 0);
        });
    });
	

		
$('.location').hover(function(){
	var titleText = $(this).attr('title');
	$(this)
		.data('tipText', titleText)
		.removeAttr('title');
	$('<p class="tooltip"></p>')
		.text(titleText)
		.appendTo('body')
	.css('top', (event.pageY - 10) + 'px')
	.css('left', (event.pageX + 20) + 'px')
	.fadeIn('slow');
	
}, function(){
	  $(this).attr('title', $(this).data('tipText'));
      $('.tooltip').remove();

}).mouseout(function(event){
	$('.tooltip')
		.css('top', (event.pageY - 10) + 'px')
		.css('left', (event.pageX + 20) + 'px');

});


$('.portfolio-inner').hover(function(){

	$(this).stop().animate({'backgroundColor' : '#050505'}, 300);
		
}, function(){
	
	$(this).stop().animate({'backgroundColor' : '#131313'}, 200);
		
});

$('.hover-img img').hover(function(){
	$(this).stop().animate({'opacity' : 0}, 800);
}, function(){
	$(this).stop().animate({'opacity' : 1}, 500);
});

  // initialize scrollable
  $(".scrollable").scrollable();
  $('.scrollable img').each(function(){
  	$(this).hover(function(){
  		$(this).css('opacity', 0.5);
  	}, function() {
		$(this).css('opacity', 1);
	  });


});
  
  $('.year').text(theYear);
 

});//end function

now = new Date;
theYear = now.getYear();
if(theYear < 1900){
	theYear = theYear + 1900
}