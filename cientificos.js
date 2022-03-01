let html=""
urlImagen=["https://i0.wp.com/elretohistorico.com/wp-content/uploads/2014/09/Volta-e1547066345113.png?resize=500%2C548&ssl=1","https://upload.wikimedia.org/wikipedia/commons/4/45/Charles_Darwin_1880.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVP_YedfqJSv2mvKD3bi3yZrXPJJe7_s1MQ&usqp=CAU","http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRDYGOTm_bksSuY10Dh5jfRq72f9iuh3mrRijpGZ6x8Q03QL561OLXCTlB6gxkC"]
nombres=["Alessandro Giuseppe Antonio Anastasio Volta","Charles Robert Darwin", "Galileo Galilei","Rosalind Elsie Franklin"]
for (let i = 0; i < 4; i++) {
    html=html+`<div class="cientifico"><img src= "${urlImagen[i]}" width="315" height="250"/><p>${nombres[i]}</p></div>`
}
contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = html