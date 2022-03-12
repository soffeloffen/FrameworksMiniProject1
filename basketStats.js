var amount= 0;

function setDrug1(){
sessionStorage.setItem( "Drug1Name", "Magic Mushrooms" );
sessionStorage.setItem( "Drug1Amount", 1);
}

function updateDrug1(){
var total = parseInt(sessionStorage.getItem( "Drug1Amount" ) );
var updatedTotal = total +1;
sessionStorage.setItem( "Drug1Amount", updatedTotal ); 
}



function reset() {
    sessionStorage.removeItem = 0
}