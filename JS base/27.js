/* Dato un array contenente i nomi di dieci colori,
   alcuni dei quali ripetuti,
   creare un nuovo array che contenga il nome di ogni colore
   una sola volta.

   SOLUZIONE:
    -   Per ogni elemento dell’array1 (ciclo for sull'array1)
    o   Verifico se l’elemento esiste in array2 (usando il metodo .includes())
    o   Se NON esiste lo includo

    esempio:
    array2.includes('rosso') => true se c'è il rosso nell'array

*/

let colori = ['rosso', 'giallo', 'verde', 'rosso', 'giallo', 'blu'];
let coloriSingoli = [];

for(i=0; i<colori.length; i++) {
    if(!coloriSingoli.includes(colori[i])) {
        coloriSingoli.push(colori[i]);
    }
}

console.log(coloriSingoli);