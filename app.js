// Metodo para llamar el archivo Colors
require('colors');

const { green } = require('colors');
// Metodo para llamar la carpeta `proy_modules` y llamar el archivo `math.js`
const math = require('./proy_modules/math.js')

// Se utiliza main para una funcion asincronica, imprime "hola SENA CBA"
const main = async () => {
    console.log(`**************`.green);
    console.log('hola SENA CBA*'.bgRed);
    console.log(`**************`.green);

    // Se crea un arreglo llamado `numeros` luego se realiza un bucle `for` dentro del bucle se invierten los numeros
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    for (const numero of numeros) {
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertirComoCadena = math.invertirNumeroComoTexto(numero);
        console.log(`*********************************************************************`.red);
        console.log("El numero '%s' invertido como numero, y '%S' como cadena", 
        numero, invertidoComoNumero, invertirComoCadena);
        console.log(`*********************************************************************`.red);
    }

    // Se crea un arreglo llamdo `textos` luego se realiza un bucle `for` dentro del bucle se invierten los textos 
    const textos = ['Hola Sena', 'Ficha 2798618', 'Analisis y desarrollo de software']
    for(const texto of textos){
        const textoInvertido = math.invertirTexto(texto);
        console.log(`**************************************************************************************************`.green);
        console.log("El texto '%s' se invierte como '%s'", texto, textoInvertido);
        console.log(`**************************************************************************************************`.green);
    }

    //Se crea un arreglo llamado `datos` luego se realiza un bucle `for` luego se realiza una conversion segun el tipo de dato 
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO']]
    for(let dato of datos){
        const datoConvertido = math.conversionDatos(dato);
        console.log(`*********************************************************************`.yellow);
        console.log(`El resultado de conversion es: ${datoConvertido}`);
        console.log(`*********************************************************************`.yellow);
    }
}

main();