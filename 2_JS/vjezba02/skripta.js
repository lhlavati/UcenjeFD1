const ime = 'Edunova';//prompt("Unesi svoje ime");

console.log(`Dobar dan ${ime}!`);

console.log(typeof ime, ime);

const unosGodina = 28;//prompt('Unesi godinu');

const godina = Number(unosGodina);

console.log(typeof godina, godina);

const unosDecimalniBroj = '3.14';

console.log(parseFloat(unosDecimalniBroj));

const cijeliBroj = parseInt('12');

console.log(typeof cijeliBroj, cijeliBroj);

const logickaVrijednost = true;

console.log(typeof logickaVrijednost, logickaVrijednost);

let broj = 7;

broj = 9;

console.log(typeof broj, broj);

broj = '9';

console.log(typeof broj, broj);

var i = 7;

console.log(typeof i, i);

const velikiCijeliBroj = 123456789n;

console.log(typeof velikiCijeliBroj);

let x;
console.log(typeof x, x);

let y = null;
console.log(typeof y, y);

const osobaObjekt = {
    ime:'Pero',
    godine: 27,
    znaProgramirati: true
};

console.log(typeof osobaObjekt, osobaObjekt);
console.table(osobaObjekt)

const brojevi = [2,3,1,2];
console.log(typeof brojevi, brojevi);

const podaciBackend = [
    {
        ime: 'Ana',
        prezime: 'Anić'
    },
    {
        ime: 'Ivan',
        prezime: 'Ivić'
    }
];

console.table(podaciBackend);

function pozdrav() {
    console.log('Hello iz funkcije');
}

console.log(typeof pozdrav, pozdrav);

const pozdravi = () => console.log('Hello iz funkcije nove');

console.log(typeof pozdravi, pozdravi);

pozdrav();
pozdravi();

const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(typeof id1, id1);

console.log(id1==id2);
console.log(id1===id2);


