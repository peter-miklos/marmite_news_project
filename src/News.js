function News () {
  this.articles = []
  this.anything;
  // this._link = link;
}

News.prototype = {
  getArticles: function() {
    var receivedData;
    var request = new XMLHttpRequest();
    var promise = request.open('GET', 'https://spy-api.herokuapp.com/apis?api-key=65c03619b403f5635e19f324e6f9ac0890f5a857&json=guardian', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
    // Success!
        var data = JSON.parse(request.responseText);
        this.anything = data;
        // receivedData = data;

      } else {
    // We reached our target server, but it returned an error
      }
    };
    request.onerror = function() {
    // There was a connection error of some sort
    };
    request.send();
    // return request;
    setTimeout(function()
    {console.log(this.anything);}, 5000);
  },

  // promise.done(function() {
  //   return(receivedData);
  // })
    createArticles(api) {
    this.articles.push(api);

  }
};
