var news;

function displayHeadlines() {
  // var headlines = news.getListOfArticles();
  var headlines = [{title: "Article 1"}, {title: "Article 2"}];
  var soloHeadline = "<h1>Headlines</h1><ul>";
  headlines.forEach(function(article, index) {
    soloHeadline += "<li>" + article.title + "</li>";
  });
  soloHeadline += "</ul>";
  document.getElementById("headlines").innerHTML = soloHeadline;
}
