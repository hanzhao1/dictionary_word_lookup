const express = require('express');
const path = require('path');
const fs = require('fs');
const { comb } = require('./allCombination')
let dictionaryObject = {};


fs.readFile('dictionary.txt', 'utf8', (error, data)=>{
  if(error) throw err;
  dictionaryObject = data.split('\n').reduce((acc, word, index)=>{
    if(acc[word[0]] === undefined){
      acc[word[0]] = {};
    }
    if(acc[word[0]][word.length] === undefined){
      acc[word[0]][word.length] = [];
    }
    acc[word[0]][word.length].push(word);
    return acc;
  }, {});
})

const allCombination = (word) => {}
const app = express();

app.use(express.static('public'));

app.get('/words', (request, response)=>{
  const letter = request.query.word;
  const allCombos = comb(letter).map((ele)=>{return ele.toUpperCase()});
  const answer = allCombos.filter((word, index)=>{
    if(dictionaryObject[word[0]] !== undefined){
      if(dictionaryObject[word[0]][word.length] !== undefined){
        if(dictionaryObject[word[0]][word.length].includes(word)){
          return true;
        }
      }
    }
    return false;
  });
  response.send(answer);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/main.html'));
});

app.listen(3000, ()=>{
  console.log('listening to port 3000')
})