let nombre: string = "Mundo";
let edad: number = 30;
let esDesarrollador: boolean = true;
let mes: string | undefined;
let variableNula: null = null;

console.log('mes:', mes);
mes = "Enero";
console.log('mes actualizado:', mes);

console.log(`Hola, ${nombre}.`);

console.log(`Tienes ${edad} años.`);

if (esDesarrollador) {
    console.log("Eres desarrollador.");
} else {
    console.log("No eres desarrollador.");
}

console.log('variableNula:', variableNula);
