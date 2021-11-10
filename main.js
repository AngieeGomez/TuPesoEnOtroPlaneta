var titulo = document.getElementById('titulo');
var botones = document.getElementById('botones');
var tarjeta = document.getElementById('tarjeta');
var volver = document.getElementById('volver');

var g_tierra = 9.8
var g_marte = 3.7;
var g_jupiter = 24.8

function mostrarTarjetaMarte() {
    tarjeta.classList.remove("hide");

    titulo.classList.add("hide");
    botones.classList.add("hide");

    volver.classList.remove("hide");

    tarjeta.innerHTML = `
    <div class="tarjeta">
    <img src="images/marte.png" alt="">
    <h1>Marte</h1>
    <p>Cual Es Tu Peso En KG:</p>
    <input type="number" id="peso">
    <button onclick="calcularPesoMarte()">CALCULAR</button>
    <p id="resultadoPeso"></p>
</div>
    `;
}

function mostrarTarjetaJupiter() {
    tarjeta.classList.remove("hide");

    titulo.classList.add("hide");
    botones.classList.add("hide");

    volver.classList.remove("hide");

    tarjeta.innerHTML = `
    <div class="tarjeta">
    <img src="images/jupiter.png" alt="">
    <h1>Jupiter</h1>
    <p>Cual Es Tu Peso En KG:</p>
    <input type="number" id="peso">
    <button onclick="calcularPesoJupiter()">CALCULAR</button>
    <p id="resultadoPeso"></p>
</div>
    `;
}

function calcularPesoJupiter(){
    var peso = document.getElementById('peso').value;
    var pesoEnJupiter = peso * g_jupiter / g_tierra;
    var resultadoPeso = document.getElementById('resultadoPeso');
    pesoEnJupiter = parseInt(pesoEnJupiter);
    
    resultadoPeso.innerText = `Tu Peso En Jupiter Es ${pesoEnJupiter} KG`;
}

function calcularPesoMarte(){
    var peso = document.getElementById('peso').value;
    var pesoEnMarte = peso * g_marte / g_tierra;
    var resultadoPeso = document.getElementById('resultadoPeso');
    pesoEnMarte = parseInt(pesoEnMarte);
    
    resultadoPeso.innerText = `Tu Peso En Marte Es ${pesoEnMarte} KG`;
}

function inicio(){
    titulo.classList.remove("hide");
    botones.classList.remove("hide");

    volver.classList.add("hide");
    tarjeta.classList.add("hide");
}