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

    // Back to top
    $('a.btn-back-top')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});