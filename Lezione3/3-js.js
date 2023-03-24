function hide() {
    document.getElementById("temperatureItalyKelvin").classList.add("hidden");
    document.getElementById("temperatureBangkokKelvin").classList.add("hidden");
    document
        .getElementById("temperatureLosAngelesKelvin")
        .classList.add("hidden");
    document.getElementById("temperatureItalyCelsius").classList.add("hidden");
    document
        .getElementById("temperatureBangkokCelsius")
        .classList.add("hidden");
    document
        .getElementById("temperatureLosAngelesCelsius")
        .classList.add("hidden");
    document
        .getElementById("temperatureItalyFahrenheit")
        .classList.add("hidden");
    document
        .getElementById("temperatureBangkokFahrenheit")
        .classList.add("hidden");
    document
        .getElementById("temperatureLosAngelesFahrenheit")
        .classList.add("hidden");
}
hide();

function fahrenheit(x) {
    return Math.ceil(x * 1.8 + 32);
}

function kelvin(x) {
    return Math.ceil(x + 273.15);
}

// Nel mondo oggi ci sono queste temperature per Milano, Bangkok e Los Angeles in gradi Celsius.
const MilanCelsius = 20;
const BangkokCelsius = 35;
const LosAngelesCelsius = 15;

document.getElementById("temperatureItalyKelvin").innerHTML =
    kelvin(MilanCelsius) + " K";
document.getElementById("temperatureBangkokKelvin").innerHTML =
    kelvin(BangkokCelsius) + " K";
document.getElementById("temperatureLosAngelesKelvin").innerHTML =
    kelvin(LosAngelesCelsius) + " K";
document.getElementById("temperatureItalyCelsius").innerHTML =
    MilanCelsius + "°C";
document.getElementById("temperatureBangkokCelsius").innerHTML =
    BangkokCelsius + "°C";
document.getElementById("temperatureLosAngelesCelsius").innerHTML =
    LosAngelesCelsius + "°C";
document.getElementById("temperatureItalyFahrenheit").innerHTML =
    fahrenheit(MilanCelsius) + " F";
document.getElementById("temperatureBangkokFahrenheit").innerHTML =
    fahrenheit(BangkokCelsius) + " F";
document.getElementById("temperatureLosAngelesFahrenheit").innerHTML =
    fahrenheit(LosAngelesCelsius) + " F";

document.getElementById("btn").onclick = function () {
    hide();
    switch (document.getElementById("opzione").selectedIndex) {
        case 0:
            document
                .getElementById("temperatureItalyKelvin")
                .classList.remove("hidden");
            document
                .getElementById("temperatureBangkokKelvin")
                .classList.remove("hidden");
            document
                .getElementById("temperatureLosAngelesKelvin")
                .classList.remove("hidden");
            break;
        case 1:
            document
                .getElementById("temperatureItalyCelsius")
                .classList.remove("hidden");
            document
                .getElementById("temperatureBangkokCelsius")
                .classList.remove("hidden");
            document
                .getElementById("temperatureLosAngelesCelsius")
                .classList.remove("hidden");
            break;
        case 2:
            document
                .getElementById("temperatureItalyFahrenheit")
                .classList.remove("hidden");
            document
                .getElementById("temperatureBangkokFahrenheit")
                .classList.remove("hidden");
            document
                .getElementById("temperatureLosAngelesFahrenheit")
                .classList.remove("hidden");

            break;
    }
};

// 1. Scrivi il codice che converte le temperature in gradi Fahrenheit e Kelvin
// 2. Aggiungi il valore delle varie temperature a ogni elemento dell'HTML che trovi con l'id temperatureItaly, temperatureThailand, temperatureUSA
// 3. Le temperature mostrate nell'HTML dovranno avere anche il relativo simbolo di misura (°C, °F, K)
// 4. Arrotonda per eccesso le temperature in gradi Fahrenheit e Kelvin (hint: usa la funzione Math.ceil())
// 5. Metti in evidenza con colori diversi le temperature nei vari gradi
// 6. Implementa al click della città il redirect sul sito della meteo di quella città (esempio: https://www.meteo.it/)
// ADVANCED
// 7. aggiungi un'immagine di sfondo che rappresenti la città selezionata
// 8. aggiungi un menù a tendina con cui mostrare in base alla scelta la temperatura in gradi Celsius, Fahrenheit o Kelvin
