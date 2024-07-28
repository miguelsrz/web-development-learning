const buttonIncome = document.querySelector('.button-income')
const buttonExpense = document.querySelector('.button-expense')

const button4 = document.querySelector('.button-4')
const button5 = document.querySelector('.button-5')
const button6 = document.querySelector('.button-6')

const txtTotalBalance = document.querySelector('.txt-total-balance')
const txtLargestTransaction = document.querySelector('.txt-largest-transaction')
const txtOnlyPurchase = document.querySelector('.txt-only-purchase')
const txtFindByDescription = document.querySelector('.txt-find-by-description')
const txtIndexByAmount = document.querySelector('.txt-index-by-amount')
const txtUpdateDescription = document.querySelector('.txt-update-description')

let idCounter = 1

let arrayValues = 
[
    {ID: -2, name:'Test', value: 10},
    {ID: -1, name:'Test', value: 30},
    {ID: 0, name:'Test B', value: 20}

]

buttonIncome.addEventListener('click',addTransaction.bind(this, true))
buttonExpense.addEventListener('click',addTransaction.bind(this, false))


button4.addEventListener('click',button4Function,false)
button5.addEventListener('click',button5Function,false)
button6.addEventListener('click',button6Function,false)


function addTransaction(input)
{
    const incomeName = document.getElementById('text')
    const incomeValue = document.getElementById('number')
    console.log(input)
    console.log(incomeValue.value)
    if((incomeName.value).length > 0 && (incomeValue.value).length > 0)
    {
        if(input)
        {
            arrayValues.push({ID:idCounter, name:incomeName.value, value:Number(incomeValue.value)})
            console.log('POSITIVO')
        }else if(!input)
        {
            arrayValues.push({ID:idCounter, name:incomeName.value, value:-incomeValue.value})
            console.log('NEGATIVO')
    
        }
        idCounter++
        console.log(arrayValues)
    
        button1Function()
        button2Function()
        button3Function(input)
    }else
    {
        alert('Complete the fields')
    }
   
}


function button1Function()
{
    const spanText = document.querySelector('.txt-total-balance')
    const totalBalance = arrayValues.reduce(
        function(acumulador, valorArray)
        {
            return acumulador + valorArray.value
        }, 0
    )
    console.log(totalBalance)
    spanText.innerHTML = '$ ' + totalBalance

}
function button2Function()
{
    const spanText = document.querySelector('.txt-largest-transaction')
    const largestTransaction = arrayValues.reduce(
        function(acumulador, valorArray)
        {
            if(acumulador<Math.abs(valorArray.value) )
            {
                acumulador = valorArray.value
            }
            return acumulador
        }, 0
    )
    console.log(largestTransaction)
    spanText.innerHTML = '$ ' + largestTransaction



}
function button3Function(input4)
{
    if(!input4)
    {
        const spanText = document.querySelector('.txt-only-purchase')
    const filterPurchase = arrayValues.filter(num => num.value<0)
    console.log(filterPurchase)
    const ulText = 
    '</ul>'
    +
    filterPurchase.map(
        valuePurchase =>
        {
            return '<li>' + `Name: ${valuePurchase.name}` + '<br>' +`Value: ${valuePurchase.value}` + '</li>'
        }
    ).join('') 
    + 
    '</ul>'
    spanText.innerHTML = ulText
    }
    
}
function button4Function()
{   
    let found = false

    const spanText = document.querySelector('.txt-find-by-description')
    const valueDescription = prompt('Enter transactions name:')
    arrayValues.find(array =>
    {
        if(array.name.toLocaleLowerCase() == valueDescription.toLocaleLowerCase())
        {
            spanText.innerHTML = `Name: ${array.name}` + '<br>' +`Value: ${array.value}`
            found = true
        }
    })

    found==false ? spanText.innerHTML = 'Transaction not found with given name' : ''

}
function button5Function()
{
let found = false

    const spanText = document.querySelector('.txt-index-by-amount')
    const valueDescription = prompt('Enter transactions value:')
    arrayValues.find(array =>
    {
        if(array.value == Number(valueDescription))
        {
            spanText.innerHTML = `Name: ${array.name}` + '<br>' +`Value: ${array.value}`
            found = true
        }
    })

    found==false ? spanText.innerHTML = 'Transaction not found with given name' : ''
}
function button6Function()
{
    let found = false

    const spanText = document.querySelector('.txt-update-description')
    const valueDescription = prompt('Enter transactions name:')
    arrayValues.find(array =>
    {
        if(array.name.toLocaleLowerCase() == valueDescription.toLocaleLowerCase())
        {
            found = true
            const newDescription = prompt('Enter transactions new name:') 
            if(newDescription.length>0 && newDescription!==null)
            {
                spanText.innerHTML = `Old transaction name: ${array.name}` + '<br>'+ `New transaction name:: ${newDescription}`
                array.name = newDescription
            }else
            {
                alert('No new name given')
            }
            
        } 
    })

    if(!found)
    {        spanText.innerHTML = 'Transaction not found with given name'

    }
}
