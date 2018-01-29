$(function(){
	
	
	//ss-menus
	$('#menu ul li:has(.sous-menu)').each(function(){
		$(this).hover(function(){
			$(this).children('.sous-menu').hide().stop().slideDown()
		},function(){
			$(this).children('.sous-menu').show().stop().slideUp()				
		})	
		$(this).bind('click',function(e){
			//if($(this).parents('.sous-menu').size() ==0) //permet le click des sous menus
			//e.stopPropagation();
			{
				//e.preventDefault();
				$(this).children('.sous-menu').slideToggle()
			}
		});
	})
	
	//presentation
	$('#menu ul:not(#menu_pres,.sous-menu) > li').hover(function(){
		var i = $(this).prevAll().size();
		$('#menu_pres li').eq(i).css('visibility','visible');
	},function(){
		$('#menu_pres li').css('visibility','hidden');
	})
	
	
});