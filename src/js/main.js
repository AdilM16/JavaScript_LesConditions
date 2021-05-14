
///---------Les conditions - introduction
//Via un console.log() vérifie l'egalité entre 1 et "1"
console.log(1=="1");
//Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
console.log(1==='1');

//Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "
// let nom = prompt("Quel est ton prénom?");
// if (nom.length < 5) {
//     alert('Ton nom est trop court');
// }

//Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.
// let addition = prompt("2+2");
// if(addition == 4){
//     alert("C'est correct Bravo!");
// }else{
//     alert("C'est faux.");
// }

//Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"
// let multi = prompt("Combien font 1 X 2")
// if(multi == 2){
//     alert(`Bonne réponse c'était bien ${multi}` );
// }else{
//     alert('Faux');
// }

//Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau
// let tab = [];
// let rep;
// rep =prompt("Que veux tu ajouter?");
// if(tab.length < 3){
//     tab.push();
// }
//Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs
// let ptNb = [];
// let gdNb = [];
// let rep = prompt("Entre un nombre");
// if (rep >= 12){
//     gdNb.push(rep);
// }else{
//     ptNb.push(rep);
// }
// alert(gdnb + " et " + ptNb);
// //Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions
// let nb = Math.floor(Math.random()*10);
// let quest = prompt("Choisis un numéro entre 1 et 10");

// if(nb == quest){
//     alert("Bien joué");
// }else if(quest > 10){
//     alert("ON A DIT ENTRE 0 ET 10!");
// }else{
//     alert("Retente ta chance!")
// }
