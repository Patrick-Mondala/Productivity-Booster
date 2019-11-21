function Timer() {
  this.seconds = 0;
  this.secToDisplay = function () {
    let minutes = Math.floor(this.seconds / 60);
    let seconds = this.seconds % 60;
    if (minutes < 1 && seconds < 10) return `00:0${seconds}`;
    if (minutes < 1) return `00:${seconds}`;
    if (minutes < 10 && seconds < 10) return `0${minutes}:0${seconds}`;
    if (minutes < 10) return `0${minutes}:${seconds}`;
    if (seconds < 10) return `${minutes}:0${seconds}`;
    return `${minutes}:${seconds}`;
  }
}

Timer.prototype.draw = function (ctx) {
  let timerObj = this;
  var timer = setInterval(function () {
    timerObj.seconds += 1
    ctx.font = "60px Arial";
    ctx.fillStyle = "white";
    ctx.clearRect(845, 0, 200, 60);
    ctx.fillText(`${timerObj.secToDisplay()}`, 845, 50);
  }, 1000);
};

module.exports = Timer;