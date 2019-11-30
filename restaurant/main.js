const openNavClick = document.querySelector('.nav-slider');
var closeNavClick = document.querySelector('.close-nav-slider');
var navSliderSection = document.querySelector('.nav-slider-section');

openNavClick.onclick = function() => {
	navSliderSection.classList.add('openNav');
}

