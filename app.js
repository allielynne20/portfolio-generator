const fs = require('fs');
const generatePage = require('./src/page-template.js');
// console.log('Hello Node');node app.js 
//example of displaying error bc doc isn't defined
// console.log(document);

// var message = 'Hello Node!';
// var sum = 5 + 3;
// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// console.log (process);

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
// };
// printProfileData(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
// };

// printProfileData(profileDataArgs);

// console.log('================');

// const printProfileData = profileDataArr.forEach(function (profileItem) {
//     console.log(profileItem);
// });

// profileDataArr.forEach(profileItem => console.log(profileItem));

// printProfileData(profileDataArgs);

// let dog = 'poodle';
// if (true === true) {
//     let dog = 'pitbull';
//     console.log(dog);
// }
// console.log(dog);

// var pig = 'poodle';
// if (true === true) {
//     var pig = 'pitbull';
//     console.log(pig);
// }
// console.log(pig);


// console.log(name, github);
// console.log(generatePage(name, github));
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});