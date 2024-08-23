/*
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=> response.json())
  .then((data)=> console.log(data));
*/

  // El fetch() hace una peticion, utiizando metodo GET para obtener datos desde un servidor
  
  const listElement = document.querySelector('.posts');
  const postTemplate = document.getElementById('single-post');
  const form = document.querySelector('#new-post form');
  const fetchButton = document.querySelector('#available-posts button');
  const postList = document.querySelector('#posts-container');

  var my;
  
  function sendHTTPRequest(method, url, data)
  {
    return fetch(url,
      {
        method: method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((response)=>{
          return response.json();
        });
  }

  async function fetchPosts()
  {
    const responseData = await sendHTTPRequest("GET",'https://jsonplaceholder.typicode.com/posts');
    console.log(responseData);
    const listOfPosts = responseData;

    for(const post of listOfPosts)
    {
      makingPost(post);
    }
  }

  fetchButton.addEventListener('click',fetchPosts);


  async function createPost(title, content)
  {
    const userId = Math.floor(Math.random());
    const post = {
      title: title,
      body: content,
      userId: userId
    };

    sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
    makingPost(post);
  }

  form.addEventListener('submit', (event) =>
  {
    event.preventDefault();
    const formTitle = event.currentTarget.querySelector('#title').value;
    const formContent = event.currentTarget.querySelector('#content').value;

    createPost(formTitle, formContent);
  } )


  function makingPost(newPost)
  {
      const postContainer = document.createElement('article');
      postContainer.id = newPost.id;
      postContainer.classList.add('post-item');

      const title = document.createElement('h2');
      title.textContent = newPost.title;

      const body = document.createElement('p');
      body.textContent = newPost.body;

      const button = document.createElement('button');
      button.textContent = 'DELETE Content';

      postContainer.append(title);
      postContainer.append(body);
      postContainer.append(button);

      listElement.append(postContainer);
  }


postList.addEventListener('click',(event)=>
{
  if(event.target.tagName === 'BUTTON')
  {
    const postHTML = event.target.parentNode;
    sendHTTPRequest('DELETE',`https://jsonplaceholder.typicode.com/posts/${postHTML.id}`);
    listElement.removeChild(postHTML);
  }
})
