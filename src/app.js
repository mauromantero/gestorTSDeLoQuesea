"use strict";
// 2. Estat de l'aplicació (Array global)
let llistaElements = [];
// 3. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement() {
    const inputNom = document.getElementById('iNom');
    const selectCategoria = document.getElementById('sCategoria');
    const inputValor = document.getElementById('iValor');
    const checkEstat = document.getElementById('cEstat');
    // Validació bàsica
    if (inputNom.value.trim() === '') {
        alert('Escriu un nom abans d\'afegir!');
        return;
    }
    // Crear l'objecte
    const nouElement = {
        nom: inputNom.value,
        categoria: selectCategoria.value,
        valor: Number(inputValor.value),
        estat: checkEstat.checked
    };
    // Afegir-lo a l'array
    llistaElements.push(nouElement);
    // Netejar el formulari
    inputNom.value = '';
    inputValor.value = '0';
    checkEstat.checked = false;
    // Actualitzar la pantalla
    actualitzarUI();
}
// 4. Funció per esborrar un element per la seva posició de l'array
function esborrarElement(index) {
    llistaElements.splice(index, 1);
    actualitzarUI();
}
// 5. Funció per dibuixar l'array al DOM
function actualitzarUI() {
    const contenidor = document.getElementById('llistaContenidor');
    const totalSpan = document.getElementById('totalElements');
    // Netejem el contingut anterior
    contenidor.innerHTML = '';
    // Actualitzem el comptador total
    totalSpan.innerText = llistaElements.length.toString();
    // Recorrem l'array i creem els elements HTML
    llistaElements.forEach((element, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-card';
        itemDiv.innerHTML = `
      <div class="item-info">
        <strong>${element.nom}</strong> [${element.categoria}]
        <p>Valor: ${element.valor} | ${element.estat ? '✅ Actiu' : '❌ Inactiu'}</p>
      </div>
    `;
        // Botó per eliminar l'element
        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btn-esborrar';
        btnEliminar.innerText = 'Eliminar';
        btnEliminar.onclick = () => esborrarElement(index);
        itemDiv.appendChild(btnEliminar);
        contenidor.appendChild(itemDiv);
    });
}
// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir === null || btnAfegir === void 0 ? void 0 : btnAfegir.addEventListener('click', afegirElement);
    // Renderitzat inicial
    actualitzarUI();
});
