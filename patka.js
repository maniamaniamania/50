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


    const odpowiedz = ask.question("Chcesz grac dalej? <tak, nie>: ").trim().toLowerCase();
    while (true) {
        if (odpowiedz == "nie")
            gramy = false;
        else if (odpowiedz != "tak") {
            console.log("Możesz wybrać tylko odpowiedź tak lub nie");
            const odpowiedz = ask.question("Chcesz grac dalej? <tak, nie>: ").trim().toLowerCase();
        }
    }

}
