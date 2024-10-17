function russianRoulette(n) {
    let count = 0;
  
    return function () {
      count++;
  
      if (count < n) {
        return 'click!';
      } else if (count === n) {
        return 'bang';
      } 
    };
  }
  
  
  
  const game = russianRoulette(3);
  
  console.log(game()); 
  console.log(game()); 
  console.log(game()); 
  