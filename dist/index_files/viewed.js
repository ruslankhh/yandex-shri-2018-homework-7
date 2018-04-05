jQuery(document).ready(function($) {

	$container = $('#wwContainer');

	$container.on('click', '.wwsc', function() {

		$container
		.removeClass('show-views')
		.addClass('show-comments');

	});
	$container.on('click', '.wwsv', function() {
		// $('.widget-week__switcher span').removeClass('active');
		// $(this).addClass('active');

		$container
		.removeClass('show-comments')
		.addClass('show-views');
		
	});
});


