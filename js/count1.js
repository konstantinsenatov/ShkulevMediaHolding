
var block_show1 = false;

function scrollTracking1(){
	if (block_show1) {
		return false;
	}
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.elle-digital-block__row').offset().top;
	var eh = $('.elle-digital-block__row').outerHeight();
	var dh = $(document).height();   
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show1 = true;
		
		// Код анимации
		$(document).ready(function () {
			$('.count1').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 1000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		});
	}
}
$(window).scroll(function(){
	scrollTracking1();
});
	
$(document).ready(function(){ 
	scrollTracking1();
});