var block_show = false;
function scrollTracking(){
	if (block_show) {
		return false;
	}
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.digits-block__row').offset().top;
	var eh = $('.digits-block__row').outerHeight();
	var dh = $(document).height();   
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		// Код анимации
		$(document).ready(function () {
			$('.count').each(function () {
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
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});