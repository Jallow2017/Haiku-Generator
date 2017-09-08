// var fs = require('fs');
// console.log(fs.readFileSync('./cmudict.txt'));


function createHaiku(structure, syllabelArr) {

  var arrOfWords;

  return structure.map(function(lines){
  	return lines.map(function(syllabels){
  		arrOfWords = syllabelArr[syllabels];
  		return arrOfWords[Math.floor(Math.random() * arrOfWords.length)]
  	}).join(' ');
  }).join('\n');

}

module.exports = {
	createHaiku: createHaiku,
};
// console.log(module);

