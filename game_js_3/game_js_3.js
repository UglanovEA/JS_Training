const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const mapWidth = canvas.offsetWidth;
const mapHeight = canvas.offsetHeight;

const world = {
  width: canvas.offsetWidth,
  height: canvas.offsetHeight,
  speed: 0.6,
  draw() {
    ctx.fillStyle = '#add8e6'
    ctx.fillRect(0, 0, mapWidth, mapHeight)
  }
}

function Tube(x) {
  this.x = x
  this.y = 0
  this.width = 20
  this.height = 70
  this.distance = 40
  this.draw = () => {
    ctx.fillStyle = '#008000'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.fillRect(this.x, this.height + this.distance, this.width, world.height)
  }
}

const bird = {
  x: 20,
  y: 20,
  width: 14,
  height: 12,
  gravity: 0,
  img: new Image(this.width, this.height),
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  },
  fly() {
    this.gravity = this.gravity = -3
  }
}

bird.img.src = './img/bird.png'
window.onkeydown = () => bird.fly() // Движение по нажатию клавиши

const tubes = [new Tube(world.width), new Tube(world.width + world.width / 2)]
function reset() {
  bird.y = 20
  bird.gravity = 1
}
function render() {
  world.draw()
  bird.draw()

  tubes.forEach(tube => {
    tube.draw()
     tube.x = tube.x - world.speed
  })
  
  bird.y = bird.y + bird.gravity
  bird.gravity = bird.gravity + 0.3

  const isBirdOutOfScreen = bird.y > world.height
  if (isBirdOutOfScreen) {
    reset()
  }
};
setInterval(render, 1000 / 60)
