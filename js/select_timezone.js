$(function(){
  $('#select_menu').hide();
  $('.wrapper').on('click',function(event) {
    // event.preventDefault();
    if(!$(event.target).closest('#select_timezone_p').length) {
      $('#select_menu').slideUp(300);
    }
    else {
      $('#select_menu').slideToggle(300);
    }
  });
  $('.select_job_timezone').on('click',function(event) {
    $('.select_job_timezone').removeClass("selected");
    $(this).addClass("selected");
    var str = $(this).text();
    var str_num = str.substr(0, 1);
    $('#select_timezone_p_span').text(str);
    if (str_num === "N") {
      $('#select_timezone_input').val("NIGHTTIME");
    }
    else {
      $('#select_timezone_input').val("DAYTIME");
    }
  });
});
