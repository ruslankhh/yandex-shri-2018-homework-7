;jQuery(document).ready(function($) {
	// if ($('body').hasClass('single-format-standard') == false) return;
	
	$(window).load(function() {
		$('.soc-div').slideDown(300);
	});

	window.onbeforeunload = function() {}
	$(window).unload( function() {} ); //hack for opera, safari, firefox
});




