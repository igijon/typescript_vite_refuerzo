//Si no cambiamos el valor, es mejor crear las variables como constantes porque son mucho 
//ligeras
const firstName: string = 'Inma'; //Se puede indicar el tipo, si no, TS lo infiere
const lastName = 'Gijón';

let diceNumber = 5; 
diceNumber = 3;
// diceNumber = '3'; 
// Nos va a saltar un error pero como JS sí lo permite pues al final le deja 
// aunque el editor se queje

console.log(firstName, lastName);
const containsLetterG = lastName.includes('G');

console.log({containsLetterG});


console.log({containsLetterG, diceNumber, firstName, lastName});
