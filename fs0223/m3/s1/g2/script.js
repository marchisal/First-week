var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(saldo) {
        this.balanceInit = 0;
        this.balanceInit = saldo;
    }
    SonAccount.oneDeposit = function (arg0) {
        throw new Error("Method not implemented.");
    };
    SonAccount.prototype.oneDeposit = function (versamento) {
        return this.balanceInit += versamento;
    };
    SonAccount.prototype.oneWhitDraw = function (prelievo) {
        console.log(this.balanceInit -= prelievo);
        if (this.balanceInit < prelievo) {
            console.log("Non puoi prelevare");
        }
    };
    return SonAccount;
}());
var sonAccount = new SonAccount(100);
console.log(sonAccount);
sonAccount.oneDeposit(80);
console.log(sonAccount);
sonAccount.oneWhitDraw(1000);
console.log(sonAccount);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        return this.balanceInit += (this.balanceInit / 100) * 10;
    };
    return MotherAccount;
}(SonAccount));
var motherAccount = new MotherAccount(100);
console.log(motherAccount);
motherAccount.addInterest();
console.log(motherAccount);
