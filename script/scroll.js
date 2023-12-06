$(document).ready(function(){

  // 휠 이벤트

  var $html = $("html");
  var page = 1;
  
  $html.animate({scrollTop:0},10);

  $(window).on("wheel", function(e){
    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0){
      if(page >= 2) return;
      page++;

      if(page == 2){

        // 프로필 - 기술 프로그레스 바
        let progressBar = $('.progress_bar');
        let progressNum = $('.progress_num');
        let g = 0;

        let html = $('.skill li:first-of-type .progress_num').text();
        // let css = $('.skill li:nth-of-type(2) .progress_num');
        // let js = $('.skill li:nth-of-type(3) .progress_num');
        // let jq = $('.skill li:nth-of-type(4) .progress_num');
        // let ps = $('.skill li:nth-of-type(5) .progress_num');
        // let ai = $('.skill li:nth-of-type(6) .progress_num');
        // let fig = $('.skill li:nth-of-type(7) .progress_num');
        // let plan = $('.skill li:first-of-type .progress_num');
            
        let progress = setInterval(() => {
          g++;
          progressNum.text(g + '%')
          progressBar.css('background',`conic-gradient(#30302F ${3.6 * g}deg, transparent 0deg`)

            $(progressNum).each(function(index, element) {
            console.log($(this).text());
            let io = $(this).text();
            if(g == html){
              clearInterval(progress);
            }
          }, 10)
        });
        
      }
    } else if(e.originalEvent.deltaY < 0){
      if(page == 2) return;
      page--;
    }

    var posTop = (page-1) * $('section').height();
    $html.animate({scrollTop : posTop});
  });
  
  // 스크롤 이벤트

  $(window).scroll(function(){
    let sPos = Math.ceil(($(this).scrollTop() / ($(document).height() - $(this).height())) * 100);
    console.log(sPos);

    // 헤더
    if(sPos >= 7 && sPos < 10){
      $('header h1 img').attr('src','./images/logo_black.png');
    }else{
      $('header h1 img').attr('src','./images/logo_white.png');
    }
    if(sPos >= 7){
      $('header h1').css({'text-align':'left','padding-left':'2%'});
      $('nav').fadeIn();
    }else{
      $('header h1').css({'text-align':'center','padding-left':'0'});
      $('nav').fadeOut();
    }
    if(sPos == 100){
      $('header h1').css({'text-align':'center','padding-left':'0'});
    }

    // 내비게이션
    // 프로필
    if(sPos >= 7 && sPos < 10){
      $('.gnb li:first-child span').addClass('on')
    }else{
      $('.gnb li:first-child span').removeClass('on')
    }
    // 퍼블리싱
    if(sPos >= 11 && sPos <= 56){
      $('.gnb li:nth-child(2) span').addClass('on');
    }else{
      $('.gnb li:nth-child(2) span').removeClass('on');
    }
    // 디자인
    if(sPos >= 63 && sPos <= 93){
      $('.gnb li:nth-child(3) span').addClass('on');
    }else{
      $('.gnb li:nth-child(3) span').removeClass('on');
    }
    // 연락
    if(sPos >= 99 && sPos <= 100){
      $('.gnb li:last-child span').addClass('on');
    }else{
      $('.gnb li:last-child span').removeClass('on');
    }

    // 메인 컨텐츠
    // 프로필
    if(sPos >= 7){
    $('.img_box img').animate({'margin-top':'-7px'},500,'easeInOutCubic');

    $('.profile_cont p').delay(550).animate({'opacity':'1','margin-top':'3%'},500,'easeOutQuad');

    $('.profile_cont .line1').delay(1200).animate({'background-size':'100%'},300,function(){
      $('.profile_cont .line2').delay(450).animate({'background-size':'100%'},300)
    })

    $('.profile_cont > ul').delay(2500).animate({'opacity':'1','margin-top':'3%'},500);
    
    // 성격
    let ch1 = $('.char li:first-child'); 
    let ch2 = $('.char li:nth-child(2)'); 
    let ch3 = $('.char li:nth-child(3)'); 
    let ch4 = $('.char li:nth-child(4)');
    let ch5 = $('.char li:nth-child(5)'); 
    let ch6 = $('.char li:last-child'); 

    function charMove(){
      // 열정
      ch1.delay(700).animate({
        'left': '17px','top':'42px',
        'width': '64px','line-height':'64px',
        'font-size':'26px'
      },1000,'easeInOutCirc').delay(1600).animate({
        'left': '105px','top':'50px',
        'width': '75px','line-height':'75px',
        'font-size':'30px'
      },1000,'easeInOutCirc')

      // 친절
      ch3.delay(700).animate({
        'left': '174px','top':'17px',
        'width': '54px','line-height':'54px',
        'font-size':'20px'
      },1000,'easeInOutCirc').delay(1600).animate({
        'left': '17px','top':'42px',
        'width': '64px','line-height':'64px',
        'font-size':'26px'
      },1000,'easeInOutCirc')

      // 창의력
      ch6.delay(700).animate({
        'left': '105px','top':'50px',
        'width': '75px','line-height':'75px',
        'font-size':'26px'
      },1000,'easeInOutCirc').delay(1600).animate({
        'left': '174px','top':'17px',
        'width': '54px','line-height':'54px',
        'font-size':'17px'
      },1000,'easeInOutCirc')
      
      // 책임
      ch2.delay(1800).animate({
        'left': '57px','top':'104px',
        'width': '50px','line-height':'50px',
        'font-size':'18px'
      },1000,'easeInOutCirc').delay(2600).animate({
        'left': '180px','top':'90px',
        'width': '65px','line-height':'65px',
        'font-size':'20px'
      },1000,'easeInOutCirc')

      // 배려
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

    let charTimer = setInterval(charMove, 2500);
    }

    // 퍼블리싱 목차
    if(sPos >= 11){
      $('#chapter h3').animate({'top':'0','opacity':'1'},600,'easeOutQuad');
      $('#chapter p').delay(600).animate({'top':'0','opacity':'1'},600,'easeOutQuad');
      $('#chapter ul').delay(1200).animate({'top':'0','opacity':'1'},600,'easeOutQuad');
    }
    
    // 퍼블리싱
    // 블라인드 배경
    let blind1 = $('#p01 .blind');
    let blind2 = $('#p02 .blind');
    let blind3 = $('#p03 .blind');
    let blind4 = $('#p04 .blind');
    let blind5 = $('#p05 .blind');

    if(sPos >= 21){
      blind1.css({'display':'block','opacity': 0 + (sPos-20) / 6});
    }else{
      blind1.css('display','none');
    }

    if(sPos >= 27){
      blind2.css({'display':'block','opacity': 0 + (sPos-26) / 6});
    }else{
      blind2.css('display','none');
    }

    if(sPos >= 34){
      blind3.css({'display':'block','opacity': 0 + (sPos-33) / 6});
    }else{
      blind3.css('display','none');
    }

    if(sPos >= 40){
      blind4.css({'display':'block','opacity': 0 + (sPos-39) / 6});
    }else{
      blind4.css('display','none');
    }

    if(sPos >= 46){
      blind5.css({'display':'block','opacity': 0 + (sPos-45) / 5});
    }else{
      blind5.css('display','none');
    }

    // P01 - 블랙핑크
    if(sPos >= 17){
      $('#p01 .pub_top').animate({'opacity':'1','top':'0'});
    }

    // P02 - 시장하시죠
    if(sPos >= 22){
      $('#p02 .pub_top').animate({'opacity':'1','top':'0'});
    }

    // P03 - 죠스떡볶이
    if(sPos >= 28){
      $('#p03 .pub_top').animate({'opacity':'1','top':'0'});
    }

    // P04 - 현대캐스퍼
    if(sPos >= 34){
      $('#p04 .pub_top').animate({'opacity':'1','top':'0'});
    }
    if(sPos >= 38){
      $('#p04 .mockup img:last-child').addClass('img-scale');
    }else{
      $('#p04 .mockup img:last-child').removeClass('img-scale');
    }

    // P05 - 아프리카 동물병원
    if(sPos >= 41){
      $('#p05 .pub_top').animate({'opacity':'1','top':'0'});
    }
    if(sPos >= 45){
      $('#p05 .mockup img:first-child').animate({'opacity':'1','left':'22%'});
      $('#p05 .mockup img:last-child').delay(400).animate({'opacity':'1','right':'21%'},300);
    }

    // P06 -  하림 펫푸드
    let device = $('#p06 .mockup img:first-of-type');
    let tablet = $('#p06 .mockup img:last-of-type');

    if(sPos >= 47){
      $('#p06 .pub_top').animate({'opacity':'1','top':'0'});
    }
    if(sPos >= 51){
      tablet.animate({'margin':'0'},500);
      function deviceOn(){
        device.attr('src','./images/pub6_device_on.png');
        tablet.attr('src','./images/pub6_tablet_on.png');
      }
      let onTimer = setTimeout(deviceOn, 600)
    }

    // UI/UX 디자인
    if(sPos >= 53){
      $('.cover').css('margin-top','0');
    }

    // 배경 타이틀
    if(sPos >= 64){
      $('.design_title h3').animate({'opacity':'1'},800);
    }

    // 배경 고정
    if(sPos >= 64 && sPos <= 93){
      $('.design_title').css('position','fixed');
    }else{
      $('.design_title').css('position','absolute');
    }

    // 연락
    if(sPos >= 96){
      $('.gnb li a').css('color','#30302F');
    }else{
      $('.gnb li a').css('color','#F2F1EB');
    }
    })
});  