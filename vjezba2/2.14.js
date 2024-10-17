function printanjeResolveda() {
    console.log("Resolved");
  }
  
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 1000);
  });
  
  promise.then(printanjeResolveda);
  