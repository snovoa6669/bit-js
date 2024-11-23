/*let nombres = "Sergio Alejandro Novoa Rodriguez";
const edad= 34;
//console.log ("Hola, soy " + nombres +  " y tengo"  + " " +edad +" años.")//

// Desafio 2
/*Crear una función llamada presentarme, dentro crear una variable y asignarle
su nombre, crear una constante y asignarle su edad, luego imprimir en consola:
Hola, soy ____ y tengo ____ años.*/

/*function presentarme() {
  let nombre = "Sergio Novoa";
  const edad = 34;
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
}
presentarme();
*/
//Desafio 3
/*Crear una función que reciba un nombre y edad por parámetros, luego imprimir
en consola: Hola, soy ____ y tengo ____ años*/

/*function Desafio3(nombre, edad) {
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
}
Desafio3("Sergio", 34);*/
/*Crear una función que reciba un nombre, un apellido y una edad por parámetros,
la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años,
si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.*/

/*function desafio4(nombre, apellido, edad = 100) {
  console.log(
    "Su nombre es " +
      nombre +
      " " +
      apellido +
      " y usted tiene " +
      edad +
      " años."
  );
}
desafio4("Sergio", "Novoa", 34);
desafio4("Sergio", "Novoa");
/*5. Crear una función que reciba dos párametros, un nombre y un apellido y retorne
el nombre completo, primero el apellido y luego el nombre.*/
/*
function desafio5(nombre, apellido) {
  return apellido + " " + nombre;
}
let nombrecompleto = desafio5("Sergio", "Novoa");
let nombrecompanero = desafio5("Alvaro", "Bahos");
console.log(nombrecompleto, nombrecompanero); */

/*6. Crear una función que reciba cuatro párametros, un nombre, una prenda, un
color y una cantidad y retorne: ____ tiene __ ____ de color ____.
Ej entrada: pepita, camisas, azul, 2
Ej salida: Pepita tiene 2 camisas de color azul.*/
/*
function desafio6(nombre, color, cantidad, prenda_Vestir) {
  return `${nombre} tiene ${cantidad} ${prenda_Vestir} de color ${color}`;
}
let mensaje = desafio6("Pepita", "azul", 2, "camisas");
let mensaje_propio = desafio6("Sergio", "rojo", 6, "busos");
console.log(mensaje);
console.log(mensaje_propio);*/
/*
function desafio7(_nombre = "desconcido") {
  console.log("Hola," + _nombre);
}
desafio7("Sergio");
desafio7();
*/
function suma(numero1, numero2) {
  const resultado = numero1 + numero2;
  console.log(
    numero1 + " " + "+" + " " + " " + numero2 + " " + "=" + resultado
  );
}
suma(8, 4);
function resta(numero1, numero2) {
  const resultado = numero1 - numero2;
  console.log(numero1 + " " + "-" + " " + numero2 + " " + "=" + resultado);
}
resta(8, 4);

function multiplicacion(numero1, numero2) {
  const resultado = numero1 * numero2;
  console.log(numero1 + " " + "*" + " " + numero2 + " " + "=" + resultado);
}
multiplicacion(8, 4);

function division(numero1, numero2) {
  const resultado = numero1 / numero2;
  console.log(numero1 + " " + "/" + " " + numero2 + " " + "=" + resultado);
}
division(8, 4);

function modulo(numero1, numero2) {
  const resultado = numero1 % numero2;
  console.log(numero1 + " " + "%" + " " + numero2 + " " + "=" + resultado);
}
modulo(8, 4);
