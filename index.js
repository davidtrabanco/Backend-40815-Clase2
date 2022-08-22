
class Usuario{
    constructor(name, surname){
        this.nombre = name;
        this.apellido = surname;
        this.libros = [];
        this.mascostas = [];
    }

    getFullName(){
        const fullname = `${this.nombre} ${this.apellido}`
        return fullname;
    }

    addMascota(petName){
        this.mascostas.push(petName);
    }

    countMascotas(){
        return this.mascostas.length;
    }

    addBook(title, author){
        this.libros.push(
            { nombre: title, autor: author }
        )
    }

    getBookNames(){
        return this.libros.map((book)=>book.nombre)
    }
}

const usuario = new Usuario('David', 'Trabanco');

usuario.addMascota('perro');
usuario.addMascota('loro')
usuario.addMascota('tortuga')

usuario.addBook('Caballero Armadura Oxidada','Robert Fisher');
usuario.addBook('Siete fuegos','Francis Mallmann');
usuario.addBook('Orgullo y prejuicio','Jane Austen');

console.log( usuario.countMascotas() );
console.log( usuario.getBookNames() );
console.log( usuario.getFullName() );
