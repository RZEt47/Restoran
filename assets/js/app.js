
$(function() {

    /*===============Fixed Header==================*/

    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();

    headerScroll();

    $(window).on("scroll  resize", function() {
        headerScroll();
    });

    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if( scrollTop >= headerH) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }



    /*=============Smooth Scroll to sections==============*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault()

        let scrollEl = $(this).data("scroll")
        let scrollELPos = $(scrollEl).offset().top


        $("html, body").animate({
            scrollTop:scrollELPos - 67
        }, 500)
    })




    /*===============ScrollSpy==================*/

    let windowH = $(window).height();
    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);

            if(scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }

            if(scrollTop === 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }


    /*===============Accordion==================*/

    $('.accordion__header').on('click', function(event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().stop().slideUp(500);
        } else {
            $(this).addClass('active');
            $(this).next().stop().slideDown(500);
        }
    });

    /*===============Slider==================*/

    $('#slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1700,
    });



    /*===============Animation==================*/


    AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 80, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

})

















