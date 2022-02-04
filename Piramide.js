function piso(nPiso, altura) {
   texto = "<p>"
   for (let i = 0; i < altura-nPiso; i++) {
   texto = texto + "&nbsp;"      
   }
      texto = texto + "#"
   for (let i = 0; i < nPiso*2-1 ; i++) {
      texto = texto + "&nbsp;"      
      }
   texto=texto + "#"
   texto = texto + "</p>"
   nPiso=nPiso +1 
   return texto
}
let nPiso = 1;
do{
   altura=parseInt(prompt("Ingrese su numero de pisos (entre 1 y 10)")) -1
}while (isNaN(altura) || altura<=0 || altura>10)
texto="<p>"
for (let i = 0; i < altura; i++) {
   texto=texto + "&nbsp;"   
}
texto=texto+"#</p>"
let contenido=texto
for (let i = 1; i <= altura-1; i++) {
   contenido=contenido + piso(i,altura)   
}
texto="<p>"
for (let i = 0; i < altura*2+1; i++) {
texto=texto+"#"   
}
texto=texto+"</p>"
contenido=contenido+texto
let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = contenido