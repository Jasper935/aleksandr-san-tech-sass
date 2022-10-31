const btn = document.querySelector('.questions-btn')
btn.addEventListener('click', () => {
    if (btn.classList.contains('questions-btn--open')) {
        btn.classList.remove('questions-btn--open')
        return
    }
    btn.classList.add('questions-btn--open')
    // return
})