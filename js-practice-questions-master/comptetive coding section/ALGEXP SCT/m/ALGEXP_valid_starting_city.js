/*
Valid Starting City
Imagine you have a set of cities that are laid out in a circle, connected by a
circular road that runs clockwise. Each city has a gas station that provides gallons
of fuel, and each city is some distance away from the next city.
You have a car that can drive some number of miles per gallon of fuel, and your
goal is to pick a starting city such that you can fill up your car with that city's fuel,
drive to the next city, refill up your car with that city's fuel, drive to the next city,
and so on and so forth until you return back to the starting city with 0 or more
gallons of fuel left.
This city is called a valid starting city, and it's guaranteed that there will always be
exactly one valid starting city.
For the actual problem, you'll be given an array of distances such that city i is
distances[i] away from city i + 1 . Since the cities are connected via a
circular road, the last city is connected to the first city. In other words, the last
distance in the distances array is equal to the distance from the last city to
the first city. You'll also be given an array of fuel available at each city, where
fuel[i] is equal to the fuel available at city i . The total amount of fuel
available (from all cities combined) is exactly enough to travel to all cities. Your
fuel tank always starts out empty, and you're given a positive integer value for the
number of miles that your car can travel per gallon of fuel (miles per gallon, or
MPG). You can assume that you will always be given at least two cities.
Write a function that returns the index of the valid starting city.
Sample Input
distances = [5, 25, 15, 10, 15]
fuel = [1, 2, 1, 0, 3]
mpg = 10
Sample Output
4
*/

//SOLUTION 1
// TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(1) - where n is the number of cities
function validStartingCity(distances, fuel, mpg) {
  const numberOfCities = distances.length;

  for (let startCityIdx = 0; startCityIdx < numberOfCities; startCityIdx++) {
    let milesRemaining = 0;

    for (
      let currentCityIdx = startCityIdx;
      currentCityIdx < startCityIdx + numberOfCities;
      currentCityIdx++
    ) {
      if (milesRemaining > 0) continue;

      const currentCityIdxRotated = currentCityIdx % numberOfCities;
      const fuelFromCurrentCity = fuel[currentCityIdxRotated];
      const distanceToNextCity = distances[currentCityIdxRotated];
      milesRemaining += fuelFromCurrentCity * mpg - distanceToNextCity;
    }
    if (milesRemaining > 0) return startCityIdx;
  }

  return -1;
}

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) - where n is the number of cities

function validStartingCity(distances, fuel, mpg) {
  const numberOfCities = distances.length;
  let milesRemaining = 0;

  let indexOfStartingCityCandidate = 0;
  let milesRemainingAtStartCityCandidate = 0;

  for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
    const distanceFromPreviousCity = distances[cityIdx - 1];
    const fuelFromPreviousCity = fuel[cityIdx - 1];

    milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;
    if (milesRemaining < milesRemainingAtStartCityCandidate) {
      milesRemainingAtStartCityCandidate = milesRemaining;
      indexOfStartingCityCandidate = cityIdx;
    }
  }

  return indexOfStartingCityCandidate;
}
