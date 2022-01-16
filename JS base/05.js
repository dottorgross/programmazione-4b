// scrivere un programma che, dato il nome di una persona
// il suo sesso e un numero intero
// scriva una frase tante volte quanto
// è specificato dal numero
// la frase dev'essere "Benvenuto NOME" per i maschi
// e "Benvenuta NOME" per le femmine

// SOLUZIONE
// definisco e assegno una variabile nome
// definisco e assegno una variabile numero
// definisco e assegno una variabile sesso
let nome = "Laura";
let numero = 3;
let sesso = 'm';
let frase;

// se il sesso è maschile
if(sesso == 'm') {
    // preparo la frase M
    frase = "Benvenuto " + nome;
}
// altrimenti
else {
    //      preparo la frase F
    frase = "Benvenuta " + nome;
}

// scrivo la frase
for(i=1; i<=numero; i++) {
    console.log(frase);
}
