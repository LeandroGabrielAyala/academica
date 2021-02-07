$('.dropdown-toggle').dropdown();

$('.megaMenu-click').click(function() {
	if($('.megaMenu').hasClass('menu-none')) {
		$('.megaMenu').removeClass('menu-none');
		$('.megaMenu').addClass('menu-show');
		$('.megaMenu').removeClass('show');
	} else {
		$('.megaMenu').addClass('menu-none');
		$('.megaMenu').removeClass('menu-show');
		$('.megaMenu').removeClass('show');
	}
});

$('.dropdown-toggle').click(function() {
	$('.megaMenu').addClass('menu-none');
	$('.megaMenu').removeClass('menu-show');
	$('.megaMenu').removeClass('show');
});