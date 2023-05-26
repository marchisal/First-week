interface ISmartphone {
    carica:number;
    numeroChiamate:number;
    costoMinuto: number;

    ricarica(euro:number):void;
    numero404():string; //quanto rimane di credito tolto il costo per la chiamata
    getNumeroChiamate():number;
    chiamata(hour:number, min:number):void; // effettua virtualmente una chiamata. 
                               //Inserendo il numero di minuti pari alla durata della chiamata riduce 
                               //il credito residuo, ed incrementa il numero di chiamate
    azzeraChiamate():void;
    mostraRegistroChiamate(): void;
    filtraChiamatePerDataOra(): void;
}

interface IChiamata {
    quantitativodichiamate: number;
    durata: number;
    DataeOra: Date;
}


class Smartphone implements ISmartphone{
    carica:number;
    numeroChiamate:number;
    costoMinuto: number;
    registroChiamate:IChiamata[];

    constructor(carica:number){
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20
        this.registroChiamate = []
    }

    ricarica(euro: number): void { 
        this.carica += euro;        
    }

    numero404(): string {
        return `Il credito residuo è ${this.carica.toFixed(2)}€`;        
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate        
    }

    chiamata(min: number): void {
        let costo:number = this.costoMinuto * min
        
        let dataeorachiamata:Date = new Date();

        if(this.carica > costo){
            this.carica -= costo;
            this.numeroChiamate ++;

            
            let infoChiamate:IChiamata = {
                quantitativodichiamate:this.numeroChiamate,
                durata:min,
                DataeOra: dataeorachiamata
            }
            this.registroChiamate.push(infoChiamate)

            localStorage.setItem("ORARIO CHIAMATA", JSON.stringify(infoChiamate.DataeOra))



            console.log(`La chiamata è durata ${min} minuti`);
                     
        }else{           
            console.log("Non puoi effetturare questa chiamata");
        }
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

    mostraRegistroChiamate(): void {
        for(let i=0; i<this.registroChiamate.length; i++){
            console.log(this.registroChiamate[i]);
            }    
    }    
    filtraChiamatePerDataOra(): void {
    
        for(let i=0; i<this.registroChiamate.length; i++){
            console.log(this.registroChiamate[i].DataeOra);
            
        }
    }
}


let user1 = new Smartphone(0)
user1.ricarica(25);
console.log(user1);
console.log("La carica per user1 ammonta a", user1.carica,"€");

console.log(user1.numeroChiamate);

user1.chiamata(2);

console.log(user1.numeroChiamate);
console.log(user1.numero404());

user1.chiamata(30)
console.log(user1.numeroChiamate);
console.log(user1.numero404())

user1.mostraRegistroChiamate();
user1.filtraChiamatePerDataOra();

user1.azzeraChiamate();
console.log(user1.numeroChiamate);
console.log(user1);



console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");


let user2 = new Smartphone(0)
user2.ricarica(10);
console.log(user2);
console.log("La carica per user2 ammonta a", user2.carica,"€");

console.log(user2.numeroChiamate);

user2.chiamata(2);

console.log(user2.numeroChiamate);
console.log(user2.numero404());

user2.chiamata(6)
console.log(user2.numeroChiamate);
console.log(user2.numero404())

user1.mostraRegistroChiamate();
user1.filtraChiamatePerDataOra();

user2.azzeraChiamate();
console.log(user2.numeroChiamate);
console.log(user2);

console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");


let user3 = new Smartphone(0)
user3.ricarica(50);
console.log(user3);
console.log("La carica per user3 ammonta a", user3.carica,"€");

console.log(user3.numeroChiamate);

user3.chiamata(9);

console.log(user3.numeroChiamate);
console.log(user3.numero404());

user3.chiamata(2)
console.log(user3.numeroChiamate);
console.log(user3.numero404())

user1.mostraRegistroChiamate();
user1.filtraChiamatePerDataOra();

user3.azzeraChiamate();
console.log(user3.numeroChiamate);
console.log(user3);



