
import throttle from "lodash.throttle"

const formEl = document.querySelector('.feedback-form')
const emailInputEl = document.querySelector('input[name="email"]')
const messageInputEl = document.querySelector('textarea[name="message"]')
const buttonEl = document.querySelector('button[type="submit"]')

const data = {
    email: '',
    message: '',
};

const saveState = () => {
    data.email = emailInputEl.value
    data.message = messageInputEl.value

    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}

const loadState = () => {
    const loaded = JSON.parse(localStorage.getItem('feedback-form-state'))

    if (loaded) {
        emailInputEl.value = loaded.email
        messageInputEl.value = loaded.message
        // data.email = loaded.email
        // data.message = loaded.message
    } else {
        emailInputEl.value = ""
        messageInputEl.value = ""
    }
}

loadState()

const submit = (e) => {
    e.preventDefault()
    localStorage.clear()
    formEl.reset()
    console.log(data)
}


formEl.addEventListener("input", throttle(saveState, 500))
buttonEl.addEventListener("click", submit)

