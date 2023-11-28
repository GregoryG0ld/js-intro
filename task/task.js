const input =
   "41222600244102566074424681473310882255792931305537202808677137862125412633159102808720760401114861034438031043635996619399744100221146001622307859519260753990";

function findMostCommonPairs(inputString) {
   const pairsMap = inputString
      .split('')
      .reduce((map, char, index, array) => {
         if (index < array.length - 1) {
            const pair = char + array[index + 1];
            map.set(pair, (map.get(pair) || 0) + 1);
         }
         return map;
      }, new Map());

   let maxCount = 0;
   let maxPairs = [];

   pairsMap.forEach((count, pair) => {
      if (count > maxCount) {
         maxCount = count;
         maxPairs = [pair];
      } else if (count === maxCount) {
         maxPairs.push(pair);
      }
   });

   return `Pairs: ${maxPairs}, Count: ${maxCount}`;
}

console.log(findMostCommonPairs(input));
