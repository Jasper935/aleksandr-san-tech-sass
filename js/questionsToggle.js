const btn = document.querySelector('.questions-btn')
const text = document.querySelector('.questions-text')

const textIdStr ='text'

const btns=[...document.querySelectorAll('.questions-btn')]
btns.forEach((item, index) => {
    item.addEventListener('click', e => {
        id=e.target.id
        
       const currentBtn= document.querySelector(`#${id}`)
       
       const currentText=  document.querySelector(`#${textIdStr+index}`)
        if (currentBtn.classList.contains("questions-btn--open")) {
            currentBtn.classList.remove("questions-btn--open")
            currentText.classList.add('questions-text--hidden')
            return
        }
        currentBtn.classList.add("questions-btn--open")
        currentText.classList.remove('questions-text--hidden')
  });
});