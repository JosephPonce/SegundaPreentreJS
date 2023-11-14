alert("BIENVENIDO A CALCUGRASOMETRO");
alert("Te gustaría saber si estás listo para el VERANO o para una liposucción?");

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
        console.log("Estás flaco para el verano");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Estás en tu punto para el verano");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Estás para un retoque con el cirujano");
    } else {
        console.log("Qué te panzas, dale párate y camina que estás OBES@");
    }

    const pesosSaludables = calcularPesoSaludable(altura)
    console.log("Para una altura de " + altura + " cm, el peso saludable debería estar entre " + pesosSaludables.pesoBajo + " kg y " + pesosSaludables.pesoAlto + " kg.");
}

calcularIMCSimulador();
const rutinas = [
    {
        parteCuerpo: "Piernas",
        ejercicios: [
            { nombre: "Sentadillas", rondas: 3, repeticiones: 15 },
            { nombre: "Prensa de piernas", rondas: 3, repeticiones: 15},
            { nombre: "Bulgaras", rondas: 2, repeticiones: 20},
        ],
        modelo: "B"
    },
    {
        parteCuerpo: "Espalda",
        ejercicios: [
            { nombre: "Dominadas", rondas: 3, repeticiones: 15 },
            { nombre: "Remo con barra", rondas: 3, repeticiones: 15 },
            { nombre: "Pulldowns", rondas: 3, repeticiones: 15},
        ],
        modelo: "B"
    },
    {
        parteCuerpo: "Pecho",
        ejercicios: [
            { nombre: "Press de banca", rondas: 3, repeticiones: 15 },
            { nombre: "Fondos en paralelas", rondas: 3, repeticiones: 15 },
            { nombre: "Aperturas con mancuernas", rondas: 3, repeticiones: 15 },
        ],
        modelo: "A"
    },
    {
        parteCuerpo: "Brazos",
        ejercicios: [
            { nombre: "Curl de bíceps", rondas: 3, repeticiones: 15 },
            { nombre: "Tríceps en polea", rondas: 3, repeticiones: 15 },
            { nombre: "Martillo", rondas: 3, repeticiones: 15 },
        ],
        modelo: "A" 
    },
    {
        parteCuerpo: "Abdominales",
        ejercicios: [
            { nombre: "Plancha", rondas: 3, repeticiones: 15 },
            { nombre: "Crunches", rondas: 3, repeticiones: 15 },
            { nombre: "Elevación de piernas", rondas: 3, repeticiones: 15 },
        ],
        modelo: "C"
    },
    {
        parteCuerpo: "Cardio",
        ejercicios: [
            { nombre: "SaltarSoga", rondas: 3, Tiempomin: 10 },
            { nombre: "SombraBox", rondas: 3, Tiempomin: 1 },
            { nombre: "Sprint HIT", rondas: 2, Tiemposeg: 30},
        ],
        modelo: "C"
    },
];

let modelo = prompt("Ingresa modelo de rutina de ejercicio (A, B o C) ");
let parteCuerpo = prompt("Ingrese la parte del cuerpo que le interesaría saber la rutina");

function mostrarRutinas(rutinas) {
    rutinas.forEach((rutina) => console.log(rutina.modelo + " - " + rutina.parteCuerpo + " - " + JSON.stringify(rutina.ejercicios)));
}

function filtrarRutinas() {
    const resultado = rutinas
        .filter(filtrarModelo)
        .filter(filtrarParteCuerpo);
    if (resultado.length > 0) {
        mostrarRutinas(resultado);
    } else {
        alert("No hay rutinas disponibles para el modelo y la parte del cuerpo especificados.");
    }
}

function filtrarModelo(rutina) {
    if (modelo) {
        return rutina.modelo === modelo;
    }
    return rutina;
}

function filtrarParteCuerpo(rutina) {
    if (parteCuerpo) {
        return rutina.parteCuerpo.toLowerCase() === parteCuerpo.toLowerCase();
    }
    return rutina;
}

filtrarRutinas();
console.log("En 90 dias veras el cambio CAMPEON@")
alert("Espero que el resultado te motive y no te mates. ¡Mucha suerte!");