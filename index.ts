import Items from './items';
import Basket from './Basket'

document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {   
            id: 0,
            name: "Apple",
            price: 20
        },
        {
            id: 1,
            name: "Banana",
            price: 210
        },
        {
            id: 2,
            name: "Lemon",
            price: 2
        },
        {
            id: 3,
            name: "Gasfdsf",
            price: 5
        },
    ];
    
    const items = new Items(products)
    const basket = new Basket()
});
