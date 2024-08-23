const urlYoutube = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCavruLfvw0AUFL5J_b4teTQ&part=snippet%2Cid&order=date&maxResults=16';
const urlSpotify = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DZ06evO2T8209&offset=0&limit=16';

const toggleLightDark = document.querySelector('#toggleLightDark');
const contentParentYoutube = document.querySelector('#contentParentYoutube') || null;
const contentParentSpotify = document.querySelector('#contentParentSpotify') || null;


const optionsYoutube = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '433a48b06fmsheafd2822560bec9p1da029jsn7b27f66f436a',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const optionsSpotify = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '433a48b06fmsheafd2822560bec9p1da029jsn7b27f66f436a',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlAPI, optionsAPI) {
   
    const response = await fetch(urlAPI, optionsAPI);
    console.log(response)
    const data = await response.json();
    return data
}

(async () =>
{
    try
    {
        const videos = await fetchData(urlYoutube, optionsYoutube); // urlYoutube
        const songs = await fetchData(urlSpotify, optionsSpotify);
        console.log(songs)

        let viewVideos = `${videos.items.map(video=>
        `<a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" class="group relative">
            <div
            class="transition duration-200 ease-in-out w-full bg-gray-500 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-base text-gray-700 dark:text-gray-400 truncate" >
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </a>`
        ).join('')}`


        let viewSongs = `${songs.items.map(song=>
        `<div class="flex flex-col justify-between">
            <a href="${song.track.external_urls.spotify}" target="_blank" class="group relative mb-2">
                <div
                class="transition duration-200 ease-in-out w-full bg-gray-500 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:aspect-none">
                <img src="${song.track.album.images[1].url}" alt="${song.track.name}" class="w-full">
                </div>
                    <div class="mt-4 flex justify-between">
                    <h3 class="text-base text-gray-700 dark:text-gray-400 truncate">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${song.track.name}
                    </h3>
                </div>
            </a>
            <media-controller audio>
            <audio
                slot="media"
                src="${song.track.preview_url}""
                crossorigin
            ></audio>
            <media-control-bar>
                <media-seek-backward-button></media-seek-backward-button>
                <media-play-button></media-play-button>
                <media-seek-forward-button></media-seek-forward-button>
                <media-time-display></media-time-display>
                <media-time-range></media-time-range>
                <media-duration-display></media-duration-display>
                <media-mute-button></media-mute-button>
            </media-control-bar>
            </media-controller>
        </div>
        `
        ).join('')}`

        contentParentYoutube.innerHTML = viewVideos;
        contentParentSpotify.innerHTML = viewSongs;
        
        // Not the best way, but works in this context
        console.log(videos)

        Swal.fire(
            {
                icon: "success",
                iconColor: '#609a1a',
                title: "Great!",
                text: "API's loaded correctly",
                confirmButtonColor: "#0891b2"
            }
        )
    } catch(error)
    {
        Swal.fire(
            {
                icon: "error",
                title: "Oops...",
                text: "API didn't load correctly!",
                footer: '<a href=" ">Click here! To reload page</a>',
                confirmButtonColor: "#0891b2"
            }
        )
        console.error('Error: ' + error)
    }
})();

toggleLightDark.addEventListener('click', () =>
{
    document.documentElement.classList.toggle('dark')

    console.log('Toggle')
})

document.addEventListener('DOMContentLoaded',()=>
{
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
    {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})

// // Whenever the user explicitly chooses light mode
  
// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')