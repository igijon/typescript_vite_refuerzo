const myArray:number[] = [1,2,3,4,5,6];
const myArrayNumStr:(number | string)[] = [1,2,3,'4',5,6];
const myArray2 = myArray;
const myArray3 = [...myArray]; //Si queremos clonar objetos realmente usar structuredClone

myArray.push(10);
myArray.push(+'10'); //Transforma el string en un número

for(const myNumber of myArray){
    console.log(myNumber);
}

console.log({myArray, myArray2}); //Al pasarse por referencia tienen los mismos valores
console.log({myArray, myArray3});
console.log(myArrayNumStr);  //Mejor indicar el tipo de dato porque a veces infiere any o never... esto lo veremos después


