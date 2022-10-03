const quadro = document.getElementById("quadro")
const limparBtn = document.getElementById("limpBtn")
const aumentarBtn = document.getElementById("aumeBtn")
const diminuirBtn = document.getElementById("dimiBtn")
const tamanhoIn = document.getElementById("tamanhoInput")
const ctx = quadro.getContext("2d")


let size = 10
let isPressed = false
let cor = "#000000"
let x
let y 


/*
//report the mouse position on click
quadro.addEventListener("click", function (evt) {
    var mousePos = getMousePos(quadro, evt);
    // alert(Math.round(mousePos.x) + ' , ' + Math.round(mousePos.y));
    let mouseX = Math.round(mousePos.x)
    let mouseY = Math.round(mousePos.y)

    ctx.beginPath()
    ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2)
    ctx.fillStyle = "#000000"
    ctx.fill()
}, false);

//Get Mouse Position
function getMousePos(quadro, evt) {
    var rect = quadro.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
*/


//funções
function limpaQuadro() {
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, quadro.getAttribute("height"), quadro.getAttribute("width"))
}

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x,y, size, 0, Math.PI * 2)
    ctx.fillStyle = cor
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = cor
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// -----

document.onload = limpaQuadro()

limparBtn.onclick = function () {
    limpaQuadro()
}

aumentarBtn.onclick = function () {
    size += 5
    tamanhoIn.value = size
}

diminuirBtn.onclick = function () {
    size -= 5
    if(size < 1){
        size = 1
    }
    tamanhoIn.value = size
}

tamanhoIn.onchange = function () {
    size = parseInt(tamanhoIn.value)
    if(size<1){
        size = 1
        tamanhoIn.value = size
    }
}


quadro.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
    cor = document.getElementById("cor").value
    //console.log("md")
})

document.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
    //console.log("mu")
})

quadro.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x,y,x2,y2)
        x = x2
        y = y2
    }
    //console.log("mv")
})

//  mobile

quadro.addEventListener('touchstart', (e) => {
    isPressed = true
    touch = e.changedTouches
    x = 2*parseInt(touch[0].pageX)
    y = 2*parseInt(touch[0].pageY)
    cor = document.getElementById("cor").value
    //console.log("md"+x+" "+y)
})

document.addEventListener('touchend', (e) => {
    isPressed = false
    x = undefined
    y = undefined
    //console.log("mu")
})

quadro.addEventListener('touchmove', (e) => {
    if(isPressed){
        let touch2 = e.changedTouches
        const x2 = 2*parseInt(touch2[0].pageX)
        const y2 = 2*parseInt(touch2[0].pageY)
        drawCircle(x2, y2)
        drawLine(x,y,x2,y2)
        x = x2
        y = y2
    }
    //console.log("mv")
})






