//T2: Clases / Classes
//U3: Propiedades / Propietats
/** 
  -- CASTELLANO
  -- EJERCICIO 2.3.2 ENUNCIADO: 
  Se nos pide ampliar la definición de la clase "Triangle" que representará los distintos triángulos de un app de geometría (vista ya en el ejercicio 2.2.2 de 
  este mismo Tema 2), de la siguiente forma:
  -> Por un lado, respecto de sus propiedades, tenemos definidas dos hasta ahora: "base" (en donde se almacena el valor de la base del triángulo) y 
  "height" (en donde almacenamos el valor de la altura del triángulo). Ahora nos piden definir una nuevas propiedad "rightTriangle": en la cual almacenaremos 
  si ése triángulo es un triángulo rectángulo o no mediante un valor booleano.
  -> También nos piden implementar un getter "areaTriangle" que devuelva el valor calculado del àrea del triangulo (recordad que la fórmula del cálculo del área
  de un triángulo es (base x altura) / 2.
  -> Por otro lado, nos piden implementar dos getters específicos para los triángulos que son rectángulos: 
    - El primero se llamará "rightHypotenuse" y nos devolverá, en caso de que el triángulo sea rectángulo (cosa que podremos comprobar con el valor definido en la 
    nueva propiedad "rightTriangle"), el valor calculado de la hipotenusa de nuestro triángulo rectángulo (recordad que la fórmula del cálculo de la hipotenusa de
    un triángulo rectángulo, dadas la base y la altura es c = √(b²+a²), la habéis calculado en el ejercicio 1 de la Unidad 3 del Tema 1), en el caso de que el 
    triángulo no sea rectángulo este getter devolvera "undefined". 
    - El segundo getter lo denominaremos "rightPerimeter" y será para calcular el perímetro de un triángulo rectángulo: es decir, si el triángulo no es rectángulo 
    devolveremos undefined, pero si sí lo es, devolveremos el perímetro del mismo (recuerda que el perímetro de un triángulo rectángulo es la suma de la base
    más la altura más la hipotenusa).  
    	
 
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