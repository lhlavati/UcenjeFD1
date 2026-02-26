function* brojevniGenerator(){
    console.log("Početak rada generatora");
    yield true; //1. pauza
    yield 2.8; //2. pauza
    yield 3; //3. pauza
    return 'Gotov;'
}

// ovdje se funkcija brojevniGenerator() ne izvršava
const generator = brojevniGenerator();

// sada će se tek krenuti izvoditi funkcija brojevniGenerator()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

let g;
do{
    g = generator.next();
    console.log(g);
}while(!g.done);

function* sljedeciId(){
    let id=1;
    while(true){
        yield `ID_${id++}`;
    }
}

const id = sljedeciId();

console.log(`Sljedeći id: ${id.next().value}`);

for(let i = 0; i < 10; i++){
    console.log(`Sljedeći id: ${id.next().value}`);
}

function* razgovor(){
    let odgovor;
    while(true){
        odgovor = yield 'Kako se zoveš?';
        console.log(`generator kaze: Drago mi je ${odgovor}`);
        
    }
}

const chat = razgovor();

// 1. pokreni generator do 1. yield
let pitanje = chat.next().value;
console.log(pitanje);

// 2. Pošalji Marko i odmah dohvati sljedeće pitanje
pitanje = chat.next('Marko').value;
console.log(pitanje);

console.log(chat.next('Marija').value);

