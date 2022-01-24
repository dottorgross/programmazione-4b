// OGGETTI

// definizione di un oggetto
let gatto = {
    nome: "Whiskers",
    zampe: 4,
    code: 1,
    nemici: ["Acqua", "Cani"]
}

// posso leggere le proprietà dell'oggetto
console.log(gatto.nome)
console.log(gatto.zampe)

// posso creare una nuova proprietà
gatto.pelo = "lungo"
console.log(gatto)

// posso cancellare una proprietà
delete gatto.code
console.log(gatto)

// posso verificare se un oggetto ha una proprietà
console.log(gatto.hasOwnProperty('pelo'))
console.log(gatto.hasOwnProperty('pelato'))