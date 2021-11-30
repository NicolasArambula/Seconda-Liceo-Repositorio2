numero=Number(prompt("Ingrese un numero entero"))
let divisibilidad3
let divisibilidad5
let respuesta
if (numero % 1 == 0) {
    divisibilidad3=numero/3
    divisibilidad5=numero/5
    if (divisibilidad3 %1 ==0 && divisibilidad5 %1 ==0) {
        respuesta="FizzBuzz"
    } else{
        if (divisibilidad3 %1 ==0 ) {
            respuesta="Fizz"
        }else{
            if (divisibilidad5 %1 ==0) {
                respuesta="Buzz"  
            }else{
                respuesta="No es divisible por 3 ni por 5"
            }
        }
    }
} else {
    alert ("No es un número entero")}
document.getElementById("texto").innerHTML=respuesta