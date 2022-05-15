//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 3000,//時間指定(1000＝1秒)
    strokeWidth: 0.25,//進捗ゲージの太さ
    color: '#89c3eb',//進捗ゲージのカラー
    trailWidth: 0.25,//ゲージベースの線の太さ
    trailColor: '#c0c6c9',//ゲージベースの線のカラー
});

bar.animate(1.0, function () {
    $("#splash_text").fadeOut(10);
    $(".loader_cover-up").addClass("coveranime");
    $(".loader_cover-down").addClass("coveranime");
    $("#splash").fadeOut();
});
