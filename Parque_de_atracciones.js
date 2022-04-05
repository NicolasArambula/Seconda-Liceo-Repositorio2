do {
    pais=prompt("¿Eres de US o de COL? Are you from US or COL?")
} while (pais!="US" && pais!="COL");
if (pais=="US") {
    do {
        h=Number(prompt("How tall are you?(feed)"))
    } while (isNaN(h)||h>9.8 || h<=0);
    do {
        t=Number(prompt("What is your temperature?(°F)"))
    } while (isNaN(t)||t>176||t<=0);
    do {
        acompañante=prompt("Do you come with an adult?(Yes or No)")
    } while (acompañante!="Yes"&& acompañante!="No");
    h=h/3.281
    t=(t-32)*5/9
    if (acompañante=="Yes") {
        acompañante="Si"
    }else{acompañante="No"}
}
if (pais=="COL") {
    do {
        h=Number(prompt("¿Cual es tu altura?(m)"))
    } while (isNaN(h)&&h>3 && h<=0);
    do {
        t=Number(prompt("¿Cual es tu temperatura?(°C)"))
    } while (isNaN(t)&&t>80&&t<=0);
    do {
        acompañante=prompt("¿Vienes con un acompañante?(Si o No)")
    } while (acompañante!="Si"&& acompañante!="No");
}
if (t>38) {
    Respuesta="No puede entrar"
}else{
    if (h<1.4 && acompañante=="No") {
        Respuesta="No puede entrar"
    }else{
        Respuesta="Si puede entrar"
    }
}
if (pais=="US") {
    if (Respuesta=="Si puede entrar") {
    Respuesta="You can get in"
}else{Respuesta="You can't gei in"}
}
contenedor = document.querySelector("#texto")
contenedor.innerHTML = Respuesta