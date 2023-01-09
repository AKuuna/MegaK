class Basket{
    constructor() {
        this.items = [];
        this.basketValue = 0;
    }

    add(item) {
        this.items.push(item);
        this.addToBasketValue(item.price);
    }

    addToBasketValue(newPrice){
        this.basketValue = this.basketValue + newPrice;
    }

    getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0 );
    }

    showBasket() {
        this.items
            .map((product, i) => `${i + 1} - ${product.name} - ${product.price.toFixed(2)} zł`)
            .forEach (text => console.log(text)); 
         }

    removeProduct(no) {
        this.items.splice(no -1, 1);
    }
}

class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }

}

const shopBasket = new Basket();

const oranges = new Product('Pomarancze LUZ', 7.50);

const lemons = new Product('Cytryny LUZ', 4.50);

shopBasket.add(lemons);
shopBasket.add(lemons);
shopBasket.add(oranges);
shopBasket.showBasket();
console.log(shopBasket);
shopBasket.removeProduct(2);
shopBasket.showBasket();
console.log(shopBasket.getTotalValue());