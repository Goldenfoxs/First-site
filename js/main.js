$(function () {



    $('.menu__btn, .menu a').on('click', function () {

        $('.header__top-inner').toggleClass('header__top-inner--active');


    });



});

$(function () {
    $('.slider').slick(
        {
            dots: true,
            arrows: true,
            autoplay: true,
            autoplayspeed: 1000,
            Infinity: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><img src='images/arrow-left.svg'></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><img src='images/arrow-right.svg'></button>",
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '220px',
                    // slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                        arrows: false,
                        dots: false,
                        // centerMode: true,
                        // centerPadding: '40px',
                        // slidesToShow: 1
                }
            }
            ]
            






        }
    );
})