/*
Dato un array cognomi e un array con la stessa cardinalità (stesso numero di elementi) contenente dei titoli, restituire un array dipendenti in cui ogni elemento è costituito da un sottoarray del tipo [titolo, cognome].
Ad esempio se
cognomi = [‘Ros’, ‘Barbato’, ‘Piazzon’]
titoli = [‘ing.’,’dott.’,’avv.’]
dipendenti = [[‘ing.’,’Ros’], [‘dott.’,’Barbato’],[‘avv.’,’Piazzon’]]
*/

let cognomi = ['Ros', 'Barbato', 'Piazzon'];
let titoli = ['ing.','dott.','avv.'];
let dipendenti = [];

for (i = 0; i < cognomi.length; i++) {
    cognome = cognomi[i];
    titolo = titoli[i];
    dipendente = [titolo, cognome];
    dipendenti.push(dipendente);
}

console.log(dipendenti);
