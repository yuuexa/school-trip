$(window).scroll(function() {
        var scroll = $(window).scrollTop();//スクロール値を定義
    //header-imgの背景
    $('.main_visual_h2').css({
        transform: 'scale('+ ( 100 + scroll / 20 ) / 100 + ')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
        top: 25 -( scroll / 50 )  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
    });
});