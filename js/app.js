/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//글자 애니메이션
function delayAni() {
    $('.main-ani').addClass("animate__bounceOut");
}
setTimeout(function(){
    delayAni();
},2000)

setTimeout(function(){
    $('.main-ani2').css('display','block');
    $('.main-ani2').addClass('animate__bounceIn');
},2500)

setTimeout(function(){
    $('.main-ani3').css('color','black');
    $('.main-ani3').addClass('animate__bounceIn');
},3000)
//글자 애니메이션 끝

//프로필 애니메이션
setTimeout(function(){
    $('.prof').css('display','block');
    $('.prof').addClass('animate__flipInY');
},3500)
//프로필 애니메이션 끝

//대상흔들기 애니메이션
function contact(a){
    $(a).on('mouseover', function () {
        $(a).removeClass('animate__flipInY');
        $(a).addClass('animate__headShake');
    })
    $(a).on('mouseout', function (){
        $(a).removeClass('animate__headShake');
    })
}
//대상 흔들기 애니메이션 끝
contact('.prof');
contact('.btnCareer')
contact('.btnProject')

//리사이징시 특정 요소 보이지 않게 설정
$(window).resize(function () {
    // width값을 가져오기
    var width_size = window.outerWidth;

    // 800 이하인지 if문으로 확인
    if (width_size <= 1200) {
        $('.prof').css('display', 'none');
        $('.fc-purple').css('display','none');
    }else{
        $('.prof').css('display', 'block')
        $('.fc-purple').css('display','block');
    }
})
//리사이징시 특정 요소 보이지 않게 설정 끝

//스크롤 네비바 이벤트
$(window).scroll(function(){
    var scrollH = window.scrollY;
    if(scrollH != 0){
        $('.navbar').removeClass('navbar-dark bg-dark');
        $('.navbar').addClass('bg-yellow');
    }else{
        $('.navbar').addClass('navbar-dark bg-dark ');
        $('.navbar').removeClass('bg-yellow');
    }
})

//스크롤 네비바 이벤트 끝

//경력 탭 스크롤 이벤트
$(window).scroll(function() {
    var scrollH = window.scrollY;
    if(scrollH < 170){
        $('.C2').removeClass('animate__flipInY');
    }else if(scrollH >=170){
        $('.C2').addClass('animate__flipInY');
    }
})
//경력 탭 스크롤 이벤트 (보유기술&성취도)
$(window).scroll(function() {
    var scrollH = window.scrollY;
    if (scrollH >= 1000){
        var i = 0;
        setInterval(function(){
            $(".aFlip").eq(i).addClass('animate__flipInY');
            i++;
        },100)
        setTimeout(function(){
            $(".aFlip").css('background-size', '100%');
        },2000)
    }else if (scrollH < 1000){
        $(".aFlip").removeClass('animate__flipInY');
    }
})
//경력 탭 스크롤 이벤트 끝


