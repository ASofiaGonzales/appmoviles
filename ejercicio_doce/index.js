//Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
//El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor
//con el que se encuentra estudiando.
//El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(){
        return "Hola! mucho gusto, soy " + this.nombre + " y tengo " + this.edad + " años.";
    }

}

class Estudiante extends Persona{
    constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
    }    
    setProfesor(profesor){
        this.profesor = profesor;
    }
    estudiando(){
        return "Estoy estudiando con el/la " + this.profesor + ".";
    }
}


var persona = new Persona("Sofia", 28);
var estudiante = new Estudiante("Pedro", 27);
estudiante.setProfesor("Profesor Chejolan");
console.log(estudiante.presentarse());
console.log(estudiante.estudiando());