// dato l'array multidimensionale fatto così:

cose = [
            [
                [1,2,3],
                [4,5,6]
            ],
            [
                [7,8,9],
                [10,11,12]
            ],
            [
                [17,18,19],
                [110,111,112]
            ]
        ];

// fai in modo che nella console appaia il numero 112
// selezionandolo opportunamente dall'array

console.log(cose[2][1][2]);

// fai in modo che nel posto indicato dall'asterisco
// venga inserito un nuovo sottoarray contenente i numeri 77 e 88

let cose2 = [77,88];
cose[2][0].push(cose2);

console.log(cose);