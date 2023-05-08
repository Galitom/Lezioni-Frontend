//Crea le foto nella pagina principale
function setAmiiboImage(amiibo) {
    amiibo.forEach((character) => {
        const img = document.createElement("img");
        img.src = character.image;
        img.alt = character.name;
        document.querySelector("div").appendChild(img);
    });
}

//Lista Amiibo nella select
function getListAmiibo(amiibo) {
    amiibo.forEach((character) => {
        const op = document.createElement("option");
        op.innerText = character.name;
        document.querySelector("select").appendChild(op);
    });
}

const listaAmiibo = fetch(`http://www.amiiboapi.com/api/amiibo/?`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const { amiibo: amiiboCharacters } = data;
        getListAmiibo(amiiboCharacters);
    });

//funzione addLister sul cercare gli Amiibo
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Sei dentro!!!!!!");

    const search = document.querySelector("select").value;
    fetch(`http://www.amiiboapi.com/api/amiibo/?name=${search}`)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const { amiibo: amiiboCharacters } = data;
            setAmiiboImage(amiiboCharacters);
        })
        .catch(() => {
            console.log("caca");
        });
});
