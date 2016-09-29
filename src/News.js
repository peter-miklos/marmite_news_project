function News () {
  this.articles = []
  // this._link = link;
}

News.prototype = {
  getArticles: function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2016-09-29', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
    // Success!
        var data = JSON.parse(request.responseText);
      } else {
    // We reached our target server, but it returned an error
      }
    };
    request.onerror = function() {
    // There was a connection error of some sort
    };
    request.send();
    return request;
  }
};
