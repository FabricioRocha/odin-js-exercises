const findTheOldest = function(peopleArr) {
    let curtime = new Date();
    let thisYear = curtime.getFullYear();
    let eldest;

    if (peopleArr.length < 1) return {};

    for (person of peopleArr) {
        let personAge = (person.yearOfDeath || thisYear) - person.yearOfBirth;
        
        if (eldest === undefined || (personAge > (eldest.yearOfDeath || thisYear) - eldest.yearOfBirth)) {
            eldest = person;
        }
    }

    return eldest;
};

// Do not edit below this line
module.exports = findTheOldest;
