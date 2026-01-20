const slike = [
    {
        url: "../img/galerija/planina.jpg",
        naslov: "Planinski krajolici"
    },
    {
        url: "../img/galerija/litica.jpg",
        naslov: "Pogled sa litice"
    },
    {
        url: "../img/galerija/jezero.jpg",
        naslov: "Jezero"
    },
    {
        url: "../img/galerija/rijeka.jpg",
        naslov: "Rijeka"
    }
];

let index = 0;

const slika = document.getElementById('prikazana-slika');
const naslov = document.getElementById('naslov-slike');
const brojac = document.getElementById('brojac');
const gumbPrethodna = document.getElementById('prethodna');
const gumbSljedeca = document.getElementById('sljedeca');

function osvjeziGaleriju() {
    const trenutna = slike[index];
    slika.src = trenutna.url;
    naslov.textContent = trenutna.naslov;
    brojac.textContent = `Slika ${index + 1} od ${slike.length}`;
}

gumbSljedeca.addEventListener('click', () => {
    index++;
    if (index >= slike.length) {
        index = 0;
    }
    osvjeziGaleriju();
});

gumbPrethodna.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slike.length - 1;
    }
    osvjeziGaleriju();
});

osvjeziGaleriju();