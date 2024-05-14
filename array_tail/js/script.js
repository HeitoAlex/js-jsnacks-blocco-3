const userNumber = parseInt(prompt('Quanti elementi vuoi inserire?'), 10);
const printNumber = parseInt(prompt('Quanti elementi vuoi stampare?'), 10);
const elementNumber = [];

for( let i = 0; i < userNumber; i++){
    const randomNumber = Math.floor((Math.random() * 100) +1);
    elementNumber.push(randomNumber);
    
}    
    const lastNumber = elementNumber.slice(-5);
    const lastUserNumber = elementNumber.slice(-printNumber);
    
    if (printNumber > 0){
        console.log(lastUserNumber);
    } else {
        console.log(lastNumber);
    }












