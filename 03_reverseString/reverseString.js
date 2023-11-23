const reverseString = function(original) {
    let newstr = "";
    let strindex = original.length - 1;

    while (strindex >= 0) {
        newstr += original[strindex--];
    }

    return newstr;
};

// Do not edit below this line
module.exports = reverseString;
