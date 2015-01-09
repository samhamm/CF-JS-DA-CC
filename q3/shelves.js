function Book(author, title, category, status){
  this.author = author;
  this.title = title;
  this.category = category;
  this.status = status;
}

var qua1 = new Book('Quark, Mel', '"JavaScratch: Code for Kittens"', 'dev', 'shelved');
var ewi1 = new Book('Ewing, Cris', '"The Insatiable Python"', 'dev', 'shelved');
var rig1 = new Book('Riggio, Brook', '"Maritime Navigation: Rails for Sails"', 'dev', 'shelved');
var dju1 = new Book('D-Jung', '"Trucking It Thai-Style"', 'cuisine', 'shelved');
var top1 = new Book('Top Pot', '"Donuts Are Like Palindromes"', 'cuisine', 'shelved');
var ber1 = new Book('Berliner Döner', '"Flatbread for Flavor and Profit"', 'cuisine', 'shelved');
var sta1 = new Book('Starbucks', '"Burnt Coffee"', 'cuisine', 'shelved');
var sto1 = new Book('Storck, Ivan', '"Thick and Full"', 'beards', 'shelved');
var ewi2 = new Book('Ewing, Cris', '"Trim and Tight"', 'beards', 'shelved');
var mor1 = new Book('Morgan, Tyler', '"The Emo Lumberjack"', 'beards', 'shelved');
var ham1 = new Book('Hamm, Sam', '"Escargoatee: My Beard-Trapped Gourmet"', 'beards', 'shelved');

// var books = [qua1, ewi1, rig1, dju1, top1, ber1, sta1, sto1, ewi2, mor1, ham1];
var books = [ber1, dju1, ewi1, ewi2, ham1, mor1, qua1, rig1, sta1, sto1, top1];

var allTitles = [],
    allAuthors = [],
    devBooks = []
    cuisineBooks = []
    beardBooks = [];

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

function shelf1(books) {
  devBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "dev") {
      devBooks.push(books.title + " by " + books.author + "<br>");
    }
  });
  $("#dev").html(devBooks);
}

function shelf2(books) {
  cuisineBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "cuisine") {
      cuisineBooks.push(books.title + " by " + books.author + "<br>");
    }
  });
  $("#cuisine").html(cuisineBooks);
}

function shelf3(books) {
  beardBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "beards") {
      beardBooks.push(books.title + " by " + books.author + "<br>");
    }
  });
  $("#beards").html(beardBooks);
}

$(function() {

  // LIST

  $("#booksByAuthor").click(function() {
    $("#all-books").html(listAllByAuthor(books));
  });

  $("#booksByTitle").click(function() {
    // $("#all-books").html("by title");
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


});
