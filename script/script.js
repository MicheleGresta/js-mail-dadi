
// ESERCIZIO 1
const userMailEl = document.querySelector(".form-control");
const userClickEl = document.getElementById("bottone");
const userRegistered = ["michele", "marco", "mattia"];
const userWelcome = document.querySelector(".welcome");

userClickEl.addEventListener("click", function (){
    
    const userEmail = userMailEl.value;
    
    
    
    for (let i = 0; i < userRegistered.length; i++) {
        if ( userEmail === userRegistered[i]) {
            console.log("benvenuto")
            userWelcome.classList.replace("not-visible", "visible")

        }
    }     
   }     
) 

// FINE ESERCIZIO 1 

// ESERCIZIO 2 
const playerUtenteElement = document.querySelector(".utente");
const playerVincitoreElement = document.querySelector(".vincitore");
const playerComputerElement = document.querySelector(".computer");

// generatori di numeri
const numUtente = Math.round(Math.random()*5)+1;
const numComputer = Math.round(Math.random()*5)+1;


playerUtenteElement.append(numUtente);
playerComputerElement.append(numComputer);

if (numUtente > numComputer) {
    playerVincitoreElement.append("Congratulazioni! Hai vinto contro il computer.");
} else if (numUtente < numComputer) {
    playerVincitoreElement.append("Il computer ha vinto!");
} else if (numUtente == numComputer){
    playerVincitoreElement.append("Pareggio!");
}

// FINE ESERCIZIO 2

// ESERCIZIO 3 (BONUS)
