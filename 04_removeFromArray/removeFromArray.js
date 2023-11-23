const removeFromArray = function(arr, ...toRemove) {
    let newarr = [];
    for (const arrItem of arr) {
        if (toRemove.indexOf(arrItem) < 0) {
            newarr.push(arrItem)
        }
    }

    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
