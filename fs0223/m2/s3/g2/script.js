//ESERCIZIO 1


let saveB = document.getElementById("saveButton");

let deleteB = document.getElementById("deleteButton");

let nameArea = document.getElementById("name");

saveB.addEventListener('click', (e) => {
    e.preventDefault()
    function createLi() {
        let ulist = document.querySelector("#list")
        let list = document.createElement("li")
        ulist.innerHTML = ""
        list.textContent = name
        ulist.appendChild(list)
    }
    
    let name = nameArea.value
    createLi()
    localStorage.setItem('name', name)
})

deleteB.addEventListener('click', () => {
   
    localStorage.removeItem('name')
})


//ESERCIZIO 2

