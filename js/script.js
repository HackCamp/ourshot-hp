$(function(){

// mixpanel
  mixpanel.track("View page");

$('#top-contact-btn').click(function(){
  mixpanel.track("Open contact", {"Contact Location": "Top"});
});

$('#bottom-contact-btn').click(function(){
  mixpanel.track("Open contact", {"Contact Location": "Bottom"});
});

$('#hc-logo').click(function(){
  mixpanel.track("Click HackCamp Logo");
});


  var scrollMenu = function() {
        var array = {
            '#top': 0,
            '#about': 0,
            '#features': 0,
            '#case': 0,
            '#faq': 0,
            '#contact': 0
        };
        var $globalNavi = new Array();
        for (var key in array) {
            if ($(key).offset()) {
                array[key] = $(key).offset().top - 70;
                $globalNavi[key] = $('.header-right ul li a[href="' + key + '"]');
            }
        }
        $(window).scroll(function () {
            for (var key in array) {
                if ($(window).scrollTop() > array[key] - 50) {
                    $('.header-right ul li a').each(function() {
                        $(this).removeClass('active');
                    });
                    $globalNavi[key].addClass('active');
                }
            }
        });
    }
    scrollMenu();

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

    $(document).ready(function() {
      $(".drawer").drawer();
    });

   $('.faq-list-item').click(function() {
    var $answer = $(this).children('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('▼');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('▲');
      if($answer.attr('q1')) {
        mixpanel.track("Open faq", {"ID": "q1"});
      } else if ($answer.attr('q2')) {
        mixpanel.track("Open faq", {"ID": "q2"});
      } else if ($answer.attr('q3')) {
        mixpanel.track("Open faq", {"ID": "q3"});
      } else if ($answer.attr('q4')) {
        mixpanel.track("Open faq", {"ID": "q4"});
      };
    }
  });
});
