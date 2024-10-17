const fakePeople = [
    { name: 'Ivo', hasPets: false },
    { name: 'Eva', hasPets: true },
    { name: 'Marko', hasPets: true }
  ];
  
  function fakeAPICall(i) {
    return new Promise((resolve, reject) => {
      if (i < 0 || i >= fakePeople.length) {
        reject(new Error('Invalid index'));
        return;
      }
  
      const randomTimeout = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
      setTimeout(() => resolve(fakePeople[i]), randomTimeout);
    });
  }
  
  function getAllData(i) {
    return new Promise((resolve, reject) => {
      if (i < 0 || i >= fakePeople.length) {
        reject(new Error('Invalid index'));
        return;
      }
  
    const promises = [];
    promises.push(fakeAPICall(i));
    promises.push(fakeAPICall(i));
    promises.push(fakeAPICall(i));
     
  
      Promise.all(promises)
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  const index = 2;
  getAllData(index)
    .then(data => console.log('All data:', data))
    .catch(error => console.error('Error:', error.message));
  