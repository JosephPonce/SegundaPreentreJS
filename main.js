alert("BIENVENIDO A CALCUGRASOMETRO")
alert("Te gustaria saber si estas listo para el VERANO o para una liposuccion?")
function calcularIMC(peso, altura) {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    return imc.toFixed(2);
}
function calcularPesoSaludable(altura) {
    const alturaMetros = altura / 100;
    const pesoBajo = 18.5 * alturaMetros * alturaMetros;
    const pesoAlto = 24.9 * alturaMetros * alturaMetros;

    return {
        pesoBajo: pesoBajo.toFixed(2),
        pesoAlto: pesoAlto.toFixed(2)
    };
}

function calcularIMCSimulador() {
    let peso, altura;
    let inputValido = false;

    while (!inputValido) {
        peso = parseFloat(prompt("Introduce tu peso en kilogramos:"));
        altura = parseFloat(prompt("Introduce tu altura en centímetros:"));

        if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
            inputValido = true;
        } else {
            console.log("Por favor, introduce valores válidos para peso y altura.");
        }
    }
    const imc = calcularIMC(peso, altura);
    console.log("Tu índice de masa corporal (IMC) es: " + imc);
    if (imc < 18.5) {
        console.log("Estas flaco para el verano");  
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Estas en tu punto para el verano");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Estas para un retoque con el cirujano"); 
    } else {
        console.log("Que te Panzo, dale parate y camina que estas OBES@");
    }
    const pesosSaludables = calcularPesoSaludable(altura)
    console.log("Para una altura de " + altura + " cm, el peso saludable debería estar entre " + pesosSaludables.pesoBajo + " kg y " + pesosSaludables.pesoAlto + " kg.");
}
calcularIMCSimulador();
alert("Espero el resultado te motive y no te mates, Mucha suerte!")