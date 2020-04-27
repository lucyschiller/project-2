// jshint esversion: 6

let controller = function() {
  /*
  let prefixURL = "'https://thejsway-server.herokuapp.com/api/articles'";
  let suffixURL = "&format=json&jsoncallback=?";
  //get value entered by user from textbox
  let flickrTag = $("input").flickrInput();
  */
  let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

  //clear old photos
  //$(".photos").flickrInput("");

  $.getJSON(requestURL, function(response) {
    console.log(response);

    console.log(`Article ${response[0].id}
      Title: ${response[0].title}
      Content: ${response[0].content}`);

    response.forEach(function(article, index) {
      let newDiv = document.createElement("div");
      document.querySelector(".articles").appendChild(newDiv);

      let newHeader = document.createElement("h3");
      newHeader.textContent = `Article ${article.id}`;
      newDiv.appendChild(newHeader);

      let paragraph = document.createElement("p");
      paragraph.textContent = `${article.title}`;
      newDiv.appendChild(paragraph);

      let newParagraph = document.createElement("p");
      newParagraph.textContent = `${article.content}`;
      newDiv.appendChild(newParagraph);

      /*
      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        // attach the img tag to the controller
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
      */
    });
  });
};

$(document).ready(controller);

window.addEventListener("load", function() {
  //select the button and register the handler
  document.querySelector("button").addEventListener("click", controller);
});
