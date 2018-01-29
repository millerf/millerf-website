$(function(){
	
	
	$('.slides_control div').hover(function(){

			$(this).find('p').stop().slideDown('fast');	
		}
		,
		function(){
			$(this).find('p').stop().slideUp();	
		}
	)
	
	
	
})