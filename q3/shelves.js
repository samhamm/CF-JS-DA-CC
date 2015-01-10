var allTitles = [],
    allAuthors = [],
    devBooks = []
    cuisineBooks = []
    beardBooks = [],
    loanedBooks = [];

function shelf1(books) {
  devBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "programming" && books.status === "shelved") {
      devBooks.push(books.title + " by " + books.author + " (~" + books.callNumber + "~)" + "<br>");
    }
  });
  $("#dev").html(devBooks);
}

function shelf2(books) {
  cuisineBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "cuisine" && books.status === "shelved") {
      cuisineBooks.push(books.title + " by " + books.author + " (~" + books.callNumber + "~)" + "<br>");
    }
  });
  $("#cuisine").html(cuisineBooks);
}

function shelf3(books) {
  beardBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "beards" && books.status === "shelved") {
      beardBooks.push(books.title + " by " + books.author + " (~" + books.callNumber + "~)" + "<br>");
    }
  });
  $("#beards").html(beardBooks);
}

function bookStatus(books) {
  _.forEach(books, function(books) {
    if (books.status === "loaned") {
      loanedBooks.push(books.title + " by " + books.author + " (" + books.category + ")" + " (~" + books.callNumber + "~)" + "<br>");
    }
  });
  $(function() {
    $("#checked-out").html(loanedBooks);
  });
}

