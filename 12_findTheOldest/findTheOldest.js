const findTheOldest = function (array) {
  return array.reduce((previousPerson, currentPerson) => {
    let previousAge = previousPerson.yearOfDeath - previousPerson.yearOfBirth;
    const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    if (!previousPerson.yearOfDeath) {
      const today = new Date().getFullYear();
      previousAge = today - previousPerson.yearOfBirth;
    }
    if (previousAge > currentAge) {
      return previousPerson;
    }
    return currentPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
