const SCROLL_POSITION = 250;
$(document).ready(function() {

  // When scroll movement is detected hide nav button and show
  // red button bottom right
  $(window).scroll(function (event) {
    const scroll = $(window).scrollTop();
    if (scroll > SCROLL_POSITION) {
      $('nav' ).removeClass('blue');
      $('nav' ).addClass('noBGColor');
      $( '#compose-tweet-btn' ).removeClass('flex-container-col');
      $( '#compose-tweet-btn' ).addClass('hide');
      $( '#scroll-to-new-tweet' ).fadeIn('fast');
    } else if (scroll < SCROLL_POSITION) {
      $( 'nav' ).addClass('blue');
      $( 'nav' ).removeClass('noBGColor');
      $( '#compose-tweet-btn' ).addClass('flex-container-col');
      $( '#compose-tweet-btn' ).removeClass('hide');
      $( '#scroll-to-new-tweet' ).fadeOut('fast');
    }
  });
  // click on to top button
 $( '#scroll-to-new-tweet' ).click(function() {
  $( '#new-tweet-form' ).slideDown();
  $( '#tweet-text' ).focus();
  $( window ).scrollTop(0);
});

});
