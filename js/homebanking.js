//Declaración de variables
var nombreUsuario = "Matias Frank";
var saldoCuenta = 5000;
var limiteExtraccion = 1500;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var clave = 1234;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla(nombreUsuario);
    actualizarSaldoEnPantalla(saldoCuenta);
    actualizarLimiteEnPantalla(limiteExtraccion);
}


//Funciones que tenes que completar

function sumar(num) {
    saldoCuenta = saldoCuenta + num;
}

function restar(num) {
    saldoCuenta = saldoCuenta - num;
}


function cambiarLimiteDeExtraccion() {
    var limite = prompt("Ingrese nuevo lìmite");
    var nuevoLimite = parseInt(limite);
    
    if (nuevoLimite >0){ 
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla(limiteExtraccion);
        alert("Su nuevo límite es de " + limiteExtraccion);
    }else {
        alert ("Monto ingresado no válido");
    }
}


function haySaldoDisponible(num) {
    if (num <= saldoCuenta) {
        return true;
    } else {
        return false;
    }
}

function dentroDelLimite(num) {
    if (num <= limiteExtraccion) {
        return true;
    } else {
        return false;
    }
}

function soloDe100(num) {
    resto = num % 100;
    if (resto === 0) {
        return true;
    } else {
        return false;
    }
}

function extraerDinero() {
    var extraccion = prompt("¿Cuánto desea extraer?");
    var dineroExtraido = parseInt(extraccion);
    var saldoanterior = saldoCuenta;
    if (haySaldoDisponible(dineroExtraido) && dentroDelLimite(dineroExtraido) && soloDe100(dineroExtraido) && (dineroExtraido>=0)) {

        restar(dineroExtraido);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert("Tu saldo anterior es: " + saldoanterior + "\n Tu extracciòn es: " + dineroExtraido + "\n Tu saldo actual es: " + saldoCuenta);

    } else if (!haySaldoDisponible(dineroExtraido)) {
        alert("No hay saldo suficiente para efectuar la operación.");
    } else if (!dentroDelLimite(dineroExtraido)) {
        alert("El monto ingresado excede su límite de extracción.");
    } else if(dineroExtraido<=0){
        alert ("El monto ingresado no es válido");
    }else {
        alert("Sólo puede extraer billetes de $100.");
    }
}

function depositarDinero() {
    var deposito = prompt("Ingrese monto a depositar");
    var dineroDepositado = parseInt(deposito);
    var saldoanterior = saldoCuenta;
    if (dineroDepositado >= 0 ){
        sumar(dineroDepositado);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert("Tu saldo anterior es: " + saldoanterior + "\n Tu depósito es: " + dineroDepositado + "\n Tu saldo actual es: " + saldoCuenta);
    } else {
    alert ("Monto ingresado no válido");
}
}

function pago(num, nombre, saldoanterior) {
    if (num <= saldoCuenta) {
        restar(num);
        actualizarSaldoEnPantalla(saldoCuenta);
        alert("Usted pagó " + nombre + "\n Saldo anterior: " + saldoanterior + "\n Dinero descontado: " + num + "\n Saldo actual: " + saldoCuenta);
    } else {
        alert("Usted no posee el saldo suficiente para pagar el servicio");
    }
}

function pagarServicio() {
    var servicio = prompt("Ingrese el número correspondiente el servicio que desea pagar: \n 1-Agua \n 2-Luz \n 3-Internet \n 4-Teléfono");
    var numDeServicio = parseInt(servicio);
    var saldoanterior = saldoCuenta;

    switch (numDeServicio) {
        case 1:
            pago(agua, "Agua", saldoanterior);
            break;
        case 2:
            pago(luz, "Luz", saldoanterior);
            break;
        case 3:
            pago(internet, "Internet", saldoanterior);
            break;
        case 4:
            pago(telefono, "Teléfono", saldoanterior);
            break;
        default:
            alert("No existe el servicio seleccionado");
    }
}

function transferirDinero() {
    var montoATransferir = prompt("Ingrese monto a transferir");
    var montoATR = parseInt(montoATransferir);
    var saldoanterior = saldoCuenta;

    if (montoATR > saldoCuenta) {
        alert("No posee saldo suficiente para realizar la transferencia");
    } else if (montoATR <= saldoCuenta) {
        var numcuenta = prompt("Ingrese el número de cuenta destino");
        var nCTA = parseInt(numcuenta);
        if ((nCTA === cuentaAmiga1) || (nCTA === cuentaAmiga2)) {
            restar(montoATR);
            alert("Se han transferido: " + montoATR + "\n Cuenta destino: " + nCTA);
            actualizarSaldoEnPantalla(saldoCuenta);
        }else {
            alert("Sólo puede transferir dinero a una cuenta amiga.");
    } 
    }
}

function iniciarSesion() {
    var ingClave = prompt("Ingrese clave");
    var claveIngresada = parseInt(ingClave);

    if (claveIngresada === clave) {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
    } else {
        saldoCuenta = 0;
        nombreUsuario = "";
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
    }
}

iniciarSesion();


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
