const sumAll = function(bottom, top) {
    if (Number.isNaN(bottom) || Number.isNaN(top) ||
        typeof (bottom) != "number" || typeof(top) !== "number" ||
        bottom < 0 || top < 0) {
        return 'ERROR';
    }

    let running = 0;
    if (bottom <= top) {
        for (let i = bottom; i <= top; i++) running += i;
    } else if (bottom >= top) {
        for (let i = top; i <= bottom; i++) running += i;
    }
    
    return running;
};


// teste
// let t = sumAll (4,1);

// Do not edit below this line
module.exports = sumAll;
