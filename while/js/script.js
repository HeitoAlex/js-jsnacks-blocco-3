// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.


// const numberArray = [];
// let userNumber = parseInt(prompt('inserisci un numero'), 10);

// while (numberArray.length < 6){
//     userNumber = parseInt(prompt('inserisci un numero'), 10)
//     if (userNumber % 2 === 1){
//     numberArray.push(userNumber)
//     }
// }

// Snack10 Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// const arrayA = [1, 2, 3];
// const arrayB = [4, 5, 6, 7, 8, 9, 10];

// let randomNumber = Math.floor((Math.random()* 100) +1);

// while (arrayA.length < arrayB.length){
//     randomNumber = Math.floor((Math.random()* 100) +1);
//     arrayA.push(randomNumber)
// }

// console.log(arrayA, arrayB)

// Snack11 Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arrayN = [];
let sum = 0

while (sum < 50){
    let userNumber = parseInt(prompt('inserisci un numero'), 10);
    
    if (Number.isNaN(userNumber) !== true){
        arrayN.push(userNumber);
        sum += userNumber;
    }        
}

console.log(arrayN);