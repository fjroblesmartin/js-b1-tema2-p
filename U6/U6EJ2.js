//T2: Clases / Classes
//U6: Serialización de objetos con JSON / Serialització d'objectes amb JSON
/** 
  -- CASTELLANO
  -- EJERCICIO 2.6.2 ENUNCIADO: 
	Dado en el valor de la constante denominada myJSON, un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Car,
  vista en el ejercicio 2.5.2. Se nos pide:
	- Definir en una constante denominada myCars un Array de objetos Car a partir de este texto.
	- Obtener un nuevo Array en otra constante (a la que llamaremos lessThan25) todos los coches definidos en el Array anterior (myCars) 
  que tienen una antiguedad inferior a 25 años.
	- Pasar este nuevo Array a un texto plano JSON en una nueva constante denominada newCarsJSON.
	
*/

const myJSON= '[{"brand":"Ford","model":"Mustang Boss 429","displacement":7000,"horsePower":375,"year":1969},{"brand":"BMW","model":"520d","displacement":1980,"horsePower":136,"year":2002},{"brand":"Mercedes-Benz","model":"280 SLC","displacement":2746,"horsePower":136,"year":1979}]';

//Escribe aquí tu solución / escriviu aquí la vostra solució:

const myCars = JSON.parse(myJSON);

console.log("1. Array de coches (myCars):", myCars);


/**
 * Filtra el array myCars.
 * Condición: (currentYear - car.year) < 25
 */

const lessThan25 = myCars.filter(car => {
    const age = 2025 - car.year;
    return age < 25;
});

console.log(`\n2. Coches con menos de 25 años :`, lessThan25);

const newCarsJSON = JSON.stringify(lessThan25);

console.log("\n3. Texto JSON resultante (newCarsJSON):", newCarsJSON);




/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return [myCars, lessThan25, newCarsJSON];
}