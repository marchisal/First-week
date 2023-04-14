/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (animali in pets){
  console.log(animali);
}
//corretto dopo spiegazione Michele


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let pets2 = pets.shift();
pets.push(pets2);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

let targa = 0;
let cars2 = cars.map(function (newProp) {
  targa++
  return { ...newProp, licensePlate: 'CK777' + targa };
})
console.log(cars2);


//||


for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "CK9876" + i;
}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Fiat',
  model: 'Multipla',
  color: 'blue',
  trims: ['titanium', 'stv', 'active'],
  licensePlate: 'CK7654'
},)
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
};
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

var i = 0;
do {
  console.log(numericArray[i]);
  i++
} while (numericArray[i] != 32);


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

let posizitionC = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a": posizitionC.push(1);
      break;
    case "b": posizitionC.push(2);
      break;
    case "c": posizitionC.push(3);
      break;
    case "d": posizitionC.push(4);
      break;
    case "e": posizitionC.push(5);
      break;
    case "f": posizitionC.push(6);
      break;
    case "g": posizitionC.push(7);
      break;
    case "h": posizitionC.push(8);
      break;
    case "i": posizitionC.push(9);
      break;
    case "l": posizitionC.push(10);
      break;
    case "m": posizitionC.push(11);
      break;
    case "n": posizitionC.push(12);
      break;
    case "o": posizitionC.push(13);
      break;
    case "p": posizitionC.push(14);
      break;
    case "q": posizitionC.push(15);
      break;
    case "r": posizitionC.push(16);
      break;
    case "s": posizitionC.push(17);
      break;
    case "t": posizitionC.push(18);
      break;
    case "u": posizitionC.push(19);
      break;
    case "v": posizitionC.push(20);
      break;
    case "z": posizitionC.push(21);
      break;
  }
}
console.log(posizitionC);