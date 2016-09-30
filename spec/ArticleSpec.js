function articleSpec() {
  describe("article can be created and data is stored", function() {
    var articleObject = {
                "id": "politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
                "sectionId": "politics",
                "sectionName": "Politics",
                "webPublicationDate": "2014-02-17T12:05:47Z",
                "webTitle": "Alex Salmond speech – first minister hits back over Scottish independence – live",
                "webUrl": "http://www.theguardian.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
                "apiUrl": "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live"
            }
    var article = new Article(articleObject)
    expect.isTrue(article.sectionName === articleObject.sectionName);
  })
}
