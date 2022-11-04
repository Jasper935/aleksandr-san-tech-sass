
const list = document.querySelector('.reviews-list')
const form = document.querySelector("#reviews-form")
form.addEventListener('submit', onSubmit)
const btn = document.querySelector('.reviews-btn')
const moreBtn = document.querySelector('.more-btn')
moreBtn.addEventListener('click', onClick)
const date = new Date()
const currentDate = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}.${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`

let startIndex = 0
let endIndex = 10

fetchReviews().then((res) => { createMarkUp(res, true) })


async function fetchReviews() {
  return await fetch('https://6348b82ea59874146b0f8c0a.mockapi.io/reviews').then((res) => res.json()).catch((err) => {
    alert(err)
  })
}


async function setReview(obj = {}) {

  return fetch('https://6348b82ea59874146b0f8c0a.mockapi.io/reviews', {
    method: "post", headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(obj)
  }).catch((err) => {
    alert(err)
  })
}

function setClass() {
  setTimeout(() => {
    btn.classList.remove('reviews-btn--success')
    btn.textContent = 'Відправити відгук'
  }, 3000);

}


async function onSubmit(e) {
  e.preventDefault()
  const obj = {
    name: e.target.name.value,
    message: e.target.message.value, date: currentDate
  }
  await setReview(obj)
  await fetchReviews().then(res => createMarkUp(res, true))
  btn.classList.add('reviews-btn--success')
  btn.textContent = 'Успішно!'
  setClass()
  form.reset()
  moreBtn.textContent = 'більше відгуків...'
}
function onClick() {
  if(moreBtn.textContent==='Це все'){
    return
  }
  startIndex += 10
  endIndex += 10
  fetchReviews().then(res => createMarkUp(res))
}



function createMarkUp(res, deleteLastMarkUp = false) {

  const newRes = res.reverse().filter((el, i) => i >= startIndex && i < endIndex)

  

  const markUp = newRes.map((el, i) =>
    `<li class="reviews-item">
    <svg class="reviews_icon">
        <use href="./images/symbol-defs.svg#icon-avatar"></use>
    </svg>
    <div class="reviews-item-wrap">
        <h5 class="reviews-name" >${el.name}</h5>
        <p class="reviews-date">${el.date}</p> 
        
    </div> 
    <p class="reviews-message">${el.message}</p>
    
</li>`).join('')
  if (deleteLastMarkUp) {
    list.innerHTML = markUp
    return
  }
  
  list.insertAdjacentHTML('beforeend', markUp)
  if (!newRes.length) {
    moreBtn.textContent = 'Це все'
    startIndex = 0
  endIndex = 10
    return
  }
  
}