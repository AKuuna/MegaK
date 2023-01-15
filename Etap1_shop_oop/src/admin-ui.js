const addProductForm = document.querySelector('.form-add-product');

const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');

const productsUl = document.querySelector('.products-list');


const saveProductsToLocalStorage = (name, price) => {
    const productList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
    productList.push({name, price});
    // means: push {
    //     name: name,
    //     price: 
    // }
    localStorage.setItem('shop-products', JSON.stringify(productList));
};



const addProductToShop = (name, price) => {
    const newLi = document.createElement('li'); //<li>
    
    const newStrong = document.createElement('strong');
    newStrong.innerText = name;
    
    const newPriceText = document.createTextNode(` - ${price.toFixed(2)}`); //text element
    
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-buy');
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.innerText = "Buy!";
    newBtn.addEventListener('click', addProductToBasket);
    
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

const loadProductsFromLocalStorage = () => {
    const productList = JSON.parse(localStorage.getItem('shop-products')) ?? [];

    for (const {name, price} of productList) {
        addProductToShop(name, price);

        //other way, explaining one above:
    //for (const product of productList) {
        //addProductToShop(product.name, product.price);
        //destructuring this:
        //const {name, price} = product;
        //addProductToShop(name, price);
    }
}

const handleAddProductToShop = event => {
    event.preventDefault();
    
    const nameFromInput = nameInput.value;
    const priceFromInput = Number(priceInput.value);

    addProductToShop(nameFromInput, priceFromInput);
    saveProductsToLocalStorage(nameFromInput, priceFromInput);
};


addProductForm.addEventListener('submit', handleAddProductToShop);

loadProductsFromLocalStorage();
