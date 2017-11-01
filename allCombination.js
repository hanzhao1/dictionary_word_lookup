const checkDups = (array) => {
  const objectNumbers = {};

  for(let i = 0; i< array.length; i++){
    if(objectNumbers[array[i]]){
      return true;
    }
    objectNumbers[array[i]] = array[i];
  }
  return false;
};

const comb = (word, anagram = '', answer = [], letterIndex = [], startingIndex = 0) => {
  if(!checkDups(letterIndex)){
    answer.push(anagram);
  }
  if(word.length === 0){
    return;
  }
  for(let i = startingIndex; i < word.length; i++){
    comb(word, anagram.concat(word[i]), answer, letterIndex.concat(i), startingIndex+1);  
  }
  return answer;
};

module.exports = { checkDups, comb };