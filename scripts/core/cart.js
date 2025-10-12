import { KEY, get, set } from './storage.js';

const listeners = new Set();

function addListener(item) { listeners.add(item) }
function load(){ return get(KEY.CART, []); }
function save(cart){ set(KEY.CART, cart); }
function getItemIndex(id, cart = load()) { return cart.findIndex(x => x.id === id); }
function total(cart = load()){ return cart.reduce((s,i)=> s + (i.price * (i.qty||1)), 0); }
function add(item, quantity = 1, cart = load()) { return updateQty(item, quantity, cart) }
function remove(item, quantity = 1, cart = load()) { return updateQty(item, -quantity, cart); }
function clear(){ save([]); return []; }

function count(id = undefined, cart = load()){
  if (id === undefined) return cart.reduce((s,i) => s + (i.qty || 1), 0);
  const i = getItemIndex(id, cart)
  if(i >= 0) return cart[i].qty;
  return 0;
}

function updateQty(item, qty, cart = load()){ // qty=0 → 刪除
  if (item.id === undefined || item.price === undefined) return cart;
  if (qty == 0) return cart;
  let i = getItemIndex(item.id);

  // Si l'item n'existe pas
  if(i < 0) {
    if (qty > 0) {
      cart.push({ id: item.id, price: item.price, qty: 0 });
      i = cart.length - 1;
    }
    else return cart;
  }

  cart[i].qty += qty;
  let quantity = cart[i].qty;
  if(quantity <= 0) { cart.splice(i, 1); quantity = 0; }
  save(cart);

  const event = new CustomEvent('cartchange', { detail: { cart: cart, id: item.id, qty: quantity}});
  
  listeners.forEach(listener => { listener.dispatchEvent(event) });
  return cart;
}

export const cart = { load, save, add, count, total, clear, remove, addListener };