// type  Owner = 'DC' | 'Marvel'; //Esto es una regla, no crea un objeto

enum Owner { //Esto sí crea un objeto 
    DC = 'DC', //0 si no pongo un valor por defecto
    Marvel = 'Marvel' //1
}

interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC //'DC' si uso type''
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];