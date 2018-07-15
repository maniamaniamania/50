console.log("Sprawdź czy Twoja liczba jest większa czy mniejsza od 50!");
const ask = require("readline-sync");

var gramy = true;
while (gramy) {
    var numer = ask.question("Liczba mniejsza czy większa?").trim();
    while ((isNaN(numer) || numer == "")) {
        console.log("Podaj liczbę!");
        numer = ask.question("> ").trim();
    }

    if (numer > 50) console.log("Liczba jest większa od 50");
    else if (numer == 50) console.log("Liczba jest równa 50");
    else if (numer < 50) console.log("Liczba jest mniejsza od 50");

    var odpowiedz = ask.question("Chcesz grac dalej? <tak, nie>: ").trim().toLowerCase();
    while (odpowiedz != "tak" && odpowiedz != "nie") {
        console.log("Tylko TAK lub NIE!");
        odpowiedz = ask.question("Chcesz grac dalej? <tak, nie>: ").trim().toLowerCase();
    }
    if (odpowiedz == "nie")
        gramy = false;
}
