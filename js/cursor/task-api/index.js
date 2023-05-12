const BASE_URL = "https://swapi.dev/api/";

const refs = {
    form: document.querySelector(".search-form"),
    input: document.querySelector(".js-input"),
    characterBtn: document.querySelector(".characters-btn"),
    planetBtn: document.querySelector(".planets-btn"),
    filmBtn: document.querySelector(".films-btn"),
    loadMoreBtn: document.querySelector(".load-more"),
    gallery: document.querySelector(".gallery-list")
};

async function getFilms()  {
    const getFilms = await fetch('https://swapi.dev/api/films/')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    return getFilms;

};

async function getFilmById(id)  {
    const getFilmById = await fetch(`${BASE_URL}films/${id}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        // .then(data => {
        //     console.log(data);
        // })
        .catch(error => {
            console.log(error);
        });
    return getFilmById;

};

async function getCharacters() {
    const getCharacters = await fetch(`${BASE_URL}people/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    
    return getCharacters;

};

function getCharactersByFilmId(id) {

    return getFilmById(id).then(data => { return data.characters }).then(arr => arr.map(item => {
        fetch(item)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json()
                   // .then(data => console.log(data))
            }
        )
    }))
    
      
    // }).then(a=>{userList.innerHTML+=(`<li class="gallery-item"><p class="gallery-name"><b>Name</b>: ${a.name}</p>
    //   <p class="gallery-name"><b>birth year</b>: ${a.birth_year}</p>
    //    <p class="gallery-name">sex</b>: ${a.gender}</p>
    //        <img src="images/characters/${a.name}.jpg" alt="no pic" class="gallery-image-film" />
    //     </li>`
    // )
    
      
    // })
        
    // }))
   }
//getFilms();
//getCharactersByFilmId(3);


const onInputHandle = (e) => {
    console.log(e.currentTarget.value);
};

const onSearchFilm = (e) => {
    getCharactersByFilmId(refs.input.value)
         .then(data => (markupFilmRender(data)))
        .catch(error => console.log(error.message));
};

const markupFilmRender = (films) => {
    const markupFilm = films.map(film => {
        return `
        <li class="list-item">
          <img src="" alt="hero pic" />
          <h2 class="item-title"></h2>
          <p class="age-desc"></p>
          <p class="sex-desc"></p>
        </li>
        `;
    }).join(" ");

    refs.gallery.insertAdjacentHTML('beforeend', markupFilm);
};

refs.input.addEventListener('input', onInputHandle);
refs.filmBtn.addEventListener('click', onSearchFilm);

// refs.characterBtn.addEventListener('click', () => {
//   // let chapters = document.querySelector("input").value

    
//        // refs.gallery.innerHTML = ""
//        getCharactersByFilmId(document.querySelector("input").value)
 
// })
