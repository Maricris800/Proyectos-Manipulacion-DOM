const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Actualizar el texto de los parrafos//
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor (rojo,verde,azul) {
  const colorRGB= `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// para actualizar Red (Rojo)//
inputRojo.addEventListener("change", (e) => {
  let rojo = e.target.value;
  textoRojo.textContent = rojo;
  actualizarColor(rojo,verde, azul);  
});

// para actualizar Green (Verde)//
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo,verde, azul); 
});

// para actualizar Blue (Azul)//
inputAzul.addEventListener("change", (e) => {
  let azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo,verde, azul);  
});






