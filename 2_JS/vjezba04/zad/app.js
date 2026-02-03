
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  if (zadatak === '1') {
    console.log('1. zadatak');

    const x = Number(a);
    if(!x) {
      rezultat.innerHTML = 'A nije broj';
      return;
    }

    const y = Number(b);
    if (!y) {
      rezultat.innerHTML = 'B nije broj';
      return;
    }

    if (x>y) {
      rezultat.innerHTML = x;
    } else if(y>x){
      rezultat.innerHTML = y;
    } else {
      rezultat.innerHTML = "Brojevi su jednaki"
    }

    return;
  }

  if (zadatak === '2') {
    console.log('2. zadatak');
    const x = Number(a);
    if(!x) {
      rezultat.innerHTML = 'A nije broj';
      return;
    }

    const y = Number(b);
    if (!y) {
      rezultat.innerHTML = 'B nije broj';
      return;
    }

    const z = Number(c);
    if (!z) {
      rezultat.innerHTML = "C nije broj";
      return;
    }

    if(x < y && x < z){
      rezultat.innerHTML = x;
    } else if (y < x && y < z) {
      rezultat.innerHTML = y;
    } else {
      rezultat.innerHTML = z;
    }

    return;
  }

  if (zadatak === '3') {
    console.log('3. zadatak');
    const x = Number(a);
    if(!x) {
      rezultat.innerHTML = 'A nije broj';
      return;
    }

    const y = Number(b);
    if (!y) {
      rezultat.innerHTML = 'B nije broj';
      return;
    }

    const z = Number(c);
    if (!z) {
      rezultat.innerHTML = "C nije broj";
      return;
    }

    const q = Number(d);
    if (!q) {
      rezultat.innerHTML = "D nije broj";
      return;
    }

    rezultat.innerHTML = x + y + z + q;
    return;
  }

  if (zadatak === '4') {
    
  }
  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



