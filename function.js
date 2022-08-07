// ¿Como estás? Clase de gestión de Proyectos
// Alumno: Miguel Angel Castañeda Aguilera

console.log("llegamos al punto 1")

function myfunction()
{   
    alert("¿Como estás?");  
}  

console.log("llegamos al punto 2 - Gracias")

// Feature-1 Añadir la clase A con los atributos : foo bar
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  // crea un objeto
  const person1 = new Person('Miguel');
  const person2 = new Person('Castaneda');
  console.log("Feature-1")
  
  console.log(person1.name); // Miguel
  console.log(person2.name); // Castañeda
