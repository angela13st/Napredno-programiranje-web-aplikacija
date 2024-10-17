function filter(niz, callback) {
    const filtriraniNiz = [];

    for (let i = 0; i < niz.length; i++) {
        if (callback(niz[i])) {
            filtriraniNiz.push(niz[i]);
        }
    }

    return filtriraniNiz;
}


const ulazniNiz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function jeliParan(x) {
    return x % 2 === 0;
}

const rezultatFiltra = filter(ulazniNiz, jeliParan);
console.log(rezultatFiltra); 
