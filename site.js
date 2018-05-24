let newsDiv = document.querySelector('#newsDiv')
addEventListener('load', function(){
  populateNews(news)
})

function populateNews(news) {
  newsDiv.innerHTML = ''
  let newsToDisplay = news['articles']
  for(let index = 0; index < newsToDisplay; index++) {

    let newsItem = `${newsToDisplay[index].title}</h4>
    <h5>${newsToDisplay[index].author}</h5>
    <p>${newsToDisplay[index].description}</p>
    <a href='${newsToDisplay[index].url}'>Read More</a>
    <img src='${newsToDisplay[index].urlToImage}' />
    <h6>${newsToDisplay[index].publishedAt}</h6>`

    newsDiv.innerHTML += newsItem
  }
}
