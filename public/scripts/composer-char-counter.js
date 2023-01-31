const charMax =  140;
$(document).ready(function() {
$("#tweet-text").keyup(function(){
  const charCounter = $(this).parent().children('div').children('.counter');
  let charAmount = $(this).val().length;
  let remainingChar = charMax - charAmount;
  charCounter.val(remainingChar);
  if (charCounter.val() < 0) {
    charCounter.addClass('text-red');
  }
  if (charCounter.val() > -1) {
    charCounter.removeClass('text-red');
  }
});
});