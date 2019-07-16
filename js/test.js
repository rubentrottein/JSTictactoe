var affichage= document.getElementById("affichage");
var names= document.getElementsByClassName("name");
/****Expression Déclarative*****/
const direBonjour = function(prenom) {
const message = `Bonjour, <span class="name">${prenom} !</span><br>`;
return message;
}
/******Fonction Fléchée********/

const colorMe = (color, color2, color3) => {
    document.getElementById("display").style.background = `linear-gradient(${color}, ${color2}`;
    document.getElementById("display").style.color = `${color3}`;
}
    /* Fonction fléchée sans parenthèses(Un seul argument)*/
const clickMe =  singIt => affichage3.innerHTML += `One two three! ${singIt}!!<br>`;

    affichage3.innerHTML += direBonjour("NewGuy", "orange"); // "Bonjour, Baptiste !"
    affichage1.innerHTML += direBonjour("Baptiste", "indianred"); // "Bonjour, Baptiste !"
    affichage2.innerHTML += direBonjour("Sophie", "plum"); // "Bonjour, Sophie !"

const password = (pass) =>{
    if (pass === "prune"){
    document.getElementById("affichage4").style.opacity = ".2";
    document.getElementById("affichage4").innerHTML = "<a href='lastDays.html'><button class='prune'>Lien</button></a>";
    } else {
        alert("Quel Talent!");
    }
}
