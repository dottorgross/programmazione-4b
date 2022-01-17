// le funzioni possono anche restituire un valore

function somma(numero1, numero2) {
    let somma = numero1 + numero2;
    return somma;
}

// uso la funzione somma:
console.log(somma(2,3));

// posso usare il valore restituito dalla funzione dentro ad altre espressioni:
let risultato = 12 + somma(5,5);

console.log(risultato);