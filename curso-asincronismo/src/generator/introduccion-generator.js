function* gen() 
{
    yield 1;
    yield 2;
    yield 3;
}

const g1 = gen();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

function* iterate(array)
{
    for (let element of array)
    {
        yield element
    }
}

const arrayExample = ['A','B','C','D','E','F','G','H']
const it1 = iterate(arrayExample);

console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
