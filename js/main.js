$(function () {



    $('.menu__btn, .menu a').on('click', function () {

        $('.header__top-inner').toggleClass('header__top-inner--active');


    });



});

$(function () {
    $('.slider').slick(
        {
            dots: true,
            arrows: false,
            autoplay: true,
            autoplayspeed: 1000,
            Infinity: true,
        }
    );
})