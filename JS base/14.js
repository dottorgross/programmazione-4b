// definisco un array con nomi di pietre preziose
let preziose = ['Rubino', 'Giada', 'Diamante'];

// posso aggiungere un elemento all'array con il metodo push:
preziose.push('Smeraldo');
// vediamo cosa c'è nell'array:
console.log(preziose);

// posso aggiungere un elemento anche all'inizio dell'array:
preziose.unshift('Zaffiro');
// vediamo cosa c'è nell'array:
console.log(preziose);

// posso togliere un elemento dalla fine dell'array:
preziose.pop();
// vediamo cosa c'è nell'array:
console.log(preziose);

// posso togliere un elemento dall'inizio dell'array:
preziose.shift();
// vediamo cosa c'è nell'array:
console.log(preziose);

// quando tolgo un elemento con pop() o shift() esso viene restituito e posso usarlo come mi piace:
let elemento = preziose.pop();
console.log(elemento);
console.log(preziose);