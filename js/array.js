/*
ARRAY - sąrašas / masyvas / kolekcija / listas / matrica / arėjas
*/

console.clear();

const tuscias = [];
console.log(tuscias, tuscias.length);

//          index: 0  1  2  3  4  5  6
const pazymiai = [10, 2, 8, 4, 6, 9, 7, 5];
console.log(pazymiai, 'sudaro', pazymiai.length, 'skaiciai');

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const treciasPazymys = pazymiai[2];
console.log(treciasPazymys);

const pazymioPozicija = pazymiai.length - 1;
const paskutinisPazymys = pazymiai[pazymioPozicija];
console.log(paskutinisPazymys);

// Masyvas pazymiu.
// Suskaiciuoji pazymiu vidurki ir isvesti kaip sakini:
// "Studento pazymiu vidurkis yra 7."

const evalArr = [5, 8, 4, 6, 9, 10, 2, 7, 6, 8];

// Easy Method 
const evalMiddle = (evalArr[0] + evalArr[1] + evalArr[2] + evalArr[3] + evalArr[4] + evalArr[5] + evalArr[6] + evalArr[7] + evalArr[8] + evalArr[9]) / evalArr.length;

//console.log(evalMiddle);
console.log('Studento pazymiu vidurkis yra' + ' ' + evalMiddle);

// Using forEach()

let evalSum = 0;
evalArr.forEach(num => {
   evalSum += num;
})

const evalMiddle2 = evalSum / evalArr.length
//console.log(evalMiddle2);

console.log('Studento pazymiu vidurkis yra' + ' ' + evalMiddle2);



// Masyvas vietovardziu.
// Suformuojat sakini:
// "Mano aplankytos vietos: Vieta1, Vieta2, Vieta3."

var cities = ["New York", "Los Angeles", "London", "Paris", "Tokyo"];

var formattedCities = cities.join(', ');
console.log(`Mano aplankytos vietos ${formattedCities}`);