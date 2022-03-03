/**
 *
 *
   Crea due tag div con due id diversi:
   un div avrà il testo colorato di rosso mentre l'altro di verde.
   Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
   Se sono pari li stampo nell'div "rosso",
   se sono dispari li stampo nell'div "verde".
 *
 */

// Prendiamo il main
const domMainElement= document.querySelector("main"); 

// Creiamo i div
const redDiv= document.createElement("div");
const greenDiv= document.createElement("div"); 

// inseriamo i div nel Main 
domMainElement.append(redDiv, greenDiv); 

//Aggiungiamo la classe Bootstrap che ci interessa 
redDiv.classList.add("text-danger"); 
greenDiv.classList.add("text-success");

// Numeri randomici in un array
const numbers=[]; 
 
for ( let i = 0; i <10; i ++){
    numbers.push(Math.floor(Math.random()* 100));  
}
// Leggiamo singolarmente i numeri presenti
for(let i = 0; i < numbers.length; i++){
  if(isEven (numbers[i])){
    redDiv.innerHTML +=numbers [i] + " è pari" + ", ";
    console.log(numbers[i] + " è pari");
  }else{ 
    greenDiv.innerHTML +=numbers [i] + " è dispari" + ", ";
    console.log(numbers[i] + " è dispari" );
  }
} 

// Controllare quali numeri sono pari o dispari 

function isEven(number){
  if(number % 2 == 0){
    return true;
  }else{
    return false;
  }
};

// Soluzione 2
// function oddOrEven(number){
//   if(number % 2 == 0){
//     return "Even";
//   }else{
//     return "Odd";
//   }
// };

