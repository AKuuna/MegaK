class Basket{
    constructor() {
        this.items = this.loadFromLocalStorage() ?? [];

        //?? - nullish operator, here will for like ||
        // const ls = this.loadFromLocalStorage();
        
        // this.items = ls || []; // ls ? ls : [];

    // this.items = ls ? ls : [];

    // if(ls) {
    //         this.items=ls;
    // } else {
    //     this.items =[];
    // }
        }

    add(item) {
        this.items.push(item);
        this.addToBasketValue(item.price);
        this.saveToLocalStorage();
    }

    clear() {
        this.items.lenght = 0;
        //this.items.splice(0);
        //this.items = [];
        this.saveToLocalStorage();
    }

    addToBasketValue(newPrice){
        this.basketValue = this.basketValue + newPrice;
        this.saveToLocalStorage();
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
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('basket-items', JSON.stringify(this.items));
    };

    loadFromLocalStorage() {
        return JSON.parse(localStorage.getItem('basket-items'));
    };
};

class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }
};

