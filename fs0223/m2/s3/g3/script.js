fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nell'esecuzione della chiamata");
    }
  })
  .then((data) => {
    console.log(data);
    let booksList = document.getElementById("riga");
    data.forEach((book) => {
      let colB = document.createElement("div");
      colB.classList.add("col-12", "col-lg-3");
      colB.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src=${book.img} class="card-img-top" alt="immagine">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          
          <p class="card-text">Price $${book.price}</p>
          <a href="#" onclick="elimina(this)" id="delete" class="btn btn-primary">Scarta</a>
        </div>
        </div>`;

      booksList.appendChild(colB);

      elimina = function (e) {
        e.closest(".col-12").remove();
      };
    });
  })
  .catch((err) => {
    console.log(err);
  });
