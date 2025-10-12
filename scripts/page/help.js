
import { getLanguage, setLanguage, translations } from "../core/lang.js";

function renderHelpPage() {
  const helpElem = document.querySelector('.help-dialog');
  if (!helpElem) return;
  let lang = getLanguage();
  let helpTitle = translations['Request help'][lang] || 'Request help';
  let helpMessage = translations['An on-site staff member has been called for you. Please wait.'][lang] || 'An on-site staff member has been called for you. Please wait.';
  let continueLabel = translations['Continue commanding'][lang] || 'Continue commanding';
  helpElem.innerHTML = `

    <header class="help-header">
        <h2 id="help-title">${helpTitle}</h2>
    </header>

    <div class="help-body">
        <p id="help-desc">${helpMessage}</p>
    </div>

    <footer class="help-footer">
        <button class="btn btn-primary" id="help-continue" onclick="window.history.back();">
        ${continueLabel}
        </button>
    </footer>
    `;
  
}
renderHelpPage();
console.log("Help page rendered.");