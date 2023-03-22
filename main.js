const cancha = document.getElementById("equipo");
const canchaSelector = document.getElementById("cancha-selector");
const selectorBody = document.getElementById("selector-body");
const selectorHeader = document.getElementById("selector-header");
const selector = document.getElementById("selector");
const mostrarEquipo = document.getElementById("mostrarEquipo");

class Jugador{
    constructor(id, nombre, apellido, posicion, url){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.posicion = posicion;
        this.url = url;
    }
}

const posiciones = ["POR", "LD", "DFCd", "DFCi", "LI", "MCd", "MCi","MCD", "ED", "DC", "EI"];
let ids = [];
let jugadores = [];

//ED
const messi = new Jugador(1, "Lionel", "Messi", "ED", "./img/messi.png");
const salah = new Jugador(2, "Mohamed", "Salah", "ED", "./img/salah.png");
const mahrez = new Jugador(3, "Riyad", "Mahrez", "ED", "./img/mahrez.png");
const dimaria = new Jugador(4, "Angel", "Di Maria", "ED", "./img/dimaria.png");
const raphinha = new Jugador(5, "-", "Raphinha", "ED", "./img/raphinha.png");

//DC
const cristiano = new Jugador(6, "Cristiano", "Ronaldo", "DC", "./img/ronaldo.png");
const benzema = new Jugador(7, "Karim", "Benzema", "DC", "./img/benzema.png");
const mbappe = new Jugador(8, "Kylian", "Mbappé", "DC", "./img/mbappe.png");
const lewandowski = new Jugador(9, "Robert", "Lewandowski", "DC", "./img/lewandowski.png");
const haaland = new Jugador(10, "Erling", "Haaland", "DC", "./img/haaland.png");
//EI
const neymar = new Jugador(11, "-", "Neymar Jr.", "EI", "./img/neymar.png");
const son = new Jugador(12, "Heung-Min", "Son", "EI", "./img/son.png");
const mane = new Jugador(13, "Sadio", "Mané", "EI", "./img/mane.png");
const vinicius = new Jugador(14, "-", "Vinicius Jr.", "EI", "./img/vinicius.png");
const coman = new Jugador(15, "Kingsley", "Koman", "EI", "./img/coman.png");

//MCD
const kimmich = new Jugador(16, "Joshua", "Kimmich", "MCD", "./img/kimmich.png");
const casemiro = new Jugador(17, "-", "Casemiro", "MCD", "./img/casemiro.png");
const kante = new Jugador(18, "N'Golo", "Kanté", "MCD", "./img/kante.png");
const fabinho = new Jugador(19, "-", "Fabinho", "MCD", "./img/fabinho.png");
const rodri = new Jugador(20, "-", "Rodri", "MCD", "./img/rodri.png");

//MC
const debruyne = new Jugador(21, "Kevin", "De Bruyne", "volante", "./img/debruyne.png");
const kroos = new Jugador(22, "Toni", "Kroos", "volante", "./img/kroos.png");
const verratti = new Jugador(23, "Marco", "Verratii", "volante", "./img/verratti.png");
const modric = new Jugador(24, "Luka", "Modric", "volante", "./img/modric.png");
const valverde = new Jugador(25, "Federico", "Valverde", "volante", "./img/valverde.png");
const pedri = new Jugador(26, "-", "Pedri", "volante", "./img/pedri.png");
const thiago = new Jugador(27, "Thiago", "Alcantara", "volante", "./img/thiago.png");
const bruno = new Jugador(28, "Bruno", "Fernandes", "volante", "./img/bruno.png");
const bernardo = new Jugador(29, "Bernardo", "Silva", "volante", "./img/bernardo.png");
const goretzka = new Jugador(30, "Leon", "Goretzka", "volante", "./img/goretzka.png");

//LI
const ferlandMendy= new Jugador(31, "Ferland", "Mendy", "LI", "./img/ferland.png");
const davies = new Jugador(32, "Alphonso", "Davies", "LI", "./img/davies.png");
const theo = new Jugador(33, "Theo", "Hernández", "LI", "./img/theo.png");
const robertson = new Jugador(34, "Andrew", "Robertson", "LI", "./img/robertson.png");
const cancelo = new Jugador(35, "Joao", "Cancelo", "LI", "./img/cancelo.png");

//LD
const arnold = new Jugador(36, "Trent", "Alexander-Arnold", "LD", "./img/arnold.png");
const hakimi = new Jugador(37, "Achraf", "Hakimi", "LD", "./img/hakimi.png");
const trippier = new Jugador(38, "Kieran", "Trippier", "LD", "./img/trippier.png");
const carvajal = new Jugador(39, "Daniel", "Carvajal", "LD", "./img/carvajal.png");
const walker = new Jugador(40, "Kyle", "Walker", "LD", "./img/walker.png");

//DFC
const marquinhos = new Jugador(41, "-", "Marquinhos", "central", "./img/marquinhos.png");
const alaba = new Jugador(42, "David", "Alaba", "central", "./img/alaba.png");
const araujo = new Jugador(43, "Ronald", "Araujo", "central", "./img/araujo.png");
const dias = new Jugador(44, "Ruben", "Dias", "central", "./img/dias.png");
const rudiger = new Jugador(45, "Antonio", "Rüdiger", "central", "./img/rudiger.png");
const silva = new Jugador(46, "Thiago", "Silva", "central", "./img/silva.png");
const laporte = new Jugador(47, "Aymeric", "Laporte", "central", "./img/laporte.png");
const vandijk = new Jugador(48, "Virgil", "Van Dijk", "central", "./img/vandijk.png");
const deligt = new Jugador(49, "Matthijs", "De Ligt", "central", "./img/deligt.png");
const koulibaly = new Jugador(50, "Kalidou", "Koulibaly", "central", "./img/koulibaly.png");

//POR
const courtois = new Jugador(51, "Thibaut", "Courtois", "POR", "./img/courtois.png");
const oblak = new Jugador(52, "Jan", "Oblak", "POR", "./img/oblak.png");
const ederson = new Jugador(53, "Ederson", "Moraes", "POR", "./img/ederson.png");
const alisson = new Jugador(54, "Alisson", "Becker", "POR", "./img/alisson.png");
const neuer = new Jugador(55, "Manuel", "Neuer", "POR", "./img/neuer.png");


const arrayJugadores = [
    {posicion: "POR", jugadores: [courtois, neuer, alisson, oblak, ederson]},
    {posicion: "DFCd", jugadores: [koulibaly, silva, rudiger, alaba, marquinhos, araujo, vandijk, deligt, laporte, dias]},
    {posicion: "DFCi", jugadores: [koulibaly, silva, rudiger, alaba, marquinhos, araujo, vandijk, deligt, laporte, dias]},
    {posicion: "LD", jugadores: [arnold, hakimi, trippier, walker, carvajal]},
    {posicion: "LI", jugadores: [ferlandMendy, davies, theo, robertson, cancelo]},
    {posicion: "MCD", jugadores: [kimmich, casemiro, kante, fabinho, rodri]},
    {posicion: "MCd", jugadores: [debruyne, kroos, modric, bernardo, verratti, valverde, pedri, goretzka, bruno, thiago]},
    {posicion: "MCi", jugadores: [debruyne, kroos, modric, bernardo, verratti, valverde, pedri, goretzka, bruno, thiago]},
    {posicion: "ED", jugadores: [messi, salah, mahrez, dimaria, raphinha]},
    {posicion: "EI", jugadores: [neymar, son, mane, vinicius, coman]},
    {posicion: "DC", jugadores: [cristiano, benzema, haaland, mbappe, lewandowski]}

]

mostrarEquipo.addEventListener("mouseover", () => {
    verEquipo()
})

mostrarEquipo.addEventListener("mouseout", () => {
    ocultarEquipo()
})

const verEquipo = () => {
    selector.style.display = "none";
    cancha.style.filter = "none";
}

const ocultarEquipo = () => {
    selector.style.display = "flex";
    cancha.style.filter = "blur(2.5px)";
}

const crearCancha = () => {
    cancha.innerHTML = "";

    posiciones.forEach(posicion => {
        const carta = document.createElement("div");
        carta.setAttribute("id", posicion);
        carta.innerHTML = `
                        <div class = "carta">
                            <button id = "boton${posicion}" class = "botonJugador"><img src="./img/draft_card.png" alt="" class="carta-draft"></button>
                            <div class = "circuloPosicion">${posicion}</div>
                        </div>
                    `
        cancha.appendChild(carta);

        const boton = document.getElementById(`boton${posicion}`);
        
        boton.addEventListener("click", () => {
            canchaSelector.style.display = "flex";
            cancha.style.filter = "blur(2.5px)";
            crearSelector(posicion, arrayJugadores);
        })
    })
}


const crearSelector = (posicion, arrayJugadores) => {
    let arrayPosicion = arrayJugadores.find((i) => i.posicion === posicion).jugadores;
    selectorHeader.innerHTML = `
                                <img src="./img/ojo.png" alt="" id="ojo">
                                <h2>ELIGE UN JUGADOR</h2>
    `

    selectorBody.innerHTML = "";
    
    ids = [];

    let tiempo = 750;

    for(let i = 0; i < 5; i++){
        const carta = document.createElement("div");
        carta.classList.add("divCarta")
        carta.setAttribute("id", `carta-${i}`);
        carta.innerHTML = `<img src = "./img/draft_card.png" class = "carta-draft">`
        selectorBody.appendChild(carta);
        const divCarta = document.getElementById(`carta-${i}`);
        
        let r;

        do {
            r = Math.floor(Math.random() * arrayPosicion.length)
        } while (ids.indexOf(arrayPosicion[r].id) != -1 || jugadores.indexOf(arrayPosicion[r]) != -1);

        ids.push(arrayPosicion[r].id);

        setTimeout(() => {
            divCarta.innerHTML = "";
            const boton = document.createElement("button");
            boton.setAttribute("id", `jugador-${i}`);
            boton.innerHTML = `<img src = "${arrayPosicion[r].url}" class = "imagenJugador">`;
            divCarta.appendChild(boton)

            const jugador = document.getElementById(`jugador-${i}`);
            jugador.addEventListener("click", () => {
                canchaSelector.style.display = "none";
                cancha.style.filter = "none";
                jugadores.push(arrayPosicion[r]);
                agregarJugador(posicion, arrayPosicion[r].url, arrayPosicion[r].apellido);
                pepe = true;
            })
        }, tiempo);
        
        tiempo += 750;
    }
}


const agregarJugador = (posicion, url, apellido) => {
    const lugar = document.getElementById(posicion);
    lugar.innerHTML = "";
    lugar.innerHTML = `<div class = "jugador">
                            <img src = "${url}" class = "imagenJugador">
                            <div class = "info-jugador">${apellido}</div>
                        </div>
                    `;
}

crearCancha(arrayJugadores);


