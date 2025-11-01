
const myPromise = new Promise<number>( (resolve, reject) => {
    //Cuerpo de la promesa. Tarea que se ejecutará 
    setTimeout(() => {
        //!si presté dinero y me prometieron devolverlo, yo quiero mi dinero!!
        // resolve(100); //En este caso es cuando se resuelve correctamente, y en este caso estamos mandando un valor 100
        reject('Mi amigo se perdió'); //rechaza la promesa
    }, 2000) //2 seg
} ); 

myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);       
}).catch( reason => {
    console.warn(reason);
}).finally(()=>{
    console.log('Pues a seguir con la vida');
    
});