Estudiantes=["Francisco Castro","Sergio Rubiano", "Juana Rincon", "Mariana Clavijo", "Jose Alejandro","Juan Daniel", "Daniela Peraza", "Mateo Vargas", "Samuel Villa", "Daniel Castellanos","Gabriela Jaramillo", "Nicolas Arámbula", "Jorge Castro", "Ana Sofía", "Jacobo Petrelli", "Tomás Noriega", "Sofia Gonzales"]
edades=[]
suma=0
for (let i = 0; i < 17; i++) {
    do {
        recibido=(Number(prompt(`Ingrese la edad de ${Estudiantes[i]} (entre 10 y 20)`)))
    } while (recibido<10||recibido>20|| isNaN(recibido));
    edades.push(recibido)
}
for (let i = 0; i < 17; i++) {
    suma=suma+edades[i]
}
Promedio=suma/17
contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = "La edad promedio es " + Promedio