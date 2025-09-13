function greet(name: string): string {
    return `Hola ${name}`
}

const greet2 = (name: string): string => {
    return `Hola ${name}`
}

const greet3 = (name: string): string => `Hola ${name}`;

const message = greet('Goku');
const message2 = greet2('Vegeta');
const message3 = greet3('Vegeta');
console.log(message, message2, message3);

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El Papi123'
    };
}

const getUser2 = (): User => {
    return {
        uid: 'ABC-123',
        username: 'El Papi123'
    };
}


const getUser3 = (): User => ({uid: 'ABC-123', username: 'El Papi123'});

const user = getUser();
const user2 = getUser2();
const user3 = getUser3();
console.log(user, user2, user3);

const myNumbers: number[] = [1,2,3,4,5];

//Usamos una función callback que es una función que se pasa como un argumento
//a un método
myNumbers.forEach( function (value) {
    console.log({value});
});

//Esto anterior se puede simplificar como función de flecha
myNumbers.forEach( (value) => {
    console.log({value});
});

//Esto aún se puede simplificar más
//Cuando tenemos un valor que lo único que hacemos es mandarlo a otra función
//podemos hacer lo siguiente
myNumbers.forEach( console.log );

//Si queremos aportar más información
myNumbers.forEach((value, index, arr) => console.log(value, index, arr));
