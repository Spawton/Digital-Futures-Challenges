Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

---
---
---

## **User story 1**
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

## **Domain model**
| Object  | Property                       | Message          | Output  |
| ------- | ------------------------------ | ---------------- | ------- |
| airport | LandedPlanes @array [@planeId] | Add(@planeId)    | @string |
|         |                                | checkID(input)   | @string |
| Planes  |                                | planeId @ string |         |
|         |                                |                  |         |

## **Tests**
#### Test 1 - Test that in a new instance of airport you can add new plane into landedPlanes array using `add(input)` method and the length of the array equals 1 
#### Test 1b - Test to see if it is the same item plane ID using `checkID` function

---

## **User story 2**
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

## **Domain model**
| Object  | Property | Message       | Output  |
| ------- | -------- | ------------- | ------- |
| airport | capacity | add(@planeId) | @number |
|         |          |               |         |

## **Tests**
#### Test 2 - Test that in a new instance of airport you can add planes using `add(input)` method and then use capacity property to see the length of the array

---

## **User story 3**
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

## **Domain model**
| Object  | Property        | Message         | Output   |
| ------- | --------------- | --------------- | -------- |
| airport | airportCapacity | isAirportFull() | @boolean |
|         |                 |                 |          |

## **Tests**
#### Test 3: Test that in a new instance of airport you can use the `isAirportFull()` method to see if the airport has reached capacity, if so return true

---

## **User story 4**
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

## **Domain model**
| Object  | Property     | Message                | Output  |
| ------- | ------------ | ---------------------- | ------- |
| airport | landedPlanes | planeTakeOff(@planeId) | @string |
|         |              | isLanded(@planeId)     | @string |
|         |              |                        |         |

## **Tests**
#### Test 4: Test that in a new instance of airport you can take an array of `landedPlanes` and use the `planeTakeOff(input)` method to remove one plane from the array
#### Test 4b: Confirm plane that has taken off is not in the airport using the `isLanded(planeId)` method

---

## **User story 5**
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

## **Domain model**
| Object  | Property   | Message                | Output  |
| ------- | ---------- | ---------------------- | ------- |
| airport | PlanesList | planeTakeOff(@planeId) | @string |
| airport | PlanesList | isLanded(@planeId)     | @string |
|         |            |                        |         |

## **Tests**
#### Test 5: Test that in a new instance of airport you can take an array of `landedPlanes` and use the `planeTakeOff(input)` method with a plane that is not in the array and recieve an error message
#### Test 5b: Test that in a new instance of airport you can take an array of `landedPlanes` and use the `isLanded(planeId)` function to check if plane is already landed, if so recieve an error message
---

1 - Clone this repo.
2 - npm install in the terminal to install project dependencies
3 - node index.js to run the project
4 - npm test to run tests using jasmine framework

Project Review and Roadmap
o What were your main takeaways from this project?
§ What did you learn or experience?
§ What would you do differently if you were to approach this
again?
o Where could this project go next?
§ If you were to continue developing this project, are there
additional or enhanced features you could think about
developing? Project Review and Roadmap
o What were your main takeaways from this project?
§ What did you learn or experience?
§ What would you do differently if you were to approach this
again?
o Where could this project go next?
§ If you were to continue developing this project, are there
additional or enhanced features you could think about
developing? 

I found this project to be a great way to learn test driven development. Before starting digital futures I hadn't heard of test driven development before and had only written code first and then checked it worked as I went along (although looking back my code may have been a lot easier to work out the kinks in my code using test driven development!) 

If i was to complete this project from fresh, I would incorporate encapsulation into the code as there was multiple variables that would benefit from being encapsulated. I would also like to 
