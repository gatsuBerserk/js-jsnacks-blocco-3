/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */ 

const n= parseInt(prompt("Inserisci un numero")); 
console.log(n); 

const array=[]; 

let i = 0; 
while(i < 10){ 
    let number= (Math.floor(Math.random()*10)+1);
    array.push(number); 

    i++;
}; 

console.log(array);