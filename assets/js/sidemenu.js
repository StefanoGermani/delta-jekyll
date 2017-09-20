// Open navbarSide when button is clicked

$(document).ready(function () {

    var openSideMenu = function () {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    };

    var closeSideMenu = function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    };

    $('#navbarSideButton').on('click', openSideMenu);
    $('.overlay').on('click', closeSideMenu);

    $(document).on('swiperight', openSideMenu);
    $(document).on('swipeleft', closeSideMenu);
});
