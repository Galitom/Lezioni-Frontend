const artist1 = "Jennifer Lopez";
const artist2 = "Anderson .Paak";
const artist3 = "Florence and the Machine";
const artist4 = "M83";

fetch(
    `https://rest.bandsintown.com/artists/${encodeURI(
        artist1
    )}/events?app_id=1234&date=upcoming`
)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setCantente(data);
    });

fetch(
    `https://rest.bandsintown.com/artists/${encodeURI(
        artist2
    )}/events?app_id=1234&date=upcoming`
)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setCantente(data);
    });

fetch(
    `https://rest.bandsintown.com/artists/${encodeURI(
        artist3
    )}/events?app_id=1234&date=upcoming`
)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setCantente(data);
    });

fetch(
    `https://rest.bandsintown.com/artists/${encodeURI(
        artist4
    )}/events?app_id=1234&date=upcoming`
)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setCantente(data);
    });

function setCantente(data) {
    data.forEach((evento) => {
        console.log(evento);
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = evento.artist.image_url;
        const p = document.createElement("p");
        const date = new Date(evento.datetime);
        const options = { hour: "numeric", month: "long", day: "numeric" };
        const formattedDate = date.toLocaleDateString("it-IT", options);
        p.innerText = `${evento.venue.name}, ${evento.venue.city}, - ${formattedDate}`;

        document.getElementById("listaEventi").appendChild(div);
        div.appendChild(img);
        div.appendChild(p);
    });
}

/*

*/
