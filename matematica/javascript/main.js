const c = document.querySelector(".quadro")
const ctx = c.getContext("2d")
const ctx2 = c.getContext("2d")
const btnGraf = document.getElementById("btnGraf")
const btnLimpar = document.getElementById("btnLimpar")

function base(){
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(300,0)
    ctx.strokeStyle = "#000000"
    ctx.lineTo(300,600)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(0,300)
    ctx.strokeStyle = "#000000"
    ctx.lineTo(600,300)
    ctx.stroke()

    for(let i = 10; i <= 600; i += 10){
        ctx2.beginPath()
        ctx2.moveTo(i,0)
        ctx2.strokeStyle = "#6377ad"
        ctx2.lineTo(i,600)
        ctx2.stroke()
    }

    for(let i = 10; i <= 600; i += 10){
        ctx2.beginPath()
        ctx2.moveTo(0,i)
        ctx2.strokeStyle = "#6377ad"
        ctx2.lineTo(600,i)
        ctx2.stroke()
    }

}

function limparQuadro() {
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, 600, 600)
    base()
}

btnGraf.onclick = function (){
    let cor = document.querySelector('.cor').value
    let funcaoStr = document.querySelector('.funcao').value
    let y
    let x = -30
    let cx = -1
    let cy = -10*(eval(funcaoStr))+300

    for(x= -30; x<=30; x += 1){
        y = eval(funcaoStr)
        let ncx = 10*x+300
        let ncy = -10*y+300

        // console.log(x+" "+y+" "+ncx+" "+ncy)

        ctx.strokeStyle = cor
        ctx.lineWidth = 5
        ctx.beginPath()
        ctx.moveTo(cx,cy)
        ctx.lineTo(ncx,ncy)

        ctx.stroke()
        cx = ncx
        cy = ncy
    }


}

btnLimpar.onclick = function () {
    limparQuadro()
}


document.onload = base()