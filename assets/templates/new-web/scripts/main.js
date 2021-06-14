$(document).ready(function() {
     
     $('.top-nav').meanmenu();

 	 $(".rslides").responsiveSlides({
      
	   auto: true,
	   speed: 500,
	   pager: true      
		 	 
     });

     
	 $('.blog-content:last').addClass('borderBottomRemove');
	 
	 $('.google-plus, .twitter, .facebook').hover(function(){
	      
		  $(this).toggleClass('bounce');	 
		 
	  });
	 
	 $('a[href^="http://"]').attr('target', 'blank');
	  
	 $(':text:first').focus();
    
	 $('.contacts').validate({
		 rules:{
			    name:{
				       required: true 				 	
					},
			    email:{
				       required: true,
					   email: true	
					}, 
				comments:{
				         required: true	
					},
				Examine: {
					required: true,
					equal: 13
					}
			 },
		 messages: {
			    name:{
				       required: "Моля, въведете вашето име"				 	
					},
			     email: {
					   required: "Моля, въведете вашият И-Мейл адрес" ,
					   email: "Този адрес не е валиден"
					 },
				comments:{
					    required: "Моля въведете вашето съобщение"
					 },
				Examine: {
						required: "Трябва да решите тази задача",
						equal: "О, я стига, сигурно се шегувате?"
					}
			 },
			
			  errorPlacement: function(error, element) {
			  error.appendTo(
			  element.parent()
			  .find("span")
 
			);
			 element.addClass('shake').css('border', '1px solid #DE4A4A')
}
    
	 });//end validate
	 
	 
	 $.validator.addMethod("equal", function(value, element, params) {
		return value == params;
	});
	   
	   $.stellar({
				horizontalScrolling: false,
				verticalOffset: 40
			});
	 
	  /*
	
     $('#portfolio-content').addClass('hide');
     $('#slide-text').addClass('animated1 fadeInRight')
	 $('#slider').addClass('animated1 fadeInLeft');
	 $('#portfolio-wrap').waypoint(function() {		
            setTimeout(function(){$('#portfolio-content').addClass('animated1 fadeInLeft').removeClass('hide')},200);			
        }, { offset: '35%' });
		*/
});//end ready