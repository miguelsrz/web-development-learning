// FUNCION CONSTRUCTORA PARA LIBROS

function Libro(titulo, autor, anioPublicacion)
{
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
    this.mostrarInfo = function()
    {
        return `Titulo: ${this.titulo}. Autor: ${this.autor}. Anio de Publicacion: ${this.anioPublicacion}.  `
    }
} //Se declara una funcion constructora con su nombre en inicial mayuscula
// Se asignan propiedades especificas a crear por cada objeto.
// Se crea un metodo que permite visualizar la informacion propia del objeto creado

// Nuevos objetos de libro

const libro1 = new Libro('La Bruja', 'German Caicedo', 1994)
const libro2 = new Libro('El Principito', 'Antoine de Saint-Exupery', 1943)

console.log(libro1.mostrarInfo())
console.log(libro2.mostrarInfo())

// EJERCICIO

function Revista(titulo, editor, anioPublicacion, numeroEdicion) {
    // Tu código aquí
    this.titulo = titulo;
    this.editor = editor;
    this.anioPublicacion = anioPublicacion;
    this.numeroEdicion = numeroEdicion;

    this.mostrarInfo = function()
    {
        return `Titulo: ${this.titulo}. Editor: ${this.editor}. Anio de Publicacion: ${this.anioPublicacion}. Numero de Edicion: ${this.numeroEdicion}. `
    }

  }
  
  // Crear instancias de Revista
  var revista1 = new Revista('REVISTA 123ABC', 'MIGUEL SUAREZ', '2024', 'VII');
  var revista2 = new Revista('REVISTA 789XYZ', 'ANGEL MONTIEL', '2034', 'II');
  
  // Mostrar la información de cada revista
  console.log('-----------------------------');
  console.log(revista1.mostrarInfo());
  console.log(revista2.mostrarInfo());
  