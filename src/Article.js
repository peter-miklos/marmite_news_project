function Article (link) {
  this._link = link;
}

Article.prototype = {
  link: function(link) {
    this._link = link;
  }
};
