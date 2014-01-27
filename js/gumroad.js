$(function() {
	 var interval = 5000, 
	 	options = [
		    ["music", "listeners"],
		    ["software", "users"],
		    ["films", "viewers"],
		    ["comics", "readers"]
		],
		$gumroadHolder = $('.gumroad h2 > .holder'),
		$gumroadH = $('.gumroad h2'),
		currentIndex = 0,
		widths = [];

	$.each(options, function( index, value ) {
		var len = value.length,
			width = [];
		for(var i = 0; i < len; i++) {
	      	var ele = $('<span/>', { text: value[i] }).appendTo( $gumroadH );
	      	width.push( ele.width() );
	     	ele.remove();
	     }
	     widths.push( width );
  	});

	$gumroadHolder.css( { opacity: 0 } );
  
  	(function loop() {
    	currentIndex = currentIndex % options.length;
    	var len = options[currentIndex].length;
    	for(var i=0; i < len; i++) {
	     	$gumroadHolder.eq(i).data('val', i).text( options[currentIndex][i] ).removeClass('hinge animated').animate( { width: widths[currentIndex][i] }, 400, function() {
	    	   	$(this).addClass('tada animated');
	    	   	$(this).animate( { opacity: 1 }, 1000, function() {
	    	   		$(this).removeClass('tada animated').addClass('hinge animated');
	    	   	}).delay( 1500 ).animate({ opacity: 0 }, 1000, function() {
	    	   		if($(this).data('val') == len - 1) {
	    	   			currentIndex++;
	    				loop();
	    	   		}
	    	   	});
	      	});
	    }
  	})();
});

/* 
  1. Making it as Jquery Plugin
  2. Using dyanamic data, switch animate.css animations
*/