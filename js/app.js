$(document).ready(function() {
	const mobileCardList = $('.mobile-card-list');
	const card = $('.mobile-card-wrapper .card');
	const icon = $('.mobile-card-wrapper i');
	$(card).on('click', function() {
		$(mobileCardList).toggleClass('opened');
		$(icon).toggleClass('opened');
	});
});
