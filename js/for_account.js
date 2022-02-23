$(function() {
  $('.wrapper').on('click',function(event) {
    // event.preventDefault();
    if(!$(event.target).closest('#account_img').length) {
      $('#for_account, #for_my_account_ul').slideUp(300);
    }
    else {
      $('#for_account, #for_my_account_ul').slideToggle(300);
    }
  });
});
