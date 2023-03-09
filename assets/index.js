const iva = 1.21;
const porcentajeInteres = 0.05;

let valorGomasUSD = 0;
let valorMaderaUSD = 0;
let moneda;
let valorFinalNetoARS;
let formaDePago;
let cantCuotas = 0;
let valorCuota = 0;
let valorFinalEnCuotas = 0;
let reEjecutar = "S";
let valorFinalNetoUSD = 0;
let valorFinalBrutoUSD = 0;
let valorFinalBrutoARS = 0;

while (reEjecutar == "S") { // mientras reEjecutar sea = S, se repite el proceso

    valorMaderaUSD = ingresarMadera(); // se solicita el ingreso de qué madera se desea
    valorGomasUSD = valorGomasUSD + ingresarGoma("Drive"); // se solicita el ingreso de qué goma de drive se desea
    valorGomasUSD = valorGomasUSD + ingresarGoma("Revés"); // se solicita el ingreso de qué goma de revés se desea

    // se calcula el valor final neto de las maderas + las gomas + envío (si requiere) y se le resta el código de descuento (si tiene)
    valorFinalNetoUSD = ( valorGomasUSD + valorMaderaUSD + solicitarEnvio() ) * codigoDescuento();
    monedaDePago(valorFinalNetoUSD); // se solicita si pagará en ARS o USD
    valorFinalBrutoUSD = valorFinalNetoUSD * iva; // se agrega el IVA al valor Neto
    valorFinalBrutoARS = valorFinalNetoARS * iva;// se agrega el IVA al valor Bruto
    formaPago(valorFinalBrutoUSD, valorFinalBrutoARS); //se solicita si pagará en CONTADO o en CUOTAS, con los cálculos correspondientes
    mostrarResultado(); // se muestra el resultado
    reEjecutar = consultarReejecucion(); // se solicita si quiere realizar otra ejecución

}

