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

function Tube(x) {
  this.x = x
  this.y = 0
  this.width = 60
  this.height = 150
  this.distance = 150
  this.draw = () => {
    ctx.fillStyle = '#008000'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.fillRect(this.x, this.height + this.distance, this.width, world.height)
  }
}

const bird = {
  x: 50,
  y: world.height / 2 - 42,
  width: 44,
  height: 42,
  gravity: 0,
  img: new Image(this.width, this.height),
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  },
  fly() {
    this.gravity = this.gravity = -5
  },
}

bird.img.src = './img/bird.png'
window.onkeydown = () => bird.fly()

function reset() {
  bird.y = world.height / 2
  bird.gravity = 1
  tubes.forEach(tube => {
    tube.x = world.width + world.width / 4
  })
}

const tubes = [new Tube(world.width), new Tube(world.width + 230)]

function render() {
  world.draw()
  bird.draw()

  tubes.forEach(tube => {
    tube.draw()
    tube.x = tube.x - world.speed

    const isTubeOutOfScreen = tube.x + tube.width < 0
    if (isTubeOutOfScreen) {
      tube.x = world.width
      tube.height = Math.random() * 150 + tube.distance
    }
    const isTubeReachBird = (tube.x - tube.width < bird.x) && (tube.x + tube.width > bird.x)
    if (isTubeReachBird) {
      const isTubeHitBird = tube.height > bird.y
      if (isTubeHitBird) {
        reset()
      }
    }
  })

  bird.y = bird.y + bird.gravity
  bird.gravity = bird.gravity + 0.3

  const isBirdOutOfScreen = bird.y > world.height
  if (isBirdOutOfScreen) {
    reset()
  }
};

setInterval(render, 1000 / 60)
