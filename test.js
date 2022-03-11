var table = document.getElementById('table'),
    selected = table.getElementsByClassName('selected');
table.onclick = highlight;
function highlight(e) {
    if (selected[0]) selected[0].className = '';
    e.target.parentNode.className = 'selected';
}

function my_func() {
    my_func_1();
    my_func_2();
}

function fnselect(){
$("#myTable tr").click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');    
    var value=$(this).find('td:first').html();
    alert(value);    
 });
}

