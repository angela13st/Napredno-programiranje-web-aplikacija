function createWordIterator(sentence) {
    const words = sentence.split(' ');
    let index = 0;
  
    return {
      next: function () {
        if (index < words.length) {
          const result = {
            value: words[index],
            done: false
          };
          index++;
          return result;
        } else {
          return { done: true };
        }
      }
    };
  }
  
  
  const sentence = "Hello world, how are you?";
  const wordIterator = createWordIterator(sentence);
  
  let nextWord;
  do {
    nextWord = wordIterator.next();
    if (!nextWord.done) {
      console.log(nextWord.value);
    }
  } while (!nextWord.done);
  