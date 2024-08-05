// OBTAIN DOM ELEMENTS
const dropDownButtons = document.querySelectorAll('.drop-down-button');
const dropDownContent = document.querySelectorAll('.drop-down-content')

const asideCartContainer = document.querySelector('.aside-myorder-details');
const mainCardContainer = document.querySelector('.card-container');
// ------------------------------------------------------

// PRODUCT CLASS AND INFORMATION
class CreateProduct
{
  id;
  title;
  img;
  price;

  constructor(id,title,img,alt,price)
  {
    this.id = id;
    this.title = title;
    this.img = img;
    this.alt = alt;
    this.price = price
  }

  createMainCardProductHTML = function()
  {
    // CREATING ELEMENTS AND ADDING THEIR CLASSES - NUM INDICATES HIERARCHY

    // SECTION CONTAINER
    const sectionContainer = document.createElement('section'); // (1) MAIN CARD CONTAINER
    sectionContainer.classList.add('card-item');
    sectionContainer.id = this.id;
    // --------------------------------------------------------------

    // PRODUCT IMG
    const figureContainerProduct = document.createElement('figure'); // (2) FIGURE CONTAINER
    figureContainerProduct.classList.add('product-figure'); 

    const imgProduct = document.createElement('img'); // (3) IMG 
    imgProduct.setAttribute('src',this.img);
    imgProduct.setAttribute('alt',this.alt);
    // --------------------------------------------------------------

    // CARD INFO
    const divProductInfo = document.createElement('div'); // (2) CARD INFO CONTAINER
    divProductInfo.classList.add('card-info');

    const divProductText = document.createElement('div'); // (3) TEXT CONTAINER
    divProductText.classList.add('product-text');

    const productPrice = document.createElement('p'); // (4) PRODUCT PRICE
    productPrice.classList.add('product-price');
    productPrice.textContent = '$ ' + this.price;;

    const productTitle = document.createElement('p'); // (4) PRODUCT TITLE
    productTitle.classList.add('product-title');
    productTitle.textContent = this.title;

    const figureContainerSVG = document.createElement('figure'); // (3) FIGURE CONTAINER
    figureContainerSVG.classList.add('add-to-cart');

    const imgShoppingSVG = document.createElement('img'); // (4) IMG SVG
    imgShoppingSVG.setAttribute('src','assets/icons/bt_add_to_cart.svg');
    imgShoppingSVG.setAttribute('alt','Shopping-Cart Icon');
    // --------------------------------------------------------------

    // APPENDING CONTENT
    // --------------------------------------------------------------
    figureContainerProduct.appendChild(imgProduct);

    divProductText.append(productPrice, productTitle);
    figureContainerSVG.appendChild(imgShoppingSVG);
    divProductInfo.append(divProductText, figureContainerSVG);

    sectionContainer.append(figureContainerProduct, divProductInfo);

    mainCardContainer.appendChild(sectionContainer);

  }

  createShoppingCarProductHTML = function()
  {
    // CREATING ELEMENTS AND ADDING THEIR CLASSES - NUM INDICATES HIERARCHY

    // CONTAINERS
    const divMainContainer = document.createElement('div'); // (1) MAIN CONTAINER
    divMainContainer.classList.add('aside-myorder-article-box');

    const sectionStructure = document.createElement('section'); // (2) PRODUCT STRUCTURE - SEMANTIC
    sectionStructure.classList.add('objhovfoc-gray', 'aside-myorder-article')
    // --------------------------------------------------------------


    // GRAY OVERLAY ON PRODUCT HOVER
    const divHoverOverlay = document.createElement('div'); // (3) HOVER GRAY OVERLAY
    divHoverOverlay.classList.add('overlay-gray');

    // --------------------------------------------------------------


    // PRODUCT IMG
    const figureContainer = document.createElement('figure'); // (3) FIGURE CONTAINER - SEMANTIC
    figureContainer.classList.add('aside-product-figure');

    const imgProduct = document.createElement('img'); // (4) PRODUCT IMAGE
    imgProduct.setAttribute('src', this.img);
    imgProduct.setAttribute('alt',this.alt);
    // --------------------------------------------------------------
    
    // PRODUCT DETAILS
    const divDetailsContainer = document.createElement('div'); // (3) PRODUCT DETAILS CONTAINER
    divDetailsContainer.classList.add('aside-myorder-product-info');

    const articleInfo = document.createElement('article'); // (4) ARTICLE CONTAINING P
    articleInfo.classList.add('aside-product-info');

    const productTitle = document.createElement('p'); // (5) P CONTAINING PRODUCT TITLE
    productTitle.classList.add('aside-product-title');
    productTitle.textContent = this.title;

    const productPrice = document.createElement('p'); // (4) P CONTAINING PRODUCT PRICE
    productPrice.classList.add('aside-product-price');
    productPrice.textContent = '$ ' + this.price;

    // --------------------------------------------------------------

    // PRODUCT OPTIONS
    const divProductOptions = document.createElement('div'); // (3) DIV CONTAINER FOR PRODUCT BUTTONS ON HOVER
    divProductOptions.classList.add('aside-product-options');

    const buttonRemove = document.createElement('button'); // (4) REMOVE PRODUCT BUTTON
    buttonRemove.classList.add('button-primary');
    buttonRemove.textContent = 'Remove from cart';

    const buttonView = document.createElement('button'); // (4) VIEW PRODUCT BUTTON
    buttonView.classList.add('button-secondary');
    buttonView.textContent = 'View product';
    // --------------------------------------------------------------
    // --------------------------------------------------------------

    // APPENDING CONTENT

    figureContainer.appendChild(imgProduct);

    articleInfo.appendChild(productTitle);
    divDetailsContainer.append(articleInfo, productPrice);

    divProductOptions.append(buttonRemove, buttonView);

    sectionStructure.append(divHoverOverlay, figureContainer, divDetailsContainer, divProductOptions);

    divMainContainer.appendChild(sectionStructure);

    asideCartContainer.appendChild(divMainContainer);
  }

} 

const productsDataArray = ([
  {
    id:100,
    title: 'Classic bike',
    img: 'assets/img/bike.jpg',
    alt: 'Bike',
    price: '125,99'
  },
  {
    id:101,
    title: 'Literature books',
    img: 'assets/img/books.jpg',
    alt: 'Books',
    price: '65,25'
  },
  {
    id:102,
    title: 'Professional camera',
    img: 'assets/img/camera.jpg',
    alt: 'Camera',
    price: '299,99'
  }
])

let productInstancesArray = [];
// ------------------------------------------------------

// CREATE CONTENT AUTOMATICALLY (Como el ejercicio Superheroe con JSON, pero sin JSON)
function renderProducts()
{
  for(product of productsDataArray)
    {
      const newProduct = new CreateProduct(product.id,product.title, product.img, product.alt, product.price);
      productInstancesArray.push(newProduct);

      newProduct.createMainCardProductHTML();
    }
}
renderProducts();
// ------------------------------------------------------

// DROPDOWN HANDLERS
function handleDropdown(event) {
    event.stopPropagation();
    const button = event.target; // Use the event.target, the clicked element
    const className = "display-none"; // Spcecify the class name one time
    const contentId = button.closest('.drop-down-button').getAttribute('data-target'); // Finds the nearest drop-down-parent container
    let myContent = document.getElementById(contentId); // The drop down contents of the clicked item, if found

    dropDownContent.forEach( element => {
      if (element !== myContent) {
        element.classList.add(className);
      }
    });

    // If the clicked have content, toggle if it is shown or not.
    if (myContent){
      myContent.classList.toggle(className);
    } 
  }
  
dropDownButtons.forEach( element => element.addEventListener("click",  handleDropdown));


document.documentElement.addEventListener('click',(event)=>
{
  const isDropDown = event.target.classList.contains('drop-down-content');
  const isParentDropDown = event.target.closest('.drop-down-content') !==null;
  const isLink = (event.target.nodeName =='A');
  const isClose = event.target.closest('.drop-down-close');

  if(!isDropDown && (!isParentDropDown || isLink || isClose))
  {
    dropDownContent.forEach(element=>
      {
         if(!element.classList.contains('display-none')) 
         {
              element.classList.toggle('display-none')
         }
      }
    )
  }
})
// ------------------------------------------------------

// ADD TO CART METHOD
const buttonAddToCart = document.querySelectorAll('.add-to-cart');

function addToCart(event)
{
      const productId = event.target.closest('.card-item').id;
      const getProduct = productInstancesArray.find(product => product.id === +productId)
      console.log(getProduct)
      getProduct.createShoppingCarProductHTML();
}

buttonAddToCart.forEach(button => button.addEventListener('click', addToCart))
// ------------------------------------------------------

/* CARD MAIN PAGE HTML STRUCTURE

  <section class="card-item">

              <figure class="product-figure">
                          <img src="assets/img/bike.jpg" alt="Bike">
              </figure>

              <div class="card-info">
                          <div class="product-text">
                                      <p class="product-price">
                                                    $ 125,99
                                      </p>

                                      <p class="product-title">
                                                    Classic bike
                                      </p>
                            
                          </div>
                          <figure class="add-to-cart">
                            <img src="assets/icons/bt_add_to_cart.svg" alt="Shopping-Cart Icon">
                        </figure>
            </div>

  </section>

*/

/* SHOPPING CAR PRODUCT HTML STRUCTURE

<div class="aside-myorder-article-box">
  <section class="objhovfoc-gray aside-myorder-article">
                                    
        <div class="overlay-gray"></div>
        
        <figure class="aside-product-figure">
                                            <img src="assets/img/bike.jpg" alt="Bike">
        </figure>

        <div class="aside-myorder-product-info">
        
              <article class="aside-product-info">
                                                <p class="aside-product-title">
                                                    Classic bike
                                                </p>             
              </article> 

              <p class="aside-product-price">
                                                    $ 125,99
              </p>
                                            
        </div>
                                        
        <div class="aside-product-options">
                                            <button  href="#" class="button-primary">Remove from cart</button>
                                            <button  href="#" class="button-secondary">View product</button>
        </div>
                                    
  </section>
</div>
*/

/* */

