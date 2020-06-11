var mainVisual = new Swiper('#mainVisual', {
    speed: 1000,
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: '#mainVisual .btnNext',
        prevEl: '#mainVisual .btnPrev'
    },
    autoplay: {
        delay: 4000
    },
    pagination: {
        el: '#mainVisual .pagination',
        type: 'bullets',
        clickable: true
    }
});

$('#gnb .list > li').on('mouseenter', function() {
    if (!$('#gnb').hasClass('mobile')) {
        $('.depth02', this)
            .stop()
            .slideDown(250);
    }
});
$('#gnb .list > li').on('mouseleave', function() {
    if (!$('#gnb').hasClass('mobile')) {
        $('.depth02', this)
            .stop()
            .slideUp(250);
    }
});

$('#gnb .list > li .depth01').on('click', function() {
    $(this)
        .next('.depth02')
        .stop()
        .slideToggle();
    $(this)
        .parent()
        .siblings()
        .find('.depth02')
        .stop()
        .slideUp();
    return false;
});

$(window).on('resize', function() {
    let w = $(window).width() + 17;
    // 스크롤의 너비가 17px
    if (w <= 1200) {
        if (!$('#gnb').hasClass('mobile')) {
            $('#gnb').addClass('mobile');
        }
    } else {
        if ($('#gnb').hasClass('mobile')) {
            $('#gnb').removeClass('mobile');
        }
        $('body').removeClass('open');
        $('btnAll').removeClass('open');
    }
});
$(window).trigger('resize');

// var gnb = document.querySelectorAll('#gnb .list > li');
// var header = document.querySelector('#header');
// for (var i = 0; i < 4; i++) {
//     var item = gnb.item(i);
//     item.addEventListener('mouseenter', function() {
//         header.classList.add('open');
//     });
//     item.addEventListener('mouseleave', function() {
//         header.classList.remove('open');
//     });
// }

$('.btnAll').on('click', function() {
    $(this).toggleClass('open');
    $('body').toggleClass('open');
    return false;
});
