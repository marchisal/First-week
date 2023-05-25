class unCapo {
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number
    prezzoScontato:string

    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){
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
        this.saldo = saldo
        this.prezzoScontato = this.mostraPrezzo()
    }    
    mostraPrezzo():string {
        let prezzoScontato:number = (this.prezzoivainclusa / 100) * this.saldo;
        return `Il prezzo ammonta a ${(this.prezzoivainclusa - prezzoScontato).toFixed(2)} €`
    }   
}




fetch("./Abbigliamento.json")
.then((res:Response) =>{
    console.log(res);
    
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nell'esecuzione della chiamata");
    }
})
.then((data) => {
    
    let capi:unCapo[] = [];
    data.forEach((i:unCapo) => {
        let capo = new unCapo(
            i.id, 
            i.codprod, 
            i.collezione, 
            i.capo, 
            i.modello, 
            i.quantita, 
            i.colore, 
            i.prezzoivainclusa, 
            i.prezzoivaesclusa, 
            i.disponibile, 
            i.saldo);
            capi.push(capo)  
            console.log(capo.prezzoScontato);
                      
    })
    console.log("ecco i capi: ", capi);
    
    let treCapi:number[] = [0,2,4];
    treCapi.forEach((i) =>{
        console.log(capi[i].prezzoScontato);
    })
})
.catch((err) => {
    console.log(err);
  })

