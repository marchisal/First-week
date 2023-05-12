let apiKey = "fo8jXn3LWNGMKaBZoe5tE2JsnkzycP7d1N8FTL43oZNk3clzPqbJ5P6x";

fetch('https://api.pexels.com/v1/search?query=cities', {
    headers: {Authorization: apiKey}
})
.then((res)=>{
    if(res.ok){
        return res.json()
    }else{
        throw new Error("Qualcosa è andato storto")
    }
})

.then((data) =>{
    console.log(data);
    
})
.catch((err) => {
    console.log(err)
})


const album = function (elementi){
    let card = document.getElementById("unicaRow");

    elementi.forEach((elemento) => {
        card.innerHTML += `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${elemento.photos.src.portrait}" class="bd-placeholder-img card-img-top" width="100%" height="225"/>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>`
    })
        
    }