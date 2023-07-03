const Formulario = document.getElementById('Formulario');
const Usuario = document.getElementById('Usuario');
const Email = document.getElementById('Email');
const Edad = document.getElementById('Edad');
const Contraseña = document.getElementById('Contraseña');

Formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(Usuario.value);
  console.log(Email.value);
  console.log(Edad.value);
  console.log(Contraseña.value);
});