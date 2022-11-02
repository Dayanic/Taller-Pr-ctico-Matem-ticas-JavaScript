console.group('Precios y descuentos');
    const precio = document.querySelector('#precio');
    const descuento = document.querySelector('#descuento');
    const cupon = document.querySelector('#cupon');
    const btnCalcular = document.querySelector('.calcular');
    const total = document.querySelector('#total');

    // btnCalcular.addEventListener('click', calcularPrecio);

    // function calcularPrecio() {
    //     if (parseInt(precio.value) > 0 && parseInt(descuento.value) > 0) {
    //         total.innerText = "Su precio total es de: $" + (precio.value * (100 - descuento.value))/100;
    //     } else {
    //         total.innerText = "Debe ingresar precio y descuento";
    //     }
    // }

    btnCalcular.addEventListener('click', calcularPrecioCupon);

    /*Se genera un objeto para manejar los cupone*/
    const discountObj = {
        'Dayanic10': 10,
        'Dayanic50': 50,
        'Dayanic75': 75
    };

    /*Se genera array que es más extenso pero nos permite indicar nueva propiedades del objeto*/
    const discountArr = []
    discountArr.push({
        name: 'Dayanic10',
        discount: 10,
    });
    discountArr.push({
        name: 'Dayanic50',
        discount: 50,
    });
    discountArr.push({
        name: 'Dayanic75',
        discount: 75,
    });

    function calcularPrecioCupon() {
        /*Forma de buscar datos con objeto*/
        if (discountObj[cupon.value]) {
            total.innerText = "Su precio total es de: $" + (parseInt(precio.value) * (100 - discountObj[cupon.value]))/100;
        } else {
            total.innerText = "Cupón no válido";
        }

        /*Forma de buscar en arreglo*/
        // function findCouponArr(couponElement){
        //     return couponElement.name == cupon.value;
        // }

        // const couponResult = discountArr.filter(findCouponArr);/*Esto me devuelve un array*/
        
        // if (couponResult.length > 0) {
        //     total.innerText = "Su precio total es de: $" + (parseInt(precio.value) * (100 - couponResult[0].discount))/100;
        // } else {
        //     total.innerText = "Cupón no válido";
        // }

        // const couponResult2 = discountArr.find(findCouponArr);/*Esto me devuelve un objeto*/

        // if (couponResult2) {
        //     total.innerText = "Su precio total es de: $" + (parseInt(precio.value) * (100 - couponResult2.discount))/100;
        // } else {
        //     total.innerText = "Cupón no válido";
        // }
    }    

console.groupEnd('Precios y descuentos');