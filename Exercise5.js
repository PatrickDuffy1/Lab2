console.log("With Spaces: " + findStringLength("Hello World"));
console.log("Without Spaces: " + stringLengthWithoutSpaces("Hello World"));
console.log("With extra parameter: " + stringLength("Hello World", 0));
function findStringLength(inputString) {
    return inputString.length;
}
function stringLengthWithoutSpaces(inputString) {
    var count = 0;
    for (var i = 0, length_1 = inputString.length; i < length_1; i++) {
        if (inputString[i] !== ' ') {
            count++;
        }
    }
    return count;
}
function stringLength(inputString, allowSpaces) {
    var count = 0;
    if (allowSpaces == 0) {
        count = inputString.length;
        ;
    }
    else if (allowSpaces == 1) {
        for (var i = 0, len = inputString.length; i < len; i++) {
            if (inputString[i] !== ' ') {
                count++;
            }
        }
    }
    return count;
}
