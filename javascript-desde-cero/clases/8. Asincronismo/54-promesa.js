// JS tiene clase global Promise, que tiene dos parametros (resolve, reject
// creados por JS engine


const promise = new Promise(
    // Clase debe devolver los dos parametros, dentro de ellos sea el valor que sea\
    // Inclusive funciones y otras promesas
    (resolve, reject) =>
    {
        setTimeout(()=>
        {
            let operationSuccessful = true;
            if(!operationSuccessful)
                {
                    resolve('Operacion exitosa!'); //Se resuelve y devolvera un string como resultado
                }else
                {
                    reject('Fallo la operacion') // Se rechaza y devolvera string como error
                }
        }, 2000)
        
    }
)

promise
    .then((successMessage) => // Encadena promesa, que trabaja el valor devuelto por resolve
    {
        console.log(successMessage);
    })
    .catch((errorMessage) => // Encadena promesa, que trabaja el valor devuelto por reject, que es considerado un error
    {
        console.log(errorMessage);
    })