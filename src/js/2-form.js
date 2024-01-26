const form = document.querySelector('.feedback-form');
const input = form.querySelector("input");
input.setAttribute("required", 'true');
const textarea = form.querySelector('textarea');
textarea.setAttribute("required", 'true');
const LSKey = "feedback-form-state";

function saveToLS(key, value){
    const valueJson = JSON.stringify(value);
    localStorage.setItem(key, valueJson);
}

function loadFromLS(key){
    const data = localStorage.getItem(key);
    try {
    const result = JSON.parse(data);
    return result;
    }catch{
    return data;
    }
 }

 form.addEventListener('input', ()=>{

    const userEmail = form.elements.email.value;
    const userMessage = form.elements.message.value.trim();

    const userData = {
        email: userEmail,
        message: userMessage,
    };

    saveToLS(LSKey, userData);
},);


form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const data = loadFromLS(LSKey);
    console.log(data);

    localStorage.removeItem(LSKey);

    form.reset();
},);

input.addEventListener('focus', ()=>{
    input.setAttribute('placeholder', 'Type area');
},);

input.addEventListener('blur', ()=>{
    input.setAttribute('placeholder', '');
},);

function restoreUserData(){
    const userData =  loadFromLS(LSKey);

    input.value = userData.email ?? '';
    textarea.value = userData.message ?? '';
}
restoreUserData();

