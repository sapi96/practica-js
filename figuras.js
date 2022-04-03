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

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
};

//console.log(
//    "El perímetro del triángulo es: "
//    +perimetroTriangulo
//    + "cm"
//);

//function h(lado1,Base){
//    return Math.sqrt((lado1*lado1)-((Base/2)*(Base/2)))
//}

function areaTriangulo(lado1,base){
    const altura= Math.sqrt((lado1*lado1)-((base/2)*(base/2)))
    return (base*altura)/2;
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