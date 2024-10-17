function neAsyncFunkcija(imenica) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const glagol = "radi";
        const rečenica = `${imenica} ${glagol}`;
        resolve(rečenica);
      }, 3000);
    });
  }
  
  async function ispisRečenice(imenica) {
    const rečenica = await neAsyncFunkcija(imenica);
    console.log(rečenica);
  }
  
  
  const imenica = "test";
  ispisRečenice(imenica);
  