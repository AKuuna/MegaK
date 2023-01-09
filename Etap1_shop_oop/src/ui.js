const basket = new Basket();
const buyBtns = document.querySelectorAll('[data-name]');
const basketUl = document.querySelector('.basket-list');

const createBasketUi = () => {
    basketUl.innerText= " ";
    for ( const productInfo of basket.getBasketSummary()) {
        const newLi = document.createElement('li'); //<li>
    newLi.innerText = productInfo;
    basketUl.appendChild(newLi);
    }
};

const addProductToBasket = event => {
        const name = event.target.dataset.name;
        const price = Number(event.target.dataset.price);

        const newProduct = new Product (name, price);
        basket.add(newProduct);
        createBasketUi();
}

for (const btn of buyBtns) {
    btn.addEventListener ('click', addProductToBasket);
}

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