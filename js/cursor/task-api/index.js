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
let page = 1;
async function getPlanets() {
    const planets = await fetch(`${BASE_URL}/planets/?page=${page}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        //.then(data => console.log(data.results))
        .catch(error => console.log(error.message));
    
    return planets;
};

//  function standby() {
//         document.querySelector('.image').src = './images/star-wars.jpg';
// }
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
                       <img src="images/${data.name}.jpg" alt="./images/star-wars.jpg" onerror="this.onerror=null;this.src=this.alt;" width="180" />
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
    refs.gallery.innerHTML = "";
    page = 1;
    getPlanets().then(({ results }) => {
        console.log(results);
        
        appendPlanetCard(results)
        
    });
};

const onLoadMore = () => {
    refs.gallery.innerHTML = "";
    page += 1;
    getPlanets().then(data => { return data }
    ).then(({ results }) => { 
    console.log(results);
    appendPlanetCard(results)
})
};

const markupFilmRender = (data) => {
    return data.map((film) => {
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

const markupPlanetCardRender = (planets) => {
    return planets.map((planet) => {
        return `
        <li class="list-item">
          <img src="" alt="${planet.name} pic" />
          <h2 class="item-title"> Name: ${planet.name}</h2>
          <p class="age-desc">Rotation period: ${planet.rotation_period}</p>
          <p class="sex-desc">Climat: ${planet.climate}</p>
        </li>
        `;
    }).join(" ");

    
};

const appendPlanetCard = (data) => {
    refs.gallery.insertAdjacentHTML('beforeend', markupPlanetCardRender(data));
}


refs.input.addEventListener('input', onInputHandle);
refs.filmBtn.addEventListener('click', onSearchFilm);
refs.planetBtn.addEventListener('click', onPlanetBtnClick);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


