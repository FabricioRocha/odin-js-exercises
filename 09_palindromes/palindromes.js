const palindromes = function (str) {
    let rechars = /([0-9]|[a-z]|[A-Z]){1}/
    // Prepare original string
    let original = "";
    for (let i = 0; i < str.length; i++ ) {
        if (str[i].match(rechars)) original += str[i].toLowerCase();
    }

    // Prepare reverse string
    let reverse = "";
    for (let i = original.length - 1; i >= 0; i--) {
        reverse += original[i];
    }

    // Compare the prepared strings
    let flag = true;
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== reverse[i]) {
            flag = false;
            break;
        }
    }

    return flag;
};

// Do not edit below this line
module.exports = palindromes;
