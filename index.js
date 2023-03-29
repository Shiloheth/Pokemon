const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'black'
c.fillRect(0,0,canvas.width,canvas.height)

const image = new Image()
image.src = './images/map.png'

const player = new Image()
player.src = './images/Anoradown.png'

console.log(collisions)

class Sprite{
    constructor({position,velocity,image}){
     this.position = position
     this.image = image
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({image:image,position:{
    x:0,
    y:0
}})

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
    window.requestAnimationFrame(animation)
    background.draw()
    c.drawImage(player,0,0,player.width/4,player.height,canvas.width/2-player.width/4,canvas.height/2-player.height/2,player.width/4,player.height)

    if(keys.ArrowDown.isPressed){
        background.position.y = background.position.y-3
    }
    if(keys.ArrowUp.isPressed){
        background.position.y = background.position.y+3
    }
    if(keys.ArrowLeft.isPressed){
        background.position.x = background.position.x+3
    }
    if(keys.ArrowRight.isPressed){
        background.position.x = background.position.x-3
    }
}

animation()

window.addEventListener('keydown',(e)=>{
switch(e.key){
    case 'ArrowDown': keys.ArrowDown.isPressed = true
    break;
    case 'ArrowUp': keys.ArrowUp.isPressed = true
    break;
    case 'ArrowLeft': keys.ArrowLeft.isPressed = true
    break;
    case 'ArrowRight': keys.ArrowRight.isPressed = true
} 
console.log(keys)
})

window.addEventListener('keyup',(e)=>{
    switch(e.key){
        case 'ArrowDown': keys.ArrowDown.isPressed = false
        break;
        case 'ArrowUp': keys.ArrowUp.isPressed = false
        break;
        case 'ArrowLeft': keys.ArrowLeft.isPressed = false
        break;
        case 'ArrowRight': keys.ArrowRight.isPressed = false
    } 
    console.log(keys)
    })

 