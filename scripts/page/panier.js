// /scripts/page/panier.js
import { cart } from '../core/cart.js';
import { getDishFromId } from '../core/dishes.js';
import { bindButtons } from '../core/categoryCore.js';
import { getLanguage, translations } from '../core/lang.js';

const cart_content = cart.load();

export function formatPrice(price, devise = '€', front = false) {
    const formatted = price ? price.toFixed(2) : '0.00';
    return front ? `${devise}${formatted}` : `${formatted}${devise}`
}


function renderCart() {
    const cartOrderButton = document.querySelector('.cartOrderBtn');
    if(!cartOrderButton) return;
    const cartContainer = document.querySelector('.cart-list');
    if (!cartContainer) return;
    cartContainer.innerHTML = '';
    const cartToPay = document.querySelector('.totalToPay')
    if (!cartToPay) return;
    let lang = getLanguage();
    let order = translations['order'][lang] || 'Order';
    let total = translations['total'][lang] || 'Total';
    cartOrderButton.innerText = order
    let grandTotal = 0;
    cart_content.forEach(dish => {
        console.log(dish)
        let dishData = getDishFromId(dish.id)
        console.log(dishData)
        let itemQty = dish.qty
        let dishName = translations[dish.id][lang] || 'Unnamed Dish';
        let total = dish.price * itemQty;
        grandTotal += total;
        const formattedPrice = formatPrice(total);
        const cartElem = document.createElement('li');
        cartElem.className = 'cart-item';
        cartElem.innerHTML = `
            <img class="cart-img" src="${dishData.image || ''}" alt="${dishName}">
            <h3 class="cart-title">${dishName}</h3>
            <button data-id="${dish.id}" data-price="${dish.price}" class="remove-product"> - </button>
            <button data-id="${dish.id}" data-price="${dish.price}" class="itemQty">${itemQty}</button>
            <button data-id="${dish.id}" data-price="${dish.price}" class="add-to-cart"> + </button>
            <div data-id="${dish.id}" data-price="${dish.price}" class="sous-total changecart">
                ${formattedPrice}
            </div>
        `;
        cartContainer.appendChild(cartElem);
    });
    
    grandTotal = formatPrice(grandTotal)
    cartToPay.innerHTML = `
        <h3 class="pay-title">${total}</h3>
        <div class="totalToPay changecart">
            ${grandTotal}
        </div>
    `
};


renderCart();
bindButtons(false);


function updatePrice() {
    let elements = document.querySelectorAll('.changecart');
    elements.forEach(element => {
        cart.addListener(element);
        const is_subtotal = element.classList.contains('sous-total');
        const isTotal = element.classList.contains("totalToPay");
        if (is_subtotal) {
            element.addEventListener('cartchange', (e) => {
                const id = element.dataset.id;
                if (id != e.detail.id) return;
                const price = e.detail.qty * element.dataset.price
                element.innerText = formatPrice(price);
            });
        } else if (isTotal) {
            element.addEventListener('cartchange', (e) => {
                element.innerText = formatPrice(cart.total());
            });
        } 
    });
}

updatePrice()