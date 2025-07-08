/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// funzione tradizionale
// function oneLetter (array,letter) {}
const oneLetter = (array,letter) => {
return array.filter(name => name.startsWith(letter));
}


// Invoca la funzione qui e stampa il risultato in console

console.log(oneLetter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]