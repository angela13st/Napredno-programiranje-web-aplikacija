function returnSum(niz)
{
    let suma=0;
    for(let i=0; i<niz.length; i++)
    {
        suma+=niz[i];
    }
    return suma;
}

const niz = [1,2,3,4,5];
const rezultat=returnSum(niz);
console.log(rezultat);