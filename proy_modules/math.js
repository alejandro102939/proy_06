const math = {};

const invertirNumero = numero => {
    let invertido = 0;
    while(numero !=0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    return invertido
};

const invertirNumeroComoTexto = numero => {
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
    return numeroInvertidoComoTexto;
};

const invertirTexto = texto => {
    const splitText = texto.split('');
    const reversedText = splitText.reverse();
    const joinedText = reversedText.join('');
    return joinedText;
};

const invertirArreglo = arreglo => {
    const reverseObject = arreglo.reverse();
    return reverseObject;
};

const conversionDatos = data => {
    let dataType = typeof data;
    let dataVar;

    if(data === '' || data === null || data === undefined || data.lenght === 0) {
        dataVar = 'El valor ingresado esta vacio o incorrecto';
    }else {
        console.log(`El valor ingresado es de tipo: ${dataType}, con un valor de: ${data}`);
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

math.invertirNumero = invertirNumero;
math.invertirNumeroComoTexto = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports = math;
