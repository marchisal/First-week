//ESERCIZIO 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  checkTheAge = function (user1) {
    if (this.age > user1.age) {
      return this.firstName + "è più vecchio di " + user1.firstName;
    }
  };
}



let firstUser = new User("Mario ", "Rossi", "30", "Cagliari");
console.log();


let secondUser = new User("Maria ", "Nera", "25", "Sassari");
console.log(secondUser);


console.log(firstUser.checkTheAge(secondUser));




//ESERCIZIO 2


//prendo i tag tramite gli id, le variabili che qui creo mi serviranno successivamente per il salvataggio dei dati ottenuti dal click sul bottone

let namePets = document.getElementById("pet-name");
let ownerName = document.getElementById("owner");
let speciesPets = document.getElementById("species");
let breedPets = document.getElementById("breed");

//inizializzo un'array

let petsList = [];


// faccio un costruttore per gli oggetti che creerò con il form e funzione per comparare i nomi dei proprietari

class Pet {
  constructor(petname, ownername, species, breed) {
    this.petname = petname;
    this.ownername = ownername;
    this.species = species;
    this.breed = breed;
  }
  static compareNamesOwner = function (owner1, owner2) {
    if(owner1.ownername === owner2.ownername){
        console.log("Uguali");
    }else{
        console.log("diversi")
    }
    return owner1.ownername === owner2.ownername;
  };
}

//faccio una funzione per creare l'array persList attraverso i dati che prendo dal form tramite il costruttore 

const PetsList = function () {
    let listofpets = document.getElementById("pets-list")

    listofpets.innerHTML = ''

    petsList.forEach((pet, i) => {
        let newListofpets = document.createElement('li')
        newListofpets.innerText = 
        pet.petname + 
        ' ' + 
        pet.ownername + 
        ' ' + 
        pet.species + 
        ' ' + 
        pet.breed 
        Pet.compareNamesOwner (pet, petsList[i - 1] ? petsList[i - 1] : {}) 
        listofpets.appendChild(newListofpets)
    })
}

//funzionalità del bottone che mi salva il value che inserisco nel form e me lo pusha nell'array e visualizza in html nella ul

let formReference = document.querySelector("form")
formReference.addEventListener ('submit', (e) => {
    e.preventDefault()
    let petsFromTheForm = new Pet (namePets.value, ownerName.value, speciesPets.value, breedPets.value)
    console.log(petsFromTheForm)
    petsList.push(petsFromTheForm)
    namePets.value = ''
    ownerName.value = ''
    speciesPets.value = ''
    breedPets.value = ''

    PetsList()
}
)