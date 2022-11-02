console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
}

console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: (lado1 + lado2 + base),
        area: (base * altura) / 2,
    };
}

function calcularAlturaIsosceles(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triángulo isosceles');
    } else {
        //h = raizcuadrada(lado1**2 - (b**2)/4)
        return Math.sqrt((lado1 ** 2) - ((base ** 2)) / 4);
    }
}

function calcularAlturaEscaleno(lado1, lado2, lado3) {
    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.warn('Este no es un triángulo escaleno');
    } else {
        const semiperimetro = (lado1 + lado2 + lado3)/2;
        //h = 2/a raizcuadrada(semiperimetro(semiperimetro - lado1)(semiperimetro - lado2)(semiperimetro - lado 3))
        return (2/lado1) * Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

console.groupEnd('Triangulo');

console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo});

    function calcularCirculo(radio) {
        const diametro = radio * 2;
        const radioAlCuadrado = Math.pow(radio, 2);

        return {circunferencia : diametro * Math.PI,
            area: radioAlCuadrado * Math.PI.toFixed(18),
        };
    }
console.groupEnd('Circulo');