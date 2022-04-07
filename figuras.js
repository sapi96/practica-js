//código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladoCuadrado+ "cm");

function perimetroCuadrado(lado){
    return lado*4;
}

//console.log("El perímetro del cuadrado es: "+perimetroCuadrado+ "cm");

function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El área del cuadrado es: "+areaCuadrado+ "cm2");
console.groupEnd();

//código del triángulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const BaseTriangulo = 4;

//console.log(
//    "Los lados del triángulo miden: "
//    +ladoTriangulo1
//    + "cm, "
//    +ladoTriangulo2
//    +"cm y "
//    +BaseTriangulo
//    +"cm"
//);

function perimetroTriangulo(lado1,lado2,lado3){
    return lado1+lado2+lado3;
};

//console.log(
//    "El perímetro del triángulo es: "
//    +perimetroTriangulo
//    + "cm"
//);

//function h(lado1,Base){
//    return Math.sqrt((lado1*lado1)-((Base/2)*(Base/2)))
//}

function areaTriangulo(lado1,lado2){
    const altura= Math.sqrt(Math.abs((lado1*lado1)-((lado2/2)*(lado2/2))))
    return (lado2*altura)/2;
}

//console.log(
//    "El área del triángulo es: "
//    +areaTriangulo
//    + "cm2"
//);
console.groupEnd();

//código del Círculo
console.group("Circulo");
//const r= 5;
//console.log("El radio del cículo es de "+r+"cm");

function perimetroCirculo(r){
    return Math.PI*(r*2);
};

//console.log("El perimetro del cículo es de "+perimetroCirculo+"cm");

function areaCirculo(r){
    return Math.PI*Math.pow(r,2);
};

//console.log("El area del cículo es de "+areaCirculo+"cm2");
console.groupEnd;


//Acá interactúo con el HTML
//Cuadrado
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro=perimetroCuadrado(value);
    alert("El perímetro del cuadrado es de: "+perimetro+"cm");
}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area=areaCuadrado(value);
    alert("El área del cuadrado es de: "+area+"cm2");
}

//Triangulo
function CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es de: " +perimetro+"cm");
}
function CalcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);
    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es de: " +area+"cm2");
}


//Circulo
function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro=perimetroCirculo(value);
    alert("El perímetro del círculo es de "+perimetro+"cm");
}
function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area=areaCirculo(value);
    alert("El área del círculo es de: "+area+"cm2")
}