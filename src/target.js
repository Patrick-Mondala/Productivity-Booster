function Target(pos, size) {
  this.pos = pos;
  this.size = size;
}

const getRandomIconPos = () => {
  let row = Math.floor(Math.random() * 9) * 32;
  let col = Math.floor(Math.random() * 10) * 32;
  return [col, row];
}

Target.prototype.draw = function (ctx) {
  const x = this.pos[0];
  const y = this.pos[1];
  const iconCol = getRandomIconPos()[0];
  const iconRow = getRandomIconPos()[1];
  const size = this.size;
  const vendorIcons = new Image();
  vendorIcons.onload = function () {
    //first two is x,y pos on spritesheet
    //second two is h/w on spritesheet
    //third two is x,y pos on canvas
    //last two are h/w on canvas
    ctx.drawImage(vendorIcons, iconRow, iconCol, 32, 32, x, y, size, size);
  };
  vendorIcons.src = "vendor-icons.png";
};

module.exports = Target;