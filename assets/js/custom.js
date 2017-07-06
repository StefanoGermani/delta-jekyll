
$(window).scroll(function () {
    var scrollPos = $(window).scrollTop(),
        button = $('.btn-link');

    if (scrollPos > 20) {
        button.addClass('change-color');
    } else {
        button.removeClass('change-color');
    }
});

$(window).scroll(function () {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-default');

    if (scrollPos > 20) {
        navbar.addClass('change-color');
    } else {
        navbar.removeClass('change-color');
    }
});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

/* evidenziare le voci menu allo scroll */
$('body').scrollspy({ target: '#navbar-example' })

$('[data-toggle="popover"]').popover()

$(".navbar-collapse ul li a[href^='#']").on('click', function (e) {

    target = this.hash;
    e.preventDefault();

    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 600, function () {
        window.location.hash = target;
    });
});
