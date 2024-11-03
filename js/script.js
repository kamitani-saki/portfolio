 //===== sp版のぼたん
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
//======SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start: 'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 300,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction: Vivus.EASE,//動きの加速減速設定
}
);
$(window).on('load', function () {
    $("#splash").delay(500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
    $("#splash_logo").delay(500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェイドアウト
    stroke.play();//SVGアニメーションの実行
});

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

//===== worksスライダー
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
// ========スクロールしたら現れるtoppageボタン
//pagetop
$(function () {
    var topBtn = $('.pagetop');
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
    });
});