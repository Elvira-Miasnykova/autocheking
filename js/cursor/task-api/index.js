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

async function getPlanets() {
    const planets = await fetch(`${BASE_URL}/planets/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => console.log(data.results))
        .catch(error => console.log(error.message));
    
    return planets;
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
                })
            .then(data => {
                refs.gallery.innerHTML += (
                    `<li class="list-item">
                       <img src="images/${data.name}.jpg" alt="hero pic" width="180" />
                       <h2 class="item-title">Name: ${data.name}</h2>
                       <p class="age-desc">Birth: ${data.birth_year}</p>
                       <p class="sex-desc">Sex: ${data.gender}</p>
                    </li>`
                )
            })
            .catch(error => console.log(error.message));
    }))
}
    
const onInputHandle = (e) => {
    console.log(e.currentTarget.value);
};

const onSearchFilm = (e) => {
    console.log(getCharactersByFilmId(refs.input.value))
    //.then(appendGalleryItemsMarkup)
         
};

const onPlanetBtnClick = () => {
    console.log(getPlanets());
}

const markupFilmRender = (data) => {
    return markupFilm = data.map((film) => {
        console.log(film);
        return `
        <li class="list-item">
          <img src="images/Chewbacca.jpg" alt="hero pic" />
          <h2 class="item-title"> Name: ${film.name}</h2>
          <p class="age-desc">Birth: ${film.birth_year}</p>
          <p class="sex-desc">Sex: ${film.gender}</p>
        </li>
        `;
    }).join(" ");

    
};

const appendGalleryItemsMarkup = (data) => {
   refs.gallery.insertAdjacentHTML('beforeend', markupFilmRender(data));
}

refs.input.addEventListener('input', onInputHandle);
refs.filmBtn.addEventListener('click', onSearchFilm);
refs.planetBtn.addEventListener('click', onPlanetBtnClick);

// refs.characterBtn.addEventListener('click', () => {
//   // let chapters = document.querySelector("input").value

    
//        // refs.gallery.innerHTML = ""
//        getCharactersByFilmId(document.querySelector("input").value)
 
// })
