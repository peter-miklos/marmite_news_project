function interfaceSpec() {

  describe("displaying the headlines with 2 items", function() {
    // var news = new NewsDouble();
    document.getElementById("test_div").innerHTML = '<div id="headlines"></div>';
    displayHeadlines();
    expect.isTrue(document.getElementById("headlines").innerHTML === "<h1>Headlines</h1><ul><li>Article 1</li><li>Article 2</li></ul>");
  });

}
