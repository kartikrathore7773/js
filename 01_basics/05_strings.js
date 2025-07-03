const name = "Kartik"
const repocount = 22

//console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('kartikpg')

//onsole.log(gameName[0]);

//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newstring = gameName.substring(0,4)

console.log(newstring);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newstringone = "   kartik    "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

