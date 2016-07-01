$(function(){ 
  paceOptions = {
    ajax: false,
    document: false,
    eventLag: false,
    elements: {
      selectors: ['.sample']
    }
  };

  Pace.on("done",function(){
    console.log("完了！");
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('html, body').animate({ scrollTop: top }, 500);
  });

  $(function() {
        var $header = $('.header');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
    });



   $('a[href^=#]').click(function() {
     var speed = 400;
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var headerHeight = 50;
     var position = target.offset().top - headerHeight;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
    });

   $('.faq-list-item').click(function() {
    var $answer = $(this).children('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });


});
