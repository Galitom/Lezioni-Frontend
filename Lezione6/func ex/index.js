function tellFortune(job, location, partner, bimbi) {
    var future =
        "Lavorerai come  " +
        job +
        " in " +
        location +
        " sposato con " +
        partner +
        " " +
        " con " +
        bimbi +
        " bimbi";
    console.log(future);
}

tellFortune("Fortnite", "Bovisio", "Giorgia", 3);
tellFortune("Storico", "Cina", "Paolo Brosio", 6);
tellFortune("Soldato", "Russia", "Ucraina", 0);

function calculateDogAge(x) {
    var dog = 7 * x;
    console.log("Il tuo cane ha " + dog);
}

calculateDogAge(1);

function calcolaSupply(age, numPerDay) {
    var quantita = numPerDay * 365 * (100 - age);
    var message =
        "Avrai bisogno di " +
        quantita +
        " tazze di tè per durare fino all età di " +
        100;
    console.log(message);
}

calcolaSupply(28, 36);

function calcCircumfrence(r) {
    if (typeof r == "number")
        console.log("La circonferenza del cerchio è: " + r * 2 * 3.14);
}
function calcArea(r) {
    if (typeof r == "number")
        console.log("L'Area della circonferenza è: " + r * r * 3.14);
}

calcCircumfrence(4);
calcArea(4);
