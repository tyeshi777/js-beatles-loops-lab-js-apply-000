// add solution here
function theBeatlesPlay(musicians, instruments) {
 let beatles = [];
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}
function johnLennonFacts(facts) {
  let factsWithStrings = [];
  let i = 0;
  while (i < facts.length) {
    factsWithStrings.push(`${facts[i]}!!!`);
    i++;
  }
  return factsWithStrings;
}
 function iLoveTheBeatles(num) {
   let loveBeatles = [];
   do {
     loveBeatles.push("I love the Beatles");
   }
   while (num < 15);
   num++;
 }