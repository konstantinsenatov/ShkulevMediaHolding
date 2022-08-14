
var block_show2 = false;

function scrollTracking2(){
	if (block_show2) {
		return false;
	}
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.elle-digital-block__num').offset().top;
	var eh = $('.elle-digital-block__num').outerHeight();
	var dh = $(document).height();   
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show2 = true;
		
		// Код анимации
		$(document).ready(function () {
			$('.count2').each(function () {
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
	scrollTracking2();
});
	
$(document).ready(function(){ 
	scrollTracking2();
});