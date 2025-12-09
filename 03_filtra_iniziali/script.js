/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

let utente = prompt("inserisci parola tra A - L - M");

// Dichiara la funzione qui.
function UnaParola( array, carattere){
    const Array = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].charAt(0) === carattere){
            Array.push(array[i]);
        }
    }
    return Array;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(UnaParola(names, utente));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]