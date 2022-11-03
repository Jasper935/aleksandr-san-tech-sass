
const list = document.querySelector('.reviews-list')
const form = document.querySelector("#reviews-form")
form.addEventListener('submit', onSubmit)
const btn = document.querySelector('.reviews-btn')
const date =new Date()
const currentDate = `${date.getDate()}.${date.getMonth()}
.${date.getFullYear() } ${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()}`
fetchReviews().then((res) => { createMarkUp(res) })

console.log(date.getDate());
async function fetchReviews() {
  return await fetch('https://6348b82ea59874146b0f8c0a.mockapi.io/reviews').then((res) => res.json())
}


async function setReview(obj = {}) {

  return fetch('https://6348b82ea59874146b0f8c0a.mockapi.io/reviews', {
    method: "post", headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(obj)
  })
}



async function onSubmit(e) {
  e.preventDefault()
  const obj = { name: e.target.name.value, email: e.target.email.value,
     message: e.target.message.value, date: currentDate }
  await setReview(obj)
  await fetchReviews().then(res => createMarkUp(res))
  form.reset()
}




function createMarkUp(res) {


  const markUp = res.map(el =>
    `<li class="reviews-item">
    <svg class="reviews_icon">
        <use href="./images/symbol-defs.svg#icon-avatar"></use>
    </svg>
    <div class="reviews-item-wrap">
        <h5 class="reviews-name" >${el.name}</h5>
        <p class="reviews-date">${el.date}</p> 
        <p class="reviews-email">${el.email}</p>
    </div> 
    <p class="reviews-message">${el.message}</p>
    
</li>`).reverse().join('')

  list.innerHTML = markUp
  // const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

}