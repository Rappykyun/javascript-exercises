const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        const currentAge = (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        return (currentAge > oldestAge) ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
