// JavaScript30 JS
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

function bornInYear() {
  let filtered = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);

  let exercise1 = document.getElementById('exercise1');
  filtered.forEach(a => {
    let p = document.createElement('p');
    p.innerHTML = `${a.first} ${a.last} (${a.year})`;
    exercise1.appendChild(p);
  })
}

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

function firstLastNames() {
  let list = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

  let exercise2 = document.getElementById('exercise2');
  let code = document.createElement('code');
  code.innerHTML = list;
  exercise2.appendChild(code)
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

function oldToYoung() {
  inventors.sort((a, b) => {
    return a.year - b.year
  });
  let exercise3 = document.getElementById('exercise3');
  inventors.forEach(a => {
    let p = document.createElement('p');
    p.innerHTML = `${a.first} ${a.last} (${a.year})`;
    exercise3.appendChild(p);
  })
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

function addYears() {
  let totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);

  let exercise4 = document.getElementById('exercise4');
  exercise4.innerHTML = `<p>Total years: ${totalYears}</p>`
}

// 5. Sort the inventors by years lived

function yearsLived() {
  inventors.sort((a, b) => {
    return (a.passed - a.year) - (b.passed - b.year);
  });

  let exercise5 = document.getElementById('exercise5');
  inventors.forEach(a => {
    let p = document.createElement('p');
    p.innerHTML = `${a.first} ${a.last} (${a.passed - a.year})`;
    exercise5.appendChild(p);
  })
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

function sortByLastName() {
  people.sort()
  let exercise7 = document.getElementById('exercise7');
  people.forEach(a => {
    let p = document.createElement('p');
    p.innerHTML = `${a}`;
    exercise7.appendChild(p);
  })
}

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

function countItems() {
  let dataCounts = data.reduce((counts, item) => {
    if (item in counts) {
      counts[item]++
    } else {
      counts[item] = 1;
    }
    return counts;
  }, {});
  let exercise8 = document.getElementById('exercise8');
  let dataCountsKeys = Object.keys(dataCounts);
  dataCountsKeys.forEach(a => {
    let p = document.createElement('p');
    let num = dataCounts[a];
    p.innerHTML = `${a}: ${num}`;
    exercise8.appendChild(p);
  })
}


bornInYear();
firstLastNames();
oldToYoung();
addYears();
yearsLived();
sortByLastName();
countItems();