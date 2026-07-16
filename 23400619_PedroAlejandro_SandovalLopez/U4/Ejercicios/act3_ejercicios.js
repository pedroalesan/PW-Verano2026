/*1. Elabora un programa que contenga una función llamada potencia y reciba dos paramétros;
base y exponente.
La función deberá retornar la potencia de acuerdo con los parámetros recibidos.
El calculo de la potencia se realizará por medio un ciclo for.
*/
function ejercicio1() {
    function potencia(base, exponente) {
        let resultado = 1;
        for (let i = 1; i <= exponente; i++) {
            resultado *= base;
        }
        console.log(resultado);
    }

    potencia(2, 2);
    potencia(5, 5);
}

/* 2. Cajero Automático
Simula un cajero automático con un saldo de inicial de $5000. Mostrar un menú:
    1. Consultar saldo
    2. Depositar
    3. Retirar 
    4. Salir 
No permitir retirar más dinero del disponible. */
function ejercicio2() {
    let saldo = 5000;
    let opcion = 0;

    do {
        opcion = Number(prompt
            ("CAJERO AUTOMÁTICO \n 1. Consultar saldo \n 2. Depositar \n 3. Retirar \n 4. Salir"));
        switch (opcion) {
            case 1:
                console.log("Su saldo es: ", saldo);
                break;
            case 2:
                console.log("")
                let deposito = Number(prompt("Ingrese cantidad a depositar:"));
                saldo += deposito;
                break;
            case 3:
                let retiro = Number(prompt("Ingrese cantidad a retirar:"));
                if (retiro > saldo) {
                    console.log("No se permite retirar más dinero del disponible");
                } else {
                    saldo -= retiro;
                }
                break;
            case 4:
                console.log("Hasta luego.")
                break;
            default:
                console.log("Ingrese una opción valida.");
                break;
        }
    } while (opcion != 4);
}

/* 
3. Juego de Dados
Genera dos dados hasta que ambos tengan el mismo valor. 
*/
function ejercicio3() {
    let dado1;
    let dado2;
    let i = 0;
    do {
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        console.log(dado1, " - ", dado2);
        i++;
    } while (dado1 !== dado2)
    console.log("Se necesitaron ", i, " lanzamientos.");
}

/* 
4. Adivinar número
La computadora genera un número entre 1 y 100. El usuario tiene máximo 7 intentos.
Después de cada intento indicar del más grande al más pequeño.
*/

function ejercicio4() {
    let num = Math.floor(Math.random() * 100) + 1;
    let adivino = false;

    for (let i = 1; i <= 7; i++) {
        let numAdivinar = Number(prompt("Intento " + i + ". Ingrese el número"));
        if (numAdivinar === num) {
            console.log("Felicidades. Has adivinado el número");
            adivino = true;
            break;
        } else if (numAdivinar > num) {
            console.log("El número a adivinar es más pequeño.");
        } else {
            console.log("El número a adivinar es más grande.");
        }
    }

    if (!adivino) {
        console.log("Se acabaron los intentos.");
        console.log("El número era: ", num);
    }
}
/* 
5. Crea un programa que simule el registro de ventas de una tienda. Cada venta debe contener
el nombre del vendedor, el nombre del producto, la cantidad vendida y el precio unitario.

El programa debe registrar múltiples ventas (solicitándolos mediante prompt()) y al
finalizar debe mostrar en consola el total de ventas realizadas, el total de ingresos generados,
cuántas unidades se vendieron de cada producto y cuál fue el vendedor que generó el mayor
monto en ventas.

*/
function ejercicio5() {
    let ventas = [];
    let continuar;

    do {
        let vendedor = prompt("Ingrese el nombre del vendedor:");
        let producto = prompt("Ingrese el nombre del producto:");
        let cantidad = Number(prompt("Ingrese la cantidad vendida:"));
        let precio = Number(prompt("Ingrese el precio unitario:"));

        let venta = {
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precio: precio
        };

        ventas.push(venta);

        continuar = prompt("¿Desea registrar otra venta? (s/n)")
    } while (continuar.toLowerCase() === 's');

    console.log("Total de ventas realizadas: ", ventas.length);

    let ingresos = 0;

    ventas.forEach(function (venta) {
        ingresos += venta.cantidad * venta.precio;
    });

    console.log("Total de ingresos: $" + ingresos);

    let productos = {};

    ventas.forEach(function (venta) {

        if (productos[venta.producto]) {
            productos[venta.producto] += venta.cantidad;
        } else {
            productos[venta.producto] = venta.cantidad;
        }

    });

    console.log("Unidades vendidas por producto: ");
    for (let producto in productos) {
        console.log(producto + ": " + productos[producto] + " unidades");
    }

    let vendedores = {};

    ventas.forEach(function (venta) {
        let monto = venta.cantidad * venta.precio;

        if (vendedores[venta.vendedor]) {
            vendedores[venta.vendedor] += monto;
        } else {
            vendedores[venta.vendedor] = monto;
        }
    });

    let mayor = 0;
    let mejorVendedor = "";

    for (let vendedor in vendedores) {
        if (vendedores[vendedor] > mayor) {
            mayor = vendedores[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Vendedor con más ventas: ", mejorVendedor + " ($" + mayor + ")");
}


