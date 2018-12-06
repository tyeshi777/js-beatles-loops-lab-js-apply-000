function theBeatlesPlay(musicians, instruments) {
  let musics = [];
  for(let i = 0; i < musicians.length; i++) {
    musics.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musics;
}
function johnLennonFacts(facts) {
  let theFacts = [];
  let i = 0;
  while (i < facts.length) {
    theFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return theFacts;
}
function iLoveTheBeatles(num) {
  let love = [];
  do {
    love.push(`I love the Beatles!`);
    num++;
  } while (num < 15);
  
  return love;
}