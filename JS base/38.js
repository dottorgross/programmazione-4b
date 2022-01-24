
let utenti = {
    Alan: {
        nome: "Alan",
        cognome: "Ciukoski",
        email: "a.ciukoski@gmail.com",
        online: true
    },
    Sarah: {
        nome: "Sarah",
        cognome: "Bozza",
        email: "s.bozza@gmail.com",
        online: false
    }
}

// elenchiamo tutti gli utenti:
for(let utente in utenti) { // per ogni utente in utenti
    console.log(utente)
}

// per accedere alle proprietà di ogni utente usiamo la notazione utenti[utente] (es. utenti['Sarah'])
console.log(utenti['Alan'])

// esempio: vogliamo scrivere le email di tutti gli utenti
for(let utente in utenti) {
    console.log(utenti[utente].email)
}