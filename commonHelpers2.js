import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const r=document.querySelector(".feedback-form"),a=r.querySelector("input");a.setAttribute("required","true");const n=r.querySelector("textarea");n.setAttribute("required","true");const s="feedback-form-state";function l(e,t){const o=JSON.stringify(t);localStorage.setItem(e,o)}function u(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}r.addEventListener("input",()=>{const e=r.elements.email.value,t=r.elements.message.value.trim();l(s,{email:e,message:t})});r.addEventListener("submit",e=>{e.preventDefault();const t=u(s);console.log(t),localStorage.removeItem(s),r.reset()});a.addEventListener("focus",()=>{a.setAttribute("placeholder","Type area")});a.addEventListener("blur",()=>{a.setAttribute("placeholder","")});function c(){const e=u(s)||{};a.value=e.email??"",n.value=e.message??""}c();
//# sourceMappingURL=commonHelpers2.js.map
