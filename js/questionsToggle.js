const btn = document.querySelector('.questions-btn')
const text = document.querySelector('.questions-text')
btn.addEventListener('click', () => {
    btn.classList.contains('questions-btn--open') ?
        btn.classList.remove('questions-btn--open') :
        btn.classList.add('questions-btn--open')
        
        text.classList.contains('questions-text--hidden') ?
        text.classList.remove('questions-text--hidden') :
        text.classList.add('questions-text--hidden')
    
})