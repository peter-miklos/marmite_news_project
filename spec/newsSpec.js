function newsSpec () {

  describe("calls guardian external api", function() {
    var news = new News();
    expect.isTrue(news.getArticles() !== undefined);
  });

  describe("can create and store an article", function (){
    var news = new News();
    var api = {title: "Article 1"};
    news.createArticles(api);
    expect.isTrue(news.articles.length === 1);
  });

  describe("it can display the headline", function(){
    var news = new News();
  news.getArticles();
  setTimeout(function () {
      expect.isTrue(news.getHeadline() === "The big debate: tonight's the night");
  }, 500);
  });
  //
  // describe("It stores a link to article", function(){
  //   var news = new News();
  //   var link = "https://www.theguardian.com/business/live/2016/sep/29/markets-rally-opec-cuts-oil-production-deutsche-bank-business-live";
  //   news.link(link);
  //   expect.isTrue(news._link === link);
  // });
  //
  // describe("It stores the headline of the article", function(){
  //   var news = new News();
  //   var link = "https://www.theguardian.com/business/live/2016/sep/29/markets-rally-opec-cuts-oil-production-deutsche-bank-business-live";
  //   news.link(link);
  //   expect.isTrue(news.title() === "Markets rally after Opec agrees to cut oil production –&nbsp;business live");
  // });
}
