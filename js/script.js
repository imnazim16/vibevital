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
			breakpoint: 840,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
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
			breakpoint: 840,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 541,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: false,
			},
		},
		// {
		// 	breakpoint: 500,
		// 	settings: {
		// 		arrows: fasle,
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 		infinite: true,
		// 	},
		// },
	],
});

// Sidebar menu 
const openMenu = document.querySelector(".menu-bar");
const closeMenu = document.querySelector(".close-menu");
const sidebarItems = document.querySelector('nav ul');
const overlay = document.querySelector('.overlay');

openMenu.addEventListener("click",()=>{
	sidebarItems.classList.add("active");
	overlay.classList.add("active");
})
closeMenu.addEventListener("click",()=>{
	sidebarItems.classList.remove("active");
	overlay.classList.remove("active");
})
overlay.addEventListener("click",()=>{
	sidebarItems.classList.remove("active");
	overlay.classList.remove("active");
})

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

