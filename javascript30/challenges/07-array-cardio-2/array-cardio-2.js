// JavaScript30 JS
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

var exercise1 = document.getElementById("exercise1");
var exercise2 = document.getElementById("exercise2");
var exercise3 = document.getElementById("exercise3");
var exercise4 = document.getElementById("exercise4");

var answer1 = people.some(
  person => new Date().getFullYear() - person.year >= 19
);
exercise1.innerHTML = `<p>${answer1}</p>`;

var answer2 = people.every(
  person => new Date().getFullYear() - person.year >= 19
);
exercise2.innerHTML = `<p>${answer2}</p>`;

var answer3 = comments.find(comment => comment.id === 823423);
exercise3.innerHTML = `<p>${answer3.text}</p>`;

var index = comments.findIndex(comment => comment.id === 823423);

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
var answer4 = newComments
  .map(comment => comment.id + ": " + comment.text)
  .join("\n");
exercise4.innerHTML = `<p>${answer4}</p>`;