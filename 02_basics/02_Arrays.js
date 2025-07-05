const marverl_heros = ["Ironaman", "Thor", "spiderman"]
const dc_heros = ["Superhero", "Flash", "Batman"]

// marverl_heros.push(dc_heros)

// console.log(marverl_heros);
// console.log(marverl_heros[3][1]);

// const allheros = marverl_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marverl_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5],5,[4,6,9],9,9]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Kartik"));
console.log(Array.from("Kartik"));
console.log(Array.from({name :"Kartik"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
