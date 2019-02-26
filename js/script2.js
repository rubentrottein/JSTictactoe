/***********Background video*******************

function customVideoBackground(){
	//expérimentale     KO
	videoBackground.style.background = "<video>url(images/After_Storm.webm)</video>";
}


/********************Test**********************

var tabj = [ ['O', 'O', ''], ['X', 'X', ''], ['O', 'O', '']];
if((tabj[0][0] == 'O') && (tabj[0][1] == 'O')){
	tabj[0][2] = 'O'; 
}

function checkDeux(signe){

	var res = [99,99];

	for (let i=0; i<3; i++){
		if((tabj[i][0] == signe) && (tabj[i][1] == signe)){
			if (tabj[i][2] == '') { res[0] = i; res[1] = 2;}  
		 }
	}
	// deux autres conditions
	return res;
}

function testToWin(){
	var pos = checkDeux('O');
	if (pos[0] != 99){
		tabj[pos[0]][pos[1]] = 'O';
	}
}

function testToDefend(){
	var pos = checkDeux('X');
	if (pos[0] != 99){
		tabj[pos[0]][pos[1]] = 'O';
	}
}

testToWin();
testToDefend();

console.log(tabj);



/****************Are Corners Free?***************
function areCornerFree(){
	console.log("areCornerFree actif");
	if ((tileset[0][0].innerHTML === "") || (tileset[0][0].innerHTML === o) && (tileset[0][2].innerHTML === "") || (tileset[0][2].innerHTML === o) && (tileset[2][0].innerHTML === "") || (tileset[2][0].innerHTML === o) && (tileset[2][2].innerHTML === "") || (tileset[0][0].innerHTML === o)){
		choice = randomBox(1,3);
		console.log(choice + " choice");
		switch (choice) {

			case 1:
				if (tileset[0][0].innerHTML != o){
					tileset[0][0].innerHTML = o ;
					break;
				} else {
					break;
				}
			case 2:
				choice = randomBox(1,3);
				if (tileset[0][2].innerHTML != o){
					tileset[0][2].innerHTML = o ;
					break;
				} else {
					break;
				}

			case 3:
				choice = randomBox(0,2);
				if (tileset[2][0].innerHTML != o){
					tileset[2][0].innerHTML = o ;
					break;
				} else {
					break;
				}

			case 4:
			choice = randomBox(0,3);
				if (tileset[2][2].innerHTML != o){
					tileset[2][2].innerHTML = o ;
				} else {
					playToDefend();
				}		
		}
	} else {
		playToDefend();
	return false;
	}
}