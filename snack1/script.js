/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */ 

const array= []; 
let insertNumber= prompt("Inserisci i numeri:"); 
console.log(insertNumber); 

let somma = 0;
while (somma < 200){
    array.push(parseInt(prompt("inserisci numero:")));
    somma += array[array.length -1]; 
    console.log(somma);

};  

console.log(array);


