const Target = require("./target");

function TargetSpawner(gameCtx, performance, timer) {
  this.gameCtx = gameCtx;
  this.performance = performance;
  this.timer = timer;
  this.targetsSpawned = 0;
}

TargetSpawner.prototype.start = function () {
  let spawnInterval = setInterval(() => {
    this.spawnTarget();
  }, 700 - this.timer.seconds);
};

const getRandomPosition = () => (
  [Math.floor(Math.random() * 950) + 30, Math.floor(Math.random() * 400) + 100]
) 

TargetSpawner.prototype.spawnTarget = function () {
  let newTarget = new Target(this.targetsSpawned, getRandomPosition(), this.performance.combo, this.performance.accuracy, this.performance.healthbar, this.performance);
  newTarget.spawn(this.gameCtx);
  this.performance.targets[this.targetsSpawned] = newTarget;
  this.targetsSpawned += 1;
};

module.exports = TargetSpawner;