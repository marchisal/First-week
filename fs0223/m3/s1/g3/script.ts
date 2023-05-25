abstract class WorkerA {
    codredd: number
    redditoannuolordo: number
    tasseinps: number
    tasseirpef: number

    constructor (codredd:number, redditoannuolordo:number, tasseinps:number, tasseirpef:number) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef
    }

    abstract getUtileTasse():number

    abstract getTasseInps():number

    abstract getTasseIrpef():number
    
    abstract getRedditoAnnuoNetto():number

}

class worker1 extends WorkerA {
    constructor(codredd:number, redditoannuolordo:number, tasseinps:number, tasseirpef:number){
        super(codredd, redditoannuolordo, tasseinps, tasseirpef)
    }
    getUtileTasse(): number {
        return this.codredd - 700
    }
    getTasseInps(): number {
        return this.redditoannuolordo * 0.09
    }
    getTasseIrpef(): number {
        return this.redditoannuolordo * 0.25
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef
    }
}

let Franco = new worker1(1, 0.09, 0.25, 1800)