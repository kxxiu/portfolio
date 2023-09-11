$(document).ready(function(){

  // 스크롤 영역 이동 레이아웃 //
  var $html = $("html");
  var page = 1;
  
  $html.animate({scrollTop:0},10);

  $(window).on("wheel", function(e){
    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0){
      if(page == 2) return;
      page++;

      // 헤더, 내비게이션
      if(page == 2){
        $('header').show();
        $('header h1 img').attr('src','./images/logo_black.png');
        $('nav').show();
      }

      // 프로필 - 기술
      let gageBox = $('.gage');
      let gageNum = $('.gage_num');
      let g = 0;

      let progress = setInterval(() => {
        g++;
        gageNum.text( g + '%');
        gageBox.css('background',`conic-gradient(#30302F ${3.6 * g}deg, transparent 0deg`)

        if(g == 80){
          clearInterval(progress);
        }
      },10)

    }else if(e.originalEvent.deltaY < 0){
      if(page <= 2) return;
      page--;
    }
    var posTop = (page-1) * $('section').height();
    $html.animate({scrollTop : posTop});
  });

  // 스크롤 효과 //
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);

    // 헤더
    if(sPos >= 1400){
      $('header h1 img').attr('src','./images/logo_white.png')
    }else{
      $('header h1 img').attr('src','./images/logo_black.png')
    }
    
    // 내비게이션 - 프로필
    if(sPos > 920 && sPos <= 1230){
      $('.gnb li:first-child span').addClass('on')
    }else{
      $('.gnb li:first-child span').removeClass('on')
    }
    // 내비게이션 - 퍼블리싱
    if(sPos >= 1820 && sPos <= 8430){
      $('.gnb li:nth-child(2) span').addClass('on');
    }else{
      $('.gnb li:nth-child(2) span').removeClass('on');
    }
    // 내비게이션 - 디자인
    if(sPos >= 9437 && sPos <= 11631){
      $('.gnb li:nth-child(3) span').addClass('on');
    }else{
      $('.gnb li:nth-child(3) span').removeClass('on');
    }
    //내비게이션 - 연락

    //프로필 - 이미지
    if(sPos > 920){
    $('.img_box img').animate({'margin-top':'0px'},600,'easeInOutCubic')

    //밑줄
    $('.pro_txt .under1').delay(1000).animate({'background-size':'100%'},300,function(){
      $('.pro_txt .under2').delay(400).animate({'background-size':'100%'},300)
    })

    //프로필 - 성격
    let ch1 = $('.words li:first-child'); 
    let ch2 = $('.words li:nth-child(2)'); 
    let ch3 = $('.words li:nth-child(3)'); 
    let ch4 = $('.words li:nth-child(4)');
    let ch5 = $('.words li:nth-child(5)'); 
    let ch6 = $('.words li:last-child'); 

    function ch(){
      //열정
      ch1.delay(700).animate({
        'left': '17px','top':'42px',
        'width': '64px','line-height':'64px',
        'font-size':'26px'
      },1000,'easeInOutCirc').delay(1600).animate({
        'left': '105px','top':'50px',
        'width': '75px','line-height':'75px',
        'font-size':'30px'
      },1000,'easeInOutCirc')

      //친절
      ch3.delay(700).animate({
        'left': '174px','top':'17px',
        'width': '54px','line-height':'54px',
        'font-size':'20px'
      },1000,'easeInOutCirc').delay(1600).animate({
        'left': '17px','top':'42px',
        'width': '64px','line-height':'64px',
        'font-size':'26px'
      },1000,'easeInOutCirc')

      //창의력
      ch6.delay(700).animate({
        'left': '105px','top':'50px',
        'width': '75px','line-height':'75px',
        'font-size':'26px'
      },1000,'easeInOutCirc').delay(1600).animate({
        'left': '174px','top':'17px',
        'width': '54px','line-height':'54px',
        'font-size':'17px'
      },1000,'easeInOutCirc')
      
      //책임
      ch2.delay(1800).animate({
        'left': '57px','top':'104px',
        'width': '50px',
        'line-height':'50px',
        'font-size':'18px'
      },1000,'easeInOutCirc').delay(2600).animate({
        'left': '180px','top':'90px',
        'width': '65px','line-height':'65px',
        'font-size':'20px'
      },1000,'easeInOutCirc')

      //배려
      ch4.delay(1800).animate({
        'left': '73px','top':'12px',
        'width': '48px','line-height':'48px',
        'font-size':'18px'
      },1000,'easeInOutCirc').delay(2600).animate({
        'left': '57px','top':'104px',
        'width': '50px',
        'line-height':'50px',
        'font-size':'20px'
      },1000,'easeInOutCirc')
      
      //성실
      ch5.delay(1800).animate({
        'left': '180px','top':'90px',
        'width': '65px','line-height':'65px',
        'font-size':'26px'
      },1000,'easeInOutCirc').delay(2600).animate({
        'left': '73px','top':'12px',
        'width': '48px','line-height':'48px',
        'font-size':'18px'
      },1000,'easeInOutCirc')
    }

    let chTimer = setInterval(ch, 2000);
    }

    // 퍼블리싱 목록
    if(sPos >= 1400){
      $('#chapter h3').animate({
        'top':'0',
        'opacity':'1'
      },800,'easeInOutCirc')
    }

    if(sPos >= 1600){
      $('#chapter p').animate({
        'top':'0',
        'opacity':'1'
      },800,'easeInOutCirc')
    }

    if(sPos >= 1780){
      $('#chapter ul').animate({
        'top':'0',
        'opacity':'1'
        },800,'easeInOutCirc')
    }
    
    // 퍼블리싱 - 블라인드 배경
    if(sPos >= 3023){
      $('.b1').css({'display':'block','opacity': 0 + (sPos-3023) / 630});
    }else{
      $('.b1').css('display','none');
    }

    if(sPos >= 4023){
      $('.b2').css({'display':'block','opacity': 0 + (sPos-4023) / 630});
    }else{
      $('.b2').css('display','none');
    }

    if(sPos >= 5023){
      $('.b3').css({'display':'block','opacity': 0 + (sPos-5023) / 630});
    }else{
      $('.b3').css('display','none');
    }

    if(sPos >= 6023){
      $('.b4').css({'display':'block','opacity': 0 + (sPos-6023) / 630});
    }else{
      $('.b4').css('display','none');
    }

    if(sPos >= 7023){
      $('.b5').css({'display':'block','opacity': 0 + (sPos-7023) / 630});
    }else{
      $('.b5').css('display','none');
    }

    // 퍼블리싱 - 죠스떡볶이
    if(sPos == 4725){
      let jawsP = 0;
      let jawsT = 0;
      let jawsM = 0;

      function moveUp(){
        // 노트북
        $('#p03 .laptop_wrap img').stop().animate({'margin-top': jawsP},600);
        jawsP -= 63;
        console.log(jawsP);

        if(jawsP <= -1008){
          clearInterval(moveUpTimer);
          $('#p03 .laptop_wrap img').animate({'margin-top': 0},600);
        }

        // 태블릿
        $('#p03 .tablet_wrap img').stop().animate({'margin-top': jawsT},600);
        jawsT -= 75;
        console.log(jawsT)

        if(jawsT <= -1127){
          clearInterval(moveUpTimer);
          $('#p03 .tablet_wrap img').animate({'margin-top': 0},600);
        }

        // 모바일
        $('#p03 .mobile_wrap img').stop().animate({'margin-top': jawsM},600);
        jawsM -= 60;

        if(jawsM <= -902){
          clearInterval(moveUpTimer);
          $('#p03 .mobile_wrap img').animate({'margin-top': 0},600);
        }
      }
      let moveUpTimer = setInterval(moveUp, 600);
    }

    // 퍼블리싱 - 현대캐스퍼
    // if(sPos >= 5703){
    //   $('.pub4_wrap a:last-child img').animate({'opacity':'1','scale':'1'},600)
    // }


    // UI/UX 디자인 //

    if(sPos > 7659){
      $('.pub_wrap .inner').css('position','relative')
    }

    // 배경 타이틀
    if(sPos > 9123){
      $('.d_title h3').animate({'opacity':'1'},800)
    }

    // 배경 고정
    if(sPos >= 9410 && sPos <=11810){
      $('.d_title').css('position','fixed')
    }else{
      $('.d_title').css('position','absolute')
    }

  })

  //연락
  // if(sPos >= 11810){
  //   $('#contact').css({
  //     'position':'fixed',
  //     'bottom':'0'
  //   });
  // }



});  