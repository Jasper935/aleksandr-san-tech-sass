import fetchReviews from "../api/fetchReviews";
// const reviewsWrap 


function createMarkUp(res) {
    // console.log();

    const markUp = res.data.hits.map(el =>
        `<div class="photo-card">
    <a href="${el.largeImageURL}">
    <img src='${el.webformatURL}' alt="${el.tags}" loading="lazy" width='200' />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes: ${el.likes}</b>
      </p>
      <p class="info-item">
        <b>Views: ${el.views}</b>
      </p>
      <p class="info-item">
        <b>Comments: ${el.comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads: ${el.downloads}</b>
      </p>
    </div>
    </div>`).join('')
    console.log(markUp);
    div.insertAdjacentHTML('beforeend', markUp)
    const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

}