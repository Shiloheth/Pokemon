const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'black'
c.fillRect(0,0,canvas.width,canvas.height)

const image = new Image()
image.src = './images/map.png'

const playerdown = new Image()
playerdown.src = './images/Anoradown.png'

const playerleft = new Image()
playerleft.src = './images/Anoraleft.png'

const playerup = new Image()
playerup.src = './images/Anoraup.png'

const playerright = new Image()
playerright.src = './images/Anoraright.png'

let moving = null
const map = []
const Boundaries = []

for(let i = 0;i<collisions.length;i+=41){
map.push(collisions.slice(i,i+41))
}

console.log(map)

class Character{
    constructor({position,image,time}){
    this.position = position
    this.image = image.up
    this.time = time
    }
    draw(){
        c.drawImage(this.image, this.position.x,this.position.y, 62.5, this.image.height, canvas.width/2-this.image.width/4, canvas.height/2-this.image.height/2, this.image.width/4, this.image.height)
        console.log(this.image.width)
        if(true){this.time++}
        if(this.time%15===0){
        if(this.position.x<249-64&&moving){this.position.x+=64}
        else this.position.x = 0}
    }
}

class Boundary{
    constructor({position}){
        this.position = position
        this.width = 48
        this.height = 48
    }
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

class Sprite{
    constructor({position,velocity,image}){
     this.position = position
     this.image = image
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

map.forEach((a,i)=>{
    a.forEach((b,j)=>{
      if(b===2945){
        Boundaries.push(new Boundary({position:{x:j*48,y:i*48}}))
      }
    })
})

const background = new Sprite({image:image,position:{
    x:0,
    y:0
}})


Ash = new Character({image:{down:playerdown,up:playerup,right:playerright,left:playerleft},position:{x:0,y:0},time:1})


const keys = {
    ArrowDown:{
        isPressed:false
    },
    ArrowUp:{
        isPressed:false
    },
    ArrowLeft:{
        isPressed:false
    },
    ArrowRight:{
        isPressed:false
    }
}




function animation(){

    window.requestAnimationFrame(animation);
    background.draw();
    Boundaries.forEach((b) => b.draw());
    Ash.draw()

    if(keys.ArrowDown.isPressed){
        background.position.y -=3
        Boundaries.forEach((a,i)=>a.position.y-=3)
        Ash.image = playerdown
    }
    if(keys.ArrowUp.isPressed){
        background.position.y = background.position.y+3
        Boundaries.forEach((a,i)=>a.position.y+=3)
        Ash.image = playerup
    }
    if(keys.ArrowLeft.isPressed){
        background.position.x = background.position.x+3
        Boundaries.forEach((a,i)=>a.position.x+=3)
        Ash.image = playerleft
    }
    if(keys.ArrowRight.isPressed){
        background.position.x = background.position.x-3
        Boundaries.forEach((a,i)=>a.position.x-=3)
        Ash.image = playerright
    }
}

animation()




window.addEventListener('keydown',(e)=>{
    moving=true
switch(e.key){
    case 'ArrowDown': keys.ArrowDown.isPressed = true
    break;
    case 'ArrowUp': keys.ArrowUp.isPressed = true
    break;
    case 'ArrowLeft': keys.ArrowLeft.isPressed = true
    break;
    case 'ArrowRight': keys.ArrowRight.isPressed = true
} 
})

window.addEventListener('keyup',(e)=>{
    moving=false
    switch(e.key){
        case 'ArrowDown': keys.ArrowDown.isPressed = false
        break;
        case 'ArrowUp': keys.ArrowUp.isPressed = false
        break;
        case 'ArrowLeft': keys.ArrowLeft.isPressed = false
        break;
        case 'ArrowRight': keys.ArrowRight.isPressed = false
    } 

    })

