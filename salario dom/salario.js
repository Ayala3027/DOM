/* const body = document.getElementById('body');
const btnCrear = document.getElementById('body');

btnCrear.addEventListener('click', () => {
  const main = document.createElement('main');
  const imagen = document.createElement('img');
  const titulo = document.createElement('h2');
  titulo.textContent = 'Parrafo desde JavaScript';
  main.append(imagen,titulo);
  body.append(main);
}); */

const body = document.getElementById("body");
const enviar = document.getElementById("enviar");

enviar.addEventListener('click', () => {
  const containers = document.createElement('section');
  const titulo = document.createElement('h2');
  const resultado = document.createElement('p');
  const imagen = document.createElement('img');
containers.classList.add('section');
  const nombre = document.getElementById("nombre");
  const horas = document.getElementById("horas");
  const salario = document.getElementById("salario");
  imagen.src = 'https://thumbs.dreamstime.com/b/icono-del-aumento-salarial-empleado-en-el-fondo-blanco-con-la-gente-flecha-encima-gr%C3%A1fico-y-s%C3%ADmbolo-dinero-d%C3%B3lar-negocio-de-los-152599647.jpg';
  titulo.textContent = nombre.value;
  resultado.textContent = 'salario: '+ parseFloat(horas.value)* parseFloat(salario.value);
  containers.append(titulo, resultado, imagen);
  body.append(containers);

});