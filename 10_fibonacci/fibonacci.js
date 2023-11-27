const fibonacci = function(pos) {
    let index = parseInt(pos) - 1;
    if (index < 0) return "OOPS";
    if (index === 0) return 0;

    let arrSeq = [1, 1];

    if (index < arrSeq.length) {
        return arrSeq[index];
    } else {
        for (let i = arrSeq.length; i <= index; i++) {
            arrSeq.push(arrSeq[i-1] + arrSeq[i-2]);
        }
        return arrSeq[arrSeq.length - 1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
