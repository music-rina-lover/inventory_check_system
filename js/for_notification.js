$(function() {
  $('.wrapper').on('click',function(event) { // additional
    // event.preventDefault();
    if(!$(event.target).closest('.open_notification').length) {
      if (!$(event.target).closest('.notification_message_div').length) {
        $('.notification_message_div').slideUp(500);
      }
    }
    else {
      $('.notification_message_div').slideToggle(500);
    }
  });
});
