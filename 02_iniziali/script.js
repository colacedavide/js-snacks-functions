/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function Iniziali(array){
    let parolaIniziale = [];

    for(let i = 0; i < array.lenght; i++){
        
        const primaParola = array[i].charAt(0);

        parolaIniziale.push(primaParola);
    }
    
    return parolaIniziale;
}

// Invoca la funzione qui e stampa il risultato in console
let primaLettera = Iniziali(names);
console.log(primaLettera);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]