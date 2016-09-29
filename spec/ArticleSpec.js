function ArticleSpec () {
  describe("It stores a link to article", function(){
    var article = new Article();
    var link = "http://content.guardianapis.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target";
    article.link(link);
    expect.isTrue(article._link === link);
  });
}
