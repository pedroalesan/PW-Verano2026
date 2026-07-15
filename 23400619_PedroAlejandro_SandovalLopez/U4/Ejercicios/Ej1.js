/*
Escriba un programa que genere dos números aleatorios y que escriba en
consola que números se generaron.
Además, el programa debe señalar si los números son iguales, y en caso
de que no lo sean, mostrará cuál es el mayor.
*/
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;

console.log("Número 1: ", num1);
console.log("Número 2: ", num2);

if (num1 == num2) {
    console.log("Los números son iguales");
} else if (num1 > num2) {
    console.log("El número mayor es: ", num1);
} else {
    console.log("El número mayor es: ", num2);
}