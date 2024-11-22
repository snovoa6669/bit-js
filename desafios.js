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

function desafio4(nombre, apellido, edad = 100) {
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
