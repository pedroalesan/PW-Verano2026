/* 
Escribe un programa que genere de forma continua números entre el 0 y el 5,
hasta que salga el número 0
*/

let numero;

while (numero !== 0) {
    numero = Math.floor(Math.random() * 6);

    console.log(numero);
}

console.log("Salió 0. Fin del programa.");