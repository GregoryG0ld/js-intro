console.clear();

//1.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

const firstName = 'Robert';
const middleName = 'Jr';
const surName = 'Downey';

console.log(`${firstName[0]} ${surName} ${middleName}`);
console.log('----------------------');
//2.Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį: "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

const myName = 'Gregory';
const mySurname = 'Gold';
const myBirthDate = 1983;
const currentYear = 2023;

const age = currentYear - myBirthDate;

console.log(`Aš esu ${myName} ${mySurname}. Man yra ${age} metai(ų).`);
console.log('----------------------');
//3.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

const n1 = 'Clint';
const n2 = 'Eastwood';

// Method 1
const n3 = n1.slice(-3) + n2.slice(-3);

// Method 2
const n4 = n1.substring(n1.length - 3) + n2.substring(n2.length - 3);

console.log(n3);
console.log(n4);
console.log('----------------------');

//4.Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

//The 'g' flag stands for "global" and is used to specify that a regular expression should perform a global search. This means that the regex engine will search for all occurrences of the pattern in the input string, rather than stopping after the first match.

const s1 = 'Once upon a time in hollywood';

function replace(string) {

   const toReplace = new RegExp('[o-oO-O]', 'g');
   const replacement = '*';

   return string.replace(toReplace, replacement);

}

console.log(replace(s1));
console.log('----------------------');

//5.Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

const num1 = Math.round(Math.random() * 2);
const num2 = Math.round(Math.random() * 2);
const num3 = Math.round(Math.random() * 2);
const num4 = Math.round(Math.random() * 2);

const numArr = [num1, num2, num3, num4]

//filter(x => x === 0) - Tai yra masyvo filtravimas. filter metodas grąžina naują masyvą, kuriame yra tik tie elementai iš pradinio masyvo, kurie tenkina nurodytą sąlygą. Čia sąlyga yra x === 0, tai reiškia, kad mes norime gauti tik tuos elementus, kurie yra lygūs 0.

const zeroQuantity = numArr.filter(x => x === 0).length;
const oneQuantity = numArr.filter(x => x === 1).length;
const twoQuantity = numArr.filter(x => x === 2).length;

console.log(`Randomly generated variables contain ${zeroQuantity} zero\`s, ${oneQuantity} one\'s and ${twoQuantity} twoe\s. `);

//console.log(num1, num2, num3, num4);
console.log(numArr);
//console.log(zeroQuantity);

console.log('----------------------');

//6.Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

const num5 = Math.random() * 4;
const num6 = Math.random() * 4;

let result = num5 > num6 ? num5 / num6 : num6 / num5;


let resultRound = result.toFixed(2);

console.log(resultRound);
//console.log(num5, num6);

console.log('----------------------');

//7.Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

const num7 = Math.random() * 25;
const num8 = Math.random() * 25;
const num9 = Math.random() * 25;

const numArr2 = [num7, num8, num9];

let totalSum = 0;
const amount = numArr2.length;

for (let i = 0; i < amount; i++) {
   const array = numArr2[i];
   totalSum += array;
   //console.log(`${i})`, array, '=', totalSum);
}

const average = Math.round(totalSum / amount);
console.log('Vid.reikšme yra', average);

//console.log(numArr2);

console.log('----------------------');

//8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

const name1 = 'Tom';
const name2 = 'Cruse';

const name3 = name1[0] + name2[0];

console.log(name3);

console.log('----------------------');

//9.Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.


// const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
// let random = '';

// for (let i = 0; i < 3; i++) {
//    const randomIndex = Math.floor(Math.random() * lowercaseLetters.length);
//    random += lowercaseLetters.charAt(randomIndex);
// }

// console.log(random);
// console.log('----------------------');

function generateRandomString(length) {
   const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
   let randomString = '';

   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * lowercaseLetters.length);
      randomString += lowercaseLetters.charAt(randomIndex);
   }

   return randomString;
}

const randomString = generateRandomString(3);
console.log(randomString);