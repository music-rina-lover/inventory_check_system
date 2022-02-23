$(function(){

  var arySpinnerCtrl = [];
  var spin_speed = 20; //変動スピード

  //長押し押下時
  $('.amount_change').on('touchstart mousedown click', function(e){
      if(arySpinnerCtrl['interval']) return false;
      var target = $(this).data('target');
      arySpinnerCtrl['target'] = target;
      arySpinnerCtrl['timestamp'] = e.timeStamp;
      arySpinnerCtrl['cal'] = Number($(this).data('cal'));
      //クリックは単一の処理に留める
      if(e.type == 'click'){
          spinnerCal();
          arySpinnerCtrl = [];
          return false;
      }
      //長押し時の処理
      setTimeout(function(){
          //インターバル未実行中 + 長押しのイベントタイプスタンプ一致時に計算処理
          if(!arySpinnerCtrl['interval'] && arySpinnerCtrl['timestamp'] == e.timeStamp){
              arySpinnerCtrl['interval'] = setInterval(spinnerCal, spin_speed);
          }
      }, 500);

  });

  //長押し解除時 画面スクロールも解除に含む
  $(document).on('touchend mouseup scroll', function(e){
      if(arySpinnerCtrl['interval']){
          clearInterval(arySpinnerCtrl['interval']);
          arySpinnerCtrl = [];
      }
  });

  //変動計算関数
  function spinnerCal(){
    var target = $(arySpinnerCtrl['target']);
    var num = Number(target.val());
    num = num + arySpinnerCtrl['cal'];
    var cnf_num = Math.ceil(num);
    if(num > Number(target.data('max'))){
        target.val(target.data('max'));
    }else if(Number(target.data('min')) > num){
        target.val(target.data('min'));
    }else{
        target.val(cnf_num);
    }
  }
});

/*

// comsumtionを選ぶとstyle01.cssが適用される
document.getElementById("select_buy").onclick = function() {
  document.getElementById("cs").href = "style01.css";
}

// comsumtionを選ぶとstyle02.cssが適用される
document.getElementById("select_consume").onclick = function() {
  document.getElementById("cs").href = "style02.css";
}

*/
