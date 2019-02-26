/*************Plateau de jeu => tableauJS**************OK****/

	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var t3 = document.getElementById("t3");
	var t4 = document.getElementById("t4");
	var t5 = document.getElementById("t5");
	var t6 = document.getElementById("t6");
	var t7 = document.getElementById("t7");
	var t8 = document.getElementById("t8");
	var t9 = document.getElementById("t9");

	var tileset = [

		[t1, t2, t3],
		[t4, t5, t6],
		[t7, t8, t9],
	];

	var x='X';
	var o='O';
	var name = "Joueur 1";
	var dialog = document.getElementById("dialog");
	var playerName = document.getElementById("playerName");
	var dif = document.getElementById("dif");
	var background = document.getElementById("backgrounder");
	var videoBackground = document.getElementById("vidBackgrounder");
	var iaturn = false;
	var level = 1;
	var niveau = "Facile";
	var action = 0;

	function customlevel(lvl){
		level = lvl;

		switch (level){
			case 1 : 
			niveau = "<span class='blue'>F</span><span class='red'>a</span><span class='orange'>c</span><span class='prune'>i</span><span class='salmon'>l</span><span class='red'>e</span>";
			break;
			case 2 : 
			niveau = "<span class='medium'>Moyen</span>";
			break;
			case 3 : 
			niveau = "<span class='hard'>Difficile</span>";
			break;
		}
		dif.innerHTML = "Niveau : " + niveau;
	}
	function customName(){
		name = prompt("Entrez le nom du joueur");
		playerName.innerHTML = name;
	}
	function customBackground(choice){
		var choice = choice;
		switch(choice){
			case 1 :
			background.style.background = "url(images/background.jpg) fixed no-repeat";
			break;
			case 2 :
			background.style.background = "url(images/background2.jpg) fixed no-repeat";
			break;
			case 3 :
			background.style.background = "url(images/background3.jpg) fixed no-repeat";
			break;
			case 4 :
			background.style.background = "url(images/background4.jpg) fixed no-repeat";
			break;
			case 5 :
			background.style.background = "url(images/After_Storm.webm) fixed no-repeat";
			break;
		}
	}
	function replay(difficulte){
		level = difficulte;
		location.reload();
	}
	/*************************Evenements**************************OK*/

	function btClick(event){
	//affichage des actions du joueur
		if (event.target.innerHTML == ""){
			var play = document.getElementById(event.target.id);
			play.innerHTML = x + event.target.innerHTML;
			action++;
			console.log("Action de "+ name + " n°" + action);
		} else {
			alert("Case pleine");
			return "c";
		}
		iaturn=true;

		/*Activer methodes*/
		console.log("iaturn is " + iaturn)
			if (iaturn === true){
				iaPlay(level);
				iaturn = false;
				}
		console.log("iaturn is " + iaturn);
			if (gameStateCheck() != "c"){
				displayEnd();
			}
	}

	/*******************************GameState**********************OK*/

	function isGameWin(){

		/***********Victoire joueurV*******OK***/
		
		for (let i = 0; i < tileset.length; i++) {
			if ((tileset[i][0].innerHTML == tileset[i][1].innerHTML) && (tileset[i][2].innerHTML == tileset[i][1].innerHTML) && (tileset [i][1].innerHTML != "")){
				return tileset[i][0].innerHTML;
			}
		}

		/************Victoire joueurH********OK***/
		
		for (let i = 0; i < tileset.length; i++) {
			if ((tileset[0][i].innerHTML == tileset[1][i].innerHTML) && (tileset[2][i].innerHTML == tileset[1][i].innerHTML) && (tileset [1][i].innerHTML != "")) {
				return tileset[0][i].innerHTML;
			}
		}

		/************Victoire joueurD*********OK***/

		if ((tileset[0][0].innerHTML == tileset[1][1].innerHTML) && (tileset[2][2].innerHTML == tileset[1][1].innerHTML) && (tileset [1][1].innerHTML != "")) {
			return tileset[1][1].innerHTML;

		} else if ((tileset[2][0].innerHTML == tileset[1][1].innerHTML) && (tileset[0][2].innerHTML == tileset[1][1].innerHTML) && (tileset [1][1].innerHTML != "")) {	
			return tileset[1][1].innerHTML;
		}
		return "c";
	}

	/***************************Game Over****************************OK*/

	function isGameOver(){

		var gameOver = true;
		for (let i = 0; i < tileset.length; i++) {
			for (let j = 0; j < tileset.length; j++) {
				if (tileset[i][j].innerHTML === "") {
					gameOver = false;
				} 
			}
		}
		return gameOver;
	}

	/******************GameState Check******************************KO*/

	function gameStateCheck(){

			if ((isGameWin() === "c") && (isGameOver() == false)){
				return "c";
			} else if (isGameWin() === "X"){
				return x;
			} else if (isGameWin() === "O"){
				return o;
			} else {
				return "d";
			}
		}

	/******************DisplayEnd*************************************OK*/

	function displayEnd(){
			if (gameStateCheck() === x){
				dialog.innerHTML = "<div class='victoire'>L'incroyable victoire du Joueur Français!!Bravo " + name + " !<br><button onclick='replay()'>Rejouer?</button></div>";
			}else if (gameStateCheck() === o){
				dialog.innerHTML = "<div class='defaite'>Humiliante défaite de " + name + ". Son peuple perd la foi...<br><button onclick='replay()'>Se venger?</button></div>";
			} else if (gameStateCheck() === "d")
				dialog.innerHTML = "<div class='draw'>Match Nul!<br><button onclick='replay()'>Rejouer?</button></div>";
	}

	/***********************************IA*****************************KO*/
	function iaPlay(level){
		if (level === 1){
			iaRandomPlay();

		} else if (level === 2){
			isCenterFree();
			iaRandomPlay();

		} else if (level === 3){
			if (playToDefend() === false){
				if (playToWin() === false){
					if (isCenterFree() === false){
						iaRandomPlay();
					}
				}
			}
		}
		iaturn = false;
	}
	/*******************************Jouer au centre**********************OK*/

	function isCenterFree(){

		console.log("isCenterFree actif");
		if (tileset[1][1].innerHTML === ""){
			tileset[1][1].innerHTML = o ;
			iaturn = false;
			return true;
		}
		return false;
	}

	/********************************IA Random**************************OK*/

	function iaRandomPlay(){

	var line = randomBox(0,3);
	var column = randomBox(0,3);
	var casesJouees = line + " et " + column;
	console.log("random actif");
		for (let i = 0; i < tileset.length; i++) {
			for (let j = 0; j < tileset.length; j++) {
				if (iaturn === true){
					line = randomBox(0,3);
					column = randomBox(0,3);
					casesJouees = line + " et " + column;
					if (tileset[line][column].innerHTML === ""){
						tileset[line][column].innerHTML = o;
						console.log("cases jouées" + casesJouees);
						iaturn = false;
					}
				}
			}
		}
	}

	/*************************************Play To Win*************************KO*/

	function playToWin(){
		iaturn = true;
		console.log("je joue pour gagner!");
		var i = 0;
		for (i=i; i <= tileset.length; i++) {
				/*Attaque Horizontale*/

			if(iaturn === true){
				if((tileset[i][0] === o) && (tileset[i][1] === o) && (tileset [i][2].innerHTML === "")){
					tileset [i][2].innerHTML = o;
				}else if((tileset[i][0] === o) && (tileset[i][2] === o)  && (tileset [i][1].innerHTML === "")){
					tileset [i][1].innerHTML = o;
				} else if((tileset[i][2] === o) && (tileset[i][1] === o)  && (tileset [i][0].innerHTML === "")){
					tileset [i][0].innerHTML = o;
				
					/*Attaque Verticale*/

				} else if((tileset[0][i] === o) && (tileset[2][i] === o)  && (tileset [1][i].innerHTML === "")){
					tileset [1][i].innerHTML = o;
				} else if((tileset[2][i] === o) && (tileset[1][i] === o)  && (tileset [0][i].innerHTML === "")){
					tileset [0][i].innerHTML = o;
				} else if((tileset[0][i] === o) && (tileset[1][i] === o)  && (tileset [2][i].innerHTML === "")){
					tileset [2][i].innerHTML = o;
				
					/*Attaque Diagonale****KO***/
				
				} else if ((tileset[0][0].innerHTML === o) && (tileset[2][2].innerHTML === o) && (tileset [1][1].innerHTML === "")) {
					tileset [1][1].innerHTML = o;
				} else if ((tileset[0][0].innerHTML === o) && (tileset[1][1].innerHTML === o) && (tileset [2][2].innerHTML === "")) {
					tileset [2][2].innerHTML = o;
				} else if ((tileset[2][2].innerHTML === o) && (tileset[1][1].innerHTML === o) && (tileset [0][0].innerHTML === "")) {
					tileset [0][0].innerHTML = o;
				} else if ((tileset[0][2].innerHTML === o) && (tileset[1][1].innerHTML === o) && (tileset [2][0].innerHTML === "")) {
					tileset [2][0].innerHTML = o;
				} else if ((tileset[2][0].innerHTML === o) && (tileset[0][2].innerHTML === o) && (tileset [1][1].innerHTML === "")) {
					tileset [1][1].innerHTML = o;
				} else if ((tileset[1][1].innerHTML === o) && (tileset[2][0].innerHTML === o) && (tileset [0][2].innerHTML === "")) {
					tileset [0][2].innerHTML = o;
				} else {
					console.log("Pas de coup gagnant");
					return false;
				}
			} else {
				return false;
			}
			iaturn= false;
			return true;
		}
	}

	/********************Play to defend******************KO*/
	function playToDefend(){
		console.log("actif: playToDefend");
		return false;
	}

	/***************Randomizer***************************KO*/

	function randomBox(low, high){
		var random = Math.floor((Math.random() * high) + low);
		return random;
	}