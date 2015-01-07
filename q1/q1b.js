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

var average = 0,
    progs = 0,
    total = 0;

function display() {

  var peopleList = [];
  for (var i = 0; i < people.length; i++) {
    peopleList.push("<br>" + people[i].name + " is a " + people[i].occupation + " with an Awesome Index of " + people[i].awesome_index);
  }
  document.getElementById("ppl-list").innerHTML = peopleList;
  document.getElementById("awesome-index").innerHTML = average;
}

function awesomeAvg(people) {
  for (var i = 0; i < people.length; i++) {
    if (people[i].occupation === "programmer") {
      progs++;
      total += people[i].awesome_index;
      average = total / progs;
      console.log(total + " total points from " + progs + " programmers:");
      console.log("The new average is " + average);
    } else {
      console.log(people[i].name + " is not a programmer, so the Awesome Index of programmers is unaffected and remains " + average);
    }
  }
}

awesomeAvg(people);
display();

// constructor to add new people
// call to recalculate average when a new person is added
// display current people in the list
