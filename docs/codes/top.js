function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500){
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if($('#page-top').hasClass('UpMove')){
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove');
    }
  }
}

$(window).scroll(function () {
  PageTopAnime();
});

$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 1500,"easeInOutQuint");//ページトップスクロールの速さ※数字が大きいほど遅くなる, easingプラグインでアニメーション速度に変化
//linear、swing、jswing、easeInQuad、easeOutQuad、easeInOutQuad、easeInCubic、easeOutCubic、easeInOutCubic、easeInQuart、easeOutQuart、easeInOutQuart、easeInQuint、easeOutQuint、easeInOutQuint、easeInSine、easeOutSine、easeInOutSine、easeInExpo、easeOutExpo、easeInOutExpo、easeInCirc、easeOutCirc、easeInOutCirc、easeInElastic、easeOutElastic、easeInOutElastic、easeInBack、easeOutBack、easeInOutBack、easeInBounce、easeOutBounce、easeInOutBounceなどから選択可能
  return false;//リンク自体の無効化
});