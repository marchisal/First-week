/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* ESECUZIONE ESERCIZIO
{

let x = 4;
let y = 20;
let max;
  if (x > y){
    max = x;
  }else{
    max = y;
  }
console.log(max)

//or

let n = 4;
let m = 20;
  if (n < m){
    console.log(true);
  }else{
}

}
*/






/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* ESECUZIONE ESERCIZIO
{

let numb = prompt('Inserisci un numero da 1 a 20')
  if (numb == 5){
    document.write("equal");
  } else {
    document.write("not equal")
  }

}
*/






/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* ESECUZIONE ESERCIZIO
{

let numb = prompt('Inserisci un numero')
  if (numb % 5==0){
    document.write("è divisibile per 5");
  } else {
    document.write("non è divisibile per 5")
  }

}
*/





/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* ESECUZIONE ESERCIZIO
{

let int1 = 8;
let int2 = 12;
  if (int1 == 8 || int2== 8){
    console.log(true);
  }else{

}

//&&

int1 = 4;
int2 = 4;
let result = int1 + int2;
  function somma(){
    let result = int1 + int2;
    }
    console.log(result)


}
/*








/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*ESECUZIONE ESERCIZIO
{
let totalShoppingCart= prompt('Quanto è il totale in euro del tuo carrello?');

function carrello(){
    if (totalShoppingCart >= 50){
    console.log(`La tua spedizione è gratuita e pagherai ${totalShoppingCart}`)
    }else{
      console.log(`Aggiungi ${50 - totalShoppingCart} euro per ottenere la spedizione gratuita!`)
    }
  }
  carrello();

}
*/




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* ESECUZIONE ESERCIZIO
{
let totalShoppingCart= prompt('Quanto è il totale del tuo carrello?');
let discount = totalShoppingCart * 0.8

function carrello(){
    if (discount >= 50){
    console.log(`Con l'applicazione della scontistica ora pagherai ${discount} e la tua spedizione è gratuita`)
    }else{
      console.log(`Aggiungi ${50 - discount} per ottenere la spedizione gratuita. Il totale che spenderai è ${discount} con un'aggiunta di 10 euro`) 
    }
  }
  carrello();
}
*/









/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* ESECUZIONE ESERCIZIO
let m = 30;
let n = 20;
let q = 50;

if (m > n && m > q && n > q){
  console.log(m, n, q)
  }else if(q > n){
    console.log(m, n, q)
  }else if (n > m && n > q && m > q){
      console.log(n, m, q)
      }else if (q > m){
        console.log(n, q, m)
      }else if (q > m && q > n && m > n){
          console.log(q, m, n)
          }else if(n > m){
            console.log(q, n, m)
          }
NON LO SO MI DISPIACE LO SAPRò FARE CON I CICLI E LE LIBRERIE

*/





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* ESECUZIONE ESERCIZIO
{
let val = "Ciao"
if (typeof val == "number"){
    console.log("Sono un numero")
  }else{
    console.log("Sono una stringa")
  }
}
*/








/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* ESECUZIONE ESERCIZIO
{
let numero = prompt('scrivi un numero!');
  let risultato = (numero%2);

  if(risultato == 0){
    console.log('il numero è pari')
  }else{
    console.log('il numero è dispari')
  }
}
*/










/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
  
  /* ESECUZIONE ESERCIZIO
  {
  let val = 4
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  }
  */


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
 
}
me.city = 'Toronto'


console.log(me)




/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arr = []
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr[arr.length - 1] = 100
console.log(arr)