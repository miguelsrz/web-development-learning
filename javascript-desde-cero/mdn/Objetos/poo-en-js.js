class Person
{
    name;

    constructor(name){
        this.name = name;
    }

    introduceSelf()
    {
        console.log(`------\nHola! Mi nombre es ${this.name}`)
    }
} // Clase padre, person

const person1 = new Person('Juan')
person1.introduceSelf()

class Teacher extends Person
{
    subject; //Nueva propiedad exclusiva del profesor
    
    constructor(name,subject)
    {
        super(name); //La superclase(clase padre) utiliza su constructor para definir esta propiedad
        this.subject = subject; // Propiedad establecida por constructoe de la clase profesor
    }

    introduceSelf()
    {
        console.log(`------\nHola! Mi nombre es ${this.name}. Yo sere profesor de la asignatura ${this.subject}`)
    } // Polimorfismo. Se utiliza mismo nombre de metodo que la superclase, pero funciona de manera diferente en el profesor

    grade(examen)
    {
        const nota = Math.floor(Math.random() * (5-1) + 1);
        console.log(`Nota del examen "${examen}": ${nota}`);
    } // Metodo exclusivo del profesor, asigna nota al azar de 1 a 5
}

const teacher1 = new Teacher('Pipe','Fisica');
teacher1.introduceSelf();
teacher1.grade('Taller 1');

class Student extends Person
{
    mayor; // Propiedad exclusiva estudiante publica
    #year; // Propiedad exclusiva estudiante privada

    constructor(name,mayor,year) // Constructor. Propiedad privada no se declara con #
    {
        super(name);
        this.mayor = mayor;
        this.#year = year; // El this con #. El otro no, porque es el parametro
    }

    introduceSelf()
    {
        console.log(`------\nHola! Mi nombre es ${this.name}. Yo soy estudiante de la carrera ${this.mayor}. Actualmente estoy en mi año ${this.#year}`)
    } //Siempre que se use this. Las propiedades privadas utilizan #
    // Polimorfismo

    puedeCursarFisica()
    {
        this.#year > 1 ? console.log(`${this.name} puede estudiar fisica!`) : console.log(`${this.name} todavia no puede estudiar fisica...`)
    } //Metodo exclusivo estudiante, condicional ternario

    #metodoPrivado() // Tambien se pueden hacer metodos privados, solo accesibles por codigo dentro de la clase
    {
        console.log('Metodo privado...')
    }

    metodoPublico()
    {
        this.#metodoPrivado(); // Accede metodo privado
    }
}

const student1 = new Student('Miguel', 'Ing. Sistemas', '3');
student1.introduceSelf();
student1.puedeCursarFisica();

student1.metodoPublico(); // Se ejecuta, el codigo de este metodo esta dentro de la clase y puede acceder al metodo privado
/*student1.#metodoprivado();*/ //No funcionara, se ejecuta fuera de la clase

