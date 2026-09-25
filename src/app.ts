// 1. Model de dades (Interface)
interface ElementLlista {
    nom: string;
    categoria: string;
    valor: number;
    estat: boolean;
}

// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement(): void {
    const inputNom = document.getElementById('iNom') as HTMLInputElement;
    const selectCategoria = document.getElementById('sCategoria') as HTMLSelectElement;
    const inputValor = document.getElementById('iValor') as HTMLInputElement;
    const checkEstat = document.getElementById('cEstat') as HTMLInputElement;

    console.log(inputNom, selectCategoria, inputValor, checkEstat);
    // Actualitzar la pantalla
    actualitzarUI();
}


// 5. Funció per dibuixar l'array al DOM
function actualitzarUI(): void {

}

// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir?.addEventListener('click', afegirElement);
    actualitzarUI();
});