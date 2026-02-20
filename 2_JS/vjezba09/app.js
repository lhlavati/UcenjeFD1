const isDev=true;

pozdraviSvijet();

function pozdraviSvijet() {
    console.log('Hello World');
}

pozdraviSvijet();

function parniBrojevi(odBroja, doBroja) {

    const max = odBroja > doBroja ? odBroja : doBroja;
    const min = odBroja < doBroja ? odBroja : doBroja;

    for (let i = min; i <= max; i++) {
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

console.log('Prvi poziv');
parniBrojevi(3,8);
console.log('Drugi poziv');
parniBrojevi(59,65);
console.log('Treći poziv');
parniBrojevi(12,7);

function log(poruka){
    if(!isDev){
        return;
    }
    console.log('--------------------');
    console.log(poruka);
    console.log('--------------------');
}

function slucajniBroj(){
    let broj = Math.random();
    log(broj);
    const uvecano = broj * 1000;
    const intb = parseInt(uvecano);
    return intb;
}

console.log();

const sb = slucajniBroj();
log(sb);

console.log((Math.random()*1000).toFixed(0));
console.log((Math.random() * (58-22) + 22).toFixed(0));

function zbrojPrimBrojeva(odBroja, doBroja){
    let suma = 0, prim = true;

    for(let i = odBroja; i <= doBroja; i++){
        prim = true;
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                prim = false;
                break;
            }
        }
        if(prim){
            suma += i;
        }
    }
    return suma;
}

log(zbrojPrimBrojeva(3, 80));

//arrow funkcija
const pozdravArrow = () => console.log('Hello Arrow')

pozdravArrow();

const brojevi= {
    slucajniBroj: () => {
        //tu bi došao kod koji imam u funkciji slucajniBroj
        return 7;
    },
    nula: () => { return 0;}
}

log(brojevi['slucajniBroj']())