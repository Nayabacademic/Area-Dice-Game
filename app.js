//utils

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//start
tableCreate()

const tbody = document.querySelector(".GeneratedTable");
const nDis = document.querySelector("#nDis");
const pDis = document.querySelector("#pDis");

let coordinates = []
let touch = 0;
let dice1 = randomIntFromRange(1, 6)
let dice2 = randomIntFromRange(1, 6)
nDis.innerHTML = dice1 + " X " + dice2

let colors = ["#FFCC00", "#FE595D", "#86D226", "#1A92DB"];
let bCol = "#20262E";
let player = 0;
pDis.innerHTML = "PLAYER : " + (player+1)
pDis.style.color = colors[player]


tbody.addEventListener('click', function (e){
const cell = e.target.closest('td');

if (!cell) {return;} 
// Quit, not clicked on a cell 

const row = cell.parentElement;
cell.style.backgroundColor = colors[player];

touch++
coordinates.push(cell.cellIndex)
coordinates.push(row.rowIndex)

console.log("random", dice1, dice2);

if (touch == 2) {
 if (checkT() == true) {
 		touch = 0;
		fill()
		player++
   dice1 = randomIntFromRange(1, 6)
   dice2 = randomIntFromRange(1, 6)
   nDis.innerHTML = dice1 + " X " + dice2
   if (player == 4){player = 0}
   pDis.innerHTML = "PLAYER : " + (player+1)
   pDis.style.color = colors[player]
   
 }
 else{
 	 touch = 0;
 	 let cell2 = tbody.getElementsByTagName('tr')[coordinates[1]].getElementsByTagName('td')[coordinates[0]];
 	 
 	 cell.style.backgroundColor = bCol
 	 cell2.style.backgroundColor = bCol
 	 
 	 coordinates = [];
 }
}

console.log("touch: "+touch)
 
});

