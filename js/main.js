$(function() {
	$('body').scrollspy({
    	target: 'nav',
    	offset: 120
	});
});

$(window).scroll(function() {
	if ($(window).scrollTop() >= 70) {
		$('header').addClass('small');
	} else {
		$('header').removeClass('small');
	}

	if ($(window).scrollTop() >= 108) {
		$('nav').addClass('sticky');
		if ($('.navbar-collapse').hasClass('in') == true) {
			$(".navbar-toggle").click();
		}
	} else {
		$('nav').removeClass('sticky');
		if ($('.navbar-collapse').hasClass('in') == false) {
			$(".navbar-toggle").click();
		}
	}
});