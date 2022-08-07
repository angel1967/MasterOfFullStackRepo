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

// Feature-2 Añadir la clase B
class B {
    constructor(name1) {
      this.name1 = name1;
    }
  }
  
  // crea un objeto clase B
  const person3 = new B('Micky');
  const person4 = new B('Aguilera');
  console.log("Feature-2")
  
  console.log(person3.name1); // Micky
  console.log(person4.name1); // Aguilera


// Feature-1 Añadir la clase C en Feature-3
class C {
    constructor(name2) {
      this.name2 = name2;
    }
  }
  
  // crea un objeto
  const person5 = new C('Michael');
  const person6 = new C('CastanedaAguilera');
  console.log("Feature-3")
  
  console.log(person5.name2); // Michael
  console.log(person6.name2); // CastanedaAguilera
  
