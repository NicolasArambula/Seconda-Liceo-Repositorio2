do {
    n=Number(prompt("¿Cual es el numero sobre el cual desea aplicar la función de Fibonacci?(hasta 40)"))
} while (n<0||n>40||isNaN(n));
function fb(i) {
    if (i==0||i==1) {
        return 1
    }else{
        return fb(i-1)+fb(i-2)
    }
}
console.log("El numero de fibonacci de "+n+" es "+ fb(n))