 
let userRoll = (Math.floor(Math.random()*6 + 1));
console.log (userRoll);

let botRoll = (Math.floor(Math.random()*6 + 1));
console.log (botRoll);

if (userRoll > botRoll){
    console.log ("Hai vinto! POG!");

}else if( userRoll < botRoll){
    console.log ("Hai perso! MonkaS ):");

}else{
    console.log ("Pareggio!! MonkaHmm");
}