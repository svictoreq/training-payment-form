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
		} else {
			$(formButton).removeClass('button-paypal');
			$(formButton).addClass('button-card');
			$(formButton).html(cardButton);
		}
	});

	// Mobile card list code
	const mobileCardList = $('.mobile-card-list');
	const card = $('.mobile-card-wrapper .card');
	const icon = $('.mobile-card-wrapper i');
	$(card).on('click', function() {
		$(mobileCardList).toggleClass('opened');
		$(icon).toggleClass('opened');
	});
});
