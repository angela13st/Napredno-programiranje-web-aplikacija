function komutativnost(callback1, callback2, vrijednost) {
    const rezultat1 = callback2(callback1(vrijednost));
    const rezultat2 = callback1(callback2(vrijednost));
    return rezultat1 === rezultat2;
}

function funkcija1(x) {
    return x - 1;
}

function funkcija2(x) {
    return x * 2;
}

const vrijednost = 5;
const rezultat = komutativnost(funkcija1, funkcija2, vrijednost);
console.log(rezultat);