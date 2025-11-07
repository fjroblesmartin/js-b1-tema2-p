//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/** 
  -- CASTELLANO
  -- EJERCICIO 2.5.3 ENUNCIADO: 
	Se nos pide, basándonos en todo lo definido en el ejercicio 2.3.2, ampliar la definición de la clase "Triangle" que representará los distintos triángulos 
	de un app de geometría , de manera que podamos cubrir las siguientes nuevas funcionalidades:  
	- Sabemos que, dados dos triángulos rectangulos, si los enfrentamos juntándolos por sus ángulos rectos formarán un polígono, de manera que el perímetro 
	exterior de	este nuevo polígono será la suma del perímetro de ambos rectángulos más el valor absoluto de la resta de ambas alturas, con esto necesitamos, 
	dados dos triángulos rectángulos, obtener el perímetro exterior del polígono que conforman definiendo un nuevo método llamado rightTriangleUnion.
	- Tambien es necesario saber, dado un Polígono formado por una serie de triángulos (que nos llegarán en un Array), obtener cuál es el área de ese polígono
	con un nuevo médodo llamado areaPoligon. (Nota: el área de la superficie de un polígono formado por triángulos es la suma de las áreas de estos triángulos).
	- Así mismo, nos piden, con el fin de poder saber si un triángulo es equilátero o no, un método (al que llamaremos isEquilateral) que accediendo a sus propiedades 
	base y height, nos devuelva	si el triángulo es equilátero; NOTA: una propiedad de los triángulos equiláteros es que su altura siempre es igual a la base por la raiz 
	cuadrada de tres dividido entre dos (height = (base*√3) / 2 ). Para comprobarlo, un ejemplo de triángulo equilátero sería uno con una base de 10 y una altura de 10 * √3 / 2.
	como este por ejemplo:
	const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
  
	En base a la funcionalidad solicitada deberéis decidir qué métodos definís como Métodos de Instancia y cuáles definís como Métodos de Clase.
	Finalmente, crea al menos 3 objetos de la clase Triangle y haz 3 llamadas a estos nuevos métodos.
      	
  
*/
//Escribe aquí tu solución / escriviu aquí la vostra solució:
class Triangle{
  constructor(base, height, rightTriangle){
    this.base=base;
    this.height=height;
    this.rightTriangle=rightTriangle;
  }
  get areaTriangle(){
      return this.base*this.height/2;
    }
  get rightHypotenuse(){
      if (this.rightTriangle){return Math.sqrt(this.base*this.base+this.height*this.height);}
      else{return undefined;}
    }
  get rightPerimeter(){
      if (this.rightTriangle){return this.base+this.height+this.rightHypotenuse;}
      else{return undefined;}
  }
  isEquilateral(){
    const requiredHeight = (this.base * Math.sqrt(3)) / 2;
    const tolerance = 0.0001;
    return Math.abs(this.height - requiredHeight) < tolerance;
  }
 static rightTriangleUnion(tri1, tri2){
    const perimeter1 = tri1.rightPerimeter;
    const perimeter2 = tri2.rightPerimeter;
    const heightDifference = Math.abs(tri1.height - tri2.height);
    return perimeter1 + perimeter2 + heightDifference;
  }
 static areaPoligon(listaT){
    if (!Array.isArray(listaT)) {
        return 0;
    }
    return listaT.reduce((totalArea, triangle) => {
        return totalArea + triangle.areaTriangle;
    }, 0);
  }  
}

const triA = new Triangle(3, 4, true); 
const triB = new Triangle(6, 8, true); 
const triC = new Triangle(10, 10 * Math.sqrt(3) / 2, false); 







/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return Triangle;
}