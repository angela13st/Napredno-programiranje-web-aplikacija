function vecina(niz, callback)
{
    var t=0;
    var f=0;

    for (var i=0; i<niz.length; i++)
    {
        if((callback(niz[i]))==true)
            t++;
        else
            f++;
    

        if (niz.length-i < t && t>f)
        {
            console.log(i)
            return true;
        }
    }
    return false;

}


function fun(n)
{
    if(n%2==0)
        return true
    else
        return false
}

//var niz = [14, 5, 6, -2, 7];
//var niz = [14, 6, 6, 2, 7];
//var niz = [3, 5, 1, -2, 7];
//var niz = [14, 5, 6, -2, 7, 6, 8, 9, 5, 6, 3, 1];
//var niz = [1, 1, 1];
//var niz = [2, 2, 2, 2, 2, 2, 2, 2];
//var niz = [21, 23, 23, 25, 2, 2, 2, 2];
var niz = [21, 23, 23, 25, 2, 2, 2, 2, 2];
var rjesenje=vecina(niz, fun);
console.log(rjesenje);