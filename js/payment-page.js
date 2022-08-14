var $grid = $('.groups-payment-page__items').isotope({
	itemSelector: '.form__item',
	layoutMode: 'masonry',
});

var filterFns = {};

$('.groups-payment-page__btns').on( 'click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	filterValue = filterFns[ filterValue ] || filterValue;
	$grid.isotope({ filter: filterValue });
});

$('.groups-payment-page__btns').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.active').removeClass('active');
		$( this ).addClass('active');
	});
});
