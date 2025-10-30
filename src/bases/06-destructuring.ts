
const person = {
    name: 'Tony',
    age: 45, 
    key: 'Ironman'
};

// const name = person.name;
// const key = person.key;
// const age = person.age;

const  {name: ironmanName, key, age} = person;

console.log({ironmanName, age, key});


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string; 
}

const useContext = ( {key, name, age, rank = 'Sin rango'}: Hero ) => {
    
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank
    }
}

const {rank, keyName, user} = useContext(person);
const {name} = user;
console.log({rank, keyName, name});
