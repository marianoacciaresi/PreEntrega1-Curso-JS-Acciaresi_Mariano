function ingresarMadera() {

    const valorMadera1 = 200;
    const valorMadera2 = 120;
    const valorMadera3 = 70;

    let codigoMadera = prompt("Ingresar el código de madera \n [1] - TIMO BOLL ZLC \n [2] - TIMO BOLL SPIRIT \n [3] - PRIMORAC ");

    switch (codigoMadera) {
        case "1":
            return valorMadera1;
            break;
        case "2":
            return valorMadera2;
            break;
        case "3":
            return valorMadera3;
            break;
        default:
            alert("No ingresó una madera válida");
            break;
    }
}

function ingresarGoma(tipo){

    const valorGoma1 = 80;
    const valorGoma2 = 60;
    const valorGoma3 = 40;

    
    let codigoGoma = prompt("Ingresar el código de goma de " + tipo + " \n [1] - TENERGY 05 \n [2] - ROZENA \n [3] - BRYCE SPEED " );

    switch (codigoGoma) {
        case "1":
            return valorGoma1;
            break;
        case "2":
            return valorGoma2;
            break;
        case "3":
            return valorGoma3;
            break;
        default:
            alert("No ingresó una goma válida");
            break;
    }    

}

function monedaDePago(valorFinalUSD){

    const tipoCambio = 400;

    let codigo = prompt("Ingrese si pagará en [ARS] o [USD]");

    codigo = codigo.toUpperCase();

    if (codigo=="ARS" || codigo =="USD") {
        moneda = codigo;
        valorFinalNetoARS = valorFinalUSD * tipoCambio;
    } else {
        alert("No ingresó una moneda válida");
    }

}

function formaPago(valorFinalUSD, valorFinalARS){

    formaDePago = prompt("Ingrese si pagará en [CUOTAS] o [CONTADO]");
    formaDePago = formaDePago.toUpperCase();

    if (formaDePago == "CUOTAS" || formaDePago == "CONTADO") {
        
        if (formaDePago == "CUOTAS"){
            cantCuotas = prompt("Ingrese si pagará en [1], [3], [6] ó [12] CUOTAS");
            if (cantCuotas == "1" || cantCuotas == "3" || cantCuotas == "6" || cantCuotas == "12") {

                let intereses = 0;
                for (let i = 1; i <= cantCuotas; i++) {  //si bien se podría multiplicar, la intención es usar un FOR
                    intereses = intereses + valorFinalARS * porcentajeInteres;
                }
                console.log(intereses);
                valorFinalEnCuotas = valorFinalARS + intereses;

                if (moneda == "ARS"){                    
                    valorCuota = valorFinalEnCuotas / cantCuotas ; 
                }
                else{
                    valorCuota = valorFinalUSD / cantCuotas;
                }
            }
            else{
                alert("No ingresó una cantidad de cuotas válida");
            }
            
        }
    
    } else {
        alert("No ingresó un método de pago válido");
    }

}

function solicitarEnvio(){

    const costoEnvio = 5;

    let envio = prompt("Necesitará Envío: [SI] o [NO]");
    envio = envio.toUpperCase();

    if (envio=="SI" ) {
        return costoEnvio;        
    } else {
        return 0;
    }    
}

function codigoDescuento(){

    const porcentajeDescuento = 0.9;

    let codigoDescuento = prompt("Tiene el código de descuento: [SI] o [NO]");
    codigoDescuento = codigoDescuento.toUpperCase();

    if (codigoDescuento =="SI" ) {
        let codigo = prompt("Ingrese el código");
        if (codigo=="4321"){
            return porcentajeDescuento;        
        }
        else{
            alert("El código de descuento ingresado no es válido");
        }
    }    
    else {
        return 1;
    }    
    
}

function consultarReejecucion() {
    let respuesta = prompt("Desea volver a ejecutar un nuevo proceso? [S/N]");
    return respuesta.toUpperCase();
}

function mostrarResultado(){

    alert(" Valor Madera USD" + " " + valorMaderaUSD + "\n Valor Gomas USD" + " " + valorGomasUSD + "\n Valor Final NETO USD" + " " + valorFinalNetoUSD + "\n Valor Final NETO ARS" + " " + valorFinalNetoARS + "\n Valor Final Bruto USD" + " " + valorFinalBrutoUSD + "\n Valor Final Bruto ARS" + " " + valorFinalBrutoARS + "\n Moneda" + " " + moneda + "\n Forma de Pago" + " " + formaDePago + "\n Cantidad de Cuotas" + " " + cantCuotas + "\n Valor Cuota" + " " + valorCuota + "\n Valor Final en Cuotas" + " " + valorFinalEnCuotas)
}