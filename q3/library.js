bookStatus(books);

function listAllByAuthor(books) {
    allAuthors = [];
    books.sort(function(a, b){
    if(a.author < b.author) return -1;
    if(a.author > b.author) return 1;
    return 0;
  });
  _.forEach(books, function(books) {
    allAuthors.push(books.author + ": " + books.title + "<br>");
  });
  $("#all-books").html(allAuthors);
}

function listAllByTitle(books) {
  allTitles = [];
  books.sort(function(a, b){
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });
  _.forEach(books, function(books) {
    allTitles.push(books.title + " by " + books.author + "<br>");
  });
  $("#all-books").html(allTitles);
}

// ACTIONS

  // LIST

    $("#booksByAuthor").click(function() {
      $("#all-books").html(listAllByAuthor(books));
    });

    $("#booksByTitle").click(function() {
      $("#all-books").html(listAllByTitle(books));
    });

    $("#hideContentsList").click(function() {
      $("#all-books").html("");
    });

    // SHELF 1

    $("#hideShelf1").click(function() {
      $("#dev").html("");
    });

    $("#showShelf1").click(function() {
      $("#dev").html(shelf1(books));
    });

    // SHELF 2

    $("#hideShelf2").click(function() {
      $("#cuisine").html("");
    });

    $("#showShelf2").click(function() {
      $("#cuisine").html(shelf2(books));
    });

    //SHELF 3

    $("#hideShelf3").click(function() {
      $("#beards").html("");
    });

    $("#showShelf3").click(function() {
      $("#beards").html(shelf3(books));
    });

  // LIBRARIAN ACTIONS

    $("#remove1").click(function() {
      $("#shelf1").hide();
    });

    $("#return1").click(function() {
      $("#shelf1").show();
    });

    $("#remove2").click(function() {
      $("#shelf2").hide();
    });

    $("#return2").click(function() {
      $("#shelf2").show();
    });

    $("#remove3").click(function() {
      $("#shelf3").hide();
    });

    $("#return3").click(function() {
      $("#shelf3").show();
    });
