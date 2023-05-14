const product_URL = "https://striveschool-api.herokuapp.com/api/product/";

let urlBarContent = new URLSearchParams(window.location.search);
let productID = urlBarContent.get("productId");
console.log(productID);

const getOneProduct = function () {
  fetch(product_URL + productID, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMwYTg4Zjc0MDAwMTQyODc0Y2YiLCJpYXQiOjE2ODM4ODUwNjYsImV4cCI6MTY4NTA5NDY2Nn0.t1WWzoSqSg0CbykHlQjIGE3Aq8BxFuVqjCs3S3V_A0o",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero della scheda prodotto");
      }
    })
    .then((data) => {
      console.log("Prodotti: ", data);
      document.getElementById("name").value = data.name;
      document.getElementById("imgURL").value = data.imageUrl;
      document.getElementById("description").value = data.description;
        let colCard = `
            <div class="col-12">
            <div class="card">
              <div class="card-body bg-success p-2" style="--bs-bg-opacity: .5;">
                <h5 class="card-title">${(document.getElementById(
                  "name"
                ).value = data.name)}</h5>
                <div class"d-flex justify-content-center" >
                <img class="imgProduct" src=${(document.getElementById("imgURL").value = data.imageUrl)} alt="img" />
                </div>               
                <p>${(document.getElementById("description").value =data.description)}</p>                
              </div>
            </div>
          </div>`;
        let rowForOneCard = document.getElementById("product-container");
        rowForOneCard.innerHTML = colCard;
      });
    }
    .catch((err) => {
      console.log(err);
    });

window.onload = () => {
  getOneProduct();
};
