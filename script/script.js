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

