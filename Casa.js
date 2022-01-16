nPisos=prompt("Cuantos pisos tiene la casa?")
function pisoBase() {
    console.log("|  __  __  |")
    console.log("| |__||__| |")
    console.log("|__________|")
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
techo()
casa(nPisos-1)
pisoBase()