// 簡單安全的 localStorage 包裝
const KEY = {
  CART: 'cart_v1',
  LANG: 'lang_v1',
  FILTER: 'filter_v1', // { include:[], exclude:[] }
};

function get(key, fallback=null){
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch(e){ return fallback; }
}
function set(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

export { KEY, get, set };