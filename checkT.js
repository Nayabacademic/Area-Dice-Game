function checkT(){

let x = Math.abs(coordinates[0] - coordinates[2]) + 1
let y = Math.abs(coordinates[1] - coordinates[3]) + 1
let opt = [dice1, dice2]

if(opt.includes(x)){
	opt.splice(opt.indexOf(x), 1);
	
 if(opt.indexOf(y) != -1){
  	opt.splice(opt.indexOf(x), 1);
  	return true
 }
}

return false

}
