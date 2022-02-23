$(function() {
  $('#password_for_assignment').hide();
  var $elementReference = document.getElementById("pw_box_adm");
  $elementReference.required = false;
  $('.wrapper').on('click',function(event) {
    if($(event.target).closest('#nonassignment').length) {
      $('#password_for_assignment').slideUp(300);
      $elementReference.required = false;
    }
    if($(event.target).closest('#assignment').length) {
      $('#password_for_assignment').slideDown(300);
      $elementReference.required = true;
    }
  });
});
