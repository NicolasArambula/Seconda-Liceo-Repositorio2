nPisos=prompt("Cuantos pisos tiene la casa?")
function pisoBase() {
    console.log("|   ___    |")
    console.log("|  |  .|   |")
    console.log("|__|___|___|")
}
function techo() {
    console.log(" _________")
    console.log("/_________\\")
}
function Piso() {
    console.log("|  __  __  |")
    console.log("| |__||__| |")
    console.log("|__________|")
}
function casa(nPisos) {
    for (let i = 0; i < nPisos; i++){
        Piso();
       
    }
}
if (nPisos%1==0 && nPisos>0) {
    techo()
    casa(nPisos-1)
    pisoBase()    
}else{alert("no se puede crear la casa")}