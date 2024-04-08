'use strict';

$('.logo-slider').slick({
	centerMode: true,
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
			},
		},
	],
});

$('.test-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 995,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			},
		},
	],
});
