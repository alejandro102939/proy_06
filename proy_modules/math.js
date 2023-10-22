// Funciona para almacenar funciones y operaciones matematicas
const math = {};

// Funcion que toma un numero como argumento y devuelve su version invertida y toma un bucle `while` para calcular el numero invertido 
const invertirNumero = numero => {
    let invertido = 0;
    while(numero !=0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    return invertido
};

// Funcion que toma un numero y lo convierte en cadena de texto, invierte esta cadena y la vuelve a unir
const invertirNumeroComoTexto = numero => {
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
    return numeroInvertidoComoTexto;
};


// Funcion que toma una cadena de texto y la divide en un arreglo de caracteres, e invierte el arreglo 
const invertirTexto = texto => {
    const splitText = texto.split('');
    const reversedText = splitText.reverse();
    const joinedText = reversedText.join('');
    return joinedText;
};


// Funcion que toma un arreglo y lo invierte utilizando el metodo `reverse()`
const invertirArreglo = arreglo => {
    const reverseObject = arreglo.reverse();
    return reverseObject;
};

// Funcion que toma un dato y determina su tipo, luego verifica si el dato es vacio o incorrecto y si no lo es, utiliza un bloque `switch` para aplicar la funcion correspondiente 
const conversionDatos = data => {
    let dataType = typeof data;
    let dataVar;

    if(data === '' || data === null || data === undefined || data.lenght === 0) {
        dataVar = 'El valor ingresado esta vacio o incorrecto';
    }else {
        console.log(`*********************************************************************`.cyan);
        console.log(`El valor ingresado es de tipo: ${dataType}, con un valor de: ${data}`.bgCyan);
        console.log(`*********************************************************************`.cyan);
        switch(dataType) {
            case 'number':
                dataVar = invertirNumero(data);
                break;
            case 'string':
                dataVar = invertirTexto(data);
                break;
            case 'object':
                dataVar = invertirArreglo(data);
                break;
            default:
                dataVar = 'El valor ingresado no se puede invertir';
        }
    }
    return dataVar;
}

// Estas lineas añaden las funciones definidas anteriormente al objeto `math`
math.invertirNumero = invertirNumero;
math.invertirNumeroComoTexto = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

// Esta linea exporta el objeto `math` para que pueda ser utilizado por otros modulos de Node.js
module.exports = math;
