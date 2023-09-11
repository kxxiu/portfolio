$(document).ready(function(){

  // 로딩페이지 //

  // HELLO
  $('.load_page h2').css({
    'left':'-100%',
    'opacity':'0',
  }).animate({
    'left':'-20%',
    'opacity':'1',
    'letter-spacing':'30px'
  },300).animate({
    'left':'0',
    'letter-spacing':'0',
  },600).animate({
    'letter-spacing':'30px',
    'left':'20%',
    'opacity':'0',
  },300,function(){
    $(this).addClass('hidden');
  });

  // I'M
  $('.load_page h3').prepend('<span class="insert_k">K</span>').delay(600).animate({
    'left':'10%',
  }).animate({
    'opacity':'1',
    'left':'19%',
  },400);

  // K   
  $('.insert_k').delay(1400).animate({
    'opacity':'1',
    'left':'0'
  },600, 'easeOutBounce')

  // '
  $('.dot').delay(1530).animate({'top':'-65px'},function(){
    $(this).css({
      'position':'absolute',
      'transform':'rotate(30deg)'
    }).animate({'opacity':'0'},300)
  });

  // SIWOO
  $('.load_page h4').delay(1500).animate({
    'opacity':'1',
    'left':'44%',
    'letter-spacing':'20px'
  },400).animate({
    'letter-spacing':'0px'
  },400)

  // KIM 삭제
  $('.load_page h3').delay(900).animate({'opacity':'0'})
  
  // SIWOO 삭제
  function load1(){
    $('.load_page h4').css({
    'transform': 'rotateX(180deg)',
    'top':'38%',
    }).css('opacity','0');
  }

  let load1Timer = setTimeout(load1, 2650);

  //SEE YOU
  function load2 (){
    $('.load_page h4').text('SEE YOU').css({
      'transform':'rotateX(0deg)',
      'opacity':'1',
      'top':'40%',
    });
  }

  let load2Timer = setTimeout(load2, 2800);

  // MY WORK
  $('.load_page h5').delay(2900).animate({
    'opacity':'1',
    'top':'54%',
  },400,'easeOutCirc')

  // LET'S
  $('.load_page div').delay(3450).fadeIn();
  $('.load_page div').delay(150).animate({'background-color':'#0F72AA'}).delay(300).animate({
    'background-color':'#F2F1EB','color':'#0F72AA'}).delay(300).animate({'color':'#F2F1EB'})
  
  let p = 1;
  function moveUp(){
    p++;
    $('.load_page div h5').animate({'top': -10 * p + '%'});
    $('.load_page div h5').append('<br>LET’S').append('<br>LET’S');
  }
  let moveUpTimer = setInterval(moveUp,0);
  
  // GET START!
  $('.load_page div h6').delay(5400).animate({
    'opacity':'1',
    'font-size':'250px'
  },600).animate({
    'font-size':'180px'
  },400,function(){
    $('.load_page').fadeOut(300);
    $('.intro_page').fadeIn(300);
    clearInterval(moveUp)
  })

  // 인트로 페이지 //

  // 인트로 내용
  function intro1(){
    $('.intro_page .circle2').show();
    $('.intro_page').css('background-color','#0F72AA');
    $('.intro_page h2, .intro_page p').delay(1200).animate({'color':'#F2F1EB'},800);
    $('.intro_page .scroll span').delay(1200).animate({
      'background-color':'#F2F1EB',
      'color':'#0F72AA'
    },800);
  }
  
  function intro2(){
    $('.intro_page .scroll img').attr('src','./images/intro_arrow2.png');
    $('.intro_page .scroll span').delay(550).animate({'color':'#F2F1EB'});
  }

  function intro3(){
    $('.intro_page .circle1, .intro_page .circle2').hide();
    $('.intro_page .circle3').show();
    $('.intro_page').css('background-color','#F2F1EB');
    $('.intro_page h2, .intro_page p').delay(2200).animate({'color':'#0F72AA'},800);
    $('.intro_page .scroll span').delay(2200).animate({
      'background-color':'#0F72AA',
      'color':'#F2F1EB'
    },800);
  }

  function intro4(){
    $('.intro_page .scroll img').attr('src','./images/intro_arrow.png');
  }

  let intro1Timer = setTimeout(intro1, 8400);
  let intro2Timer = setTimeout(intro2, 9700);
  let intro3Timer = setTimeout(intro3, 12300);
  let intro4Timer = setTimeout(intro4, 14600);

  // 스크롤 표시
  function scroll(){
    $('.scroll').animate({'top':'60%'},1000).animate({'top':'57%'},1000);
  }

  let scrollTimer = setInterval(scroll, 2000)

  
  // 퍼블리싱 //

  // p01 블랙핑크
  var swiper = new Swiper(".pub1", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 0,
  });

  // p01 슬라이드 표시
  function slidemark(){
    $('#p01 .slide_arrow').animate({'left':'220px'},1000,'easeOutElastic').animate({'left':'250px'},1000);
  }

  let slidemarkTimer = setInterval(slidemark, 0)

  // p02 시장하시죠
  var swiper2 = new Swiper(".pub2", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 0,
  });

  // p02 슬라이드 표시
  function slidemark2(){
    $('#p02 .slide_arrow').animate({'left':'350px'},1000,'easeOutElastic').animate({'left':'320px'},1000);
  }

  let slidemark2Timer = setInterval(slidemark2, 0)


  // UI/UX 디자인 //
  $('.d01 .card').click(function(){
    $('.pop1').fadeIn();
  });
  $('.pop1 .close').click(function(){
    $('.pop1').fadeout();
  });

  


  });

