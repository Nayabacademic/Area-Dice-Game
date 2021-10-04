function fill(){

let xcoor = []
let ycoor = []

if (coordinates[1] > coordinates[3]) {
 for(let i = coordinates[3]; i <= coordinates[1]; i++){
 		ycoor.push(i)
 }
}
else{
	 for(let i = coordinates[1]; i <= coordinates[3]; i++){
 		ycoor.push(i)
 }
}

if (coordinates[0] > coordinates[2]) {
 for(let i = coordinates[2]; i <= coordinates[0]; i++){
 		xcoor.push(i)
 }
}
else{
	 for(let i = coordinates[0]; i <= coordinates[2]; i++){
 		xcoor.push(i)
 }
}

for(let i = 0; i< ycoor.length; i++){
 for(let j = 0; j< xcoor.length; j++){

 	 let box = tbody.getElementsByTagName('tr')[ycoor[i]].getElementsByTagName('td')[xcoor[j]]
 	 box.style.backgroundColor = colors[player]
 
 }
}

 coordinates = []

}
