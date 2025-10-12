// /scripts/page/app.js
import { render } from '../core/i18n.js';
import initFilter from './filter.js';

document.addEventListener('DOMContentLoaded', ()=>{
  initFilter();
});

render();        // 套用多語字串（含 data-i18n）

const page = document.body.dataset.page || 'welcome';

const routes = {
  welcome: () => import('./welcome.js').then(m => m.default?.()),
  main:    () => import('./main.js').then(m => m.default?.()),
  category:() => import('./category.js').then(m => m.default?.()),
  product: () => import('./product.js').then(m => m.default?.()),
  panier:  () => import('./panier.js').then(m => m.default?.()),
  payment: () => import('./payment.js').then(m => m.default?.()),
  confirmation: () => import('./confirmation.js').then(m => m.default?.()),
  help:    () => import('./help.js').then(m => m.default?.()),
};

routes[page]?.();
