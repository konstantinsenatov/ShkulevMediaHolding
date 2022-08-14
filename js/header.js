/* ---------------------появление элементов при прокрутке--------------------------- */
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('active');
		}
	});
}
let options = {
	threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.show');
for (let elm of elements) {
	observer.observe(elm);
}
$('.menu-header__item-projects').hover(
	function () {
		$('.menu-page-wrapper, .menu-header__item-projects').addClass('active');
	},
	function () {
		$('.menu-page-wrapper, .menu-header__item-projects').removeClass('active');
	}
);
$(".icon-menu-header").click(function () {
	$('.icon-menu-header, .header, .menu-page-mobile').toggleClass("active");
});
$(document).ready(function() {
	$('.menu-page-mobile__title-projects-main').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(600);
		$('.menu-page-mobile__item-projects-main').toggleClass('active');
	});
	$('.header-mobile-title-about__spoiler').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(600);
		$('.header-mobile-item-about__spoiler').toggleClass('active');
	});
}); 

var lastScroll = 0;
jQuery(document).ready(function($) {
	$(".page, .menu-page-mobile").addClass("indent-top");
	$(".menu-header__item, .header__logo-click").addClass("indent-smaller");

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > lastScroll) {
			$(".menu-header__item, .header__logo-click").removeClass("indent-smaller");
		} else {
			$(".menu-header__item, .header__logo-click").addClass("indent-smaller");
		}
		lastScroll = scroll;
	});
});