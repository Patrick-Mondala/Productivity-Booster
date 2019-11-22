const Target = require("./target");

function TargetSpawner(gameCtx, performance, timer) {
  this.gameCtx = gameCtx;
  this.performance = performance;
  this.timer = timer;
  this.stopped = false;
}

TargetSpawner.prototype.start = function () {
  let spawnInterval = setInterval(() => {
    this.spawnTarget();
  }, Math.floor(Math.random() * 10000) + 1000);
};

const getRandomPosition = () => (
  [Math.floor(Math.random() * 950) + 30, Math.floor(Math.random() * 380) + 110]
) 

TargetSpawner.prototype.spawnTarget = function () {
  let newTarget = new Target(this.performance.targetsSpawned, getRandomPosition(), this.performance.combo, this.performance.accuracy, this.performance.healthbar, this.performance);
  newTarget.spawn(this.gameCtx);
  this.performance.targets[this.performance.targetsSpawned] = newTarget;
  this.performance.targetsSpawned += 1;
};

module.exports = TargetSpawner;