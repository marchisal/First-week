function addOne(salsa){
    
    let display = document.getElementById("display");
    
    display.value += salsa.target.innerHTML;
}


function addNumber(salsa){
    let display = document.getElementById("display")

    display.value += salsa.innerHTML;
}