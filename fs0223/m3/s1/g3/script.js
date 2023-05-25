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
var WorkerA = /** @class */ (function () {
    function WorkerA(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return WorkerA;
}());
var worker1 = /** @class */ (function (_super) {
    __extends(worker1, _super);
    function worker1(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, codredd, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    worker1.prototype.getUtileTasse = function () {
        return this.codredd - 700;
    };
    worker1.prototype.getTasseInps = function () {
        return this.redditoannuolordo * 0.09;
    };
    worker1.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * 0.25;
    };
    worker1.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    };
    return worker1;
}(WorkerA));
var Franco = new worker1(1, 0.09, 0.25, 1800);
