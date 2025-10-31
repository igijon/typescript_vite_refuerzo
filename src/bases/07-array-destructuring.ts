const characterNames = ['Goku', 'Vegueta', 'Trunks'];

const [ ,, trunks ] = characterNames; //Como desestructurando arrays necesito las posiciones, pues dejo vacías las posiciones que no necesito desestructurar y pongo las comas
//No es como objetos

console.log({trunks});


const returnsArrayFn = () => {
    return ['ABC', 123] as const; //Esto le dice a TS que el array siempre va a tener en primera posición un string y unos números al final
}

const [ letters, numbers ] = returnsArrayFn();

console.log(numbers + 100);
console.log(letters + 100);

//Tarea: Implementar useState

const useState = ( initialValue: string ) => {
    return [ 
        initialValue, 
        ( value: string  ) => {
            console.log( value );
        
        }
    ] as const;
}

const [ name, setName ] = useState('Goku');
console.log( name );
setName('Vegueta');
