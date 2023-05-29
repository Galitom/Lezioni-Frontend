const btn5 = document.getElementById("5");
const btn10 = document.getElementById("10");
const btn15 = document.getElementById("15");
const btn25 = document.getElementById("25");
const btn50 = document.getElementById("50");
const tipAmount = document.getElementById("tipAmount");
const tip = document.getElementById("total");

btn5.addEventListener("click", function () {
    calcolo(5);
});

btn10.addEventListener("click", function () {
    calcolo(10);
});

btn15.addEventListener("click", function () {
    calcolo(15);
});

btn25.addEventListener("click", function () {
    calcolo(25);
});

btn50.addEventListener("click", function () {
    calcolo(50);
});

function calcolo(percentuale) {
    const tot = document.getElementById("money").value;
    const persone = document.getElementById("people").value;
    console.log(tot, persone);

    const tipPersona = (percentuale * tot) / 100 / persone;
    const totalePersona = tot / persone;

    tipAmount.innerText = tipPersona;
    tip.innerText = totalePersona;

    return [tipPersona, totalePersona];
}
