/* creare un array ragazze che contiene una serie di sottoarray,
    uno per ogni ragazza
    di ogni ragazza sono specificati nome, cognome, età e una lista coi nomi dei suoi animali domestici
    la lista degli animali ovviamente dev'essere un altro sottoarray

    scrivere l'elenco coi nomi e cognomi delle ragazze
*/

let ragazze = [
    ['Matilda', 'De Angelis', 26, ['Cric', 'Doggy']],
    ['Emma', 'Stone', 33, []],
    ['Naomi', 'Campbell', 51, ['Lulù', 'Bob']],
    ['Cappuccetto', 'Rosso', 15, ['Wolfy']]
];

for(let i=0; i<ragazze.length; i++) {
    // estraggo il nome della ragazza (indice 0)
    ragazza = ragazze[i];
    nome = ragazza[0];
    // estraggo il cognome della ragazza (indice 1)
    cognome = ragazza[1];
    
    // estraggo il sottoarray con gli animali
    animali = ragazza[3];
    // scrivo un altro ciclo for che prende i singoli animali e li scrive
    for(let i=0; i<animali.length; i++) {
        console.log(animali[i]);
    }
}