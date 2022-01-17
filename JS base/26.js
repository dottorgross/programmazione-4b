// scrivi una funzione sconto
// che accetta due parametri:
// prezzo è il prezzo di un prodotto in euro
// sconto è la percentuale di sconto da applicare
// deve restituire l'importo dello sconto...
// prezzo * sconto / 100
// 1000 * 10 / 100 = ho uno sconto di 100 euro

// sconto(1000,10) restituisce 100

function sconto(prezzo, percentuale) {
    return prezzo * percentuale / 100;
}
console.log(sconto(1000,20));

// il prezzo scontato sarebbe di 1000 - 100 = 900
// scrivi una seconda funzione prezzoScontato che
// accetta due parametri prezzo e sconto
// e calcola il prezzo scontato facendo uso della funzione definita sopra

// prezzoScontato(1000,10) restituisce 900
// prezzo - sconto(1000,10)

function prezzoScontato(prezzo, percentuale) {
    return prezzo - sconto(prezzo, percentuale);
}
console.log(prezzoScontato(1000,20));