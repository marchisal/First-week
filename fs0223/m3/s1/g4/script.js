var unCapo = /** @class */ (function () {
    function unCapo(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.prezzoScontato = this.mostraPrezzo();
    }
    unCapo.prototype.mostraPrezzo = function () {
        var prezzoScontato = (this.prezzoivainclusa / 100) * this.saldo;
        return "Il prezzo ammonta a ".concat((this.prezzoivainclusa - prezzoScontato).toFixed(2), " \u20AC");
    };
    return unCapo;
}());
fetch("./Abbigliamento.json")
    .then(function (res) {
    console.log(res);
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error("Errore nell'esecuzione della chiamata");
    }
})
    .then(function (data) {
    var capi = [];
    data.forEach(function (i) {
        var capo = new unCapo(i.id, i.codprod, i.collezione, i.capo, i.modello, i.quantita, i.colore, i.prezzoivainclusa, i.prezzoivaesclusa, i.disponibile, i.saldo);
        capi.push(capo);
        console.log(capo.prezzoScontato);
    });
    console.log("ecco i capi: ", capi);
    var treCapi = [0, 2, 4];
    treCapi.forEach(function (i) {
        console.log(capi[i].prezzoScontato);
    });
})
    .catch(function (err) {
    console.log(err);
});
