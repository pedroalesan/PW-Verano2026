/* var nombre = "Juan";

const edad = 20;
let promedio = 9.5 

if(true) {
    var libro = "libro 1";
    let animal = "perro";
    animal = 5;
}

let n1 = parseInt(prompt("Ingresa un número"));
let n2 = Number(prompt("Ingresa un número"));
//Método prompt: Solicitar al usuario que ingrese un tipo de dato
console.log(n1);
console.log(n2);

let suma = n1 + n2;
console.log(suma);

let suma2 = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;
let residuo = 10 % 3;
console.log("Suma: ", suma2);
console.log("Resta: ", resta);
console.log("Multiplicación: ", multiplicacion)
console.log("División: ", division);
console.log("Residuo: ", residuo);
 */

/* console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5<=4);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 3); */

/* let calificacion = 85;
if (calificacion >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado")
}
 */

/* let calificacion = 85;
if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
 */

/* let tabla = 5;
for (let i = 1; i <= 5; i++) {
    console.log("Iteración: ", i);
    console.log(`${tabla} x ${i} = ${tabla*i}`);
    console.log(tabla+" x " + i + " = " + tabla * i);
} */


/* let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
} */

/* 
function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Pedro"); */

/* function aleatorio() {
    let n = Math.floor(Math.random()*100)+1;
    console.log(n);
}
aleatorio(); */

/* let numeros = [5,2];
numeros.push(20);
numeros.push(8);
numeros.push(53);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
} */

/* let persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Tepic"
}
console.log(persona.nombre);
persona.nombre = "Carlos";
persona.carrera = "ISC";
console.log(persona)
console.log(persona.nombre); */

let numeros = [1,2,3,4,5];
numeros.forEach(numero => {
    console.log(numero);
});

let dobles = numeros.map(numero => {
    return numero * 2;
});
console.log(dobles);