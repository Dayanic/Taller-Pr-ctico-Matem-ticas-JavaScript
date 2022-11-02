/*Definición de variables para uso global*/
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const nota4 = document.querySelector('#nota4');
const nota5 = document.querySelector('#nota5');
const nota6 = document.querySelector('#nota6');
const btoPromedio = document.querySelector('#btoPromedio');
btoPromedio.addEventListener('click',calcularPromedio);
const resultado = document.querySelector('#resultado');


/*Método para calcular promedio general*/
function calcularPromedio()
{
    const notaArray = [];
    notaArray.push(parseFloat(nota1.value));
    notaArray.push(parseFloat(nota2.value));
    notaArray.push(parseFloat(nota3.value));
    notaArray.push(parseFloat(nota4.value));
    notaArray.push(parseFloat(nota5.value));
    notaArray.push(parseFloat(nota6.value));

    const sumValues = (valorActual, nuevoValor) => valorActual + nuevoValor;
    const sumArray = notaArray.reduce(sumValues);
    const promedio = sumArray / notaArray.length;

    resultado.innerText = "Su promedio general es de: " + promedio;
    return promedio;
}