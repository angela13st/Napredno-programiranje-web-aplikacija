function numSelectString(numbers)
{
    const neparni = numbers.filter(number => number%2 !== 0).sort((a,b) => a-b);

    const resultString= neparni.reduce(function (acc, num)
    {
        if(acc === '')
        {
            return `${num}`;
        }
        else
        {
            return `${acc}, ${num}`;
        }
    }, '');
    return resultString;
};

const numbersArray=[17,34,3,12,23];
const result=numSelectString(numbersArray);
console.log(result);