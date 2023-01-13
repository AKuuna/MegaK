class Basket{
    constructor() {
        this.items = [];
        this.basketValue = 0;
    }

    add(item) {
        this.items.push(item);
        this.addToBasketValue(item.price);
    }

    clear() {
        this.items.lenght = 0;
        //this.items.splice(0);
        //this.items = [];
    }

    addToBasketValue(newPrice){
        this.basketValue = this.basketValue + newPrice;
    }

    getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0 );
    }

    getBasketSummary() {
        return this.items
            .map((product, i) => {
                return {
                id: i + 1,
                text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)} zł`
                }
            });
         }

    removeProduct(no) {
        this.items.splice(no -1, 1);
    }
};

class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }


};

