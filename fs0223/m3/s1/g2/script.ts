class SonAccount {
    static oneDeposit(arg0: number) {
        throw new Error("Method not implemented.");
    }
    balanceInit:number = 0;
    constructor(saldo:number) {
        this.balanceInit = saldo;
    }
    oneDeposit(versamento:number):number{
        return this.balanceInit += versamento;
    }
    oneWhitDraw(prelievo:number):void{
        console.log(this.balanceInit -= prelievo);
        if(this.balanceInit < prelievo) {
            console.log("Non puoi prelevare");
            }
    }
    
}

let sonAccount:SonAccount = new SonAccount(100);
console.log(sonAccount);

sonAccount.oneDeposit(80);
console.log(sonAccount);

sonAccount.oneWhitDraw(1000);
console.log(sonAccount);


class MotherAccount extends SonAccount{
    constructor(balanceInit:number){
        super(balanceInit)
    }
    addInterest():number{
        return this.balanceInit += (this.balanceInit/100)*10;

    }
}

let motherAccount:MotherAccount = new MotherAccount(100)
console.log(motherAccount);

motherAccount.addInterest()
console.log(motherAccount);
