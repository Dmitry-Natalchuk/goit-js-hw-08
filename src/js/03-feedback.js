import throttle from "lodash.throttle";

//const form = document.querySelector(".feedback-form")
//console.log(form)
//const inputEmail = form.querySelector("input")
//console.log(inputEmail)
//const textarea = form.querySelector("textarea")
//console.log(textarea)
//const submitBtn = form.querySelector("button")
//console.log(submitBtn)
//const formSaveKey = "feedback-form-state"


//=================================
const form = document.querySelector(".feedback-form")

const FORM_SAVE_KEY = "feedback-form-state";

localForm();

const formData = {
    email: form.email.value,
    message: form.message.value,
};

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput(event) {
    formData[event.target.name] = event.target.value
    // console.log(formData)
    localStorage.setItem(FORM_SAVE_KEY, JSON.stringify(formData));
}
function onFormSubmit(evt) {
    evt.preventDefault();

    const formSubmit = {
        email: evt.currentTarget.email.value,
        message: evt.currentTarget.message.value,
    }
    console.log(formSubmit)

    localStorage.removeItem(FORM_SAVE_KEY);
    form.reset();
}
function localForm() {
    const localData = JSON.parse(localStorage.getItem(FORM_SAVE_KEY));

    if (!localData) return;

    if (localData.email)
        form.email.value = localData.email;
    if (localData.message)
        form.message.value = localData.message;

    /* if(localData.email && localData.message) {
        form.email.value = localData.email
        form.message.value = localData.message
    }; */
}