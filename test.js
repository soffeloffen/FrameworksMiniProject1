var table = document.getElementById('myTable'),
    selected = table.getElementsByClassName('selected');
table.onclick = highlight;
function highlight(e) {
    if (selected[0]) selected[0].className = '';
    e.target.parentNode.className = 'selected';
}
function fnselect(){

    $("#myTable tr").click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');    
        var value=$(this).find('td:first').html();
        alert(value);    
     });
     
     $('.ok').on('click', function(e){
         alert($("#table tr.selected td:first").html());
     });
}
