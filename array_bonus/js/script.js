const arrayA = [1,2,3];
const arrayB = [4,5,6,7,8,9,10,11];

let longestArray;
let shortestArray;

if (arrayA.length === arrayB.length){
    console.log('Hanno la stessa lunghezza')
} else if (arrayA.length > arrayB.length){
    longestArray = arrayA
    shortestArray = arrayB
} else {
    longestArray = arrayB
    shortestArray = arrayA
}

const remainingElements = longestArray.length - shortestArray.length;
for (let i = 0; i < remainingElements; i++){
    shortestArray.push(Math.floor(Math.random()* 100) + 1);
}

console.log(shortestArray, longestArray, shortestArray.length, longestArray.length)