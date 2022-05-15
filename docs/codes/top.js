function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 450){//上から200pxスクロールしたら
      $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
      $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
    }else{
      if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
        $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
        $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
      }
    }
  }
  // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 1500,"easeInOutQuint");//ページトップスクロールの速さ※数字が大きいほど遅くなる, easingプラグインでアニメーション速度に変化
  //linear、swing、jswing、easeInQuad、easeOutQuad、easeInOutQuad、easeInCubic、easeOutCubic、easeInOutCubic、easeInQuart、easeOutQuart、easeInOutQuart、easeInQuint、easeOutQuint、easeInOutQuint、easeInSine、easeOutSine、easeInOutSine、easeInExpo、easeOutExpo、easeInOutExpo、easeInCirc、easeOutCirc、easeInOutCirc、easeInElastic、easeOutElastic、easeInOutElastic、easeInBack、easeOutBack、easeInOutBack、easeInBounce、easeOutBounce、easeInOutBounceなどから選択可能
    return false;//リンク自体の無効化
});