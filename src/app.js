"use strict";
let numcasa = 0;
//Cream la instància
let animal;
// Cream una llista d'elements
let ListaAnimals = [];
// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement() {
    const inputNom = document.getElementById('iNom');
    const selectCategoria = document.getElementById('imatge');
    const inputValor = document.getElementById('iEdad');
    const checkEstat = document.getElementById('cVida');
    animal = {
        nom: inputNom.value,
        categoria: selectCategoria.value,
        valor: parseFloat(inputValor.value) || 0, // Com que era un input de tipus numèric, passam el text (string) a un número. Si no han escrit res posarà un 0
        estat: checkEstat.checked, // El  valor serà true o false
        alegria: 100,
        hambre: 100,
        energia: 100,
    };
    ListaAnimals.push(animal);
    console.table(ListaAnimals);
    console.log(animal); // Per comprovar que s'ha desat bé
    // Cridam a actualitzar la pantalla
    actualitzarUI();
}
// 5. Funció per dibuixar l'array al DOM
function actualitzarUI() {
    const nom = document.getElementById('nom');
    // const categoria = document.getElementById('categoria') as HTMLElement;
    const valor = document.getElementById('valor');
    const estat = document.getElementById('estat');
    const casas = document.getElementById('casa');
    // nom.innerText= animal.nom
    // // categoria.innerText= animal.categoria;
    // valor.innerText=String(animal.valor); // Com que és un número l'hem de passat a text
    // if (animal.estat) {  //animal de com tractar un checkBox de vertader o fals
    //     estat.innerText="Viu"
    //     casas.innerText="Casa" + numcasa
    // }else{
    //     estat.innerText="💀💀💀"
    // }
    const contenidor = document.getElementById('contenedorAnim');
    let html = '';
    let id = 0;
    let casa = 0;
    contenidor.innerHTML = '<h1>Lista Animales</h1>';
    for (let i = 0; i < ListaAnimals.length; i++) {
        if (ListaAnimals[i].estat) {
            id++;
            casa++;
            html += '<div class=\'casas\' id="+' + i + '">';
            html += '<h1> Casa' + casa + '</h1>';
            html += '<div class=\'card\'>';
            html += '<div class=\'Animal1\'>';
            if (ListaAnimals[i].categoria === 'Opción Z') {
                html += `<img id="estatImg" src="img/Ricky.jpeg" alt="Ricky" width="250" height="250" >`;
            }
            else if (ListaAnimals[i].categoria === 'Opción A') {
                html += `<img id="estatImg" src="img/Comonga.webp" alt="So cute" width="250" height="250" >`;
            }
            else if (ListaAnimals[i].categoria === 'Opción B') {
                html += `<img id="estatImg" src="img/Verity.webp" alt="So cute" width="250" height="250" >`;
            }
            else if (ListaAnimals[i].categoria === 'Opción C') {
                html += `<img id="estatImg" src="img/spiderman.jpg" alt="So cute" width="250" height="250" >`;
            }
            html += `<h2 style="font-size: 2.0em ">` + ListaAnimals[i].nom + '</h2>';
            html += '<h3>' + ListaAnimals[i].valor + ' años' + '</h3>';
            html += '<h3> Hambre: ' + ListaAnimals[i].hambre.toFixed(0) + '</h3>';
            html += '<h3> Energia: ' + ListaAnimals[i].energia.toFixed(0) + '</h3>';
            html += '<h3> Alegria: ' + ListaAnimals[i].alegria.toFixed(0) + '</h3>';
            html += '<button class="botonesinfo" id="comer ' + i + '" onclick="Comer(' + i + ')">Dar de comer</button>';
            html += '<button class="botonesinfo" id="dormir ' + i + '" onclick="Dormir(' + i + ')">Dormir</button>';
            html += '<button class="botonesinfo" id="trabajar ' + i + '" onclick="Trabajar(' + i + ')">Trabajar</button>';
            html += '<button class="botonesinfo" id="jugar ' + i + '" onclick="Jugar(' + i + ' )">Jugar</button>';
            html += '<button class="botonesinfo" id="pasar ' + i + '" onclick="Pasar(' + i + ')">Pasar 1 casa</button>';
            html += '</div class=\'Animal1\'>';
            html += '</div class=\'card\'>';
            html += '</div class=\'casas\'>';
        }
    }
    contenidor.innerHTML = html;
}
// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir === null || btnAfegir === void 0 ? void 0 : btnAfegir.addEventListener('click', afegirElement);
    numcasa++;
    actualitzarUI();
});
function Comer(animal) {
    if (ListaAnimals[animal].hambre < 100) {
        ListaAnimals[animal].hambre = ListaAnimals[animal].hambre * 1.4;
    }
    if (ListaAnimals[animal].hambre > 100) {
        ListaAnimals[animal].hambre = 100;
    }
    actualitzarUI();
}
function Dormir(animal) {
    if (ListaAnimals[animal].energia < 100) {
        ListaAnimals[animal].energia = ListaAnimals[animal].energia * 1.6;
    }
    if (ListaAnimals[animal].energia > 100) {
        ListaAnimals[animal].energia = 100;
    }
    actualitzarUI();
}
function Trabajar(animal) {
    if (ListaAnimals[animal].energia > 0) {
        ListaAnimals[animal].energia = ListaAnimals[animal].energia * 0.6;
    }
    else {
        ListaAnimals[animal].energia = 0;
    }
    if (ListaAnimals[animal].hambre > 0) {
        ListaAnimals[animal].hambre = ListaAnimals[animal].hambre * 0.3;
    }
    else {
        ListaAnimals[animal].hambre = 0;
    }
    if (ListaAnimals[animal].alegria > 0) {
        ListaAnimals[animal].alegria = ListaAnimals[animal].alegria * 0.65;
    }
    else {
        ListaAnimals[animal].alegria = 0;
    }
    actualitzarUI();
}
function Pasar(animal) {
    let auxiliar = ListaAnimals[animal];
    ListaAnimals[animal] = ListaAnimals[animal + 1];
    if (ListaAnimals[animal + 1] === undefined) {
        ListaAnimals[animal] = auxiliar;
    }
    else {
        ListaAnimals[animal + 1] = auxiliar;
    }
    actualitzarUI();
}
function Jugar(animal) {
    if (ListaAnimals[animal].alegria < 100) {
        ListaAnimals[animal].alegria = ListaAnimals[animal].alegria * 1.5;
    }
    if (ListaAnimals[animal].alegria > 100) {
        ListaAnimals[animal].alegria = 100;
    }
    actualitzarUI();
}
function Ordenar() {
    ListaAnimals.sort((a, b) => a.nom.localeCompare(b.nom));
    actualitzarUI();
}
function OrdenarFel() {
    ListaAnimals.sort((a, b) => b.alegria - a.alegria);
    actualitzarUI();
}
function OrdenarHam() {
    ListaAnimals.sort((a, b) => a.hambre - b.hambre);
    actualitzarUI();
}
function OrdenarEdad() {
    ListaAnimals.sort((a, b) => b.valor - a.valor);
    actualitzarUI();
}
