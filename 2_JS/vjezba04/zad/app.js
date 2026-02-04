const rezultat = document.getElementById("rezultat");
document.getElementById("izvedi").addEventListener("click", () => {
  rezultat.innerHTML = "";
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  const d = document.getElementById("d").value;
  const zadatak = document.getElementById("zadatak").value;

  if (zadatak === "1") {
    const x = Number(a);
    if (!x) {
      rezultat.innerHTML = "A nije broj";
      return;
    }

    const y = Number(b);
    if (!y) {
      rezultat.innerHTML = "B nije broj";
      return;
    }

    if (x > y) {
      rezultat.innerHTML = x;
    } else if (y > x) {
      rezultat.innerHTML = y;
    } else {
      rezultat.innerHTML = "Brojevi su jednaki";
    }

    return;
  }

  if (zadatak === "2") {
    const x = Number(a);
    if (!x) {
      rezultat.innerHTML = "A nije broj";
      return;
    }

    const y = Number(b);
    if (!y) {
      rezultat.innerHTML = "B nije broj";
      return;
    }

    const z = Number(c);
    if (!z) {
      rezultat.innerHTML = "C nije broj";
      return;
    }

    if (x < y && x < z) {
      rezultat.innerHTML = x;
    } else if (y < x && y < z) {
      rezultat.innerHTML = y;
    } else {
      rezultat.innerHTML = z;
    }

    return;
  }

  if (zadatak === "3") {
    const x = Number(a);
    const y = Number(b);
    const z = Number(c);
    const q = Number(d);

    if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(q)) {
      rezultat.innerHTML = "Molim upišite BROJEVE<br> u sva polja";
      return;
    } else {
      rezultat.innerHTML = x + y + z + q;
      return;
    }
  }

  // 4. zadatak
  // Provjera punoljetnosti:
  // Korisnik unosi godinu rođenja u polje A.
  // Izračunaj njegovu dob u odnosu na tekuću godinu i ispiši je li punoljetan ili nije.

  if (zadatak === "4") {
    const god = Number(a);
    if (!god) {
      rezultat.innerHTML = "Molim upišite GODINU rođenja <br> npr. <u>1998</u>";
      return;
    }

    rezultat.innerHTML = god <= 2008 ? "18🍻" : "🔞";

    return;
  }

  //   [ZADATAK 5]
  //  Pozitivan, negativan ili nula:
  //  Za uneseni broj u polju A ispiši poruku je li on pozitivan, negativan ili je nula.
  if (zadatak === "5") {
    const broj = Number(a);
    if (isNaN(broj)) {
      rezultat.innerHTML = "Molim upišite BROJ";
      return;
    }

    if (broj > 0) {
      rezultat.innerHTML = "Broj je ➕";
      return;
    } else if (broj === 0) {
      rezultat.innerHTML = "Broj je 𝟎";
      return;
    } else {
      rezultat.innerHTML = "Broj je ➖";
      return;
    }
  }

  //  ----------------------------------------------------------------

  //  [ZADATAK 6]
  //  Parnost broja:
  //  Provjeri je li uneseni broj u polju A paran ili neparan koristeći modulo operator (%).
  if (zadatak === "6") {
    const parnost = Number(a);
    if (isNaN(parnost)) {
      rezultat.innerHTML = "Molim upišite BROJ";
      return;
    }

    rezultat.innerHTML =
      parnost % 2 == 0
        ? "Broj <strong style='color: green;'>JE</strong> paran"
        : "Broj <strong style='color: red;'>NIJE</strong> paran";

    return;
  }

  //  ----------------------------------------------------------------

  //  [ZADATAK 7]
  //  Ocjenjivanje:
  //  Na temelju unesenog broja bodova (0-100) u polje A, ispiši ocjenu:
  //  90-100: Odličan, 80-89: Vrlo dobar, 70-79: Dobar, 60-69: Dovoljan, <60: Nedovoljan.
  if (zadatak === "7") {
    const ocjena = Number(a);
    if (isNaN(ocjena)) {
      rezultat.innerHTML = "Molim upišite BROJ";
      return;
    }

    if (ocjena >= 90 && ocjena <= 100) {
      rezultat.innerHTML = "Odličan 5️⃣";
      return;
    } else if (ocjena >= 80 && ocjena < 90) {
      rezultat.innerHTML = "Vrlo dobar 4️⃣";
      return;
    } else if (ocjena >= 70 && ocjena < 80) {
      rezultat.innerHTML = "Dobar 3️⃣";
      return;
    } else if (ocjena >= 60 && ocjena < 70) {
      rezultat.innerHTML = "Dovoljan 2️⃣";
      return;
    } else if (ocjena >= 0 && ocjena < 60) {
      rezultat.innerHTML = "Nedovoljan 1️⃣";
      return;
    } else {
      rezultat.innerHTML = "Molim upišite broj bodova između 0 - 100";
      return;
    }
  }

  //  ----------------------------------------------------------------

  //  [ZADATAK 8]
  //  Djeljivost:
  //  Provjeri je li broj u polju A djeljiv s brojem u polju B bez ostatka.
  //  Ispiši "Djeljiv je" ili "Nije djeljiv".
  if (zadatak === "8") {
    const x = Number(a);
    const y = Number(b);

    if (y == 0) {
      rezultat.innerHTML = "Ne može se djeliti s 0!";
      return;
    }

    if (isNaN(x) || isNaN(y)) {
      rezultat.innerHTML = "Molim upišite BROJ<br> u polja A i B";
      return;
    }

    if (x % y == 0) {
      rezultat.innerHTML = "Djeljiv je!";
      return;
    } else {
      rezultat.innerHTML = "Nije djeljiv!";
      return;
    }
  }

  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});
