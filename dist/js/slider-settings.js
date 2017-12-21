    $(document).ready(function(){
        $('.main-banner__slider').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            slide: "section",
            arrows: false,
            // centerMode: true,
            //centerPadding: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 715,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 477,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
