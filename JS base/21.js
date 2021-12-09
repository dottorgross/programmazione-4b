/* creare un array libri contenente una serie di sottoarray
    ognuno dei quali contiene il titolo, l'autore e il numero di pagine di un libro
    scrivere un elenco dei soli titoli
*/

libri = [
            ['Cappuccetto rosso', 'Non mi ricordo', 20],
            ['Tutte le mie ragazze', 'Zanchetta, G.', 1920],
            ['Era minorenne', 'Zoia, S.', 55],
            ['Dark Nails', 'Ennaouri, O.', 87]
        ];

for(let i=0; i<libri.length; i++) {
    let libro = libri[i];
    let titolo = libro[0];

    console.log(titolo);
}

