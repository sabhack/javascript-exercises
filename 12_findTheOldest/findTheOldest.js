const findTheOldest = function(array) {
    return array.reduce((oldest, currentGuy) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentGuy.yearOfBirth, currentGuy.yearOfDeath);
        return oldestAge < currentAge ? currentGuy : oldest;
    })
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;