// funkcionalne metode - skraćuju kod, standardno se koriste

const korisnici = [
  {
    id: 1,
    ime: "Ana",
    prezime: "Kartek",
    godina: 25,
    admin: false,
  },
  {
    id: 2,
    ime: "Ivan",
    prezime: "Ivić",
    godina: 30,
    admin: true,
  },
  {
    id: 3,
    ime: "Marko",
    prezime: "Marić",
    godina: 70,
    admin: false,
  },
  {
    id: 4,
    ime: "Lea",
    prezime: "Lukić",
    godina: 18,
    admin: true,
  },
  {
    id: 5,
    ime: "Matej",
    prezime: "Mamić",
    godina: 42,
    admin: false,
  },
];

for (let i = 0; i < korisnici.length; i++) {
  console.log(korisnici[i].ime);
}

console.log("******************");

korisnici.forEach((korisnik) => console.log(korisnik.ime));

console.log("******************");

korisnici.forEach((o) => console.log(`${o.ime} ${o.prezime}`));

korisnici.forEach((o) => {
  let poruka = "Poštovan";
  if (o.ime.endsWith("a")) {
    poruka += "a gospođo";
  } else {
    poruka += "i gospodine";
  }
  // poruka += o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine';
  console.log(`${poruka} ${o.ime} ${o.prezime}`);
});

//map ()
const samoImena = korisnici.map((o) => o.ime);
console.log(samoImena);
console.log("******************");

const maliNiz = korisnici.map(({ id, ime, prezime }) => ({
  sifra: id,
  imeOsobe: ime + " " + prezime,
}));

console.log(maliNiz);
console.log("******************");

//find()

const pronaden = korisnici.find((o) => o.id === 3);

console.log(pronaden);

console.log(korisnici.find((o) => o.id === 10)?.ime);

console.log("******************");

//findIndex()

console.log(korisnici.findIndex((o) => o.ime === "Matej"));

console.log("******************");

// filter

console.log(korisnici.filter(o => o.godina > 40));
console.log("******************");

// reduce

console.log(korisnici.reduce((suma, o) => suma + o.godina, 0));
console.log("******************");

// some
const imaAdmin = korisnici.some(o => o.admin);
console.log(imaAdmin ? 'Ima Admin' : 'Nema Admin');

console.log("******************");

// every()
const sviPunoljetni = korisnici.every(o => o.godina >= 18);
console.log(sviPunoljetni ? 'Svi su punoljetni' : 'Nisu svi punoljetni');
console.log("******************");
