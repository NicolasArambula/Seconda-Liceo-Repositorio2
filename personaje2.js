let canv=document.querySelector("#myCanvas2")
let ctx=canv.getContext("2d")
class Personaje{
    constructor(x,y,angulo,r){
        this.x=x
        this.y=y
        this.angulo=angulo
        this.r=r
    }
    dibujarse(){
        ctx.translate(this.x,this.y)
        ctx.rotate(this.angulo*Math.PI/180)
    ctx.beginPath()
        ctx.arc(0,0,this.r,0,2*Math.PI)
        ctx.stroke()
    ctx.beginPath()
        ctx.arc(this.r/3,this.r/(-3),this.r/6,0,2*Math.PI)
        ctx.stroke()
    ctx.beginPath()
        ctx.arc(this.r/(-3),this.r/(-3),this.r/6,0,2*Math.PI)
        ctx.stroke()
    ctx.beginPath()
        ctx.arc(this.r/(-3),this.r/(-3),this.r/18,0,2*Math.PI)
        ctx.fill()
        ctx.stroke()
    ctx.beginPath()
        ctx.arc(this.r/3,this.r/(-3),this.r/18,0,2*Math.PI)
        ctx.fill()
        ctx.stroke()
    ctx.beginPath()
        ctx.arc(0,0,this.r/2,0.25*Math.PI,0.75*Math.PI)
        ctx.stroke()
    ctx.beginPath()
        ctx.moveTo(-this.r/14, -this.r/10)
        ctx.lineTo(this.r/10, -this.r/20)
        ctx.lineTo(this.r/18,this.r/8)
        ctx.stroke()

    ctx.rotate(-this.angulo*Math.PI/180)
    ctx.translate(-this.x,-this.y)
    }
}
let Personaje1=new Personaje(50,50,0,50)
Personaje1.dibujarse()
let Personaje2=new Personaje(400,100,45,75)
Personaje2.dibujarse()
let contenedor = document.querySelector("#texto")
contenedor.innerHTML = `Utilice la función "Personaje()" en la consola para crear otro personaje`;

canv.addEventListener("click",function(e){
    let XM=e.offsetX
    let YM=e.offsetY
    console.log(XM,YM)
    if ((XM-Personaje1.x)**2+(YM-Personaje1.y)**2<=(Personaje1.r)**2) {
        //borrar el personaje
        ctx.fillStyle="white"
        ctx.beginPath()
        ctx.rect(Personaje1.x-Personaje1.r,Personaje1.y-Personaje1.r,2.1*Personaje1.r,2.1*Personaje1.r)
        ctx.fill()
        ctx.fillStyle="black"
    }
    if ((XM-Personaje2.x)**2+(YM-Personaje2.y)**2<=(Personaje2.r)**2) {
        //borrar el personaje
        ctx.fillStyle="white"
        ctx.beginPath()
        ctx.rect(Personaje2.x-Personaje2.r,Personaje2.y-Personaje2.r,2.1*Personaje2.r,2.1*Personaje2.r)
        ctx.fill()
        ctx.fillStyle="black"
    }
})