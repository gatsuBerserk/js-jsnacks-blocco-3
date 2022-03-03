// creo un'altra funzione che controlla che la somma di due numeri x e y sia pari
//     *
//     * sommaPari(24214, 12451241) ==> true se la somma mi dà un numero pari
//     *                            ==> false se la somma mi dà un numero dispari
//     */




function sumOddOrEven(num1, num2){
   if((num1 + num2) % 2 == 0){
       return true;
   }else{
       return false;
   }   
}; 
console.log(sumOddOrEven(2, 3));