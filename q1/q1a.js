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
  _.forEach(people, function(people) {
    peopleList.push("<br>" + people.name + " is a " + people.occupation + " with an Awesome Index of " + people.awesome_index);
  });
  $("#ppl-list").html(peopleList);
  $("#awesome-index").html(average);
}

function awesomeAvg(people) {
  _.forEach(people, function(people){
    if (people.occupation === "programmer") {
      progs++;
      total += people.awesome_index;
      average = total / progs;
    }
  });
}

awesomeAvg(people);
display();
