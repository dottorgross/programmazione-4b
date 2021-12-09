// Dato un array di cognomi
// e un array con la stessa cardinalità (stesso numero di elementi)
// contenente dei titoli
// restituire un array in cui ogni elemento è costituito
// da un sottoarray del tipo [titolo, cognome]

let cognomi = ['Ros', 'Bellucci', 'Tarantino'];
let titoli = ['ing.', 'dott.', 'avv.'];
let dipendenti = [];

// ciclo for che si passa tutti i cognomi e titoli
for(let i=0; i<cognomi.length && titoli.length; i++) {
    // creo array [titolo, cognome]
    tc = [titoli[i], cognomi[i]];
    // lo pusho dentro all'array dipendenti
    dipendenti.push(tc);
}

console.log(dipendenti);