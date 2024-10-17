function reduce(arr, callback, pocetnaVrijednost) {
    let accumulator = pocetnaVrijednost;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

const niz = [1, 2, 3, 4, 5];

const zbroj = reduce(niz, (acc, elem) => acc + elem, 0);
console.log(zbroj); 

export { reduce };