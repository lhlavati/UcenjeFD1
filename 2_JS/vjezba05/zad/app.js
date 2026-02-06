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
      switch(a.toLowerCase()){
        case "start":
          rezultat.innerHTML = "Start programa";
          break;
        case "stop":
          rezultat.innerHTML = "Stop programa";
          break;
        case "pause":
          rezultat.innerHTML = "Pauza programa"
          break;
        default:
          rezultat.innerHTML = "Molim unesite start, stop ili pauza"
          break;
      }
      // kraj rješavanje 1. zadatak
      break;
    case "2":
      // rješavanje 2. zadatak
      if (!a) {
        rezultat.innerHTML = "Polje ne smije biti prazno!";
        return;
      }

      switch(a.toUpperCase()){
        case "A":
        case "B":
        case "C":
          rezultat.innerHTML = "Položio";
          break;
        case "D":
        case "F":
          rezultat.innerHTML = "Nije položio";
          break;
        default:
          rezultat.innerHTML = "Molim upisati jednu ocjenu<br> (A, B, C, D ili F)";
          break;
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
      // kraj rješavanje 3. zadatak
      break;
    case "4":
      const y = parseFloat(a);
      if(!y){
        rezultat.innerHTML = 'Niste unjeli dobru vrijednost'
        return;
      }
      const cijeliBroj = parseInt(a);
      rezultat.innerHTML = ((y - cijeliBroj) * 100);

      break;
    case "5":
      const z = Number(a);
      if(!z){
        rezultat.innerHTML = 'Niste unijeli broj';
      return;
      }
      if(z % 2 === 0){
        rezultat.innerHTML = 'Paran'
      } else {
        rezultat.innerHTML = 'Neparan'
      }
      break;
    case "6":
      if(!a){
        rezultat.innerHTML = "Polje mora biti ispunjeno";
        return;
      }

      switch (a.toLowerCase) {
        case 'jabuka':
        case 'kruska':
        case 'banana':
          rezultat.innerHTML = 'Voće je!';
          break;
        default:
          rezultat.innerHTML = 'Nije na našoj listi voća'
          break;
      }

      break;
    case "7":
      if(!a){
        rezultat.innerHTML = "Polje mora biti ispunjeno"
      }

      rezultat.innerHTML = a.length

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

// 4. Za uneseni decimalni broj ispiši samo decimalni dio