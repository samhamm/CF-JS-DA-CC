// q1b.js
// Sam Hamm
// Code Fellows JavaScript Code Challenge
// January 2015

var people = [
  {
    name: 'Bob',
    occupation: 'programmer',
    awesome_index: 34,
  },
  {
    name: 'Alice',
    occupation: 'programmer',
    awesome_index: 26,
  },
  {
    name: 'Zaphod',
    occupation: 'President of the Galaxy',
    awesome_index: 10
  }
];

var average = 0;

function display() {

  var peopleList = [];
  for (var i = 0; i < people.length; i++) {
    peopleList.push("<br>" + people[i].name + " is a " + people[i].occupation + " with an Awesome Index of " + people[i].awesome_index);
  }
  awesomeAvg(people);
  document.getElementById("ppl-list").innerHTML = peopleList;
  document.getElementById("awesome-index").innerHTML = average;
}

function awesomeAvg(people) {
  var progs = 0,
      total = 0;
  for (var i = 0; i < people.length; i++) {
    if (people[i].occupation === "programmer") {
      progs++;
      total += people[i].awesome_index;
      average = total / progs;
    } else {
      console.log(people[i].name + " is not a programmer, and does not affect the Awesome Index of programmers.");
    }
  }
  average = Math.round(average * 100) / 100;
  return average;
}

display();
