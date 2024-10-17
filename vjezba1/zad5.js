function pipe(funkcije, vrijednost) {
    let rez=vrijednost
    for(const funct of funkcije)
    {
        rez=funct(rez)

    }
    return rez
}

function duplo(x) {
    return x*2
}

function plusPet(x) {
    return x+5
}

function pola(x) {
    return x/2
}

const funkcije = [duplo, plusPet, pola]
const vrijednost = 5
const rezultat = pipe(funkcije, vrijednost)
console.log(rezultat)