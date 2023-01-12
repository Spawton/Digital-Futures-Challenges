const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport")


let expectedOutput, actualOutput, result;
let input = [];
let test = ``;
console.log('All testing begins')

//Test 1 - Instruct the airport to land a plane
//arrange
console.log('Start test 1')
test = `Test 1 - Instruct the airport to land a plane`;
console.log(test);

let airport1 = new Airport();

input = { id: `Plane1` };
expectedOutput = "1";

//act
airport1.add(input)
actualOutput = airport1.landedPlanes.length
console.log(actualOutput);


//assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`${test}: ${result ? `Pass` : `Fail`}`);
console.log("End test 1")

//cleanup
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test1b: Is it the same item ID?
console.log('Start test 1b')
test = `Test 1b - Is it the same item ID?`;
console.log(test);

// Arrange
input = { id: `Plane1` };
expectedOutput = true;

// Act
airport1.add(input);
actualOutput = airport1.checkID(input);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 1b: It's the same input: ${result}`);
console.log("End test 1b")


// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test 2: Airport capacity that can be overridden
console.log('Start test 2')
test = `Test 2 - Airport capacity that can be overridden`;
console.log(test);

// Arrange
const airport2 = new Airport();
// input = { id: `Plane1` };
airport2.add(input);
airport2.add(input);
airport2.add(input);
airport2.add(input);
airport2.add(input);
expectedOutput = 5;

// Act
actualOutput = airport2.capacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 2: Can Airport capacity be overridden?: ${result}`);
console.log("End test 2")

// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test 3: Prevent landing when airport full
console.log('Start test 3')
test = `Test 3 - Prevent landing when airport full`;
console.log(test);

// Arrange
const airport3 = new Airport();
airport3.add(input);
airport3.add(input);
airport3.add(input);
airport3.add(input);
airport3.add(input);
expectedOutput = true;

// Act
actualOutput = airport3.isAirportFull();

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 3: Airport is full: ${result}`);
console.log("End test 3")

// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test 4: Let plane take off and confirm it's not in the airport
console.log('Start test 4')
test = `Test 4 - Let plane take off and confirm it's not in the airport`;
console.log(test);

// Arrange
const airport4 = new Airport();
airport4.landedPlanes = ["Plane1", "Plane2", "Plane3", "Plane4", "Plane5"];
expectedOutput = true;
input = "Plane3";

expectedOutput = `${input} has now taken off and isn't in the airport any longer`;

// Act
actualOutput = airport4.planeTakeOff(input);
console.log(actualOutput);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(airport4.landedPlanes);
console.log(`Test 4: Has plane taken off and left airport? ${result ? `Pass` : `Fail`}`);
console.log("End test 4")

// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test 4b: Confirm plane that has taken off is not in the airport
console.log('Start test 4b')
test = `Test 4b - Confirm plane that has taken off is not in the airport`;
console.log(test);

// Arrange
expectedOutput = true;

// Act
planeID = "Plane3";
actualOutput = !airport4.isLanded(planeID);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 4b: Has plane left the airport? ${result}`);
console.log("End test 4b")

// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test 5: prevent asking the airport to let planes take-off which are not at the airport
console.log('Start test 5')
test = `Test 5 - prevent asking the airport to let planes take-off which are not at the airport`;
console.log(test);

// Arrange
let airport5 = new Airport;
airport5.landedPlanes = ["Plane1", "Plane2", "Plane3", "Plane4", "Plane5"];
input = "Plane6";
expectedOutput = `${input} cannot Take Off  - It is not currently in the airport!`;

// Act
actualOutput = airport5.planeTakeOff(input);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 5: Is plane in airport? ${result} - Error- Plane cannot take off as it's not in Airport!`);
console.log("End test 5")

// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test 5b: prevent landing a plane that's already landed
console.log('Start test 5b')
test = `Test 5b - prevent landing a plane that's already landed`;
console.log(test);

// Arrange
let airport5b = new Airport;
airport5b.landedPlanes = ["Plane1", "Plane2", "Plane4", "Plane5"];
expectedOutput = true;

// Act
planeID = "Plane1";
actualOutput = airport5b.isLanded(planeID);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 5b: Had plane already landed? ${result} - Error- Plane cannot land again!`);
console.log("End test 5b")

// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;