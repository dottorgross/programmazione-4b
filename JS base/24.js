/*
Dato un array del tipo [[titolo,cognome],[titolo,cognome]...], decodificarlo in due array contenenti rispettivamente i cognomi e i titoli.
*/

let dipendenti = [
    ['ing.','Ros'],
    ['dott.','Barbato'],
    ['avv.','Piazzon']
];

// preparo due array vuoti
let titoli = [];
let cognomi = [];

// faccio un ciclo for che si passa tutti i dipendenti
for(let i=0; i<dipendenti.length; i++) {
//      prendo il dipendente indicato dall'indice i
    dipendente = dipendenti[i];
//      estraggo il titolo
    titolo = dipendente[0];
//      estraggo il cognome
    cognome = dipendente[1];
//      pusho il titolo nell'array dei titoli
    titoli.push(titolo);
//      pusho il cognome nell'array dei cognomi
    cognomi.push(cognome);
}

console.log(titoli);
console.log(cognomi);