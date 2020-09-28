//Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array 
//de Estudiante. Además debe tener dos métodos enseñando() que imprima por consola todos sus 
//estudiantes a los cuales les está enseñando y el método addEstudiante(unEstudiante) que agregue 
//a ese estudiante a la lista. Además este método es responsable de manejar de agregar al objeto
//profesor como profesor del estudiante (manejo de doble referencia)

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
    
    estudiando(){
        return "Estoy estudiando con el/la " + this.profesor + ".";
    }

    setProfesor(profesor){
        this.profesor = profesor;
    }
}

class Profesor extends Persona{
    constructor(nombre, edad, estudiantes){ 
        super(nombre, edad);
        this.estudiantes = estudiantes;
    }

    addEstudiante(estudiante){
        estudiante.setProfesor(this.nombre);
       this.estudiantes.push(estudiante);
    }

    enseñando(){
        for (let estudiante of this.estudiantes){
            console.log("enseñando a " + estudiante.nombre);
        }
    }
}

estudiantes = [
    new Estudiante("Laura", 5),
    new Estudiante("Hernan", 6),
];
profesor = new Profesor ("Prof. Lorenzo", 51, estudiantes);

for (let estudiante of estudiantes){
    estudiante.setProfesor(profesor.nombre);
}

profesor.addEstudiante(new Estudiante("Alan", 7));

console.log (profesor.estudiantes);
console.log(profesor.presentarse());
profesor.enseñando();