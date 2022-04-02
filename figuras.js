//código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+ "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: "+perimetroCuadrado+ "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: "+areaCuadrado+ "cm2");
console.groupEnd();

//código del triángulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const BaseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: "
    +ladoTriangulo1
    + "cm, "
    +ladoTriangulo2
    +"cm y "
    +BaseTriangulo
    +"cm"
);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+BaseTriangulo;
console.log(
    "El perímetro del triángulo es: "
    +perimetroTriangulo
    + "cm"
);

const h = Math.sqrt((ladoTriangulo1*ladoTriangulo1)-((BaseTriangulo/2)*(BaseTriangulo/2)))
console.log("La altura del triángulo es de "+h+"cm");
const areaTriangulo = (BaseTriangulo*h)/2;
console.log(
    "El área del triángulo es: "
    +areaTriangulo
    + "cm2"
);
console.groupEnd();

//código del Círculo
console.group("Circulo");
const r= 5;
console.log("El radio del cículo es de "+r+"cm");
const perimetroCirculo = Math.PI*(r*2);
console.log("El perimetro del cículo es de "+perimetroCirculo+"cm");
const areaCirculo = Math.PI*Math.pow(r,2);
console.log("El area del cículo es de "+areaCirculo+"cm2");
console.groupEnd;