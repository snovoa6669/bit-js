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

function suma(numero1, numero2) {
  const resultado = numero1 + numero2;
  console.log(
    numero1 + " " + "+" + " " + numero2 + " " + "=" + " " + resultado
  );
}
suma(8, 4);
function resta(numero1, numero2) {
  const resultado = numero1 - numero2;
  console.log(
    numero1 + " " + "-" + " " + numero2 + " " + "=" + " " + resultado
  );
}
resta(8, 4);

function multiplicacion(numero1, numero2) {
  const resultado = numero1 * numero2;
  console.log(
    numero1 + " " + "x" + " " + numero2 + " " + "=" + " " + resultado
  );
}
multiplicacion(8, 4);

function division(numero1, numero2) {
  const resultado = numero1 / numero2;
  console.log(
    numero1 + " " + "/" + " " + numero2 + " " + "=" + " " + resultado
  );
}
division(8, 4);

function modulo(numero1, numero2) {
  const resultado = numero1 % numero2;
  console.log(
    numero1 + " " + "%" + " " + numero2 + " " + "=" + " " + resultado
  );
}
modulo(8, 4);

function potencia(numero1, numero2) {
  const resultado = numero1 ** numero2;
  console.log(
    numero1 + " " + "^" + " " + numero2 + " " + "=" + " " + resultado
  );
}
potencia(8, 4);

function suma(numero1, numero2) {
  const resultado = numero1 + numero2;
  console.log(
    numero1 + " " + "+" + " " + numero2 + " " + "=" + " " + resultado
  );
}
//desafio 9
/*- Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
cada función debe recibir 2 números y retornar un resultado según corresponda.
- Crear otra función que reciba el nombre de la operación y 2 números,
debe imprimir el resultado.*/
/*
function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

function modulo(numero1, numero2) {
  return (resultado = numero1 % numero2);
}

function potencia(numero1, numero2) {
  return (resultado = numero1 ** numero2);
}

function operaciones(operacion, numero1, numero2) {
  let resultado;
  if (operacion === "+") {
    resultado = sumar(numero1, numero2);
  }

  if (operacion === "-") {
    resultado = restar(numero1, numero2);
  }
  if (operacion === "x") {
    resultado = multiplicar(numero1, numero2);
  }
  if (operacion === "/") {
    resultado = dividir(numero1, numero2);
  }
  if (operacion === "%") {
    resultado = modulo(numero1, numero2);
  }
  if (operacion === "^") {
    resultado = potencia(numero1, numero2);
  }
  console.log(numero1 + " " + operacion + " " + numero2 + " = " + resultado);
}

operaciones("+", 8, 4);
operaciones("-", 8, 4);
operaciones("x", 8, 4);
operaciones("/", 8, 4);
operaciones("%", 8, 4);
operaciones("^", 8, 4);
*/
/*Crear una función que reciba 4 números, mostrar el resultado de: a/b*(c+d)  */
function calcular(a, b, c, d) {
  return (a / b) * (c + d);
}
let resultado = calcular(3, 4, 5, 6);
console.log(calcular);

//Crear una función que reciba 2 números, imprimir el mayor
function mayor(a, b) {
  if (a > b) {
    console.log(a + " es mayor que" + " " + b);
  } else {
    console.log(a + " es menor que" + " " + b);

    {
    }
  }
}
mayor(3, 5);
mayor(5, 3);
//Crear una función que reciba 1 número, imprimir si es negativo o si es positivo.

/*function numero(num1) {
  if (num1 >= 0) {
    console.log("El numero es positivo");
  } else {
    console.log("El numero es negativo");
  }
}
numero(-1);
numero(5);
*/
/*Crear una función que reciba 2 números, imprimir si el primer número es
divisible por el segundo.*/
function divisible(num1, num2) {
  if (num1 % num2 == 0) {
    console.log(num1 + " es divisible por " + num2);
  } else {
    console.log(num1 + " no es divisible por " + num2);
  }
}
divisible(6, 3);
divisible(5, 2);

/*Crear una función que reciba 1 número, imprimir si es negativo o si es
positivo o si es cero.*/
function numero(num1) {
  if (num1 > 0) {
    console.log("El numero es positivo");
  }
  if (numero === 0) {
    console.log("El numero es 0");
  } else {
    console.log("El numero es negativo");
  }
}
numero(-189897298);
numero(0);
numero(100000);
