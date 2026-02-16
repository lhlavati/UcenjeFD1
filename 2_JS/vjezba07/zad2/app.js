const rezultat = document.getElementById("rezultat");
const untilFound = document.getElementById("until-found-select");

untilFound.addEventListener(
  "beforematch",
  () => {console.log("Prikazan!")}
);

function compareNumbers(a, b){
  return a - b;
}

document.getElementById("zad").addEventListener("click", () => {
    const ozadataku = document.getElementById("zadatak").value;
    switch (ozadataku) {
      case "1":
        alert("Unesite duljinu u polje A i širinu u polje B za izračun površine pravokutnika");
        break;
      case "2":
        alert("Unesite broj u polje A da provjerite je li pozitivan, negativan ili nula.")
        break;
      case "3":
        alert("Unesite vrijednosti (brojeve) niza u polje A odvojene zarezom i bez razmaka!")
        break;
      case "4":
        alert("Unesite ocjene u polje B odvojene zarezom i bez razmaka!\nValjane ocjene su 1,2,3,4 i 5. Svi ostali brojevi/slova se neće uvažiti i izračunati će prosjek valjanih ocjena!")
        break;
      case "5":
        alert("Unesite broj u polje A za ispis Fibonaccijevog niza.")
        break;
      case "6":
        alert("Unesite riječ u polje A za preokret Stringa!")
        break;
      case "7":
        alert("Unesite riječ u polje A i saznajte koliko ta riječ ima samoglasnika!")
        break;
      case "8":
        alert("Unesite temperaturu (broj) u polje A, a u polje B unesite slovo C ili F kako bi odabrali koju pretvorbu želite!\nAko u polju B unesete slovo 'C' - program će pretvoriti unesenu temperaturu u Fahrenheit\nAko u polju B unesete slovo 'F' - program će pretvoriti unesenu temperaturu u Celzijuse")
        break;
      case "9":
        alert("Unesite vrijednosti (brojeve) u niz odvojene zarezom pomoću polja A, program će sortirati niz uzlazno i ispisati sortirani niz.\nNAPOMENA: program će uzeti samo brojeve iz niza i zanemariti će sve ostalo")
        break;
      case "10":
        window.confirm("Klikni OK da se prikaže HTML element matematičkih operacija");
        window.location.href="http://127.0.0.1:5501/2_JS/vjezba07/zad2/index.html#until-found-select"
        break;
      default:
        break;
    }
  });

document.getElementById("izvedi").addEventListener("click", () => {
  rezultat.innerHTML = "";
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  let zadatak = document.getElementById("zadatak").value;
  let operacija = document.getElementById("operacija").value;
  let x,y;
  let brojac = 0;
  let suma = 0;
  let arr = [];

  switch (zadatak) {
    case "1":
      if(!a || !b){
        rezultat.innerHTML = "Polja A i B ne mogu biti prazna!";
        return;
      }
      if(isNaN(Number(a)) || isNaN(Number(b))){
        rezultat.innerHTML = "Molim unos brojeva u polje A i B!";
        return;
      }

      if(a <= 0 || b <= 0){
        rezultat.innerHTML = "Brojevi ne mogu biti 0 ili manji od 0!";
        return;
      }

      rezultat.innerHTML = "Površina pravokutnika je: " + a * b;
      return;
    case "2":
      if(!a){
        rezultat.innerHTML = "Polje A ne može biti prazno!";
        return;
      }
      if(isNaN(Number(a))){
        rezultat.innerHTML = "Molim unos broja u polje A!";
        return;
      }
      
      if(a === 0){
        rezultat.innerHTML = "Broj je 0";
      } else if(a < 0){
        rezultat.innerHTML = "Broj " + a + " je negativan";
      } else {
        rezultat.innerHTML = "Broj " + a + " je pozitivan";
      }
      return;
    case "3":
      x = a.split(',');
      if(!a){
        rezultat.innerHTML = "Polje A ne može biti prazno!";
        return;
      }

      for(let i = 0; i < x.length; i++){
        if(isNaN(x[i])){
          continue;
        }
        suma += Number(x[i]);
      }
      rezultat.innerHTML = "Suma niza je " + suma;

      return;
    case "4":
      let ocjene = [1,2,3,4,5];
      let upisaneOcjene = [];
      y = b.split(',');
      if(!b){
        rezultat.innerHTML = "Polja A i B ne mogu biti prazna!";
        return;
      }

      for(let i = 0; i < y.length; i++){
        if(isNaN(y[i]) || !ocjene.includes(Number(y[i]))){
          continue;
        }
        suma += Number(y[i]);
        upisaneOcjene.push(Number(y[i]));
        brojac++;
      }

      rezultat.innerHTML = "Ocjene: " + upisaneOcjene + "\nProsjek ocjena je: " + suma/brojac;

      return;
    case "5":
      if(!a){
        rezultat.innerHTML = "Polje A ne može biti prazno!";
        return;
      }
      if(isNaN(Number(a))){
        rezultat.innerHTML = "Molim unos broja u polje A!";
        return;
      }
      if(a < 2){
        rezultat.innerHTML = "Molim unos broja većeg od 2!";
        return;
      }

      arr = [0, 1];
      for (let i = 2; i < a; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
      }
      
      rezultat.innerHTML = arr.slice(0, a);

      return;
    case "6":
      if(!a){
        rezultat.innerHTML = "Polje A ne može biti prazno!";
        return;
      }
      
      rezultat.innerHTML = a.split('').reverse().join('');

      return;
    case "7":
      let samoglasnici = ['a', 'e', 'i', 'o', 'u'];
      x = a.split('');
      
      if(!a){
        rezultat.innerHTML = "Polje A ne može biti prazno!";
        return;
      }

      for(let i = 0; i < x.length; i++){
        for(let j = 0; j < samoglasnici.length; j++){
          if(x[i].toLowerCase() === samoglasnici[j]){
            brojac++;
          }
        }
      }

      rezultat.innerHTML = a + " ima " + brojac + " samoglasnika!";
      
      return;
    case "8":
      if(!a || !b){
        rezultat.innerHTML = "Polja A i B ne mogu biti prazna!";
        return;
      }
      if(isNaN(Number(a))){
        rezultat.innerHTML = "Molim unos broja u polje A!";
        return;
      }

      if(b.toUpperCase() === 'C'){
        rezultat.innerHTML = a + "°F = " + (a - 32) * 5/9 + "°C";
      } else if(b.toUpperCase() === 'F') {
        rezultat.innerHTML = a + "°C = " + (a * 1.8) + 32 + "°F";
      } else {
        rezultat.innerHTML = "Polje B mora sadržavati samo slovo C ili F!";
      }

      return;
    case "9":
      x = a.split(',');
      if(!a){
        rezultat.innerHTML = "Polje A ne može biti prazno!";
        return;
      }
      for(let i = 0; i < x.length; i++){
        if(isNaN(x[i])){
          continue;
        }
        arr.push(Number(x[i]));
      }
      
      rezultat.innerHTML = "Početni niz: " + arr + "\nSortirani niz:" + arr.sort(compareNumbers);
      
      return;
    case "10":
      x = Number(a);
      y = Number(b);
      if(!a || !b){
        rezultat.innerHTML = "Polja A i B ne mogu biti prazna!";
        return;
      }
      if(isNaN(x) || isNaN(y)){
        rezultat.innerHTML = "Molim unos brojeva u polje A i B!";
        return;
      }

      switch (operacija) {
        case "+":
          rezultat.innerHTML = "Rezultat zbrajanja = " + (x + y);
          break;
        case "-":
          rezultat.innerHTML = "Rezultat oduzimanja = " + (x - y);
          break;
        case "*":
          rezultat.innerHTML = "Rezultat množenja = " + (x * y);
          break;
        case "/":
          if(y === 0){
            rezultat.innerHTML = "Sa 0 se ne može dijeliti!";
            return;
          }
          rezultat.innerHTML = "Rezultat dijeljenja = " + (x / y);
          break;
        default:
          break;
      }
      return;
  }
});
