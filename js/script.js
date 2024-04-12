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

// ------- pop-up ---------

const popUpOpen = document.querySelector('.btn-poup'); 
const closeBtn = document.querySelector('.btn-close');
const popUpBox = document.querySelector('.pop-up-container')

popUpOpen.addEventListener('click', ()=>{
	popUpBox.classList.add('active')
})

closeBtn.addEventListener('click', ()=>{
	popUpBox.classList.remove('active')
})

// ------- Accordian ---------

let accBox = document.querySelectorAll('.acc-box');
let symbol = document.querySelectorAll('.symbol');

accBox.forEach((item, index) => {
	
	item.addEventListener('click', ()=>{
		accBox.forEach(cuurItem => {
			cuurItem.classList.remove('active')	
		})
		item.classList.add('active')
		symbol.forEach(symbol => {
			symbol.textContent = '+'
		})
		symbol[index].textContent = "-"
	})
});