function findNameOfTallestMountain(mountains) {
    var tallestMountain = undefined;
    if (!(mountains === undefined || mountains === null || mountains.length == 0)) {
        tallestMountain = mountains[0];
        for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
            var mountain = mountains_1[_i];
            if (mountain.height > tallestMountain.height) {
                tallestMountain = mountain;
            }
        }
    }
    return tallestMountain.name;
}
function runMountain() {
    var mountains = [
        {
            name: 'Kilimanjaro',
            height: 19341
        },
        {
            name: 'Everest',
            height: 29029
        },
        {
            name: 'Denali',
            height: 20310
        }
    ];
    var tallestMountainName = findNameOfTallestMountain(mountains);
    console.log(tallestMountainName);
}
function calcAverageProductPrice(products) {
    var averageProductPrice = 0;
    if (!(products === undefined || products === null || products.length == 0)) {
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            averageProductPrice += product.price;
        }
        averageProductPrice = averageProductPrice / products.length;
    }
    return "$" + averageProductPrice.toFixed(2);
}
function runProducts() {
    var products = [
        {
            name: 'Apples',
            price: 1.99
        },
        {
            name: 'Bananas',
            price: 2.99
        },
        {
            name: 'Cherries',
            price: 3.99
        },
        {
            name: 'Dragonfruit',
            price: 4.99
        }
    ];
    var averagePrice = calcAverageProductPrice(products);
    console.log(averagePrice);
}
function calcInventoryValue(inventory) {
    var totalValue = 0;
    if (!(inventory === undefined || inventory === null || inventory.length == 0)) {
        for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
            var product = inventory_1[_i];
            totalValue += product.product.price * product.quantity;
        }
    }
    return "$" + totalValue.toFixed(2);
}
function runInventory() {
    var inventory = [
        {
            product: {
                name: 'motor',
                price: 10.00,
            },
            quantity: 10
        },
        {
            product: {
                name: 'sensor',
                price: 12.50,
            },
            quantity: 4
        },
        {
            product: {
                name: 'LED',
                price: 1.00,
            },
            quantity: 20
        }
        //{ product: { name: 'motor', price: 10.00 }, quantity: 10 },
        //{ product: { name: 'sensor', price: 12.50 }, quantity: 4 },
        //{ product: { name: 'LED', price: 1.00 }, quantity: 20 }
    ];
    var totalValue = calcInventoryValue(inventory);
    console.log(totalValue);
}
//# sourceMappingURL=app.js.map