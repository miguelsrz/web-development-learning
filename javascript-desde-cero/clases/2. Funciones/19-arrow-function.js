// Funcion tradicional
const saludo = function(name)
{
    return `Hy, my name is ${name}`
}

// Arrow function
const saludoFlecha = (name) =>
{
    return `Hi, my name is ${name}. This is an arrow function`
}

// Arrow function implicita (Puede tener varios parametros, en ese caso debe ir en parentesis)
const saludoFlechaImplicito = name => `Hi, my name is ${name}. This is an IMPLICIT arrow function`
