function scrollToBlock(destination) {
	$('html,body').animate({
		scrollTop: destination.offset().top - $('header').first().height() - 20
	}, 'slow');
}
function scrollToBlockHalfScreen(destination) {
	$('html,body').animate({
		scrollTop: destination.offset().top - document.documentElement.clientHeight / 2
	}, 'slow');
}

function generateCountSpans(string) {

	var result = '';
	var splitted = string.split(/(\d*)/);
	splitted.forEach(function (element) {
		if (element.replace(/[^\d]/g, '').length > 0) {
			//если число
			result += '<span class="count-card">' + element + '</span>';
		}
		else {
			result += '<span>' + element + '</span>';
		}
	});

	return result;
	//return '<span class="count-card">' + string.split(/(\d*)/).join('</span><span class="count-card">') + '</span>';
}

function printPrice(price) {
	return price.toLocaleString('ru') + ' руб.';
}

function orderFormChangeVisibility(newStatus) {
	if (newStatus) {
		$("#order-section").slideDown(1500);
	}
	else {
		$("#order-section").slideUp(1500);
	}
}


function reCalcCart(price) {
	var cart = $('#basket__items'),
		jsonCart = $('#json-cart'),
		cartItems = cart.find('.basket__item'),
		cartPriceBlock = $('.js-cart-price'),
		allPrice = 0
	newJsonCartValue = { products: [] };

	if (cartItems.length > 0) {
		cartItems.each(function () {
			var item = $(this),
				itemPrice = parseInt(item.attr('data-price')),
				itemId = parseInt(item.attr('data-id')),
				itemType = parseInt(item.attr('data-type')),
				itemNumber = parseInt(item.find('input[name="number"]').val());

			allPrice += itemPrice * itemNumber;
			newJsonCartValue.products.push({
				id: itemId,
				variation: itemType,
				number: itemNumber
			});
		});

		$("#basket__btn").prop('disabled', null);
		orderFormChangeVisibility(true);

	}
	else {
		$("#basket__btn").prop('disabled', 'disabled');
		orderFormChangeVisibility(false);
	}

	jsonCart.val(JSON.stringify(newJsonCartValue));

	cartPriceBlock
		.html(printPrice(allPrice))
		.attr('data-price', allPrice);

}

$(document).ready(function () {
	var bigCard = $('#big-card');

	$('.js-continue-buy').on('click', function () {
		var id = $('#big-card').attr('data-selected-item-id');
		scrollToBlock($('.js-cards-item[data-item-id="' + id + '"]'));
	});


	$('body').on('click', '.js-cards-item', function () {
		var $this = $(this),
			name = $this.attr('data-item-name'),
			id = parseInt($this.attr('data-item-id')),
			price = $this.find('.cards__price').html().replace(/[^+\d]/g, '');
		subscribersNumber = $this.attr('data-subscribers-number'),
			subscribersPerMonth = $this.attr('data-subscribers-per-month'),
			averageCoverage = $this.attr('data-average-coverage'),
			parameterERR = $this.attr('data-err'),
			bigImageSrc = $this.attr('data-image'),
			cartLogo = $this.attr('data-logo-in-cart');

		bigCard.attr('data-selected-item-id', id);
		bigCard.attr('data-selected-item-price', price);
		bigCard.attr('data-logo-in-cart', cartLogo);
		bigCard.find('.js-big-card-name').html(name);
		bigCard.find('.js-big-card-sn').html(generateCountSpans(subscribersNumber));
		bigCard.find('.js-big-card-spm').html(generateCountSpans(subscribersPerMonth));
		bigCard.find('.js-big-card-ac').html(generateCountSpans(averageCoverage));
		bigCard.find('.js-big-card-err').html(generateCountSpans(parameterERR));
		bigCard.find('.js-big-card-pic img').attr('src', bigImageSrc);

		if (block_show1) {
			bigCard.find('.count-card').each(function () {
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
		}
		scrollToBlock(bigCard);

	});
	$('body').on('click', '.js-add-to-cart', function () {
		var id = bigCard.attr('data-selected-item-id'),
			product_card = $('.js-cards-item[data-item-id="' + id + '"]'),
			logoSrc = bigCard.attr('data-logo-in-cart'),
			logoAlt = bigCard.find('.js-big-card-name').text(),
			price = bigCard.attr('data-selected-item-price'),
			humanReadPrice = printPrice(price),
			variation = bigCard.find('input[name="product-variation"]:checked'),
			variationType = variation.val(),
			variationNameInCart = variation.attr('data-cart-name'),
			cart = $('#basket__items');


		var existItemInCart = cart.find('.basket__item[data-id="' + id + '"][data-type="' + variationType + '"]');

		if (existItemInCart.length > 0) {
			var numberInp = existItemInCart.find('input[name="number"]');
			numberInp.val(parseInt(numberInp.val()) + 1);
			scrollToBlockHalfScreen(existItemInCart);

		}
		else {
			cart.append('<div class="basket__item" data-id="' + id + '" data-price="' + price + '" data-type="' + variationType + '"><div class="basket__item--icon"><img src="' + logoSrc + '" alt="' + logoAlt + '"></div><div class="basket__item--name">' + variationNameInCart + '</div><div class="basket__item--count">	<button class="basket__item--decrease" type="button">-</button>	<input type="text" name="number" class="js-basket-item-nubmer" value="1">	<button class="basket__item--increase" type="button">+</button></div><div class="basket__item--price">	' + humanReadPrice + '</div><div class="basket__item--delete js-basket__item--delete">	<img src="img/TG_landing/delete.svg" alt="delete"></div></div>');
			scrollToBlockHalfScreen(cart.find('.basket__item:last-child'));
		}

		reCalcCart();
	});

	$('body').on('click', '.js-basket__item--delete', function () {
		var item = $(this).closest('.basket__item');
		item.slideUp(400, function () {
			item.remove();
			setTimeout(function () {
				reCalcCart();
			}, 10);
		});
	});


	$('body').on('input paste keyup keydown change blur', '.js-basket-item-nubmer', function () {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
		if (isNaN(parseInt($(this).val())) || parseInt($(this).val()) < 1) {
			$(this).val(1);
		}
		if (parseInt($(this).val()) > 9999) {
			$(this).val(9999);
		}
		reCalcCart();
	});

	document.addEventListener('click', function (e) {
		var inp = e.target.parentElement.querySelector("input");
		if (e.target.classList.contains("basket__item--increase")) {
			++e.target.parentElement.querySelector("input").value;
		} else if (e.target.classList.contains("basket__item--decrease")) {
			inp.value = Math.max(parseInt(inp.value) - 1, 1);
		}
		$(inp).trigger('change');
		reCalcCart();
	});

	$('body').on('click', '.js-basket__btn', function () {
		scrollToBlock($("#order-section"));
	});

	$('.js-custom-file-inp').on('change', function () {
		var $this = $(this),
			target = $('#' + $(this).attr('data-target-wrap'));

		target.find('.finp-files-list-item').remove();

		if (this.value && this.value.length > 0) { // если выбран файл
			var splittedFakePath = this.value.split('\\');
			var fileName = splittedFakePath[splittedFakePath.length - 1];
			target.append('<div class="finp-files-list-item"><div class="finp-files-list-item__name">' + fileName + '</div><div class="finp-files-list-item__remove js-finp-item-remove"></div></div>');
		}
	});


	$('body').on('click', '.js-finp-item-remove', function () {
		$('#' + $(this).closest('.finp-files-list').attr('data-inp-id')).val('');
		$(this).closest('.finp-files-list-item').remove();
	});


});
