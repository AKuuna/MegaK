const basket = new Basket();

const buyBtns = document.querySelectorAll('[data-id]');

buyBtns[0].addEventListener('click', event => {
    console.log('Clicked!', event.target);
});
//console.log([...buyBtns]);