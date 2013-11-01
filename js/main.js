$(document).ready(function(){
	$('.loader').addClass('la-animate');
	setTimeout(function(){
		$('.loader').addClass('la-rotate');
		//$('.loader').removeClass('la-animate');
	}, 5000);
});