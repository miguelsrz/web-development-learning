playlistArray = []
removedArray = []

const ulPlaylist = document.querySelector('.ul-playlist')
const addButton = document.querySelector('.add-button')
const removeButton = document.querySelector('.remove-button')
const undoButton = document.querySelector('.undo-button')

addButton.addEventListener('click',addSong,false)
removeButton.addEventListener('click',removeSong,false)
undoButton.addEventListener('click',undoSong,false)

function addSong(newSong)
{
    newSong = document.getElementById('text').value
    playlistArray.unshift(newSong)
    console.log(playlistArray)

    let liPlaylist = document.createElement('li')
    liPlaylist.innerHTML = playlistArray[0]

    ulPlaylist.prepend(liPlaylist)

}

function removeSong()
{
    if(playlistArray.length>0)
    {
        removedArray.unshift(playlistArray.shift(0))
        ulPlaylist.removeChild(ulPlaylist.firstChild)
        console.log(removedArray)
    }else
    {
        alert('Invalid: No songs to remove')
    }
}

function undoSong()
{
    let liPlaylist = document.createElement('li')
    liPlaylist.innerHTML = removedArray.shift(0)

    ulPlaylist.prepend(liPlaylist)
}