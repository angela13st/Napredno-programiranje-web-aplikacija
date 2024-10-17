function createIterator(array) {
    let index = 0;
  
    return {
      next: function() {
        if (index < array.length) {
          const result = {
            value: array[index],
            index: index
          };
          index++;
          return result;
        } else {
          return { done: true };
        }
      }
    };
  }
  

  const array = ['a', 'b', 'c', 'd'];
  const iterator = createIterator(array);
  
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  console.log(iterator.next()); 
  