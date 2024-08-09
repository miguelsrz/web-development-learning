// OBTAIN DOM ELEMENTS - ESSENTIAL FOR RENDERING PAGE
const asideCartContainer = document.querySelector('.aside-myorder-details');
const mainCardContainer = document.querySelector('.card-container');
const dropDownContent = document.querySelectorAll('.drop-down-content');

const deleteFromCartParent = document.querySelector('.delete-from-cart');
const navTotalProducts = document.querySelector('.shopping-cart-item-num');
const shoppingCartTotalProducts = document.querySelector('#shopping-cart-counter');
const shoppingCartTotalPrice = document.querySelector('#shopping-cart-total');

const error404 = document.querySelector('.error-display');
const isNoContent = document.querySelectorAll('.error404');


let totalProductsCounter = 0;
let totalProductsPrice = 0;

// ------------------------------------------------------

// PRODUCT CLASS AND INFORMATION
class CreateProduct
{
  id;
  title;
  description
  img;
  price;

  constructor(jsonData) //Receives json data and applies each value of the json into the new instance
  {
    this.id = jsonData.id;
    this.title = jsonData.title;
    this.img = jsonData.img;
    this.alt = jsonData.alt;
    this.price = jsonData.price;
    this.description = jsonData.description;

  }

  createMainCardProductHTML = function()
  {
    // CREATING ELEMENTS AND ADDING THEIR CLASSES - NUM INDICATES HIERARCHY

    // SECTION CONTAINER
    const sectionContainer = document.createElement('section'); // (1) MAIN CARD CONTAINER
    sectionContainer.classList.add('card-item','drop-down-button','view-product-button');
    sectionContainer.setAttribute('data-target','aside-product-view')
    sectionContainer.id = this.id;
    // --------------------------------------------------------------

    // PRODUCT IMG
    const figureContainerProduct = document.createElement('figure'); // (2) FIGURE CONTAINER
    figureContainerProduct.classList.add('product-figure'); 

    const imgProduct = document.createElement('img'); // (3) IMG 
    imgProduct.src = this.img;
    imgProduct.alt = this.alt;

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
    figureContainerSVG.classList.add('no-dropdown','add-to-cart' , 'add-to-cart-button');

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
    // DINAMICALLY CHANGING SHOPPING CART INFORMATION
    totalProductsCounter++;
    totalProductsPrice += this.price;

    navTotalProducts.innerText = shoppingCartTotalProducts.innerText = totalProductsCounter;
    shoppingCartTotalPrice.innerText = totalProductsPrice;

    // CREATING ELEMENTS AND ADDING THEIR CLASSES - NUM INDICATES HIERARCHY

    // CONTAINERS
    const divMainContainer = document.createElement('div'); // (1) MAIN CONTAINER
    divMainContainer.classList.add('aside-myorder-article-box');    
    divMainContainer.setAttribute('data-target', this.id)

    const sectionStructure = document.createElement('section'); // (2) PRODUCT STRUCTURE - SEMANTIC
    sectionStructure.classList.add('objhovfoc-gray', 'aside-myorder-article')
    // --------------------------------------------------------------


    // GRAY OVERLAY ON PRODUCT HOVER
    const divHoverOverlay = document.createElement('div'); // (3) HOVER GRAY OVERLAY
    divHoverOverlay.classList.add('overlay-gray','no-dropdown');

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
    buttonRemove.classList.add('button-primary','delete-from-cart-button','no-dropdown');
    buttonRemove.textContent = 'Remove from cart';

    const buttonView = document.createElement('button'); // (4) VIEW PRODUCT BUTTON
    buttonView.classList.add('button-secondary','button-view-product');

    buttonView.textContent = 'View product';
    // --------------------------------------------------------------
    // --------------------------------------------------------------

    // APPENDING CONTENT

    figureContainer.appendChild(imgProduct);

    articleInfo.appendChild(productTitle);
    divDetailsContainer.append(articleInfo, productPrice);

    divProductOptions.append(divHoverOverlay,buttonRemove, buttonView);
  /**/ 
    sectionStructure.append(figureContainer, divDetailsContainer, divProductOptions);

    divMainContainer.appendChild(sectionStructure);

    asideCartContainer.appendChild(divMainContainer);
  }

  updateAsideProductView = function()
  {
    const asideProductView = document.querySelector('#aside-product-view')
    const productImg = document.querySelector('#apv-img');
    const productPrice = document.querySelector('#apv-price');
    const productTitle = document.querySelector('#apv-title');
    const productDescription = document.querySelector('#apv-description');

    asideProductView.setAttribute('data-target', this.id)
    productImg.setAttribute('src', this.img);
    productImg.setAttribute('alt', this.alt);
    productPrice.textContent = '$ ' + this.price;
    productTitle.textContent = this.title;
    productDescription.textContent = this.description
  }

} 
// ------------------------------------------------------

// FUNCTION TO FECTH JSON DATA AND CREATE INSTANCES

let productInstancesArray = [];
async function loadProducts() 
{
  try
  {
    const response = await fetch('data/yard-sale-products.json'); // Fetchs json
    if(!response.ok)
    {
      throw new Error('Response was not OK'); // Incase it doesnt fetch
    }

    const productsDataArray = await response.json(); // Gets the response of each object into an array
    console.log(productsDataArray)

    productInstancesArray = productsDataArray.map(data => new CreateProduct(data))

    productInstancesArray.forEach(product =>
    {
      product.createMainCardProductHTML();
    }
    )
    // QUERY SELECTORS AND EVENT LISTENERS: THEY WAIT FOR GENERATED CONTENT TO INCLUDE THEM

    const dropDownButtons = document.querySelectorAll('.drop-down-button');
    const viewProduct = document.querySelectorAll('.view-product-button');
    const buttonAddToCart = document.querySelectorAll('.add-to-cart-button');


    dropDownButtons.forEach( element => element.addEventListener("click",  handleDropdown));
    buttonAddToCart.forEach(button => button.addEventListener('click', addToCart))
    viewProduct.forEach(item =>
      {
        item.addEventListener('click', asideProductViewPrepareUpdate)
      }
      );


  }catch(error)
  {
    console.error('Failed to load products: ',error);
  }
}

document.addEventListener('DOMContentLoaded', ()=>
{
  loadProducts();
  
})

// ------------------------------------------------------


// EVENT HANDLERS


// EVENT HANDLERS
function handleDropdown(event) {
    console.log('b')
    event.stopPropagation();
    const button = event.target; // Use the event.target, the clicked element
    if(!button.closest('.no-dropdown'))
    {
      const className = "display-none"; // Spcecify the class name one time
      const contentId = button.closest('.drop-down-button').getAttribute('data-target'); // Finds the nearest drop-down-parent container
      let myContent = document.getElementById(contentId); // The drop down contents of the clicked item, if found

      dropDownContent.forEach( element => {
        if (element !== myContent) {
          element.classList.add(className);
        }
      }); // Document listener no funciona con contenido dropdown, aqui verificamos si es dropdown content. Todo lo que no sea el contenido que fue activado obtiene display-none
   

      // If the clicked have content, toggle if it is shown or not.
      if (myContent){
        myContent.classList.toggle(className);
      } 
    }
    
  }

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

function addToCart(event)
{
      let getProduct
      const productByID = event.target.closest('.card-item');
      const productByData = event.target.closest('[data-target]');
      if(productByID)
      {
        getProduct = productInstancesArray.find(product => product.id === +productByID.id)
      }else if(productByData)
      {
        getProduct = productInstancesArray.find(product => product.id === +productByData.getAttribute('data-target'))

      }
      
      console.log(getProduct)
      getProduct.createShoppingCarProductHTML();
}

deleteFromCartParent.addEventListener('click',(event)=>
{
  event.stopPropagation();
  const button = event.target.closest('.delete-from-cart-button')
  if(button)
  {
    const cartProduct = button.closest('.aside-myorder-article-box')
    const getProduct = productInstancesArray.find(product => product.id === +cartProduct.getAttribute('data-target'))
    
    totalProductsCounter--
    totalProductsPrice -= getProduct.price;
    navTotalProducts.innerText = shoppingCartTotalProducts.innerText = totalProductsCounter;
    shoppingCartTotalPrice.innerText = totalProductsPrice;

    asideCartContainer.removeChild(cartProduct)
  }

})


function asideProductViewPrepareUpdate(event)
{       
        let getProduct
        const productByID = event.target.closest('.card-item');
        const productByData = event.target.closest('.aside-myorder-article-box');
        const isCartButton = event.target.closest('.button-view-product')

        if(!event.target.closest('.add-to-cart') && productByID)
        {
          getProduct = productInstancesArray.find(product => product.id === +productByID.id);
          getProduct.updateAsideProductView();
        }else if(productByData && isCartButton)
        {
          getProduct = productInstancesArray.find(product => product.id === +productByData.getAttribute('data-target'));
          getProduct.updateAsideProductView();
        }
}

let timeout;
isNoContent.forEach(element =>
{
  element.addEventListener('click',()=>
  {
    if(timeout)
    {
      clearTimeout(timeout);
    }

    error404.classList.remove('display-none');
    timeout = setTimeout(()=>error404.classList.add('display-none'),1200)
  }
  )
}
)
// ------------------------------------------------------







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
// ------------------------------------------------------
