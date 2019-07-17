const screen = document.getElementById("screen");
const melissa = {
  nom: "Melissa",
  sante: 150,
  force: 25
};
/********************exemple de fonctionnement de l'objet *********************/

//Fonction decrire
function decrire(personnage) {
  return `${personnage.nom} a ${personnage.sante} points de vie et ${personnage.force} en force`;
}

//OUTPUT :  "Aurora a 150 points de vie et 25 en force"

//Via l'appel des caractéristiques: 
// console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

//Via la FONCTION décrire()
screen.innerHTML += decrire(melissa);


/**************************Exemple de modification des stats *********************/
//DOMMAGES SUBIS
screen.innerHTML += `<p class='dmg'>${melissa.nom} est blessée par une flèche</p>`;
melissa.sante = melissa.sante - 20;

//EQUIPEMENT
screen.innerHTML += `<p class='dmg'>${melissa.nom} trouve un bracelet de force</p>`;
melissa.force = melissa.force + 10;

//RESUME    "Melissa  a 130 (150-20) points de vie et 35 (25 + 10) en force"
screen.innerHTML += decrire(melissa);

/************************Version "Méthode"**************************/
screen.innerHTML += "<h3>------------------Version Methode------------------------</h3>";
const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25,
  xp: 0,

  // Renvoie la description du personnage directement définie par l'objet à L'INTERIEUR de celui-ci: c'est une METHODE
  decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience`;
  }
};

screen.innerHTML += aurora.decrire();