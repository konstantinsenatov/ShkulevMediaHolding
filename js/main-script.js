

/* sgp--------------------------sgp------------------------------sgp */
							$('.item-sgp__btn-plus').click(function () {
								$('.item-sgp-hidden:hidden').eq(0).show(600);
								$('.item-sgp-hidden:hidden').length < 1 ? $('button.item-sgp__btn-plus').hide() : false;
							});




							$('.news-page__btn-plus').click(function () {
										$('.news__row-next:hidden').eq(0).show(500);
										$('.news__row-next:hidden').length < 1 ? $('button.news-page__btn-plus').hide(200) : false;
									});


/* ------------------career--------------------------career------------------------career------ */
							var swiper = new Swiper(".tell-us-career__swiper", {
								spaceBetween: 40,
								allowTouchMove: false,
								pagination: {
									el: ".tell-us-career__pagination",
									clickable: true,
								},
							});
							$(".tell-us-career__personal-information--click").click(function () {
								$(this).toggleClass("active");
							});

/* -----------------news-page----------------------news-page-------------------------news-page-------------- */
							$(".sec3-news-page__video-btn").click(function () {
								$('.sec3-news-page__video-btn, .sec3-news-page__video-img').addClass("hide");
							});

							var swiper = new Swiper(".sec6-news-page__swiper", {
								navigation: {
									nextEl: ".sec6-news-page-btn-next",
									prevEl: ".sec6-news-page-btn-prev",
								},
							});
						
							var swiper = new Swiper(".sec8-news-page__items-mobile", {});



/* ----------------------contacts-page----------------------contacts-page-------------------contacts-page----------- */
							$(".form-contacts-page__click").click(function () {
								$(this).toggleClass("active");
							});








