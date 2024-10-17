function reduce(arr, callback, pocetnaVrijednost) {
    let accumulator = pocetnaVrijednost;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}


function unija(niz1, niz2) {
    const rezultat = niz1.reduce((accumulator, elem) => {
        if (!accumulator.includes(elem)) {
            accumulator.push(elem);
        }
        return accumulator;
    }, niz2.slice());

    return rezultat;
}

const prviNiz = [1, 2, 3, 4, 5];
const drugiNiz = [3, 4, 5, 6, 7];
const rezultatUnije = unija(prviNiz, drugiNiz);

console.log(rezultatUnije);