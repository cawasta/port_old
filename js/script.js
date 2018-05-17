jQuery(document).ready(function($) {

/* -------- start - hide and show header -------- */

  // variables
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('header-down').addClass('header-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('header-up').addClass('header-down');
          }
      }

      lastScrollTop = st;
  }
/* -------- end - hide and show header -------- */



/* -------- begin - scroll to section -------- */

  // on click event on all anchors with a class of scrollTo
  $('a.scrollTo').on('click', function(){

    // data-scrollTo = section scrolling to name
    var scrollTo = $(this).attr('data-scrollTo');

    // toggle active class on and off. added 1/24/17
    $( "a.scrollTo" ).each(function() {
      if(scrollTo == $(this).attr('data-scrollTo')){
        $(this).addClass('active');
      }else{
        $(this).removeClass('active');
      }
    });

    // animate and scroll to the sectin
    $('body, html').animate({

      // the magic - scroll to section
      "scrollTop": $('.'+scrollTo).offset().top
    }, 1000 );
    return false;

  });

/* -------- end - scroll to section -------- */

});
