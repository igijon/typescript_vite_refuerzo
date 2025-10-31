//import heroes from "../data/heroes.data"

import { heroes, type Hero } from "../data/heroes.data" //type hace que la importación sea más eficiente


const getHeroById = (id: number): Hero|undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if(!hero){
    //     throw new Error(`No existe un héroe con el id ${id}`);
    // }

    return hero;  
}

console.log(getHeroById(3));
