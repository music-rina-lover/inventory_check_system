$(function () {
  $('.openModal').click(function(){
    // event.preventDefault();
    var get_id = $(this).attr('id');
    // console.log(get_id);
    var item_name_id = "#item_name_" + get_id;
    // console.log(item_name_id);
    var str = $(item_name_id).text();
    // console.log(str);
    $('#delete_item_centence_span').text(str);
    $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea').fadeOut();
  });
});
