console.log("With Spaces: " + findStringLength("Hello World"));
console.log("Without Spaces: " + stringLengthWithoutSpaces("Hello World"));
console.log("With extra parameter: " + stringLength("Hello World", 0));

function findStringLength(inputString:string) 
{
    return inputString.length;
}

function stringLengthWithoutSpaces(inputString:string) 
{
    let count = 0;

    for (let i = 0, length = inputString.length; i < length; i++) 
    {
        if (inputString[i] !== ' ')
        {
            count++;
        }
    }

    return count;
}

function stringLength(inputString:string, allowSpaces:number) 
{
    let count = 0;

    if(allowSpaces == 0)
    {
        count = inputString.length;;
    }
    else if(allowSpaces == 1)
    {
        for (let i = 0, len = inputString.length; i < len; i++) 
        {
            if (inputString[i] !== ' ')
            {
                count++;
            }
        }
    }

    return count;
}