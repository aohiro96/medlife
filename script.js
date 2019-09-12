$(function(){




  $('.list h3').click(function(){
    var id = $(this).attr("href")
    var position = $(id).offset().top;
    
    $('html,body').animate({
      'scrollTop': position
    }, 500);
  }
    );
    $('.change-modal h4').click(function(){
      var id = $(this).attr("href")
      var position = $(id).offset().top;
      $('html,body').animate({
        'scrollTop': position
      }, 500);
      $('.change-modal-wrapper').fadeOut();
    }
      );


    $('.ver2').click(function() {
      $('.change-modal-wrapper').fadeIn();
    });

    $('.close-modal').click(function() {
      $('.change-modal-wrapper').fadeOut();
    });

});
