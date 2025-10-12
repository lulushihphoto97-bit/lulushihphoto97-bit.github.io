import { getLanguage, translations } from "../core/lang.js";
import { categories } from "../core/dishes.js";
import { renderTitle } from "../core/renderer.js";

function getTitle() {
  let lang = getLanguage();
  return translations['nos_categories'][lang] || 'Nos Catégories';
}

renderTitle(getTitle());

function renderCategories() {
  const container = document.querySelector('.menu-categories');
  if (!container) return;
  container.innerHTML = '';
  let lang = getLanguage();
  categories.forEach(cat => {
    let catLabel = translations[cat.id][lang] || 'Unnamed Category';
    const catElem = document.createElement('a');
    catElem.className = 'category-card';
    catElem.href = cat.link;
    catElem.style.setProperty('--bg', `url('${cat.image}')`);
    catElem.setAttribute('aria-label', catLabel);
    catElem.setAttribute('href', `./category.html?cat=${cat.id}`);
    catElem.innerHTML = 
    `<a class="category-card"
        href="./category.html?cat=${cat.id}"
        aria-label="Category 1"
        style="--bg:url('${cat.image}')">
        <span class="category-label">${catLabel}</span>
    </a>
    `;
    container.appendChild(catElem);
  });
}
renderCategories();

export { renderCategories }



