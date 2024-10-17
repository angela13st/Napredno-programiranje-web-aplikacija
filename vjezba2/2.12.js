function* simulacijaRazgovora(rijeci) {
    let index = 0;
  
    const intervalId = setInterval(() => {
      if (index < rijeci.length) {
        const rijec = rijeci[index];
        const isGenerator = rijec.toLowerCase() === 'generator';
  
        if (isGenerator) {
          console.log('hej');
        } else {
          console.log('besmislica');
        }
  
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 3000);
  
    yield; // Pauziraj generator
  }
  
  // Primjer korišćenja:
  
  const rijeci = ['generator', 'nevažno', 'generator', 'nevažno', 'kraj'];
  const generator = simulacijaRazgovora(rijeci);
  
  generator.next(); // Pokreće generator
  