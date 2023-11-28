const getTheTitles = function(objarr) {
    let titles = [];
    for (item of objarr) titles.push(item.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
