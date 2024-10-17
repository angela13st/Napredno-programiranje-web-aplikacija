function reduce(arr, callback, pocetnaVrijednost) {
    let accumulator = pocetnaVrijednost;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}


function presjek(niz1, niz2) {
    const rezultat = reduce(niz1, (acc, elem) => {
        if (niz2.includes(elem)) {
            acc.push(elem);
        }
        return acc;
    }, []);

    return rezultat;
}

const prviNiz = [1, 2, 3, 4, 5];
const drugiNiz = [3, 4, 5, 6, 7];
const rezultatPresjeka = presjek(prviNiz, drugiNiz);

console.log(rezultatPresjeka);