// scrivi una funzione:
// salutaUltimate(nome, volte)
// che scrive nella console un certo numero di volte il nome specificato
// es. salutaUltimate("Paolo", 3)
// deve scrivere
// Ciao Paolo
// Ciao Paolo
// Ciao Paolo

// dichiaro la funzione
function salutaUltimate(nome, volte) {
    for(let i=0; i<volte; i++) {
        console.log("Ciao " + nome);
    }
}

// uso la funzione
salutaUltimate("Jessica", 7);