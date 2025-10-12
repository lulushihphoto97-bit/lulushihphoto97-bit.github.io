import { renderCategoryDishesFilter, getCategoryTitle, bindButtons } from '../core/categoryCore.js';
import { renderTitle } from '../core/renderer.js';

renderCategoryDishesFilter();
document.querySelector('.h2-container h2').textContent = getCategoryTitle();
bindButtons();

renderTitle(getCategoryTitle())


