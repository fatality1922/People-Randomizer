const fs = require('fs');

genders = ['M', 'F'];
namesMale = ['John', 'James', 'Michael', 'David', 'Nick'];
namesFemale = ['Kate', 'Bridget', 'Lisa', 'Angela', 'Julia'];
lastNames = ['Brown', 'Smith', 'Kowalsky', 'Rider', 'da Vinci']

let people = [];
let i = 0;
while (i <= 20) {
    let person = {};
    person.id = i;

    person.gender = genders[Math.floor(Math.random() * genders.length)];

    if (person.gender == 'M') {
        person.firstName = namesMale[Math.floor(Math.random() * namesMale.length)];
    } else {
        person.firstName = namesFemale[Math.floor(Math.random() * namesFemale.length)];
    }

    person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    person.age = Math.floor((Math.random() * 60) + 18);
    person.mail = `${person.firstName}.${person.lastName}@gmail.com`;

    people.push(person);

    i++;
}


// let tempPeople = {};

// for (id in people) {
//     if ( people[id].Status == "Valid" ) { 
//         tempPeople[id] = people;
//     }
// }
// people = tempPeople;
console.log(people);
const data = JSON.stringify(people);
fs.writeFile('ludzie.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});