// shelves.js
// Sam Hamm
// Code Fellows JavaScript Code Challenge
// January 2015

var allTitles = [],
    allAuthors = [],
    devBooks = []
    cuisineBooks = []
    beardBooks = [];

function shelf1(books) {
  devBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "programming" && books.status === "shelved") {
      devBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#dev").html(devBooks);
}

function shelf2(books) {
  cuisineBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "cuisine" && books.status === "shelved") {
      cuisineBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#cuisine").html(cuisineBooks);
}

function shelf3(books) {
  beardBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "beards" && books.status === "shelved") {
      beardBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#beards").html(beardBooks);
}
