const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const mapWidth = canvas.offsetWidth;
const mapHeight = canvas.offsetHeight;

const world = {
  width: canvas.offsetWidth,
  height: canvas.offsetHeight,
  speed: 0,
  maxSpeed: 3,
  score: 0,
  topScore: 0,
  draw() {
    ctx.fillStyle = '#add8e6'
    ctx.fillRect(0, 0, mapWidth, mapHeight)

  },
  drawText() {
    ctx.fillStyle = '#ffffff'
    ctx.font = '18px serif'
    ctx.fillText(`Score: ${this.score}`, 15, 30)
    ctx.fillText(`Top score: ${this.score}`, 15, 50)
    if (!this.speed) {
      ctx.font = '32px serif'
      ctx.fillText(`GAME OVER`, world.width / 4, world.height / 2)
    }
  }
}

const bird = {
  x: 50,
  y: world.height / 2 - 40,
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
const tubes = [new Tube(world.width), new Tube(world.width + 230)]

window.onkeydown = () => {
  if (world.speed === 0) {
    world.speed = 1
  }
  bird.fly()
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

function reset() {
  bird.y = world.height / 2
  bird.gravity = 1
  world.speed = 0
  world.topScore = Math.max(world.score, world.topScore)
  world.score = 0
  tubes.forEach(tube => {
    tube.x = tube.x + world.width / 4
  })
}

function render() {
  // пауза
  if (world.speed) {
    bird.y = bird.y + bird.gravity
    bird.gravity = bird.gravity + 0.3
  }

  world.draw()
  bird.draw()

  tubes.forEach(tube => {
    tube.x = tube.x - world.speed
    tube.draw()

    const isTubeOutOfScreen = tube.x + tube.width < 0
    if (isTubeOutOfScreen) {
      tube.x = world.width
      tube.height = Math.random() * 250 + 50
      world.speed = Math.min(world.speed + 0.1, world.maxSpeed)
      world.score = world.score + 1
    }

    // столкновение с трубами
    const isTubeReachBird = (tube.x - tube.width < bird.x) && (tube.x + tube.width > bird.x)
    if (isTubeReachBird) {
      const isTubeHitBird = tube.height > bird.y || bird.y + bird.height > tube.height + tube.distance
      if (isTubeHitBird) {
        reset()
      }
    }
  })

  world.drawText()

  // столкновение с внешними границами
  const isBirdOutOfScreen = bird.y > world.height || bird.y < 0
  if (isBirdOutOfScreen) {
    reset()
  }
};

setInterval(render, 1000 / 60)
