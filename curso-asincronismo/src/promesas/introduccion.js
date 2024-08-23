const promise = new Promise(function(resolve,reject){
    resolve('HEY!');
})

const cows = 25;

const countCows = new Promise(function(resolve,reject)
{
    if(cows>10)
    {
        resolve('WE HAVE MORE THAN 10 COWS');
    }else
    {
        reject('LESS THAN 10 COWS');
    }
})

countCows
    .then((result)=>
    {
        console.log(result);
    })
    .catch((error)=>
    {
        console.log(error);
    })
    .finally(()=>console.log('FINALLY'))

    //Apoyar con curso fundamentos JS clase 54