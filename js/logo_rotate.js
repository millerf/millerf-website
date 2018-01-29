$(function(){
	
	var context ;
	var TO_RADIANS = Math.PI/180; 	
	var height= 208;
	var width= 203;
	var logoImage = new Image(); 
	
	function replaceLogo(){
		
		
		logoImage.src = 'images/logo.png';
		logoImage.onLoad = function(){
		
			var canvas = document.createElement('canvas');
			
			document.getElementById('logo').innerHTML ='';
			document.getElementById('logo').appendChild(canvas);
			canvas.width = width; 
			canvas.height = height;
			
			context = canvas.getContext('2d'); 
			
			context.drawImage(logoImage,0,0);
		}

	}
	
	
	
	var TO_RADIANS = Math.PI/180;
	var MIN_ANGLE = 1.5;		//degrés minimum de variation avant de bouger. Sert a eviter les tremblements 	
	var useorientation = true;
	var old_b = 0;
	function tilt(a,b){
		// save the context's co-ordinate system before 
		// we screw with it
		
		//console.debug(b + ' - ' + a )
		if(!useorientation) b = 0;
		
		//attenue les vibrations
		if(Math.abs(old_b-b) < MIN_ANGLE) return;
		
		old_b = b;
		if(Math.abs(b)>45) b=-Math.abs(b)+90;
			
		if(context.save) context.save(); 
		context.clearRect (0, 0, width, height); 
		// move the origin to 50, 35   
		context.translate(0, 0); 
		 
		// now move across and down half the 
		// width and height of the image (which is 128 x 128)
		context.translate(width/2,height/2); 
		 
		// rotate around this point
		context.rotate(-b*TO_RADIANS); 
		// then draw the image back and up
		context.drawImage(logoImage, -width/2,-height/2,width,height); 
		 
		// and restore the co-ordinate system to its default
		// top left origin with no rotation
		context.restore();
				
	}
	
	
	
	
	
	setTimeout(function(){
		
		
		if(window.DeviceOrientationEvent || window.DeviceMotionEvent || window.OrientationEvent){
			replaceLogo();
			brancherOrientation();
			if (window.DeviceOrientationEvent) {
				window.addEventListener("deviceorientation", function () {
					tilt(event.beta, event.gamma);
				}, false);
				
			} else if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', function () {
					tilt(event.acceleration.x * 2, event.acceleration.y * 2);
				}, false);
			} else if(window.OrientationEvent) {
				window.addEventListener("MozOrientation", function () {
					tilt(orientation.x * 50, orientation.y * 50);
				}, false);
			}
			
		}
		
		
		
		
		
	},500)
	
	
	function brancherOrientation(){
		useorientation = true;
		
	}
	
	
	function debrancherOrientation(){
		useorientation = false;
	}
	
	
	
	var logo_top = 10;
	var max_var  = 230;
	var min_opacity = 0.30;
	var max_opacity = 0;
	var min_width = 449;
	var max_width = 10;
	var logo_max  = 130;
	$(window).bind('scroll',onscroll).trigger("scroll");
	function onscroll(){
		
		var _cur_top = $(window).scrollTop();
		//_cur_top  = (_cur_top >= max_var ? max_var : _cur_top);
		if(_cur_top < max_var){
			 brancherOrientation()
			$('#menu_wrapper_wrapper').css({'position':'relative','top':'0px'})	;
			$('#logo_wrapper').css({'position':'relative'})		
			
			
			var pct = (max_var- (max_var - _cur_top)) /max_var 
			
			$('#logo_wrapper').css('top', ( pct  * logo_max) +logo_top)	;
			$('#ombre_logo img').css({
										'opacity': 	min_opacity + (max_opacity-min_opacity) *pct,
										'width': 	min_width + (max_width-min_width) *pct
			});
			$('#ombre_logo').css({
										'width': 	min_width + (max_width-min_width) *pct,
										'left': 	-(min_width + (max_width-min_width) *pct)/2
			});
			$('#baseline').css(
			{
				'position':'absolute',
				'bottom':'-10px',
				'top':'',
				'opacity':0.74
			})
		}else{
			debrancherOrientation()
			$('#menu_wrapper_wrapper').css({
					'position':'Fixed',
					'top':'30px',
					})	;
			$('#logo_wrapper').css({
					'position':'Fixed',
					'top':'-90px'
			})	;
			$('#ombre_logo img').css({'opacity':0})
			$('#baseline').css(
			{
				'position':'fixed',
				'top':'0',
				'opacity':1
			})
			
		}
	}
});