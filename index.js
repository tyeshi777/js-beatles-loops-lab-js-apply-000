function theBeatlesPlay(musicians, instruments) {
  let album = [];
  for (let i = 0; i < musicians.length; i++) {
    album.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return album;
}
function johnLennonFacts(facts) {
  newFacts = [];
  let i = 0;
  while (i < facts.length) {
  newFacts.push(`${facts[i]}!!!`);
  i++;
  }
  return newFacts;
}