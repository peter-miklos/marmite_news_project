function News (link) {
  this._link = link;
}

News.prototype = {
  link: function(link) {
    this._link = link;
  },

  get: function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/business/live/2016/sep/29/markets-rally-opec-cuts-oil-production-deutsche-bank-business-live', true);
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
    }
  };
