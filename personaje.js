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
do {
    x=Number(prompt("Posición en x"))
} while (isNaN(x));
do {
    y=Number(prompt("Posición en y"))
} while (isNaN(y));
do {
    a=Number(prompt("Ángulo"))
} while (isNaN(a));
do {
    r=Number(prompt("radio"))
} while (isNaN(r)||r<0||r>300);
let Personaje1=new Personaje(x,y,a,r)
Personaje1.dibujarse()
let contenedor = document.querySelector("#texto")
contenedor.innerHTML = `Utilice la función "Personaje()" en la consola para crear otro personaje`