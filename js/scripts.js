var headScrollPos;
var windowHeight;

function mainMenuPos() {
	headScrollPos = $('html').scrollTop();

	if( headScrollPos > 150 ) {
		$('.navbar-nav').addClass('slide');
	} else {
		$('.navbar-nav').removeClass('slide');
	}
}

function sidemenuPos() {
	windowHeight = $(window).height();

	if((headScrollPos + 100) > windowHeight) {
		$('.sidenav').addClass('active');
	} else {
		$('.sidenav').removeClass('active');
	}

	// console.log(windowHeight);
}


$(document).ready(function() {

	$(document).scroll(function() {
		mainMenuPos();
		sidemenuPos();
	})

});