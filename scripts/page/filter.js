// /scripts/page/filter.js
import { openDialog, closeDialog } from '../core/modal.js';
import { CAT_DEF } from '../core/renderer.js';
import { buildIngredientsList, buildAllergiesList } from '../core/dishes.js';
import { getLanguage, translations } from '../core/lang.js';


const ingredientsList = buildIngredientsList(CAT_DEF.data);
const allergiesList = buildAllergiesList(CAT_DEF.data);

export function populateFilter(allergysContainer, ingredientsContainer) {
  const filterSubtitleIngredients = document.querySelector('.filter-subtitle.ingredients');
  const filterSubtitleAllergies   = document.querySelector('.filter-subtitle.allergies');
  const filterFooterReset = document.querySelector('.btn.reset');
  const filterFooterApply = document.querySelector('.btn.apply');
  if (!filterFooterReset) return;
  if (!filterFooterApply) return;
  if (!filterSubtitleIngredients) return;
  if (!filterSubtitleAllergies) return;
  let lang = getLanguage();
  let ingredients = translations['ingredients'][lang] || 'Ingredients';
  let allergies = translations['allergies'][lang] || 'Allergens';
  let reset = translations['reset'][lang] || 'Reset';
  let apply = translations['apply'][lang] || 'Apply';
  filterSubtitleIngredients.innerText = ingredients
  filterSubtitleAllergies.innerText = allergies
  if (!allergysContainer) return;
  allergysContainer.innerHTML = '';
  ingredientsContainer.innerHTML = '';
  allergiesList.forEach(allergy => {
    const btn = document.createElement('button');
    btn.className = 'tag';
    btn.type = 'button';
    btn.dataset.state = 'neutral';
    btn.dataset.key = allergy.key;
    btn.textContent = allergy.label?.[lang] || allergy.label || allergy.key;
    allergysContainer.appendChild(btn);
  });

  ingredientsList.forEach(ingredient => {
    const btn = document.createElement('button');
    btn.className = 'tag';
    btn.type = 'button';
    btn.dataset.state = 'neutral';
    btn.dataset.key = ingredient.key;
    btn.textContent = ingredient.label?.[lang] || ingredient.label || ingredient.key;
    ingredientsContainer.appendChild(btn);
  });
  filterFooterReset.innerText = reset;
  filterFooterApply.innerText = apply;

}

export default function initFilter(){
  const trigger = document.querySelector('.filter-trigger');
  const overlay = document.getElementById('filter-overlay');
  const dialog  = document.getElementById('filter-dialog');
  const closeBtn= dialog?.querySelector('.filter-close');

  
  console.log('initFilter', {trigger, overlay, dialog, closeBtn});
  
  if(trigger && overlay && dialog){
    closeDialog(dialog, overlay);
    trigger.addEventListener('click', ()=> openDialog(dialog, overlay));
    overlay.addEventListener('click', ()=> closeDialog(dialog, overlay));
    closeBtn?.addEventListener('click', ()=> closeDialog(dialog, overlay));

    populateFilter(document.querySelector('#allergies'), document.querySelector('#ingredients'));
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && !dialog.hidden) closeDialog(dialog, overlay); });
  }

  // 三態切換
  const next = { neutral:'include', include:'exclude', exclude:'neutral' };
  dialog?.addEventListener('click', (e)=>{
    const tag = e.target.closest('.tag');
    if(!tag) return;
    tag.dataset.state = next[tag.dataset.state || 'neutral'];
  });

  // 重置
  dialog?.querySelector('.btn.reset')?.addEventListener('click', ()=>{
    dialog.querySelectorAll('.tag').forEach(t=> t.dataset.state='neutral');
  });
}

export function attachFilterEvent(callback) {
  const dialog = document.getElementById('filter-dialog');
  dialog?.querySelector('.btn.apply')?.addEventListener('click', callback);
}

function getSelectedFilters() {
  const dialog = document.getElementById('filter-dialog');
  if (!dialog) return { ingredients: { include: [], exclude: [] }, allergies: [] };

  const ingredients = { include: [], exclude: [] };
  dialog.querySelectorAll('#ingredients .tag').forEach(btn => {
    if (btn.dataset.state === 'include') ingredients.include.push(btn.dataset.key);
    else if (btn.dataset.state === 'exclude') ingredients.exclude.push(btn.dataset.key);
  });

  const allergies = [];
  dialog.querySelectorAll('#allergies .tag').forEach(btn => {
    if (btn.dataset.state === 'include') allergies.push(btn.dataset.key);
  });

  return { ingredients, allergies };
}

export function getFilteredDishes(dishes = []) {
  const { ingredients, allergies } = getSelectedFilters();
  return filterDishes(dishes, ingredients, allergies);
}

function filterDishes(dishes, ingredients, allergies) {
    const need = new Set((ingredients.include || []).map(s => s.toLowerCase()));
    const banIng = new Set((ingredients.exclude || []).map(s => s.toLowerCase()));
    const banAllergy = new Set((allergies || []).map(s => s.toLowerCase()));

    return dishes.filter(dish => {
      const dishIngr = (dish.ingredients || []).map(s => s.toLowerCase());
      const dishAllg = (dish.allergies || []).map(s => s.toLowerCase());

      const ingrSet = new Set(dishIngr);
      const allgSet = new Set(dishAllg);

      // 1. 必須包含所有 include
      for (const r of need) if (!ingrSet.has(r)) return false;

      // 2. 不可以有 exclude 的 ingredient
      for (const b of banIng) if (ingrSet.has(b)) return false;

      // 3. 不可以有 allergy
      for (const a of banAllergy) if (allgSet.has(a)) return false;

      return true;
    });
  };
  