 //===== レスポンシブ　sp版のナビボタン
 $(function () {
    // sp_btnがクリックされたとき
    $('.sp_btn').on('click', function () {
        // .sp_btnを.openに切り替える
        $('.sp_btn').toggleClass('open');
        // 消えている.sp_navを表示させる
        $('.sp_header_menu').fadeToggle();
        $('.sp_logo').fadeToggle();
    })
})
// ボタンが押されたらsp_logoを消す
const changeVisibility = () => {
    var ele = $('sp_logo');

    if (ele.css('visibility') == 'hidden') {
        ele.css('visibility', 'visible');
    } else {
        ele.css('visibility', 'hidden');
    }
}

//======== キャッチコピーの浮き出る文字
function BlurTextAnimeControl() {
    $('.slideConts').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('slide');
        } else {
            $(this).removeClass('slide');
        }
    });
}
$(window).on('load', function () {
    BlurTextAnimeControl();
});

// ======スクロールしたら下からふわっと
$(window).scroll(function () {
    $('.fadein').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 150) {
            $(this).addClass('scrollin');
        }
    });
});
// ======スクロールしたら下からふわっと　worksページ
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){
    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    // 画面内に入ったらfadeInというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');
    // 画面外に出たらfadeInというクラス名を外す
    }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

//===== worksスライダー
const mySwiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    mousewheel: {
        thresholdDelta: 50,
    },
    pagination: {
    el: '.swiper-pagination',
    type: "progressbar",
    },
    touchRatio: 1, // タッチ操作を有効化
    simulateTouch: true, // モバイルでタッチ操作をシミュレート
    });

// ========スクロールしたら現れるtoppageボタン
//pagetop
$(function () {
    var topBtn = $('.page_top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            //ボタンの表示方法
            topBtn.fadeIn();
        } else {
            //ボタンの非表示方法
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,  html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });})
    

 //同じ日付で2回目以降ならローディング画面非表示の設定
var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
var myD = new Date();//日付データを取得
var myYear = String(myD.getFullYear());//年
var myMonth = String(myD.getMonth() + 1);//月
var myDate = String(myD.getDate());//日
if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
        $("#splash").css("display", "block");//１回目はローディングを表示
        setTimeout(function () {
            $("#splash_logo").fadeIn(1000, function () {//1000ミリ秒（1秒）かけてロゴがフェードイン
                setTimeout(function () {
            $("#splash_logo").fadeOut(1000);//1000ミリ秒（1秒）かけてロゴがフェードアウト
                }, 1000);//1000ミリ秒（1秒）後に処理を実行
        setTimeout(function () {
            $("#splash").fadeOut(1000, function () {//1000ミリ秒（1秒）かけて画面がフェードアウト
            var myD = new Date();
            var myYear = String(myD.getFullYear());
            var myMonth = String(myD.getMonth() + 1);
            var myDate = String(myD.getDate());
            $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
        });
        }, 1700);//1700ミリ秒（1.7秒）後に処理を実行
    });
}, 1000);//1000ミリ秒（1秒）後に処理を実行
}else {
    $("#splash").css("display", "none");//同日2回目のアクセスでローディング画面非表示
}