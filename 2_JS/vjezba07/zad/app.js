
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak
      const a1 = Number(a);
      if(isNaN(a1)){
        rezultat.innerHTML = "Molim upišite broj!"
        return;
      }

      if(a1 < 2 || a1 > 10000000){
        rezultat.innerHTML = "Uneseni broj mora biti izmedju 2 i 10 milijuna"
        return;
      }

      let prim = true;
      // let brojac = 1;
      for (let i = 2; i < a1; i++) {
        // if(brojac++ % 1000 === 0){
        //   console.log(brojac++, a1, '%', i, '=', a1 % i);
        // }
        if(a1 % i === 0){
          prim = false;
          break;
        }
      }

      if(prim){
        rezultat.innerHTML = "Prim";
      } else {
        rezultat.innerHTML = "Nije prim";
      }
      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak

      // uvijek uzimam 1
      // 6 % 2 = 0, uzimam 2
      // 6 % 3 = 0, uzimam 3
      // 6 % 4 = 2, ne uzimam 4
      // 6 % 5 = 1, ne uzimam 5
      // zbrojim sve one koje uzimam(1+2+3) = 6
      // ako je ulaz (6) jednako zbroj (6) radi se o savršenom broju
      const b2 = Number(b);
      if(isNaN(b2) || b2 === 0){
        rezultat.innerHTML = "Molim upišite broj!"
        return;
      }

      if(b2 < 2 || b2 > 1000){
        rezultat.innerHTML = "Uneseni broj mora biti izmedju 2 i 1000"
        return;
      }

      let sum = 0;
      for(let i = 1; i < b2; i++){
        if(b2 % i === 0){
          sum += i;
        }
      }

      rezultat.innerHTML = sum == b2 ? "Broj je savršen!" : "Broj je NIJE savršen!";
      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak
      const b3 = Number(b);
      if(isNaN(b3) || b === ''){
        rezultat.innerHTML = "Molim upišite broj u polje B!"
        return;
      }

      if(b3 < 2 && b3 > 1000) {
        rezultat.innerHTML = "Uneseni broj mora biti izmedju 2 i 1000"
        return;
      }

      let suma = 0;
      strB = b3.toString();

      for(let i = 0; i < strB.length; i++){
        suma += (strB[i] ** 3);
      }

      rezultat.innerHTML = suma == b3 ? "Broj je Armstrongov!" : "Broj je NIJE Armstrongov!";

      // kraj rješavanje 3. zadatak
    break;
    case '4':
      // rješavanje 4. zadatak
      let broj = Number(a);
      if(!a){
        rezultat.innerHTML = "Molim upišite riječ u polje A!";
        return;
      }

      if(!isNaN(broj)){
        rezultat.innerHTML = "Molim upišite riječ, a ne broj u polje A!";
        return;
      }

      let isPalindrom = true;
      let revStr = a.toLowerCase().split('').reverse().join('').replaceAll(' ', '');

      let left = 0;
      let right = revStr.length - 1;

      while(left < right) {
        if(revStr[left] !== revStr[right]){
          isPalindrom = false;
          break;
        }
        left++;
        right--;
      }

      rezultat.innerHTML = isPalindrom ? `${a} JE palindrom` : `${a} NIJE palindrom`;

      // kraj rješavanje 4. zadatak
    break;
    case '5':
      // rješavanje 5. zadatak
      if(!b){
        rezultat.innerHTML = "Molim upišite riječ u polje B!";
        return;
      }

      let postoji = false;

      for(let i = 0; i < stopRijeci.length; i++){
        if (b.toLowerCase() === stopRijeci[i]) {
          postoji = true;
          break;
        }
      }

      rezultat.innerHTML = postoji ? `${b} postoji u nizu stopRijeci` : `${b} NE postoji u nizu stopRijeci`;
      // kraj rješavanje 5. zadatak
    break;
    case '6':
      // rješavanje 6. zadatak
      let spojenStr = a.replaceAll(' ', '');
      console.log(spojenStr);
      
      if(!a){
        rezultat.innerHTML = "Molim upišite riječ u polje A!";
        return;
      }

      let samoglasnici = ['a', 'e', 'i', 'o', 'u'];
      let brojacSamog = 0;

      for(let i = 0; i < spojenStr.length; i++){
        for(let j = 0; j < samoglasnici.length; j++){
          if(spojenStr[i].toLowerCase() === samoglasnici[j]){
            brojacSamog++;
          }
        }
      }

      let brojSugl = spojenStr.length - brojacSamog;

      rezultat.innerHTML = `${a} ima ${brojacSamog} samoglasnika i ${brojSugl} suglasnika!`;

      // kraj rješavanje 6. zadatak
    break;
    case '7':
      // rješavanje 7. zadatak
      let a7 = Number(a);
      let b7 = Number(b);
      let brojevi = '';

      if(!a7 || !b7){
        rezultat.innerHTML = "Polja ne mogu biti prazna!";
        return;
      }

      if(isNaN(a7) || isNaN(b7)){
        rezultat.innerHTML = "Molim upišite broj u polja A i B!";
        return;
      }

      if(a7 === b7){
        rezultat.innerHTML = "Brojevi su jedanki!";
        return;
      }

      while(a7 < b7){
        brojevi += '&nbsp;&nbsp;&nbsp;' + a7++;
      }

      while(a7 >= b7){
        brojevi += '&nbsp;&nbsp;&nbsp;' + b7++;
      }

      rezultat.innerHTML = brojevi;
      
      // kraj rješavanje 7. zadatak
    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }
});
const poveznica = document.getElementById('poveznica');
poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
document.getElementById('zadatak').addEventListener('change', (event) => {
   switch (event.target.value) {
    case '1':
      poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
    break;
    case '2':
      poveznica.href='https://www.enciklopedija.hr/clanak/savrseni-broj';
    break;
    case '3':
      poveznica.href='https://hafura.wordpress.com/2017/09/13/armstrongov-broj-ispitni-zadatak/';
    break;
    case '4':
      poveznica.href='https://www.enciklopedija.hr/clanak/palindrom';
    break;
    case '5':
      poveznica.href='https://www.coursera.org/articles/what-are-stop-words';
    break;
    case '6':
      poveznica.href='https://enciklopedija.hr/clanak/samoglasnik';
    break;
    case '7':
      poveznica.href='https://hjp.znanje.hr/index.php?show=search_by_id&id=d1ZlWhU%3D';
    break;
    default:
      poveznica.href='#';
  }
});



const stopRijeci = [
  'a', 'ako', 'ali', 'bi', 'bih', 'bila', 'bili', 'bilo', 'bio', 'bismo', 
  'biste', 'biti', 'bumo', 'da', 'do', 'duž', 'ga', 'hoće', 'hoćemo', 'hoćete', 
  'hoćeš', 'hoću', 'i', 'iako', 'idemo', 'ideš', 'ide', 'iz', 'iza', 'iznad', 
  'ja', 'jako', 'jer', 'jesmo', 'jeste', 'jesu', 'je', 'kad', 'kada', 'kao', 
  'kroz', 'li', 'me', 'mene', 'meni', 'mi', 'mimo', 'mene', 'moj', 'moja', 
  'moje', 'mu', 'na', 'nad', 'nakon', 'nam', 'nama', 'nas', 'naš', 'naša', 
  'naše', 'našu', 'ne', 'nego', 'neka', 'neki', 'nekog', 'neko', 'nema', 'netko', 
  'neće', 'nećemo', 'nećete', 'nećeš', 'neću', 'ni', 'nije', 'nijedan', 'nikad', 
  'nismo', 'niste', 'nisu', 'njega', 'njegov', 'njegova', 'njegovo', 'njemu', 'njen', 
  'njena', 'njeno', 'njih', 'njihov', 'njihova', 'njihovo', 'njim', 'njima', 'njoj', 
  'nju', 'o', 'od', 'odmah', 'on', 'ona', 'onaj', 'onam', 'onamo', 'one', 
  'oni', 'ono', 'onolika', 'onoliko', 'onoliki', 'onoliku', 'ova', 'ovaj', 'ovdje', 
  'ove', 'ovi', 'ovo', 'ovuda', 'pa', 'pak', 'po', 'pod', 'pored', 'poslije', 
  'povrh', 'preko', 'pri', 'pred', 'prema', 'sa', 'sam', 'samo', 'se', 'sebe', 
  'sebi', 'si', 'smo', 'ste', 'su', 'sve', 'svi', 'svog', 'svoj', 'svoja', 
  'svoje', 'ta', 'taj', 'tako', 'tamo', 'te', 'tebe', 'tebi', 'ti', 'to', 
  'točno', 'u', 'uz', 'vam', 'vama', 'vas', 'vaš', 'vaša', 'vaše', 'već', 
  'vi', 'vrlo', 'za', 'zar', 'će', 'ćemo', 'ćete', 'ćeš', 'ću', 'što', 'the', 
  'and', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 
  'had', 'do', 'does', 'did', 'but', 'if', 'or', 'because', 'as', 'until', 
  'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 
  'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 
  'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 
  'further', 'then', 'once'
];