function theBeatlesPlay(musicians, instruments) {
  let musics = [];
  for(let i = 0; i < musicians.length; i++) {
    musics.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musics;
}
function johnLennonFacts() {
  let theFacts = [];
  let i = 0;
  while (i < facts.length) {
    theFacts.push(`${facts[i]}!!!`);
  }
  return facts;
}