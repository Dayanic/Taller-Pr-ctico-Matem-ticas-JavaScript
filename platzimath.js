/* Esta es una forma de crear una clase con métodos estáticos
class PlatziMath {
    static esPar() {}
}*/

//Se crea objecto que contendrá todas las funciones matemáticas creadas en este curso
const PlatziMath = {};

/*********************************/
/* MÉTODO PARA CALCULAR PROMEDIO */
/*********************************/

const listElement = [10,7,5,3,12,6,13];

PlatziMath.promedio = function promedio() {
    let sumElement = 0;
    let result = 0;

    for (const arr in listElement) {
        sumElement = sumElement + listElement[arr];
    }
    result = sumElement/listElement.length;
    console.log('El promedio es de: ' + result);
}

/* Nuevo método para calcular promedio con propiedad de array */
PlatziMath.calcularPromedio = function calcularPromedio(list) {
    function sumAllList(total, newValue) {
        return total + newValue;
    }

    const sumList = list.reduce(sumAllList);//Método que permite calcular promedio
    result = sumList/list.length;
    // console.log('El promedio es de: ' + result);
    return result;
}

/* Esta es otra forma de calcular el promedio utilizando arrow function (funciones sin declarar) */
PlatziMath.calcularPromedioV2 = function calcularPromedioV2(list) {
    const sumAllList = (total, newValue) => total + newValue;

    const sumList = list.reduce(sumAllList);//Método que permite calcular promedio
    result = sumList/list.length;
    console.log('El promedio es de: ' + result);
}

/******************************/
/* MÉTODO PARA CALCULAR MEDIA */
/******************************/

PlatziMath.isPar = function isPar(list) {
    if ((list.length % 2) == 0) {
        return true;
    } else {
        return false;
    }
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const list = PlatziMath.ordenList(listaDesordenada);
    const listaEsPar = PlatziMath.isPar(list);

    if (listaEsPar) {
        /*QUEDA PENDIENTE HACER EJERCICIO PARA CALCULAR MEDIANA CON LISTA PAR*/
        const mitadList = list.length / 2;
        const medianaPar = PlatziMath.calcularPromedio([list[mitadList - 1],list[mitadList]]);
        // console.log("La mediana de la lista par es: " + medianaPar);
        return medianaPar
    } else {
        const indexMedianaImpar = Math.floor(list.length / 2);
        const medianaImpar = list[indexMedianaImpar];
        // console.log("La mediana de la lista impar es: " + list[indexMedianaImpar]);
        return medianaImpar;
    }
}

/* Método que permite ordenar lista */
PlatziMath.ordenList = function ordenList(listaDesordenada) {
    function ordenarLista(valorAcumulado, nuevoValor) {
        //ESTA ES LA FORMA LENTA DE HACER EL ORDEN*/
        // if (valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if (valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if (valorAcumulado < nuevoValor) {
        //     return -1;
        // }
        return valorAcumulado - nuevoValor; //ESTO ES LO MISMO QUE EL IF PARA ORDENAR DE FORMA ASCENDENTE
        //return nuevoValor - valorAcumulado; //ESTO ES LO MISMO QUE EL IF PARA ORDENAR DE FORMA DESCENDENTE
    }

    const lista = listaDesordenada.sort(ordenarLista);
    return lista;
}

/* Método que permite ordenar lista con arrow function */
PlatziMath.ordenListV2 = function ordenListV2(listaDesordenada) {
    const ordenarLista = (valorAcumulado, nuevoValor) => valorAcumulado - nuevoValor;

    const lista = listaDesordenada.sort(ordenarLista);
    return lista;
}

/*****************************/
/* MÉTODO PARA CALCULAR MODA */
/*****************************/
PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for(let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;//Esto permite sumar el valor acumulado, es lo mismo que hacer listaCount[elemento] = listaCount[elemento] +1
        } else {
            listaCount[elemento] = 1;
        }
        
    }

    //Existen 3 opciones para pasar un objeto a arrays, Object.values (el cual solo genera un array con los valores),
    //Object.keys(el cual genera un array solo con el nombre de la propiedad) y Object.entries (el cual genera N arrays de 
    //tamaño 2 donde almacena el nombre de la propiedad y su valor por cada array)
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenListBidimensional(listaArray);
    const indexModa = listaOrdenada[0];
    const valorModa = indexModa[0];

    console.log("La moda es: " + valorModa);
    return valorModa;
}

PlatziMath.ordenListBidimensional = function ordenListBidimensional(listaDesordenada) {
    const ordenarLista = (valorAcumulado, nuevoValor) => nuevoValor[1] - valorAcumulado[1];

    const lista = listaDesordenada.sort(ordenarLista);
    return lista;
}

/*****************************************/
/* RETO PARA CALCULAR PROMEDIO PONDERADO */
/*****************************************/

/* FORMULA
  [(NOTA1 * CREDITO1) + (NOTA2 * CREDITO2) + (NOTA3 * CREDITO3)] / (CREDITO1 + CREDITO2 + CREDITO3)
*/
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

PlatziMath.calcularPromedioPonderado = function calcularPromedioPonderado() {
    const notesWithCredit = notes.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    });
    console.log(notesWithCredit);
    const sumOfNotesWithCredit = notesWithCredit.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    console.log(sumOfNotesWithCredit);
    
    const credits = notes.map(function (noteObject) {
        return noteObject.credit;
    });
    console.log(credits);
    
    const sumOfCredits = credits.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    console.log(sumOfCredits);
    
    const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
    console.log(promedioPonderadoNotasConCreditos);

    return promedioPonderadoNotasConCreditos
}