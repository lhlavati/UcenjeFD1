const rezultat = document.getElementById("rezultat");
document.getElementById("izvedi").addEventListener("click", () => {
  rezultat.innerHTML = "";
  const a = document.getElementById("a").value;
  const zadatak = document.getElementById("zadatak").value;

  switch (zadatak) {
    case "1":
      // rješavanje 1. zadatak
      if (!a) {
        rezultat.innerHTML = "Polje ne smije biti prazno!";
        return;
      }
      if (a.toLowerCase() == "start") {
        rezultat.innerHTML = "Start programa";
      } else if (a.toLowerCase() == "stop") {
        rezultat.innerHTML = "Stop programa";
      } else if (a.toLowerCase() == "pauza") {
        rezultat.innerHTML = "Pauza programa";
      } else {
        rezultat.innerHTML = "Molim unesite start, stop, pauza";
      }
      // kraj rješavanje 1. zadatak
      break;
    case "2":
      // rješavanje 2. zadatak
      if (!a) {
        rezultat.innerHTML = "Polje ne smije biti prazno!";
        return;
      }

      if (
        a.toUpperCase() == "A" ||
        a.toUpperCase() == "B" ||
        a.toUpperCase() == "C"
      ) {
        rezultat.innerHTML = "Položio";
      } else if (a.toUpperCase() == "D" || a.toUpperCase() == "F") {
        rezultat.innerHTML = "Nije položio";
      } else {
        rezultat.innerHTML = "Molim upisati jedno slovo<br> (A, B, C, D ili F)";
      }
      // kraj rješavanje 2. zadatak
      break;
    case "3":
      // rješavanje 3. zadatak
      const x = Number(a);
      if (!Number.isInteger(x)) {
        rezultat.innerHTML = "Molim upisati broj od 0 - 100";
      }

      // sa switch(true)
      switch (true) {
        case (x >= 0 && x < 50):
          rezultat.innerHTML = "Nedovoljan";
          break;
        case (x >= 50  && x < 65):
          rezultat.innerHTML = "Dovoljan";
          break;
        case (x >= 65  && x < 80):
          rezultat.innerHTML = "Dobar";
          break;
        case (x >= 80  && x < 90):
          rezultat.innerHTML = "Vrlo dobar";
          break;
        case (x >= 90  && x < 101):
          rezultat.innerHTML = "Odličan";
          break;
        default:
          rezultat.innerHTML = 'Molim upisati broj od 0 - 100';
          break;
      }

      // sa IF/ELSE
      // if(x >= 0 && x < 50){
      //   rezultat.innerHTML = 'Nedovoljan';
      // } else if(x >= 50  && x < 65){
      //   rezultat.innerHTML = 'Dovoljan';
      // } else if(x >= 65  && x < 80){
      //   rezultat.innerHTML = 'Dobar';
      // } else if(x >= 80  && x < 90){
      //   rezultat.innerHTML = 'Vrlo dobar';
      // } else if(x >= 90  && x < 101){
      //   rezultat.innerHTML = 'Odličan';
      // } else {
      //   rezultat.innerHTML = 'Molim upisati broj od 0 - 100';
      // }
      // kraj rješavanje 3. zadatak
      break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }
});

// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).
