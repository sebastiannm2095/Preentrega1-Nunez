// Función para solicitar un valor y verificar si es un numero
function solicitarNumero(mensaje, campo) {
    let valor;
    do {
        valor = prompt(mensaje);
        if (isNaN(parseFloat(valor))) {
            alert("Por favor, ingrese un valor numérico válido para " + campo + ".");
        } else {
            valor = parseFloat(valor); // Convierte el valor a número después de validar los datos
        }
    } while (isNaN(valor)); // Repite el prompt si el valor no es numérico
    return valor;
}

// Solicita datos al usuario y validar cada uno secuencialmente
const sueldo = solicitarNumero("Ingrese aquí su sueldo líquido:", "el sueldo");
const otroIngreso = solicitarNumero("Si percibe otros ingresos, ingréselos aquí:", "otros ingresos");
const gastos = solicitarNumero("Ingrese su promedio de gastos mensuales (alimentación, arriendo, servicios, estudios, etc.):", "los gastos");
const tarjetaCredito = solicitarNumero("Ingrese aquí sus gastos en tarjeta de crédito:", "los gastos en tarjeta de crédito");
const aniosCredito = solicitarNumero("Ingrese aqui a cuantos años desea solicitar su credito hipotecarios", "años credito")

// Calcular el saldo disponible
function calcularMontoDisponible(sueldo, otroIngreso, gastos, tarjetaCredito) {
    let ingresoTotal = sueldo + otroIngreso;
    let gastosTotales = gastos + tarjetaCredito;
    return ingresoTotal - gastosTotales;
}

// Mostrar el saldo disponible al usuario
const saldoDisponible = calcularMontoDisponible(sueldo, otroIngreso, gastos, tarjetaCredito);
alert("Tu saldo disponible después de todos los gastos es: $" + saldoDisponible);

function calculaCreditoMaximo (saldoDisponible,aniosCredito){
    return saldoDisponible * aniosCredito
}

const creditoMaximo = calculaCreditoMaximo (saldoDisponible,aniosCredito)
alert("El maximo credito al que puedes optar es: $" + creditoMaximo)