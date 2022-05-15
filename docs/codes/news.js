var slider;
function sliderSet() {
    slider = $('.news').bxSlider({
        touchEnabled:false,
        mode: 'vertical',
        controls: false,
        auto: 'true',
        pager: false,
        loop: true,
    });
};

$(window).on('load resize', function() {
    sliderSet();
});