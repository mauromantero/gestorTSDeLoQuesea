// 1. Model de dades (Interface)
interface Mascota {
    nom: string;
    // categoria: string;
    valor: number;
    estat: boolean;
}

let numcasa = 0

interface Animals {
    nom: string;
    // categoria: string;
    valor: number;
    estat: boolean;
    alegria: number;
    hambre: number;
    energia: number;
}

//Cream la instància
let animal : Animals;

// Cream una llista d'elements

let ListaAnimals: Animals[] = [];

// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement(): void {
    const inputNom = document.getElementById('iNom') as HTMLInputElement;
    // const selectCategoria = document.getElementById('imatge') as HTMLImageElement;
    const inputValor = document.getElementById('iEdad') as HTMLInputElement;
    const checkEstat = document.getElementById('cVida') as HTMLInputElement;

    animal = {
        nom: inputNom.value,
        // categoria: selectCategoria.value,
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
function actualitzarUI(): void {
    const nom = document.getElementById('nom') as HTMLElement;
    // const categoria = document.getElementById('categoria') as HTMLElement;
    const valor = document.getElementById('valor') as HTMLElement;
    const estat = document.getElementById('estat') as HTMLElement;
    const casas = document.getElementById('casa') as HTMLElement;

    // nom.innerText= animal.nom
    // // categoria.innerText= animal.categoria;
    // valor.innerText=String(animal.valor); // Com que és un número l'hem de passat a text
    // if (animal.estat) {  //animal de com tractar un checkBox de vertader o fals
    //     estat.innerText="Viu"
    //     casas.innerText="Casa" + numcasa
    // }else{
    //     estat.innerText="💀💀💀"
    // }

    const contenidor = document.getElementById('contenedorAnim') as HTMLElement;

    let html = ''
    let id= 0
    let casa = 0

    contenidor.innerHTML= '<h1>Lista Animales</h1>'

    for (let i = 0; i < ListaAnimals.length; i++) {

        if(ListaAnimals[i].estat) {

            id++
            casa++

            html += '<div class=\'casas\' id="+'+ i +'">'

            html += '<h1> Casa' + casa +'</h1>'

            html += '<div class=\'card\'>'
            html += '<div class=\'Animal1\'>'

            html += `<h2 style="font-size: 2.0em ">` + ListaAnimals[i].nom + '</h2>'
            html += '<h3>' + ListaAnimals[i].valor + ' años' + '</h3>'

            html += '<h3> Hambre: ' + ListaAnimals[i].hambre + '</h3>'
            html += '<h3> Energia: ' + ListaAnimals[i].energia + '</h3>'
            html += '<h3> Alegria: ' + ListaAnimals[i].alegria + '</h3>'

            html += '<button class="botonesinfo" id="comer ' + i + '" onclick="Comer('+i+')">Dar de comer</button>'
            html += '<button class="botonesinfo" id="dormir ' + i + '" onclick="Dormir('+i+')">Dormir</button>'
            html += '<button class="botonesinfo" id="trabajar ' + i + '" onclick="Trabajar('+i+')">Trabajar</button>'
            html += '<button class="botonesinfo" id="jugar ' + i + '" onclick="Jugar('+i+' )">Jugar</button>'
            html += '<button class="botonesinfo" id="pasar ' + i + '" onclick="Pasar('+i+')">Pasar 1 casa</button>'

            html += '</div class=\'Animal1\'>'
            html += '</div class=\'card\'>'

            html += '</div class=\'casas\'>'

        }
    }

    contenidor.innerHTML=html

}


// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir?.addEventListener('click', afegirElement);
    numcasa++
    actualitzarUI();
});

function Comer (animal:number){

        if(ListaAnimals[animal].hambre < 100) {
            ListaAnimals[animal].hambre = ListaAnimals[animal].hambre + 30
        }

        if(ListaAnimals[animal].hambre > 100) {
            ListaAnimals[animal].hambre = 100
        }

    actualitzarUI()
}

function Dormir (animal:number){

        if(ListaAnimals[animal].energia < 100) {
            ListaAnimals[animal].energia = ListaAnimals[animal].energia + 40
        }

        if(ListaAnimals[animal].energia > 100) {
            ListaAnimals[animal].energia = 100
        }


    actualitzarUI()
}

function Trabajar (animal:number){

        if(ListaAnimals[animal].energia > 0){
            ListaAnimals[animal].energia = ListaAnimals[animal].energia - 60
        }

        if(ListaAnimals[animal].hambre > 0){
            ListaAnimals[animal].hambre = ListaAnimals[animal].hambre - 40
        }

        if(ListaAnimals[animal].alegria > 0){
            ListaAnimals[animal].alegria = ListaAnimals[animal].alegria - 35
        }

    actualitzarUI()
}

function Pasar(animal:number){
    let auxiliar = ListaAnimals[animal]

    ListaAnimals[animal] = ListaAnimals[animal+1];

    if(ListaAnimals[animal+1] === undefined){
        ListaAnimals[animal] = auxiliar;
    }else{
        ListaAnimals[animal+1]= auxiliar;
    }


    actualitzarUI();
}

function Jugar(animal:number) {
        if(ListaAnimals[animal].alegria < 100){
            ListaAnimals[animal].alegria = ListaAnimals[animal].alegria + 50
        }

        if(ListaAnimals[animal].alegria > 100){
            ListaAnimals[animal].alegria = 100

        }

    actualitzarUI()
}



function Ordenar(){

   ListaAnimals.sort((a, b) => a.nom.localeCompare(b.nom));
   actualitzarUI()

}

function OrdenarFel(){

    ListaAnimals.sort((a, b) => b.alegria - a.alegria);
    actualitzarUI()

}
function OrdenarHam(){

    ListaAnimals.sort((a, b) => a.hambre - b.hambre);
    actualitzarUI()

}