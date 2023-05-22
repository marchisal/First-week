var x = 5;
var y = 68;
function numeroCasuale(a, b) {
    var z = (Math.floor(Math.random() * (100) + 1));
    console.log(z);
    if (a == z) {
        console.log("x ha azzeccato il numero casuale");
    }
    else if (b == z) {
        console.log("y ha azzeccato il numero casuale");
    }
    else {
        if (Math.abs(a - z) < Math.abs(b - z)) {
            console.log("x e y non hanno estratto il numero corretto, ma si avvicina maggiormente x");
        }
        else if (Math.abs(a - z) > Math.abs(b - z)) {
            console.log("x e y non hanno estratto il numero corretto, ma si avvicina maggiormente y");
        }
        else {
            console.log("x e y non hanno estratto il numero corrett bensì un numero equidistante");
        }
    }
}
numeroCasuale(x, y);
