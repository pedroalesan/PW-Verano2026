/* 
Elabora un programa que genere un número aleatorio entre el número 2 y el
10, y después escriba la tabla de multiplicar del número generado.
*/
let numero = Math.floor(Math.random() * 9) + 2;

console.log("Número generado: ", numero);

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}