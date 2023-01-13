const addProductForm = document.querySelector('.form-add-product');

const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');

const productsUl = document.querySelector('.products-list');

const addProductToShop = event => {
    event.preventDefault();

    const name = nameInput.value;
    const price = Number(priceInput.value);

    const newLi = document.createElement('li'); //<li>
    
    const newStrong = document.createElement('strong');
    newStrong.innerText = name;

    const newPriceText = document.createTextNode(` - ${price.toFixed(2)}`); //text element

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-buy');
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.innerText = "Buy!";
    newBtn.addEventListener('click',addProductToBasket);

    //Structure build
    newLi.appendChild(newStrong); //<li><strong>...
    newLi.appendChild(newPriceText);//<li><strong>..."text"
    newLi.appendChild(newBtn); //<li><strong>..."text" <button>

    productsUl.appendChild(newLi);
    // console.log(event.target.elements['product-name'].value);
    // console.log(event.target.elements['product-price'].value);
    // console.log(nameInput.value);
    // console.log(typeof price);
};

addProductForm.addEventListener('submit', addProductToShop);
