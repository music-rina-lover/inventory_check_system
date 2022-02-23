var i = 1 ;
var count = 1;
function addForm() {

  event.preventDefault();

  if(count < 3) {

    var main_div = document.createElement('div');
    main_div.id = 'tag_per_' + i;
    main_div.className = 'tag_per';
    var main_parent = document.getElementById('form_area');
    main_parent.appendChild(main_div);

    var div = document.createElement('div');
    div.id = 'form_area_first_' + i;
    div.className = 'form_area_first';
    var parent = document.getElementById('tag_per_' + i);
    parent.appendChild(div);

    var form_icon = document.createElement('p');
    var form_icon_mark = document.createTextNode("●");
    form_icon.appendChild(form_icon_mark);
    form_icon.id = 'form_icon_' + i;
    var parent_02 = document.getElementById('form_area_first_' + i);
    parent_02.appendChild(form_icon);

    var input_data = document.createElement('input');
    input_data.type = 'text';
    input_data.id = 'tag_form_' + i; //こわすぎ、ここは変更ね
    input_data.placeholder = '例：抵抗';
    input_data.className = 'submit_tag';
    parent.appendChild(input_data);

    var button_data = document.createElement('button');
    button_data.id = i;
    button_data.className = 'delete_tag_form';
    parent.appendChild(button_data);

    var remove_icon = document.createElement('p');
    var remove_icon_mark = document.createTextNode("×");
    remove_icon.appendChild(remove_icon_mark);
    remove_icon.id = 'form_icon_' + i;
    var parent_03 = document.getElementById(i);
    parent_03.appendChild(remove_icon);

    button_data.onclick = function() {
      event.preventDefault();
      deleteBtn(this);
    }

    i++;
    count++;

  }
}

function deleteBtn(target) {
  event.preventDefault();
  var target_id = target.id;
  var parent = document.getElementById('form_area');
  var div_id = document.getElementById('tag_per_' + target_id);
  parent.removeChild(div_id);
  count--;
}
