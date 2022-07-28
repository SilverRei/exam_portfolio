$(document).ready(function(){
    // 메인헤더 마우스콘
    setInterval(function(){
        $("#wheel").css({"top":7,opacity:1})
        $("#wheel").animate({top:12,opacity:0},800)
    },1000)
    // 모바일 뷰 스크롤
    setInterval(function(){
        $(".mobile_view").css({"top":0})
        $(".mobile_view").animate({top:700-($(".mobile_view").height())},3000)
    },3010)
    // 스킬라인
    $(window).scroll(function(){
        sc = $(window).scrollTop()
        if( sc >= $("#about_me").offset().top ){
            $(".right li:nth-child(1) .inner").animate({width:"95%"},300)
            $(".right li:nth-child(2) .inner").delay(200).animate({width:"85%"},300)
            $(".right li:nth-child(3) .inner").delay(400).animate({width:"80%"},300)
            $(".right li:nth-child(4) .inner").delay(600).animate({width:"80%"},300)
        }
    })
})