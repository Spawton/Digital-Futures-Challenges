# Rock, Paper, Scissors Challenge
---

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#problem-statements">Problem Statements</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
  </ol>
</details>

---

## About The Project

This project was our fifth technical assignment in the Digital Futures Academy programme.

The project was to implement a backend server that ran a Rock-Paper-Scissors game for a player. The server was also responsible for generating and providing the HTML presentational layer for the player to interact with.
The projects purpose was to demonstrate my ability to implement a backend server that would comply with OOD principles and provide logic and routes to provide the functionality.

## Built With

The core server implementation was NodeJS with Express (web framework) and dotenv (environment variable loading). EJS was also used to provide embedded JavaScript templates that could be provided by the server.

Testing was implemented using the Mocha framework with chai and chai-http.

## Getting Started

Clone the project and then from the project root directory:

1. Install the dependencies 
```
$ npm i
```
2. Run tests:
```
$ npm test     
```
3. Run the server
```
$ npm start    
```
4. Using web browser, navigate to the localhost address/port provided in the server console.

## Problem Statements

This was a technical assignment I undertook as part of the Digital Futures Academy programme. The project was to implement a backend server that ran a Rock-Paper-Scissors game for a player.

The original user stories and requirements can be found in the file [./ChallengeInstructions.md](./ChallengeInstructions.md).

Prior to coding I worked through decomposing the user stories into smaller, more digestable stories to make writing the code smoother. I have included my decomposed user stories below. 

## User stories

Prior to coding I worked through decomposing the stories, diagrammatically mapping the routes and views and summarising through domain modelling. The outcomes of this process are recorded below.

### Original requirement stories for standard criteria:

```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game
```
```
As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

### Decomposed stories:

```
As the player,
I want the game to provide a form so that I can type my name,
so that the game knows who I am.
```
```
As the player,
I want the game to provide the options Rock, Paper, and Scissors that I can choose each turn,
so that I can play the game.
```
```
As the player,
I want the game (computer) to generate a random option (Rock, Paper, Scissors) each round,
so that that I have an opponent to play against.
```
```
As the player,
I want the game to tell me each turn whether I or the computer won,
so that I know if I won.
```

## Tests

### App.js tests

1) App.js should make request to '/' root.
2) should return code 200 with get request.(This test passes, however it seems to create an error that stops me from starting my application, I was unable to work out why so I have commented out the test.)
3) App.js should make request to '/game' root.
4) should return an html file that includes "Welcome to Rock, Paper, Scissors!

### game.js tests

1) should make successful get request to '/game' root.
2) should return code 200 with get request.

### player.js tests

1) Should take a name as a parameter.
2) Should take a choice as a parameter.

### RockPaperScissors.js tests

1) Should create a player.
2) Should create player with correct name and choice.
3) Should return a random number index within the array.
4) Should return 'this.message'.
5) Testing that the computer choice is a valid option.
6) Testing computer should generate an array of Rock, Paper, Scissors.
   
## Project Review and Roadmap

My overall learning from this project:
- I have enjoyed learning about EJS and using their embedded JavaScript templates to communicate the game scores on the console. I hadn't learnt about EJS before so I found it incredibly interesting.

My technical learning from this project:
- Implementing a NodeJS server using the Express framework including use of `App.locals` variables to hold the game's state and the use of GET and POST request routes to allow the player to interact with the server.
- Using EJS templates to allow the server to generate complete HTTP based on the system state to be provided to the user.
- The Mocha testing framework, Chai and Chai-HTTP 

Improvements/additional features that could be included:

-I would have liked to complete the extended criteria. Implementing a second player and Rock, Paper, Scissors, Spock, Lizard extended game. 
-The code in my rockPaperScissors.js file could be cleaner. I'm sure there is  way to write the game logic in a shorter, more concise way.   