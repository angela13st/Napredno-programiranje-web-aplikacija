const promise = new Promise((resolve, reject) => {
    reject("Odmah rejectano");
  });
  
  promise.catch((error) => {
    console.error("Error:", error);
  });
  