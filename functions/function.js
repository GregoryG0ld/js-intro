console.clear();

/*


*/

function empty() {
   // empty logic block
}

const a = empty();
console.log(a);

function duokPenkis() {
   return 5;
}

console.log(duokPenkis());

function jubil(username, age) {

   const count = (age - age % 10) / 10;
   return `${username} turejo ${count} jubileju/-s!`;

}

console.log(jubil('Jonas', 80));
console.log(jubil('Maryte', 12));
console.log(jubil('Petras', 56));
console.log(jubil('Ona', 28));


function studAvg(name, marks) {
   let totalSum = 0;


   const average = totalSum / marks.lenght;
   return `${name}: pazymiu vidurkis yra 5.`;

}

console.log(studAvg('Jonas', [10, 2, 8, 6, 2]));
console.log(studAvg('Maryte', [6, 2, 1, 6, 2]));
console.log(studAvg('Petras', [5, 2, 8, 6, 2]));
console.log(studAvg('Ona', [9, 9, 9, 9, 9]));