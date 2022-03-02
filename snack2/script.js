/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */ 

const userNumber= parseInt(prompt("inserisci un numero:")); 
while (isNaN (userNumber)){
    userNumber= parseInt(prompt("inserisci un numero:")); 
}

for (i = 0; i < userNumber; i++){
    const tempArray=[]; 
    while (tempArray.length < 10){
        tempArray.push(Math.floor(Math.random()* 4532) + 4);
    
 }
    console.log(tempArray);
}