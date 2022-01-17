// scrivere una funzione
// fattoriale(numero)
// che calcola il fattoriale di quel numero

// funzione fattoriale
//      dichiaro una variabile fattoriale e le dò il valore iniziale di 1
//      ciclo for da 1 al numero
//          assegno a fattoriale il valore precedente moltiplicato per il numero
//      restituisco (return) il valore di fattoriale

function fattoriale(n) {
    let fattoriale = 1;
    for(let i=1; i<=n; i++) {
        fattoriale = fattoriale * i;
    }
    return fattoriale;
}

console.log(fattoriale(4));