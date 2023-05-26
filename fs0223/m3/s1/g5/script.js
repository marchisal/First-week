var Smartphone = /** @class */ (function () {
    function Smartphone(carica) {
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return "Il credito residuo \u00E8 ".concat(this.carica.toFixed(2), "\u20AC");
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costo = this.costoMinuto * min;
        var dataeorachiamata = new Date();
        if (this.carica > costo) {
            this.carica -= costo;
            this.numeroChiamate++;
            var infoChiamate = {
                quantitativodichiamate: this.numeroChiamate,
                durata: min,
                DataeOra: dataeorachiamata
            };
            this.registroChiamate.push(infoChiamate);
            localStorage.setItem("ORARIO CHIAMATA", JSON.stringify(infoChiamate.DataeOra));
            console.log("La chiamata \u00E8 durata ".concat(min, " minuti"));
        }
        else {
            console.log("Non puoi effetturare questa chiamata");
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Smartphone.prototype.mostraRegistroChiamate = function () {
        for (var i = 0; i < this.registroChiamate.length; i++) {
            console.log(this.registroChiamate[i]);
        }
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function () {
        for (var i = 0; i < this.registroChiamate.length; i++) {
            console.log(this.registroChiamate[i].DataeOra);
        }
    };
    return Smartphone;
}());
var user1 = new Smartphone(0);
user1.ricarica(25);
console.log(user1);
console.log("La carica per user1 ammonta a", user1.carica, "€");
console.log(user1.numeroChiamate);
user1.chiamata(2);
console.log(user1.numeroChiamate);
console.log(user1.numero404());
user1.chiamata(30);
console.log(user1.numeroChiamate);
console.log(user1.numero404());
user1.mostraRegistroChiamate();
user1.filtraChiamatePerDataOra();
user1.azzeraChiamate();
console.log(user1.numeroChiamate);
console.log(user1);
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
var user2 = new Smartphone(0);
user2.ricarica(10);
console.log(user2);
console.log("La carica per user2 ammonta a", user2.carica, "€");
console.log(user2.numeroChiamate);
user2.chiamata(2);
console.log(user2.numeroChiamate);
console.log(user2.numero404());
user2.chiamata(6);
console.log(user2.numeroChiamate);
console.log(user2.numero404());
user1.mostraRegistroChiamate();
user1.filtraChiamatePerDataOra();
user2.azzeraChiamate();
console.log(user2.numeroChiamate);
console.log(user2);
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
console.log("-------------------------------------------------------------------");
var user3 = new Smartphone(0);
user3.ricarica(50);
console.log(user3);
console.log("La carica per user3 ammonta a", user3.carica, "€");
console.log(user3.numeroChiamate);
user3.chiamata(9);
console.log(user3.numeroChiamate);
console.log(user3.numero404());
user3.chiamata(2);
console.log(user3.numeroChiamate);
console.log(user3.numero404());
user1.mostraRegistroChiamate();
user1.filtraChiamatePerDataOra();
user3.azzeraChiamate();
console.log(user3.numeroChiamate);
console.log(user3);
