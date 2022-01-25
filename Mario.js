function piso(nPiso, altura) {
   texto = "<p>"
   for (let i = 0; i < altura-nPiso; i++) {
   texto = texto + "&nbsp;"      
   }
   for (let i = 0; i < nPiso; i++) {
      texto = texto + "#"      
      }
   texto = texto + "</p>"
   nPiso=nPiso +1 
   return texto
}
let nPiso = 1;
do{
   altura=parseInt(prompt("Ingrese su numero de pisos (entre 1 y 10)")) 
}while (isNaN(altura) || altura<=0 || altura>10)
let contenido=""
for (let i = 1; i <= altura; i++) {
   contenido=contenido + piso(i,altura)   
}
let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = contenido