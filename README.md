# ProductivityBooster

## Background
Productivity Booster is the perfect tool to improve overall clicking ability to allow anyone to become more productive by accurately and precisely practicing to place their mouse cursor and clicking on its desired position. The game starts with a clock and a player is given temporary targets they have to click on before they disappear. After 3 targets failed to be clicked on the player would have lost all of their lives and would have to restart. As the game progresses more targets will begin to show up to increase difficulty.

## Functionality & MVP
With ProductivityBooster, players will be allowed to:
- [ ] Start, pause, and restart the game
- [ ] Click on targets

In addition, this project will include:
- [ ] An about section describing how to play
- [ ] A production README

## Architecture and Technologies
This project will be implemented with the following technologies:
* `Javascript` for game logic
* `Browserify` to bundle js files

In addition to the entry file, there will be three scripts involved in this project:

`game.js`: this script will handle logic for creating and updating the necessary elements and rendering them to the DOM.

`target.js`: this script will house the constructor and update functions for the `Target` objects.

`stats.js`: this script will handle logic for keeping track of a user's stats

## Implementation Timeline
**Day 1**: Setup all necessary Node modules, including getting webpack up and running. Write a basic entry file and the bare bones of all scripts outlined above.

**Day 2**: Create `Target` object to connect to the `Game` object. Then, use `game.js` to create and render the game element.

**Day 3**: Create backend logic to update and keep track of stats

**Day 4**: Style the frontend, making it polished and professional.

## Bonus features
- [ ] Leaderboards for highscores
- [ ] Different game modes/variations
- [ ] Multiplayer