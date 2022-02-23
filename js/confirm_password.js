function CheckPassword(confirm_password){
	// 入力値取得
	var input1 = submit_password.value;
	var input2 = confirm_password.value;
	// パスワード比較
	if(input1 != input2){
		confirm_password.setCustomValidity("入力値が一致しません。");
	}else{
		confirm_password.setCustomValidity('');
	}
}
