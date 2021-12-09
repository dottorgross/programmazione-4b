/*
Dato un array contenente una serie di sottoarray del tipo [‘nome’,numero], fare in modo che il programma ripeta i vari nomi per il numero di volte indicato dal numero.
Ad esempio [[‘Paolo’,2],[‘Marzia’,3]] produrrà:
Paolo
Paolo
Marzia
Marzia
Marzia
*/

let nomi =  [
                ['Angelo',2],
                ['Marzia',3],
                ['Mattia',4]
            ];

for (let i = 0; i < nomi.length; i++) {
    // seleziono il nome
    nome = nomi[i][0];
    
    // seleziono il numero di volte
    numero = nomi[i][1];

    // ripeto il nome per il numero di volte specificato
    for(let i=1; i<=numero; i++) {
        console.log(nome);
    }
}
            