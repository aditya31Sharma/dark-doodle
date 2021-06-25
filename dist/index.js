// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let size=20;
// let color='black';
// let isPressed=false;
// let moveX;
// let moveY;

// const drawCircle=(X,Y)=>{
//     ctx.beginPath();
//     ctx.arc(X,Y,size,0, Math.PI*2);
//     ctx.fillStyle=color;
//     ctx.fill();
// }
// const drawLine=(mX,mY,dX,dY)=>{
//     ctx.beginPath();
//     ctx.moveTo(mX,mY);
//     ctx.lineTo(dX,dY);
//     ctx.strokeStyle=color;
//     ctx.lineWidth=size*2;
//     ctx.stroke();
// }


// canvas.addEventListener('mousedown',(e)=>{
//     isPressed=true;
//     moveX=e.offsetX;
//     moveY=e.offsetY;
// })
// canvas.addEventListener('mouseup',(e)=>{
//     isPressed=false;
//     moveX=undefined;
//     moveY=undefined;
// })
// canvas.addEventListener('mousemove',(e)=>{
//     if(isPressed){

//         let drawX=e.offsetX;
//         let drawY=e.offsetY;

//         drawCircle(drawX,drawY);
//         drawLine(moveX,moveY,drawX,drawY);

//         moveX=drawX;
//         moveY=drawY;
//     }
// })


const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const eraserBtn=document.getElementById('eraser')
const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

canvas.addEventListener('click',(e)=>{

    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;
    drawCircle(x, y);
    setTimeout(()=>{
        isPressed=false;
        x=undefined;
        y-undefined;
    },1)

})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

eraserBtn.addEventListener('click',()=>{
    color='#fff';
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
