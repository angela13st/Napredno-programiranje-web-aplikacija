function createIterator(array) {
    let index = 0;
  
    return function getNextElement() {
      if (index < array.length) {
        const element = array[index];
        index++;
        return `${element} je ${index}. element niza`;
      } else {
        return 'Kraj niza';
      }
    };
  }
  
 
  const myArray = ['Jabuka', 'Banana', 'Kruska', 'Šljiva'];
  
  const iterator = createIterator(myArray);
  
  console.log(iterator()); 
  console.log(iterator()); 
  console.log(iterator()); 
  console.log(iterator()); 
  console.log(iterator()); 
  