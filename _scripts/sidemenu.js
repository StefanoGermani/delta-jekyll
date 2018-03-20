// Open navbarSide when button is clicked

const openSideMenu = function () {
    if ($('#desktopNavigation').css('display') === 'none') {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    }
};

const closeSideMenu = function () {
    if ($('#desktopNavigation').css('display') === 'none') {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    }
};

$('#navbarSideButton').on('click', openSideMenu);
$('.overlay').on('click', closeSideMenu);

$(document).on('swiperight', openSideMenu);
$(document).on('swipeleft', closeSideMenu);
