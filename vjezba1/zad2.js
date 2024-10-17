function prioritiziraj(niz, callback)
{
    var noviniz=[]

    for(var i=0; i<niz.length; i++)
    {
        if(callback(niz[i])){
            noviniz.unshift(niz[i]) //Array.unshift() dodaje na pocetak
        }
        else{
            noviniz.push(niz[i])
        }
        
    }
    return noviniz;

}


function fun(n)
{
    if(n%2==0)
        return true
    else
        return false
}

//var niz = [21, 23, 23, 25, 2, 2, 2, 2, 2];
var niz = [4, 5, 6, 7];
var rjesenje=prioritiziraj(niz, fun);
console.log(rjesenje);