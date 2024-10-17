function callAfter(count,callback)
{
    let calls=0;

    return function after()
    {
        calls++;

        if(calls >= count)
        {callback();}
    };
}
function myCallback()
{
    console.log("Callback funkcija je izvršena!");
}

const afterFunction= callAfter(3, myCallback);

afterFunction();
afterFunction();
afterFunction();
