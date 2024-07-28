const bookArray = []

const addButton = document.querySelector('.add-button')
const removeButton = document.querySelector('.remove-button')
const bookList = document.querySelector('.book-list')


addButton.addEventListener('click',addBook,false)
removeButton.addEventListener('click',removeBook,false)

function addBook()
{
    const newBook = document.getElementById('text')
    bookArray.push(newBook.value)

    const bookLi = document.createElement('li')
    bookLi.innerHTML = newBook.value
    bookList.prepend(bookLi)
}


function removeBook()
{
    if(bookArray.length>0)
    {
        bookArray.pop()
        console.log(bookArray)
        bookList.removeChild(bookList.firstChild)
    }
}
