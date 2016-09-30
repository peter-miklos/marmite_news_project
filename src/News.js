function News () {
  this.articles = [];
  // this._link = link;
}

var promise = new Promise(function(resolve, reject) {

  var request = new XMLHttpRequest();
  request.open('GET', 'https://spy-api.herokuapp.com/apis?api-key=65c03619b403f5635e19f324e6f9ac0890f5a857&json=guardian', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      resolve(JSON.parse(request.responseText));

    } else {
      reject('error happened :(:(:(');
      // We reached our target server, but it returned an error
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };
  request.send();
});

News.prototype = {


  getArticles: function() {
  var self = this;
    promise.then(function(result){
      self.articles = result.response.results;
      // console.log(this.articles)
    },
    function(error) {
      console.log(error);
    });
    return self.articles;
  }
  //   createArticles(api) {
  //   this.articles.push(api);
  // }
};
