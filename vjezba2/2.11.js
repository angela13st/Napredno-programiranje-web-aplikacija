function* wordGenerator(sentence) {
    const words = sentence.split(' ');
  
    for (const word of words) {
      yield word;
    }
  }
  
  
  const sentence = "Hello world, how are you?";
  const generator = wordGenerator(sentence);
  
  let nextWord = generator.next();
  while (!nextWord.done) {
    console.log(nextWord.value);
    nextWord = generator.next();
  }
  