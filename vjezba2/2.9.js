function createIterator(array) {
    let index = 0;
  
    return {
      next: function () {
        if (index < array.length) {
          const result = {
            value: array[index],
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
  
  function numSelectString(numbers) {
    const oddNumbers = numbers.filter(number => number % 2 !== 0).sort((a, b) => a - b);
    const iterator = createIterator(oddNumbers);
  
    return {
      next: function () {
        return iterator.next();
      }
    };
  }
  
  const numbersArray = [17, 34, 3, 12, 23];
  const iterator = numSelectString(numbersArray);
  
  let nextResult;
  do {
    nextResult = iterator.next();
    console.log(nextResult);
  } while (!nextResult.done);
  