const promise = new Promise((resolve) => {
    resolve("Promise has been resolved!");
  });
  
  promise.then(() => console.log('Promise has been resolved!'));
  console.log("I'm not the promise!");
  