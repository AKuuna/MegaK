const basket = new Basket();
const buyBtns = document.querySelectorAll('[data-name]');
const basketUl = document.querySelector('.basket-list');
const buyAllBtn = document.querySelector('.buy-basket');

const removeItem = () => {
    const id = Number(event.target.dataset.id);
    basket.removeProduct(id);
    createBasketUi();
};

const createBasketUi = () => {
    basketUl.innerText= " ";
    for ( const {id, text} of basket.getBasketSummary()) {
            const newLi = document.createElement('li'); //<li>
        
        newLi.innerText = text;
        newLi.addEventListener('click', removeItem);
        newLi.dataset.id = id;
        basketUl.appendChild(newLi);
        //PREVIOUS OPTION:
    // for ( const productInfo of basket.getBasketSummary()) {
    //     const {id, text} = productInfo;
    //     const newLi = document.createElement('li'); //<li>
    //     newLi.innerText = productInfo.text;
    //     newLi.addEventListener('click', removeItem);
    //     newLi.dataset.id = productInfo.id;
    //     basketUl.appendChild(newLi);
    };

    const basketTotalValue = basket.getTotalValue();
    buyAllBtn.innerText = `Make an order for ${basketTotalValue.toFixed(2)} zł.`;

    buyAllBtn.disabled = basketTotalValue === 0;
    //OTHER VERSION
    // if(basketTotalValue > 0) {
    //     buyAllBtn.disabled = false;
    // } else {
    //     buyAllBtn.disabled = true;
    // }
};

const addProductToBasket = event => {
        const name = event.target.dataset.name;
        const price = Number(event.target.dataset.price);

        const newProduct = new Product (name, price);
        basket.add(newProduct);
        createBasketUi();
};

const buyAllProducts = () => {
    const basketTotalValue = basket.getTotalValue();
    alert(`You've placed an order for ${basketTotalValue.toFixed(2)} zł`);
    basket.clear();
    createBasketUi();
};


for (const btn of buyBtns) {
    btn.addEventListener ('click', addProductToBasket);
};

buyAllBtn.addEventListener('click', buyAllProducts);

createBasketUi();

//Other approach for loop
// buyBtns.forEach(btn => {
//     btn.addEventListener('click', event => {
//         console.log('Clicked!', event.target.dataset.id);
//     });
// });

//Other approach for loop
// buyBtns[0].addEventListener('click', function (event)  {
//     console.log('Clicked!', event.target.dataset.id);
//     console.log('Clicked!', this.getAttribute('data-id'));
// });
//console.log([...buyBtns]);