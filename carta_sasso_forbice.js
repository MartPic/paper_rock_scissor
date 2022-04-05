// Create una funzione a cui passate un argomento
//che puo essere :'carta' o 'sasso' o 'forbice'
//tramite prompt
// Questa funzione produrrà da parte del computer
//casualmente una delle situazioni (carta,sasso,forbice)
//e in base alla regola:
// carta batte sasso
// sasso batte forbice
// forbice batte carta
// Stampate cosa è uscito e chi ha vinto.
// Le situazioni carta vs carta, sasso vs sasso e
//forbice vs forbice ovviamente danno pareggio

//creiamo funzione per la scelta casuale del computer
function GetSysChoice() {
    //creo array con le possibilità
    const choices = ["carta", "sasso", "forbice"];
    //scelta casuale dall'array
    const sysChoice = choices[Math.trunc(Math.random() * choices.length)];
    //lo stampo
    console.log(`L'avversario ha scelto ${sysChoice}`);
    //torna la scelta
    return sysChoice;
}

//funzione di gestione del turno di gioco
function PlayMorra(choice, sysChoice) {
    if (choice === sysChoice) {
        console.log(`${choice} VS ${sysChoice} = pareggio!`);
    } else {
        switch (choice) {
            case "carta":
                if (sysChoice === "sasso") {
                    console.log("Hai vinto! Carta batte sasso.");
                } else if (sysChoice === "forbice") {
                    console.log("Hai perso! Forbice batte carta.");
                }
                break;
            case "sasso":
                if (sysChoice === "carta") {
                    console.log("Hai perso! Carta batte sasso.");
                } else if (sysChoice === "forbice") {
                    console.log("Hai vinto! Sasso batte forbice.");
                }
                break;
            case "forbice":
                if (sysChoice === "carta") {
                    console.log("Hai vinto! Forbice batte carta.");
                } else if (sysChoice === "sasso") {
                    console.log("Hai perso! Sasso batte forbice.");
                }
                break;
        }
    }
}

//ALTERNATIVA

function PlayMorra2(choice, sysChoice) {
    if (choice === sysChoice) {
        console.log(`${choice} VS ${sysChoice} = pareggio!`);
    } else if (
        (choice === "carta" && sysChoice === "sasso") ||
        (choice === "sasso" && sysChoice === "forbice") ||
        (choice === "forbice" && sysChoice === "carta")
    ) {
        console.log(`Hai vinto! ${choice} batte ${sysChoice}`);
    } else {
        console.log(`Hai perso! ${sysChoice} batte ${choice}`);
    }
}

//la scelta dell'utente
const userChoice = prompt("Scegli carta, sasso o forbice").toLowerCase();
console.log(`Hai scelto ${userChoice}`);

//la scelta del computer
const sysChoice = GetSysChoice();

//partita1
console.time("PlayMorra");
PlayMorra(userChoice, sysChoice);
console.timeEnd("PlayMorra");

console.log("--------------");

//partita2
//il secondo metodo risulta più veloce
//in quanto ha meno condizioni da controllare
console.time("PlayMorra2");
PlayMorra2(userChoice, sysChoice);
console.timeEnd("PlayMorra2");