nota1=Number(prompt("¿Cual es su primera nota?"))
nota2=Number(prompt("¿Cual es su segunda nota?"))
nota3=Number(prompt("¿Cual es su tercera nota?"))
promedio= (nota1+nota2+nota3)/3
let urlFeliz ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png"
let urlTriste="https://cdn-0.emojis.wiki/emoji-pics/facebook/pensive-face-facebook.png"
let imgHtml=document.querySelector("#imagen")
if(promedio>6){
    imgHtml.src =urlFeliz
} else{
    imgHtml.src = urlTriste
}