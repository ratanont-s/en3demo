$(function () {
    // Header
    $("header").sticky({
        topSpacing: 0,
        zIndex: 1030,
    });

    // Banner
    $('#banner .slider').slick({
        dots: true,
        arrows: false,
    });

    // Best seller
    $('#bestSeller .slider').slick({
        slidesToShow: 3,
        dots: true,
        prevArrow: `<a href='#' class='slick-arrow-prev'><img src='./assets/images/Back_button.png' /></a>`,
        nextArrow: `<a href='#' class='slick-arrow-next'><img src='./assets/images/Next_button.png' /></a>`,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }]
    });
});