const product_URL = "https://striveschool-api.herokuapp.com/api/product/";

let urlBarContent = new URLSearchParams(window.location.search);
let productID = urlBarContent.get("productId");
console.log(productID);

if (productID) {
    document.getElementById("backTitle").innerText =
      "Backoffice page - Modifica PRODOTTO";
    document.getElementById("save-button").innerText = "MODIFICA PRODOTTO";

    //BOTTONE DELETE
    let deleteB = document.getElementById("delete-button");
    deleteB.classList.remove("d-none");
    deleteB.addEventListener("click", () => {
      //FETCH PER CANCELLARE delete PRODOTTO
      fetch(product_URL + productID, {
        method: "DELETE",
        headers: {
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMwYTg4Zjc0MDAwMTQyODc0Y2YiLCJpYXQiOjE2ODM4ODUwNjYsImV4cCI6MTY4NTA5NDY2Nn0.t1WWzoSqSg0CbykHlQjIGE3Aq8BxFuVqjCs3S3V_A0o",
        },
      })
        .then((res) => {
          if (res.ok) {
            alert("SCHEDA PRODOTTO CANCELLATA");
            location.assign("index.html");
          } else {
            throw new Error("Problema nell'eliminazione del prodotto");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

// CREAZIONE DEL PRODOTTO

const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", function (p) {
  p.preventDefault();

  let nameInput = document.getElementById("name");
  let descriptionInput = document.getElementById("description");
  let brandInput = document.getElementById("brand");
  let priceInput = document.getElementById("price");
  let imgURL = document.getElementById("imgURL");

  let newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    price: priceInput.value,
    imageUrl: imgURL.value,
  };
  console.log("Prodotto schedato, invio in API", newProduct);

  //FETCH PER MODIFICARE put E/O CARICARE post

  fetch(productID ? product_URL + productID : product_URL, {
    method: productID ? "PUT" : "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMwYTg4Zjc0MDAwMTQyODc0Y2YiLCJpYXQiOjE2ODM4ODUwNjYsImV4cCI6MTY4NTA5NDY2Nn0.t1WWzoSqSg0CbykHlQjIGE3Aq8BxFuVqjCs3S3V_A0o",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert(
          productID ? "SCHEDA PRODOTTO MODIFICATA" : "SCHEDA PRODOTTO CREATA"
        );
        location.assign("index.html");
      } else {
        throw new Error("Errore nel salvataggio");
      }
    })
    .catch((err) => {
      console.log(err);
    });
})



  
  

  //con questa fetch recupero il prodotto che ho caricato singolarmente
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
      console.log("Dati del singolo prodotto", data);
      //QUI RIPOPOLO IL FORM
      document.getElementById("name").value = data.name;
      document.getElementById("imgURL").value = data.imageUrl;
      document.getElementById("description").value = data.description;
      document.getElementById("brand").value = data.brand;
      document.getElementById("price").value = data.price;
    })
    .catch((err) => {
      console.log(err);
    });
