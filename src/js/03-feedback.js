
import throttle from "lodash.throttle"

const formEl = document.querySelector('.feedback-form')
const emailInputEl = document.querySelector('input[type="email"]')
const messageInputEl = document.querySelector('textarea[name="message"]')
const buttonEl = document.querySelector('button[type="submit"]')

// emailInputEl.addEventListener("input", (event) => {
//         console.log(event.currentTarget.value)
// })


// messageInputEl.addEventListener("input", (event) => {
//         console.log(event.currentTarget.value)
// })

const data = {
    email: '',
    message: '',
};

const getData = (e) => {
    data[e.target.name] = e.target.value
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}

const submit = (e) => {
    e.preventDefault()
    localStorage.clear()
    formEl.reset()
    console.log(data)
}


formEl.addEventListener("input", throttle(getData, 500))
buttonEl.addEventListener("click", submit)

emailInputEl.textContent = localStorage.getItem('feedback-form-state.email')