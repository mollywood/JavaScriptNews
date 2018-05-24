let newsDiv = document.querySelector('#newsDiv')
addEventListener('load', function(){
  populateNews(news)
})

function populateNews(news) {
  newsDiv.innerHTML = ''
  let newsToDisplay = news['articles']
  newsToDisplay.forEach(function(news) {

    let newsItem = `<h4>${news.title}</h4>
    <h5>${news.author}</h5>
    <p>${news.description}</p>
    <a href='${news.url}'>Read More</a>
    <img src='${news.urlToImage}' />
    <h6>${news.publishedAt}</h6>`

    newsDiv.innerHTML += newsItem
  })
}
