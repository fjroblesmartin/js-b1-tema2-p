//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/** 
  -- CASTELLANO
  -- EJERCICIO 2.5.2 ENUNCIADO: 
	Se nos pide, basándonos en todo lo definido en el ejercicio 2.3.1, ampliar la definición de la clase "Car" que representará los distintos coches que se venden
	en un concesionario, de manera que podamos cubrir las siguientes nuevas funcionalidades:  
	- Se pretende implementar una nueva funcionalidad (compareAntiguaty) en donde, dados dos vehículos, se nos devuelva como resultado el vehículo más antiguo 
	(en base a la propiedad year).
	- Tambien es necesario saber, dado un Array que contenga una serie de vehículos, cuál es el de mayor cilindrada (especificada en la propiedad displacement)
	con un nuevo método llamado maxDisplacement.
	- Así mismo, nos piden, con el fin de poder comparar la potencia de los coches clásicos del concesionario con las potencias de los actuales coches eléctricos
	un método (al que llamaremos cv2kw) que nos devuelva la potencia en kW (KiloWatts) a partir de la potencia en CV (Caballos) del vehículo
  (Nota:la equivalencia es 1 CV = 0,736 kW)
  
  En base a la funcionalidad solicitada deberéis decidir qué métodos definís como Métodos de Instancia y cuáles definís como Métodos de Clase.
  Finalmente, crea almenos 3 objetos de la clase Car y haz 3 llamadas a estos nuevos métodos.
    
*/
//Escribe aquí tu solución / escriviu aquí la vostra solució:






/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return Car;
}