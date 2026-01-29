const a = 2;
const b = 3;

let rez = a + b;
console.log(rez);

console.log(9%2);
console.log(10%2);


console.log(1000 % 100 === 0);

rez = rez + 2;
console.log(rez);

rez += 2;
console.log(rez);

rez -= 5;
console.log(rez);

const x = 2;
rez += x;
console.log(rez);

rez += 1;
console.log(rez);

rez++;
console.log(rez);

console.log(rez++);
console.log(++rez);
console.log(--rez);
console.log(rez--);
console.log(rez);

console.log(5 == 5);
console.log('5' == 5);
console.log(3 == 7);

console.log('Osijek' === 'Osijek');
console.log(5 === '5');

console.log(4 != 3);
console.log('4' != 4);

let godine = 18;
console.log(godine>18);
console.log(godine >= 18);

godine = 21;
console.log(godine<21);
console.log(godine <= 21);

const i1 = 5 == '5';
const i2 = 7 > 9;

console.log(i1 && i2);

console.log(i1 || i2);

console.log(!i1);

const poruka = godine >= 18 ? 'Punoljetan' : 'Maloljetan';
console.log(poruka);

const skola = 'Edunova';
console.log('Najbolja škola je ' + skola);
console.log(`Najbolja škola je ${skola}`);

const razred = 5;
console.log('Idem u ' + razred + '. razred');
console.log(`Idem u ${razred}. razred`);

const niz = [2,2,3,3];
console.log(niz);
const noviNiz = [1, ...niz, 4];
console.log(noviNiz);

const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
};

console.log(osoba);
const polaznik = {
    ...osoba,
    edukacija: 'Frontend'
}

console.log(polaznik);

const [prvi, drugi] = [1, 2];

console.log(prvi);
console.log(drugi);

const {prezime, ...objektBezPrezimena} = polaznik;
console.log(objektBezPrezimena);
console.log(prezime);

//nullish coalescing operator (??)
let sifra = null;
console.log(sifra ?? 'Šifra nije postavljena');

const korisnik = {
    adresa: {
        grad: "Osijek"
    }
};

console.log(korisnik.adresa.grad);
console.log(korisnik.adresa.ulica);
console.log(korisnik?.adresa?.ulica);

console.log([3,4,5] instanceof Array);

console.log("prezime" in osoba);
console.log("prezime" in objektBezPrezimena);




