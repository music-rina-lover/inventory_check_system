$(function(){
  $('#select_menu').hide();
  $('.wrapper').on('click',function(event) {
    // event.preventDefault();
    if(!$(event.target).closest('#select_item_amount_p').length) {
      $('#select_menu').slideUp(300);
    }
    else {
      $('#select_menu').slideToggle(300);
    }
  });
  $('.select_item_amount_number').on('click',function(event) {
    $('.select_item_amount_number').removeClass("selected");
    $(this).addClass("selected");
    var str = $(this).text();
    var str_num = str.substr(0, 2);
    $('#select_item_amount_p_span').text(str_num);
    $('#select_item_amount_number_input').val(str_num);
  });
});
