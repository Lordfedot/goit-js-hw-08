import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
}
const KEY_STORAGE = 'feedback-form-state'

let localStorageData = {}

populateInputs()

refs.form.addEventListener('submit',onFormSubmit);
refs.form.addEventListener('input',throttle(onInput,500))

function onFormSubmit(e) {
    e.preventDefault()

    const dataInputs = {
        email: refs.form.elements.email.value,
        message: refs.form.elements.message.value
    }
    
    if (dataInputs.email === '' || dataInputs.message === '') {
        alert('Всі поля повинні бути заповнені')
        return
    }
    console.log(dataInputs);

    e.currentTarget.reset()
}
function onInput(e) {
   const email = e.target.value
   const text = e.target.value
   localStorageData = {
    email,
    text
   } 
   localStorage.setItem(KEY_STORAGE ,JSON.stringify(localStorageData))
}

function populateInputs(e) {
    const dataFromLocalStorage = localStorage.getItem(KEY_STORAGE)

    if (dataFromLocalStorage) {
        const savedData = JSON.parse(dataFromLocalStorage)
        refs.form.elements.email.value = savedData.email
        refs.form.elements.message.value = savedData.text
    }  
}


