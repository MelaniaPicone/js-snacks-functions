/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

// funzione tradizionale
// function vocalFind (string) {}
const letterFind = (string) => {

for (let i=0; i < word.length ; i++){
const vowelsFind = string[i].match(/aeiou/);

}

return vowelsFind;

}


// Invoca la funzione qui e stampa il risultato in console

console.log(word(vowelsFind));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)