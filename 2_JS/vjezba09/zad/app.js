function ucitajBroj(s){
  const b1 = Number(s);

  if(!b1){
    rezultat.innerHTML = 'Uneseni podatak nije broj'
    return false;
  }
  return b1;
}

// function napraviDiv(num){
//   for(let i = 0; i < num; i++){
//   }
// }

const zad = document.getElementById('zadatak');
const boja = document.getElementById('b');

zad.addEventListener('click', () => {
  if(zad.value === '3'){
    boja.type = 'color';
  } else {
    boja.type = 'text';
    boja.value = '';
  }
})

  const zadaci={
    z1:(a,b)=>{
      console.log('Zadatak 1');
      const b1 = ucitajBroj(a);
      if(!b1){
        return;
      }

      const b2 = ucitajBroj(b);
      if(!b2){
        return;
      }

      const razlika = a - b;

      rezultat.innerHTML = razlika < 0 ? razlika * -1 : razlika;

      // if(razlika < 0){
      //   rezultat.innerHTML = razlika * -1;
      // } else {
      //   rezultat.innerHTML = razlika;
      // }

    },
    z2:(a,b)=>{
      console.log('Zadatak 2');
      const b1 = ucitajBroj(a);
      if(!b1){
        return;
      }

      const b2 = ucitajBroj(b);
      if(!b2){
        return;
      }

      const veciBroj = a > b ? a : b;

      rezultat.innerHTML = a === b ? "Brojevi su jednaki!" : "Veći broj je " + veciBroj;
    },
    z3:(a,b)=>{
      console.log('Zadatak 3');
      const a1 = ucitajBroj(a);
      if(!a1){
        return;
      }



    },
    z4:(a,b)=>{
      console.log('Zadatak 4');

    },
    z5:(a,b)=>{
      console.log('Zadatak 5');

    }
    // ovdje dodajemo nove zadatke
  }


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if(!(('z' + zadatak) in zadaci)){
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
