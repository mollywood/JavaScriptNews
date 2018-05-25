let newsDiv = document.querySelector('#newsDiv')
addEventListener('load', function(){
  populateNews(news)
})

function populateNews(news) {
  newsDiv.innerHTML = ''
  let newsToDisplay = news['articles']
  newsToDisplay.forEach(function(news) {

    let newsItem = `<h4>${news.title}</h4>
    <img src='${news.urlToImage}' />
    <h5>${news.author}</h5>
    <p>${news.description}</p>
    <a href='${news.url}'>Read More</a>
    <h6>${news.publishedAt}</h6>`

    newsDiv.innerHTML += newsItem
  })
}
