function eingabe(zeichen) {
    const anzeige = document.getElementById("anzeige");

    if (anzeige.value === "0" || anzeige.value === "Fehler") {
        anzeige.value = zeichen;
    } else {
        anzeige.value += zeichen;
    }
}

function loeschen() {
    document.getElementById("anzeige").value = "";
}

function berechne() {
    const anzeige = document.getElementById("anzeige");

    try {
        anzeige.value = eval(anzeige.value);
    } catch (error) {
        anzeige.value = "Fehler";
    }
}