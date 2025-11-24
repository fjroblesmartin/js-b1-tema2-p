//T2: Clases / Classes
//U2: Constructores e instanciación / Constructors i instanciació
/** 
  -- CASTELLANO --
  EJERCICIO 2.2.2 ENUNCIADO:
  Nos piden crear una aplicación que trabaje con triángulos, por lo que, para representar estos objetos de manera más cómoda y estructurada
  se nos pide que definamos la clase que representará estos objetos y que la denominemos "Triangle". Estos objetos, en principio tendrán dos propiedades: 
  "base" (en donde se almacenará el valor de la base del triángulo) y "height" (en donde almacenaremos el valor de la altura del triángulo).
  Define esta clase que implemente un constructor capaz de instanciar objetos de este tipo. 
	
 */

//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Triangle{
  constructor(base, height){
    this.base=base;
    this.height=height;
  }
}




/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return Triangle;
}