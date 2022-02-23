var gradeMenu =
      {
        "1EC": ["電源回路の製作", "抵抗回路の製作", "LANケーブルの作成", "コンデンサの測定実験",
        "トランジスタの測定実験", "論理回路の基礎実験", "Arduinoの実習"],

        "2EC": ["ディジタル技術の基礎", "増幅回路基礎", "回路網の基礎", "周波数と周波数特性の基礎",
        "RLCの実験", "Web演習", "ロジックの基礎", "パソコン組立"],

        "3EC": ["シリアル通信", "ディジタル信号処理", "振幅変調とその検波", "OPアンプ", "電波の基礎",
        "論理回路", "光ファイバーの伝送特性", "表示デバイス", "通信用ケーブルの伝送特性",
        "ネットワーク構築", "組込みプログラミング"],

        "4EC": ["なんかの部品"],

        "2NC01": ["RLCの実験", "ディジタル技術の基礎", "ネットワークの基礎",
        "パソコン組立", "CRTオシロスコープの実験"],

        "2NC02": ["増幅回路基礎", "電波の基礎", "マイコン基礎", "回路網の実験", "周波数特性の基礎"],

        "3NC01": ["電波の基礎", "OPアンプ", "振幅変調とその検波",
        "ルータネットワーク構築", "組込みプログラミング", "ディジタル信号処理"],

        "3NC02": ["液晶素子の作製とその評価", "シリアル通信", "論理回路", "ディジタル信号処理", "VPNとネットワークセキュリティ",
        "光ファイバーの伝送特性", "ケーブルの伝送特性", "AIの基礎"],

        "4NC": ["実験テーマが入るかも"],

        "management_room": ["なし"]
      };

function createMenu(grade_selection){

  var menuList = document.getElementById('menuList');
  menuList.disabled = false;
  menuList.innerHTML = '';
  var option = document.createElement('option');
  option.innerHTML = '科目名を選択';
  option.defaultSelected = true;
  option.disabled = true;
  option.hidden = true; //追加
  menuList.appendChild(option);

  gradeMenu[grade_selection].forEach( menu => {
    var option = document.createElement('option');
    option.innerHTML = menu;
    menuList.appendChild(option);
  });
}
