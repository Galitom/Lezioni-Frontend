var vittorie = 0;

function generaNumeroRandomico() {
    return Math.floor(Math.random() * 100) + 1;
}

function verifica() {
    // Recupera il numero inserito dall'utente e lo converte in un intero
    var guess = parseInt(document.getElementById("guess").value);

    // Genera il numero randomico
    var numeroRandomico = generaNumeroRandomico();

    // Verifica se l'utente ha indovinato
    if (guess === numeroRandomico) {
        document.getElementById("result").innerHTML =
            "Congratulazioni, hai vinto!";
        vittorie++;
        document.getElementById("score").innerHTML = "Vittorie: " + vittorie;
    } else {
        document.getElementById("result").innerHTML =
            "Spiacente, hai perso. Il numero era " + numeroRandomico + ".";
    }
}

function reset() {
    vittorie = 0;
    document.getElementById("score").innerHTML = "Vittorie: " + vittorie;
    document.getElementById("result").innerHTML = "";
    document.getElementById("guess").value = "";
}
