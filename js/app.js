$(document).ready(function() {
	// Payment method selector code
	const paypalLogo = '<img src="img/paypal-logo-full.svg">';
	const cardButton = `<i class="material-icons">lock_outline</i>
				<span>Finish and pay</span>`

	const paySelectors = $('input[type="radio"]');
	const formButton = $('form button');
	$(paySelectors).on('click', function() {
		if ( $(this).val() === 'paypal' ) {
			$(formButton).removeClass('button-card');
			$(formButton).addClass('button-paypal');
			$(formButton).html(paypalLogo);
			$('.mobile-card-wrapper').addClass('paypal');
			$('.output-container').addClass('paypal')
			$('.input-container').addClass('paypal');
			$('.mobile-card-wrapper i').addClass('paypal');
			setTimeout(function() {
				$('form .container').addClass('paypal');
			}, 500)
		} else {
			$(formButton).removeClass('button-paypal');
			$(formButton).addClass('button-card');
			$(formButton).html(cardButton);
			$('form .container').removeClass('paypal');
			$('.mobile-card-wrapper').removeClass('paypal');
			setTimeout(function() {
				$('.input-container').removeClass('paypal');
				$('.output-container').removeClass('paypal');
				$('.mobile-card-wrapper i').removeClass('paypal');
			}, 500)
		}
	});

	// Mobile card list code
	const mobileCardList = $('.mobile-card-list');
	const card = $('.mobile-card-wrapper .card');
	const icon = $('.mobile-card-wrapper i');

	$(card).on('click', function(e) {
		if ($(icon).hasClass('paypal')) {
			return false;
		} else {
			e.stopPropagation();
			$(mobileCardList).toggleClass('opened');
			$(icon).toggleClass('opened');

			if ( $(mobileCardList).hasClass('opened') ) {
				setTimeout(function() {
					$(document).on('click', function() {
						$(mobileCardList).removeClass('opened')
						$(icon).removeClass('opened')
					});
				}, 400)
			}
		}
	});

	// Tooltip
	$('.tooltip i').on('click', function() {
		$('.tooltip .info').css('display', 'block')
		setTimeout(function() {
			$('.tooltip .info').addClass('visible')
		}, 50)
	});

	$('.tooltip .info').on('click', function() {
		$(this).removeClass('visible');
		setTimeout(() => {
			$(this).css('display', 'none');
		}, 200)
	})

	// Text manipulation
	$('#card-number').mask('0000 0000 0000 0000')
	$('#expiry').mask('MX/XX', {'translation': {
		M: {pattern: /[0-1]/},
		X: {pattern: /[0-9]/}
	}});
	$('cvc').mask('000');
});
