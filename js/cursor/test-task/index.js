function findFirstUniqueChar(string) {
  let strOfDuplicate = '';
  let word = '';
  let letter = '';
  
  const arrOfWords = string.split(' ');

         arrOfWords.forEach(element => {
          word = element;
           for (let i = 0; i < word.length; i++) {
      letter = word[i];
      if (word.indexOf(letter) === word.lastIndexOf(letter)) {
        strOfDuplicate += letter;
        break;
      }
          }
         });
    
    const uniqueChar = defineUnique(strOfDuplicate)
    return uniqueChar;
}

function defineUnique(string) {
    let subString = "";
    let letter = "";
    for (let j = 0; j < string.length; j++) {
    letter = string[j];

    if (string.indexOf(letter) === string.lastIndexOf(letter)) {
      subString += letter;
      break;
        };
    };
    //console.log(subString)
    return subString;
}

const text = `The Tao gave birth to machine language. Machine language gave birth
to the assembler.
The assembler gave birth to the compiler. Now there are ten thousand
languages.
Each language has its purpose, however humble. Each language
expresses the Yin and Yang of software. Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming`;

console.log(findFirstUniqueChar(text));
//console.log(defineUnique(text));
