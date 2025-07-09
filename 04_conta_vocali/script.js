/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

// funzione tradizionale
// function vocalFind (string) {}
function countVowels(string) {
  // dichiaro un array di vocali
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

// ciclo la parola
for (let i=0; i<string.length; i++) {
if (vowels.includes(string[i])) {
  count++; // count +1
}

return count;

}

}


// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)