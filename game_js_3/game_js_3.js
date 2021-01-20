const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const mapWidth = canvas.offsetWidth;
const mapHeight = canvas.offsetHeight;

const world = {
  width: canvas.offsetWidth,
  height: canvas.offsetHeight,
  speed: 1,
  draw() {
    ctx.fillStyle = '#add8e6'
    ctx.fillRect(0, 0, mapWidth, mapHeight)
  }
}

const tube = {
  x: 300,
  y: 0,
  width: 20,
  height: 70,
  distance: 40,
  draw() {
    ctx.fillStyle = '#008000'
    ctx.fillRect(tube.x, tube.y, tube.width, tube.height)
    ctx.fillRect(tube.x, tube.height + tube.distance, tube.width, world.height)
  }
}

const bird = {
  x: 20,
  y: 90,
  width: 17,
  height: 16,
  img: new Image(this.width, this.height),
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}
bird.img.src = './img/bird.png'

function render() {
  world.draw()
  tube.draw()
  bird.draw()

  tube.x = tube.x - world.speed
};
setInterval(render, 1000 / 60)
