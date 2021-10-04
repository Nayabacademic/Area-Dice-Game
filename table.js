function tableCreate(){ 
var body = document.body, tbl = document.createElement('table');

tbl.classList.add("GeneratedTable");
let row = 32;
let column = 32;

for(var i = 0; i < column; i++){ 
 var tr = tbl.insertRow(); 
 for(var j = 0; j < row; j++){ 
  var td = tr.insertCell();
 } 
} 

body.appendChild(tbl); 
 
}//Function
