function borrar1() {
    ctx.fillStyle="white"
        ctx.beginPath()
        ctx.rect(Personaje1.x-100,Personaje1.y-100,200,200)
        ctx.fill()
        ctx.fillStyle="black"
}

let i=1
let d=2
let desplazamientoX=0
let desplazamientoY=0
let canv=document.querySelector("#myCanvas2")
let ctx=canv.getContext("2d")
class Personaje{
    constructor(x,y){
        this.x=x
        this.y=y 
    }
    dibujarse(){
        ctx.translate(this.x,this.y)
        ctx.lineWidth = 6; // Grosor de la linea

var startx = 0; // Posicion X
var starty = 0; // Posicion Y
ctx.strokeStyle = 'blue'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
ctx.beginPath();
ctx.arc(startx, starty, 10, 0, 2 * Math.PI); // Creamos un circulo para la cabeza. el orden de los parámetros son: posición x, posición y ancho y alto
ctx.stroke();

ctx.beginPath(); // Cuerpo
ctx.moveTo(startx, starty+10);
ctx.lineTo(startx, starty+50);
ctx.stroke();

ctx.beginPath(); // Dibujar mano izq
ctx.moveTo(startx, starty+12.5);
ctx.lineTo(startx-15, starty+30);
ctx.stroke();

ctx.beginPath(); // Dibujar mano der
ctx.moveTo(startx, starty+12.5);
ctx.lineTo(startx+15, starty+30);
ctx.stroke();

ctx.beginPath(); // Pie Izq
ctx.moveTo(startx, starty+50);
ctx.lineTo(startx-(i*7.5), starty+75);
ctx.stroke();

ctx.beginPath(); // Pie der
ctx.moveTo(startx, starty+50);
ctx.lineTo(startx+(d*7.5), starty+75);
ctx.stroke();
if(i==1){
    i=2
    d=1
}else{
    i=1
    d=2
 }
ctx.translate(-this.x,-this.y)
    }
}
let Personaje1=new Personaje(50,50,2,1)
Personaje1.dibujarse()
let contenedor = document.querySelector("#texto")
contenedor.innerHTML = `Utilice la función "Personaje()" en la consola para crear otro personaje`;
document.addEventListener("keydown",function(flecha){
    console.log(flecha)
    if(flecha.keyCode == 37) {
        //izquierda
        borrar1();
        desplazamientoX=desplazamientoX-5
        if (desplazamientoX<0) {
            desplazamientoX=0
        }
        Personaje1=new Personaje(50+desplazamientoX,50+desplazamientoY)
        Personaje1.dibujarse()
    }
    else if(flecha.keyCode == 39) {
        borrar1();
        desplazamientoX=desplazamientoX+5
        if (desplazamientoX>600) {
            desplazamientoX=600
        }
        Personaje1=new Personaje(50+desplazamientoX,50+desplazamientoY)
        Personaje1.dibujarse()
    }
    else if(flecha.keyCode == 38) {
        borrar1();
        desplazamientoY=desplazamientoY-5
        if (desplazamientoY<0) {
            desplazamientoY=0
        }
        Personaje1=new Personaje(50+desplazamientoX,50+desplazamientoY)
        Personaje1.dibujarse()
    }
    else if(flecha.keyCode == 40) {
        borrar1();
        desplazamientoY=desplazamientoY+5
        if (desplazamientoY>200) {
            desplazamientoY=200
        }
        Personaje1=new Personaje(50+desplazamientoX,50+desplazamientoY)
        Personaje1.dibujarse()
    }
})
