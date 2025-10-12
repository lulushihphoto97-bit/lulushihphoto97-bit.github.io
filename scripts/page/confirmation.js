import { getLanguage, translations } from "../core/lang.js";
function renderConfirmationPage () {
  const confirmElem = document.querySelector('.success-card');
  if (!confirmElem) return;
  let lang = getLanguage();
  let payment_success = translations['payment_success'][lang] || 'Payment Successful';
  let order_number = translations['order_number'][lang] || 'Order Number';
  let choose_satisfaction = translations['choose_satisfaction'][lang] || 'Please rate your order satisfaction';
  let unsatisfied = translations['unsatisfied'][lang] || 'Not Satisfied';
  let neutral = translations['neutral'][lang] || 'Neutral';
  let satisfied = translations['satisfied'][lang] || 'Satisfied';
  let done = translations['done'][lang] || 'Done';
  confirmElem.innerHTML = `
            <h1 id="success-title" class="title">${payment_success}</h1>
            <div class="ticket" aria-label="取餐號碼">
            <span class="ticket-label">${order_number}</span>
            <span class="ticket-no">001</span>
            </div>

        <section class="survey" aria-labelledby="survey-title">
            <h2 id="survey-title" class="survey-title">${choose_satisfaction}</h2>

            <fieldset class="faces" role="radiogroup" aria-label="滿意度">
                <legend class="sr-only">滿意度評分</legend>

                <label class="face">
                <input type="radio" name="smile" value="sad">
                <span class="icon" aria-hidden="true">😢</span>
                <span class="txt">${unsatisfied}</span>
                </label>

                <label class="face">
                <input type="radio" name="smile" value="neutral">
                <span class="icon" aria-hidden="true">😐</span>
                <span class="txt">${neutral}</span>
                </label>

                <label class="face">
                <input type="radio" name="smile" value="happy">
                <span class="icon" aria-hidden="true">😊</span>
                <span class="txt">${satisfied}</span>
                </label>
            </fieldset>
            <a href="./welcome.html" class="btn-done" role="button" aria-label="返回菜單">${done}</a>
    `
};
renderConfirmationPage();