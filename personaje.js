let canv=document.querySelector("#myCanvas")
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
let Personaje1=new Personaje(100,100,0,50)
Personaje1.dibujarse()
let Personaje2=new Personaje(200,100,45,75)
Personaje2.dibujarse()
let Personaje3=new Personaje(100,200,-45,25)
Personaje3.dibujarse()
let Personaje4=new Personaje(200,200,180,100)
Personaje4.dibujarse()
let contenedor = document.querySelector("#texto")
contenedor.innerHTML = `Utilice la función "Personaje()" en la consola para crear otro personaje`
