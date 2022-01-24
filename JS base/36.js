// oggetti nidificati

let asus382 = {
    produttore: 'ASUS',
    modello: 'LM382-K',
    socket: 'LGA1200',
    usb: 8,
    m2: true
}

let i9 = {
    produttore: 'Intel',
    modello: 'i9-12900K',
    frequenza: 2.5,
    cache2: 1024
}

let ballistics = {
    produttore: 'Corsair',
    modello: 'Ballistics',
    capacità: 131,
    frequenza: 6666
}

// posso usare altri oggetti
let computer = {
    motherboard: asus382,
    processore: i9,
    ram: ballistics
}

console.log(computer.processore.modello)
console.log(computer.motherboard.modello)