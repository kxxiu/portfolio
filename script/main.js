$(document).ready(function(){

  // 로딩 페이지

  // HELLO
  $('#load h2').animate({
    'left':'-20%',
    'letter-spacing':'30px',
    'opacity':'1'
  }).animate({
    'left':'0',
    'letter-spacing':'0',
  },700).animate({
    'left':'20%',
    'letter-spacing':'30px',
    'opacity':'0',
  },500,function(){
    $(this).addClass('hidden');
  });

  // I'M
  $('#load h3').prepend('<span class="k">K</span>').delay(800).animate({
    'left':'-15%',
  }).animate({
    'left':'-5%',
    'opacity':'1',
  });

  // K
  $('.k').delay(1600).animate({
    'left':'0',
    'opacity':'1',
  },500, 'easeOutBounce');

  $('.dot').delay(1700).animate({'top':'-65px'},function(){
    $(this).css({
      'position':'absolute',
      'transform':'rotate(30deg)'
    }).animate({'opacity':'0'},300)
  });

  // SIWOO
  $('#load h4').delay(2000).animate({
    'left':'45%',
    'letter-spacing':'20px',
    'opacity':'1'
  }).animate({
    'letter-spacing':'0px'
  },function(){
    $('#load h3').css('background','none');
  });

  // 배경전환
  $('#load').append('<div class="bg1">&nbsp;</div><div class="bg2">&nbsp;</div>');
  $('.bg1').delay(2800).animate({'top':'0'},800,function(){
    $('.bg2').animate({'top':'0'},800);
    $('#load h3, #load h4').delay(400).animate({'color':'#0F72AA'},100,function(){
      $(this).delay(300).fadeOut(600);
      $('#load').delay(700).fadeOut();
      $('header').delay(700).fadeIn();
    });
  });

  // 인트로

  function intro(){
    $('.big_circle').addClass('ball');
    $('#intro article').delay(2500).fadeIn(100);
  }

  function bubble(){
    $('.circle1').animate({'top':'11%'},1000,'easeOutCirc',function(){
      $(this).css('background','none').animate({'scale':'1'},800,'easeOutCubic');
    });
    $('.circle2').delay(100).animate({'top':'33%'},1000,'easeOutCirc',function(){
      $(this).animate({'scale':'1'},'easeOutCubic');
    });
    $('.circle4').delay(400).animate({'top':'7%'},1000,'easeOutCirc',function(){
      $(this).css('background','none').animate({'scale':'1'},600,'easeOutCubic');
    });
    $('.circle3').delay(800).animate({'top':'65%'},1000,'easeOutCirc',function(){
      $(this).css('background','none').animate({'scale':'1'},'easeOutCubic');
    });
    $('.circle6').delay(1100).animate({'top':'71%'},1000,'easeOutCirc',function(){
      $(this).animate({'scale':'1'},'easeOutCubic'),600;
    });
    $('.circle5').delay(1200).animate({'top':'45%'},1000,'easeOutCirc',function(){
      $(this).css('background','none').animate({'scale':'1'},500,'easeOutCubic');
    });
  }

  let introTimer = setTimeout(intro, 4800)
  let bubbleTimer = setTimeout(bubble, 7200)

  // 퍼블리싱

  // P01 - 블랙핑크
  var swiper = new Swiper(".pub1", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 0,
  });

  // 슬라이드 표시
  function slideMark(){
    $('.pub1 > div').animate({'left':'17%'},1000,'easeOutElastic').animate({'left':'18%'},1000)
  }

  let markTimer = setInterval(slideMark, 0);

  // P02 - 시장하시죠
  var swiper2 = new Swiper(".pub2", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 0,
  });

  // 슬라이드 표시
  function slideMark2(){
    $('.pub2 > div').animate({'left':'22%'},1000,'easeOutElastic').animate({'left':'23%'},1000);
  }

  let mark2Timer = setInterval(slideMark2, 0);

  // P03 - 죠스떡볶이
  let laptop = $('#p03 .laptop_box > div');
  let tablet = $('#p03 .tablet_box > div');
  let mobile = $('#p03 .mobile_box > img');

  let mv1 = 0;
  let mv2 = 0;
  let mv3 = 0;

  laptop.click(function(){
    function moveUp(){
      laptop.children('.mouse').fadeOut(300);
      laptop.children('img').animate({'margin-top':mv1},600);
      mv1 -= 83;

      if(mv1 <= -913){
        clearInterval(moveTimer);
        mv1 = 0;
        laptop.children('img').delay(300).stop().animate({'margin-top': 0},function(){
          laptop.children('.mouse').fadeIn(300);
        });
      }
    }
    let moveTimer = setInterval(moveUp, 600);
  });

  tablet.click(function(){
    function moveUp2(){
      tablet.children('.mouse').fadeOut(300);
      tablet.children('img').animate({'margin-top':mv2},600);
      mv2 -= 118;
      console.log(mv2);

      if(mv2 <= -1062){
        clearInterval(moveTimer2);
        mv2 = 0;
        tablet.children('img').delay(300).animate({'margin-top': 0},function(){
          tablet.children('.mouse').fadeIn(300);
        });
      }
    }
    let moveTimer2 = setInterval(moveUp2, 600);
  });

  mobile.click(function(){
    function moveUp3(){
      mobile.siblings().find('.mouse').fadeOut(300);
      mobile.siblings().children('img').animate({'margin-top':mv3},600);
      mv3 -= 77.8;
      console.log(mv3);

      if(mv3 <= -778){
        clearInterval(moveTimer3);
        mv3 = 0;
        mobile.siblings().children('img').delay(300).stop().animate({'margin-top': 0},function(){
          mobile.siblings().find('.mouse').fadeIn(300);
        });
      }
    }
    let moveTimer3 = setInterval(moveUp3, 600);
  });

  // P05 - 하림펫푸드

  // UI/UX 디자인
  $('.card').hover(function(){
    $(this).children().stop().css('transform','rotateY(180deg');
  },function(){
    $(this).children().stop().css('transform','rotateY(0deg');
  });

  //d05 - 애플워치 배경 
  $('#d05 .btn').click(function(){
    let modalImg = `
    <div class="d05_img">
      <img src="./images/d05_work.png">
    </div>
    `

    $('#d05').append(modalImg);
    $('.d05_img').animate({'opacity':'1'},100);
    return false;
  });

  $('#d05 .card').mouseleave(function(){
    $('.d05_img').fadeOut(100);
  })

  // 컨텍트
  let call = $('#contact ul li:first-child a');
  let kakao = $('#contact ul li:nth-child(2) a');
  let mail = $('#contact ul li:last-child a');

  $('#contact ul li a').hover(function(){
    $(this).siblings().stop().animate({'opacity':'1'});
  },function(){
    $(this).siblings().stop().animate({'opacity':'0'});
  });

  call.hover(function(){
    $(this).find('img').addClass('call');
  },function(){
    $(this).find('img').removeClass('call');
  });

  kakao.hover(function(){
    $(this).find('img').addClass('kakao');
  },function(){
    $(this).find('img').removeClass('kakao');
  });

  mail.hover(function(){
    $(this).find('img').addClass('mail');
  },function(){
    $(this).find('img').removeClass('mail');
  });
});