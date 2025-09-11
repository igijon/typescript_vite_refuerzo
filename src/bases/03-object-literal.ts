const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 123,
        city: 'New York'
    }
};

// const spiderman = ironman; //Esto no copia, es una referencia
const spiderman = {...ironman}; // El operador spread rompe la referencia de primer nivel
//En el caso de address no rompe la referencia, porque sólo rompe la referencia de primer nivel

//si queremos clonar profundamente deep clone
const spiderman2 = structuredClone(ironman);

//En el objeto literal puedo cambiar las propiedades pero no asignar porque es const
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.address.postalCode = 234;


console.log(ironman, spiderman, spiderman2);
