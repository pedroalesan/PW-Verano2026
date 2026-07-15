/* 
Una tienda departamental paga a sus empleados el 10% de comisión a
quienes vendan menos de $10,000.00 en artículos, mientras que otorga un
15% a quienes vendan $10,000.00 o más. Diseña un programa que solicite un
número entre $5,000 y $30,0000 (validar entrada hasta que sea número
válido) en ventas para un empleado, y muestre en pantalla cuánto dinero va a
recibir por comisión.
*/
let ventas;
let comision;

do {
    ventas = Number(prompt("Ingrese las ventas del empleado ($5,000 - $30,0000):"));

} while (ventas < 5000 || ventas > 300000);

if (ventas < 10000) {
    comision = ventas * 0.10;
} else {
    comision = ventas * 0.15;
}

console.log("Ventas: $" + ventas);
console.log("Comisión: $" + comision);