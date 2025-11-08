//T2: Clases / Classes
//U6: Serialización de objetos con JSON / Serialització d'objectes amb JSON
/** 
  -- CASTELLANO
  -- EJERCICIO 2.6.3 ENUNCIADO: 
	Dado en el valor de la constante denominada myJSON, un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Triangle,
	vista en el ejercicio 2.5.3. Se nos pide
	- Definir en una constante denominada myTriangles un Array de objetos Triangle a partir de este texto.
	- Obtener un nuevo Array en otra constante (a la que llamaremos equilateralsTriangles) con todos triángulos equiláteros del Array anterior (myTriangles).
	- Pasar este nuevo Array a un texto plano JSON en una nueva constante denominada newTrianglesJSON.
	
*/

const myJSON = '[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]';

//Escribe aquí tu solución / escriviu aquí la vostra solució:

const myTriangles = JSON.parse(myJSON);
console.log("1. Array de triángulos (myTriangles):", myTriangles);

const equilateralsTriangles = myTriangles.filter(triangle => {
    const expectedHeight = (triangle.base * Math.sqrt(3)) / 2;
    const isEquilateral = Math.abs(triangle.height - expectedHeight) < 0.0001;
    return isEquilateral;
});
console.log("\n2. Triángulos equiláteros (equilateralsTriangles):", equilateralsTriangles);

const newTrianglesJSON = JSON.stringify(equilateralsTriangles);
console.log("\n3. Texto JSON resultante (newTrianglesJSON):", newTrianglesJSON);


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
	return [myTriangles, equilateralsTriangles, newTrianglesJSON];
  }