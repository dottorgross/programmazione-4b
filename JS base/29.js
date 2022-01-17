/* Ambito globale e locale */

// dichiaro una variabile globale
let nome = "Lorenzo";

function chiediAmicizia() {
    // dichiaro una variabile locale con lo stesso nome
    let nome = "Giulio";
    return nome;
}

console.log(nome);
console.log(chiediAmicizia());