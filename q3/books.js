function Book(author, title, category, status, callNumber){
  this.author = author;
  this.title = title;
  this.category = category;
  this.status = status;
  this.callNumber = callNumber;
}

var qua1 = new Book('Quark, Mel', '"JavaScratch: Code for Kittens"', 'programming', 'loaned', 'QUA_1');
var ewi1 = new Book('Ewing, Cris', '"The Insatiable Python"', 'programming', 'shelved', 'EWI_1');
var rig1 = new Book('Riggio, Brook', '"Maritime Navigation: Rails for Sails"', 'programming', 'shelved', 'RIG_1');
var dju1 = new Book('D-Jung', '"Trucking It Thai-Style"', 'cuisine', 'shelved', 'DJU_1');
var top1 = new Book('Top Pot', '"Donuts Are Like Palindromes"', 'cuisine', 'loaned', 'TOP_1');
var ber1 = new Book('Berliner Döner', '"Flatbread for Flavor and Profit"', 'cuisine', 'shelved', 'BER_1');
var sta1 = new Book('Starbucks', '"Burnt Coffee"', 'cuisine', 'shelved', 'STA_1');
var sto1 = new Book('Storck, Ivan', '"Thick and Full"', 'beards', 'shelved', 'STO_1');
var ewi2 = new Book('Ewing, Cris', '"Trim and Tight"', 'beards', 'shelved', 'EWI_1');
var mor1 = new Book('Morgan, Tyler', '"The Emo Lumberjack"', 'beards', 'loaned', 'MOR_1');
var ham1 = new Book('Hamm, Sam', '"Escargoatee: My Beard-Trapped Gourmet"', 'beards', 'shelved', 'HAM_1');

var books = [ber1, dju1, ewi1, ewi2, ham1, mor1, qua1, rig1, sta1, sto1, top1];
