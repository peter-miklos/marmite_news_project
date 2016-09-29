function NewsSpec () {
  describe("It stores a link to article", function(){
    var news = new News();
    var link = "https://www.theguardian.com/business/live/2016/sep/29/markets-rally-opec-cuts-oil-production-deutsche-bank-business-live";
    news.link(link);
    expect.isTrue(news._link === link);
  });

  describe("It stores the headline of the article", function(){
    var news = new News();
    var link = "https://www.theguardian.com/business/live/2016/sep/29/markets-rally-opec-cuts-oil-production-deutsche-bank-business-live";
    news.link(link);
    expect.isTrue(news.title() === "Markets rally after Opec agrees to cut oil production –&nbsp;business live");
  });
}
