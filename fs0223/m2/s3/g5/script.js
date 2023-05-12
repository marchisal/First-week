const product_URL = "https://striveschool-api.herokuapp.com/api/product/"

const getProduct = function () {
    fetch(product_URL, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMwYTg4Zjc0MDAwMTQyODc0Y2YiLCJpYXQiOjE2ODM4ODUwNjYsImV4cCI6MTY4NTA5NDY2Nn0.t1WWzoSqSg0CbykHlQjIGE3Aq8BxFuVqjCs3S3V_A0o"
        },
        })
    .then((res) => {
        if(res.ok) {
            console.log(res)
            return res.json()
        }else{
            throw new Error ("Errore nel caricamento dei prodotti")
        }
    })
    .then((data) => {
        console.log("Prodotti: ", data)
        data.forEach((product) => {
            let colTemplate = `
            <div class="col-12 col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title align-item-center">${product.name}</h5>
                <img class="imgProduct" src=${product.imageUrl} alt="img" />
                <p class="card-text">Descrizine del prodotto: ${product.description}</p>
                <p>${product.brand}</p>
                <p>Prezzo: ${product.price}€</p>
                <p>User ID: ${product._id}</p>
                <a href="backofficeProduct.html?productId=${product._id}" target="_blanck" class="btn btn-primary">MODIFICA</a>
              </div>
            </div>
          </div>`

          let rowForCard = document.getElementById("product-container")
          rowForCard.innerHTML += colTemplate
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

window.onload = () => {
    getProduct()
}

