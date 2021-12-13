
let gruppoMail = ["milan@gmail.com", "matteo@gmail.com" , "lorenzo@gmail.com"];
let myMail = prompt ("inserisci la tua mail");
let emailCheck = false;

for(let i= 0; i < gruppoMail.length; i++){
    if(myMail == gruppoMail[i]){
        emailCheck = true;
    }
}

if(emailCheck){
    alert("email corretta");
}
else{
    alert("email errata");
}

// if(emailCheck){
//     console.log("email corretta");
// }
// else{
//     console.log("email errata");
// }