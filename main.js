const $container = document.getElementById("container") ;

const URL_API = "https://rickandmortyapi.com/api/character" ;

console.log(URL_API);

fetch(URL_API)
.then(Response=> Response.json())
.then((data) =>
{
    const characters = data.results ;
    for (let character of characters){
        console.log (character);
        $container.innerHTML +=`
        <div class="profile">
            <img class="imagen" src="${character.image}" alt="${character.name}"></img>
            <h3>${character.name}</h3>
            <p>genero: ${character.gender}</p>
            <p>especie: ${character.species}</p>
            <p>subespecie: ${character.type}</p>
            </div>
            `
    }
}
)
