// Snack 12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// const wordA = prompt('Scrivi una parola');
// const wordB = prompt('Scrivi un\'altra parola');

// function comparison (testoA, testoB){
//     if(testoA.length === testoB.length){
//         return true
//     } else {
//         return false
//     }
// }

// if (comparison(wordA,wordB) === true){
//     console.log(wordA,wordB)
// } else {
//     if(wordA.length > wordB.length){
//         console.log(wordA)
//     } else {
//         console.log(wordB)
//     }
// }

// Snack13 > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321


// function reverseNumber(numero){
    
// }


// Snack14 > Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

// const userSecond = Number.parseInt(prompt('Quanti secondi dura il timer?'), 10);

// let timer = setInterval(function() {
//     userSecond--;
//     console.log(userSecond)
//     if(userSecond <= 0){
//         alert()
//         clearInterval(userSecond)
//     }
// }, 1000);
    


// function alert(){
//     alert('Tempo scaduto')
// }


// snack15 Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.


const object = {
    nome : 'palla',
    peso : 10
}

const userModif = prompt('quale peso deve avere?');
object.peso = userModif

console.log(object.peso)