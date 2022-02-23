$(function(){

  $('#final_resister, #final_resister_02').on('click',function(event) {
    event.preventDefault();
    if($(event.target).closest("#final_resister").length) {
      var flag = 0;
      flag = confirm();
      console.log(flag);
      if (flag === 0) {
        $('body, html').animate({ scrollTop: 0 }, 0);
        $('#item_resist_box_01_all, #item_resist_box_01').fadeOut(400);
        $('#item_resist_box_02_all, #item_resist_box_02').fadeIn(400);
      }
    }
    else if($(event.target).closest("#final_resister_02").length) {
      $('body, html').animate({ scrollTop: 0 }, 0);
      $('#item_resist_box_02_all, #item_resist_box_02').fadeOut(400);
      $('#item_resist_box_01_all, #item_resist_box_01').fadeIn(400);
    }

    function confirm(){
      var target = ["", "", "", "", "", ""];
      var flag = 0;
      target[0] = $('input[name="item_name"]').val();
      target[1] = $('input[name="model_number"]').val();
      target[2] = $('input[name="item_price"]').val();
      target[3] = $('input[name="item_amount"]').val();
      target[4] = $('input[name="item_url"]').val();
      if (document.getElementById("menuList").value === "科目名を選択") {
        target[5] = "";
      }
      else {
        target[5] = document.getElementById("menuList").value;
      }
      console.log(target[5]);
      for (var i = 0; i < target.length; i++) {
        var target_name = "caution_message_0" + i;
        console.log(target_name);
        var caution = document.getElementById("caution_message_0" + i);
        caution.innerHTML = "";
        if (target[i] === "") {
          flag++;
          caution.innerHTML = "入力してください";
        }
      }
      console.log(flag);
      return flag;
    }
  });

});
