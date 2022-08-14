/* ---------news-------------------news--------------------------news------------------ */
							const windowInnerWidthNews = window.innerWidth;
							if (windowInnerWidthNews < 769) {
								var news_initial_items = 3;
								var news_next_items = 2;
							} else {
								var news_initial_items = 8;
								var news_next_items = 4;
							}

							var $news__items = $('#news__items').isotope({
								itemSelector: '.news__item',
								layoutMode: 'fitRows',
								stamp: '.news__item--static'
							});

							$('.news__btns-filter').on('click', 'button', function () {
								var news_value = $(this).attr('data-filter');
								$news__items.isotope({filter: news_value});
								news_updateFilterCounts();
							});
							function news_updateFilterCounts() {
								var itemElems_news = $news__items.isotope('getFilteredItemElements');
								var count_items_news = $(itemElems_news).length;
							
								if (count_items_news > news_initial_items) {
									$('#news__btn-plus').show();
								}
								else {
									$('#news__btn-plus').hide();
								}
								if ($('.news__item').hasClass('visible_item')) {
									$('.news__item').removeClass('visible_item');
								}
								var index = 0;
									$(itemElems_news).each(function () {
									if (index >= news_initial_items) {
										$(this).addClass('visible_item');
									}
									index++;
								});
								$news__items.isotope('layout');
							}

							
							$('.news__btns-filter').each(function (i, buttonGroup) {
								var $buttonGroup = $(buttonGroup);
								$buttonGroup.on('click', 'button', function () {
									$buttonGroup.find('.active').removeClass('active');
									$(this).addClass('active');
								});
							});

							function news_showNextItems(pagination) {
								var itemsMax_news = $('.visible_item').length;
								var itemsCount = 0;
								$('.visible_item').each(function () {
									if (itemsCount < pagination) {
										$(this).removeClass('visible_item');
										itemsCount++;
									}
								});
								if (itemsCount >= itemsMax_news) {
									$('#news__btn-plus').hide();
								}
								$news__items.isotope('layout');
							}
							function news_hideItems(pagination) {
								var itemsMax_news = $('.news__item').length;
								var itemsCount = 0;
								$('.news__item').each(function () {
									if (itemsCount >= pagination) {
										$(this).addClass('visible_item');
									}
									itemsCount++;
								});
								if (itemsCount < itemsMax_news || news_initial_items >= itemsMax_news) {
									$('#news__btn-plus').hide();
								}
								$news__items.isotope('layout');
							}
							$('#news__btn-plus').on('click', function (e) {
								e.preventDefault();
								news_showNextItems(news_next_items);
							});
							news_hideItems(news_initial_items);

							




/* --------------docs---------------------docs--------------------------------docs------------------ */
							$(".docs-btn-magazines").click(function () {
								$('.docs-btn-magazines').addClass("active");
								$('.docs-btn-sites').removeClass("active");
							
								$('.docs__items-sites').slideUp(600);
								$('.docs__items-magazines').slideDown(600);
							});
						
							$(".docs-btn-sites").click(function () {
								$('.docs-btn-sites').addClass("active");
								$('.docs-btn-magazines').removeClass("active");
							
								$('.docs__items-magazines').slideUp(600);
								$('.docs__items-sites').slideDown(600);
							});
						
						

/* ------------------news-page-----------------------------news-page------------------news-page----------- */


/* ----------------------elle-team----------------------------------elle-team----------------------------elle-team-------------- */
							$('.elle-team__btn-plus').click(function () {
								$('.elle-team__row-next:hidden').eq(0).show(500);
								$('.elle-team__row-next:hidden').length < 1 ? $('button.elle-team__btn-plus').hide(200) : false;
							});



/* -------------------------noimage-page--------------------------------noimage-page-------------------------------noimage-page------------------------------- */
							$(".team-noimage-page__btn-sale").click(function () {
								$('.team-noimage-page__btn-redaction').removeClass("active");
								$('.team-noimage-page__btn-sale').addClass("active");
								$('.team-noimage-page__body-sale').slideDown(600);
								$('.team-noimage-page__body-redaction').slideUp(600);
								$('.team-noimage-page__wrapper-sale-mobile').slideUp(600);
								$('.team-noimage-page__wrapper-redaction-mobile').slideDown(600);
							});
							$(".team-noimage-page__btn-redaction").click(function () {
								$('.team-noimage-page__btn-sale').removeClass("active");
								$('.team-noimage-page__btn-redaction').addClass("active");
								$('.team-noimage-page__body-redaction').slideDown(600);
								$('.team-noimage-page__body-sale').slideUp(600);
								$('.team-noimage-page__wrapper-redaction-mobile').slideUp(600);
								$('.team-noimage-page__wrapper-sale-mobile').slideDown(600);
							});
						
							$('.team-noimage-page__btn-plus-redaction').click(function () {
								$('.team-noimage-page__wrapper-redaction-next:hidden').eq(0).show(500);
								$('.team-noimage-page__wrapper-redaction-next:hidden').length < 1 ? $('button.team-noimage-page__btn-plus-redaction').hide(200) : false;
							});
							$('.team-noimage-page__btn-plus-sale').click(function () {
								$('.team-noimage-page__wrapper-sale-next:hidden').eq(0).show(500);
								$('.team-noimage-page__wrapper-sale-next:hidden').length < 1 ? $('button.team-noimage-page__btn-plus-sale').hide(200) : false;
							});
						
							$('.team-noimage-page__btn-plus-redaction-mobile').click(function () {
								$('.team-noimage-page__items-redaction-mobile-next:hidden').eq(0).show(500);
								$('.team-noimage-page__items-redaction-mobile-next:hidden').length < 1 ? $('button.team-noimage-page__btn-plus-redaction-mobile').hide(200) : false;
							});
							$('.team-noimage-page__btn-plus-sale-mobile').click(function () {
								$('.team-noimage-page__items-sale-mobile-next:hidden').eq(0).show(500);
								$('.team-noimage-page__items-sale-mobile-next:hidden').length < 1 ? $('button.team-noimage-page__btn-plus-sale-mobile').hide(200) : false;
							});
						
							$('.vacancies-noimage-page__btn-plus').click(function () {
								$('.vacancies-noimage-page__item-wrapper-hidden:hidden').eq(0).show(500);
								$('.vacancies-noimage-page__item-wrapper-hidden:hidden').length < 1 ? $('button.vacancies-noimage-page__btn-plus').hide(200) : false;
							});

















