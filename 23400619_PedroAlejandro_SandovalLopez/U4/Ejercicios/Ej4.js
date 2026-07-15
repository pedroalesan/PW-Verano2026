/* 
Escribe un programa que solicite 10 números entre el 1 y el 100, y determine
cuántos de esos números son pares y cuántos impares.
*/
let numero;
let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    numero = Number(prompt("Ingresa el número " + i + " (1-100):"));

    if(numero % 2 === 0) {
        pares++
    } else {
        impares++;
    }
}

console.log("Cantidad de números pares: " + pares);
console.log("Cantidad de números impares: " + impares);
