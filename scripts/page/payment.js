// /scripts/page/payment.js
import cart from '../core/panier.js';
import { t, formatPrice } from '../core/i18n.js';

export default function initPayment(){
  // 可選：用 cart.load() 動態渲染 Récapitulatif；現在你是靜態版面可先略
  document.querySelector('.btn-pay')?.addEventListener('click', (e)=>{
    e.preventDefault();
    // 根據選擇的付款方式，決定後續；目前直接導成功頁
    window.location.assign('/confirmation.html');
  });
}