alert('Hola mundo');

let nombre = 'Matias';
let altura = 1.7;
let concatenar = nombre + '' + altura;

let datos = document.getElementById('datos');
datos.innerHTML = `
    <h2>Datos personales</h2>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mido: ${altura} cm</h3>
`;
// Condicionales
if (altura >= 1.8) {
  datos.innerHTML += '<h3>Alto</h3>';
} else {
  datos.innerHTML += '<h3>Bajo</h3>';
}
// Bucles
for (let i = 2023; i <= 2025; i++) {
  datos.innerHTML += `<h4>Estamos en el año: ${i}</h4>`;
}

function MuestraMiNombre(nombre, altura) {
  let datos = `
        <h2>Datos personales</h2>
        <h3>Mi nombre es: ${nombre}</h3>
        <h3>Mido: ${altura} cm</h3>
    `;
  return datos;
}

function imprimir() {
  let datos = document.getElementById('datos');
  datos.innerHTML = MuestraMiNombre('Matias', 1.7);
}
imprimir();

let nombres = ['Matias', 'Juan', 'Carlos', 'Karla', 'Maria'];
document.write('<h1>Listado de nombres</h1>');
nombres.forEach((elemento) => {
  datos.innerHTML += `<h4>${elemento}</h4>`;
});
