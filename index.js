/* const products =[
{  
    id:1,
    name: "CITY TOUR",
    description: "Un tradicional paseo por el centro de Lobos conociendo su historia, su gente. Un recorrido por los principales sitios.",
    day: "Domingo",
    time: "Mañana",
    price: 500,
    group: "Grupal",
    category: "Ciudad",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/citytour.jpg?v=1669956152503",
},
{  
    id:2,
    name: "PLAZAS",
    description: "Un recorrido por las plazas de Lobos para disfrutar de la naturaleza y de la historia. Finaliza con una merienda.",
    day: "Sábado",
    time: "Tarde",
    price: 700,
    group: "Grupal",
    category: "Ciudad",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/plazas.jpg?v=1669956156150",
},
{  
    id:3,
    name: "IGLESIAS",
    description: "Conocé las iglesias de la ciudad y maravillate con su arquitectura e historia.",
    day: "Sábado",
    time: "Tarde",
    price: 500,
    group: "Grupal",
    category: "Ciudad",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/iglesias.jpg?v=1669956153875",
},
{  
    id:4,
    name: "CEMENTERIO",
    description: "Visita guiada por el cementerio local conociendo nuestra historia y antepasados.",
    day: "Domingo",
    time: "Mañana",
    price: 400,
    group: "Grupal",
    category: "Ciudad",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/cementerio.jpg?v=1669956151792",
},
{  
    id:5,
    name: "MUSEOS",
    description: "Un recorrido por los museos de Lobos: Museo de Perón, Museo Tradicionalista y Museo de historia local.",
    day: "Domingo",
    time: "Mañana",
    price: 600,
    group: "Grupal",
    category: "Ciudad",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/peron.jpg?v=1669956154912",
},
{  
    id:6,
    name: "BODEGONES",
    description: "Un recorrido por los bodegones del pueblo para disfrutar de la gastronomía local.",
    day: "Domingo",
    time: "Mañana",
    price: 1000,
    group: "Grupal",
    category: "Ciudad",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/bodegones.jpg?v=1669956151120",
},
{  
    id:7,
    name: "CITY TOUR NOCTURNO",
    description: " Conocé nuestra ciudad de noche. La salida incluye consumiciones en los bares más concurridos.",
    day: "Sábado",
    time: "Noche",
    price: 1000,
    group: "Grupal",
    category: "Ciudad",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/tournocturno.jpg?v=1669956157429",
},
{  
    id:8,
    name: "ALMUERZO CAMPERO",
    description: "Te ivitamos a un almuerzo campero que se extiende hasta los mates de la tarde. Show en vivo folklórico.",
    day: "Domingo",
    time: "Mañana",
    price: 3000,
    group: "Individual",
    category: "Naturaleza",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/asado.jpg?v=1669956149135",
},
{  
    id:9,
    name: "DIA DE CAMPO",
    description: "Disfrutá de un día de campo en la Estancia La Candelaria. Actividades y comidas incluídas.",
    day: "Sábado",
    time: "Mañana",
    price: 3000,
    group: "Individual",
    category: "Naturaleza",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/estancia.jpg?v=1669956153168",
},
{  
    id:10,
    name: "ASTROTURISMO",
    description: "Te invitamos a conocer el cielo de Lobos y a sorprenderte a través de la lente de un súper telescopio.",
    day: "Sábado",
    time: "Noche",
    price: 500,
    group: "Grupal",
    category: "Naturaleza",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/astroturismo.jpg?v=1669956149776",
},
{  
    id:11,
    name: "BICITURISMO",
    description: "Si sos fan de la bici, esta salida es para vos. Tour por Lobos y caminos rurales. Paradas en sitios históricos.",
    day: "Sábado",
    time: "Mañana",
    price: 500,
    group: "Grupal",
    category: "Naturaleza",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/bici.jpg?v=1669956150451",
},
{  
    id:12,
    name: "CAMINATA SILVESTRE",
    description: "Vamos a disfrutar de la naturaleza con una caminata de observación de aves y revalorización de plantas nativas.",
    day: "Domingo",
    time: "Mañana",
    price: 500,
    group: "Grupal",
    category: "Naturaleza",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/plantas.jpg?v=1669956155516",
},
{  
    id:13,
    name: "SALTO DE BAUTISMO",
    description: "Animate a vivir una experiencia única! Realizá un salto con paracaídas de la mano de un instructor profesional.",
    day: "Domingo",
    time: "Mañana",
    price: 5000,
    group: "Individual",
    category: "Naturaleza",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/salto.jpg?v=1669956156777",
},
{  
    id:14,
    name: "VUELO BAUTISMO",
    description: "Te llevamos a sobrevolar Lobos y sus alrededores en un vuelo en avión de pequeño porte. ",
    day: "Sábado",
    time: "Tarde",
    price: 5000,
    group: "Individual",
    category: "Naturaleza",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/vuelo.jpg?v=1669956158111",
},
{  
    id:15,
    name: "TRAVESIA EN KAYAK",
    description: "Travesía por el Arroyo Las Garzas para disfrutar del deporte y la naturaleza a pleno.",
    day: "Sábado",
    time: "Mañana",
    price: 3000,
    group: "Individual",
    category: "Naturaleza",
    img: "https://cdn.glitch.global/121fb78c-39bf-428f-843b-77c88dd6a68f/kayak.jpg?v=1669956154505",
},
] */


let cart = JSON.parse(localStorage.getItem('lista'))?.length > 0 ? JSON.parse(localStorage.getItem('lista')) : []
JSON.parse(localStorage.getItem('lista'))?.length > 0 ? JSON.parse(localStorage.getItem('lista')) : localStorage.setItem('lista', JSON.stringify(cart))

let filtrados = JSON.parse(localStorage.getItem('filtrado'))?.length > 0 ? JSON.parse(localStorage.getItem('filtrado')) : []
JSON.parse(localStorage.getItem('filtrado'))?.length > 0 ? JSON.parse(localStorage.getItem('filtrado')) : localStorage.setItem('filtrado', JSON.stringify(filtrados))

let page = localStorage.getItem('page')?.length > 0 ? localStorage.getItem('page') : 'home'
localStorage.getItem('page')?.length > 0 ? localStorage.getItem('page') : localStorage.setItem('page', (page))



//Div Botones
const divButton = document.createElement('div')
document.body.append(divButton)
divButton.setAttribute('class', 'divHeader')

//Boton Productos
const allP = document.createElement("button")
allP.innerText = 'Productos'
allP.setAttribute('class', 'btn')
allP.setAttribute('onclick', 'btnProducts()')
divButton.append(allP)

//Boton Carrito
const cartP = document.createElement("button")
cartP.innerText = 'Carrito'
cartP.setAttribute('class', 'btn')
cartP.setAttribute('onclick', 'cartProducts()')
divButton.append(cartP)

//Boton Ciudad
const ciudad = document.createElement("button")
ciudad.innerText = 'Ciudad'
ciudad.setAttribute('class', 'btn')
ciudad.setAttribute('onclick', 'selectCategory("ciudad")')
divButton.append(ciudad)

//Boton Naturaleza
const naturaleza = document.createElement("button")
naturaleza.innerText = 'Naturaleza'
naturaleza.setAttribute('class', 'btn')
naturaleza.setAttribute('onclick', 'selectCategory("naturaleza")')
divButton.append(naturaleza)

//Boton Grupal
const grupal = document.createElement("button")
grupal.innerText = 'Grupal'
grupal.setAttribute('class', 'btn')
grupal.setAttribute('onclick', 'selectGroup("Grupal")')
divButton.append(grupal)

//Boton Individual
const individual = document.createElement("button")
individual.innerText = 'Individual'
individual.setAttribute('class', 'btn')
individual.setAttribute('onclick', 'selectGroup("Individual")')
divButton.append(individual)

//Boton Sabado
const sabado = document.createElement("button")
sabado.innerText = 'Sábado'
sabado.setAttribute('class', 'btn')
sabado.setAttribute('onclick', 'selectDay("Sábado")')
divButton.append(sabado)

//Boton Domingo
const domingo = document.createElement("button")
domingo.innerText = 'Domingo'
domingo.setAttribute('class', 'btn')
domingo.setAttribute('onclick', 'selectDay("Domingo")')
divButton.append(domingo)

//input Busqueda
const input = document.createElement("input")
input.innerText = 'Buscar'
input.setAttribute('class', 'input')
input.setAttribute('id', 'buscador')
input.setAttribute('name', 'buscador')
input.setAttribute('placeholder', 'Tu busqueda')
divButton.append(input)
input.addEventListener('input', searchProduct)



//Div body
const divBody = document.createElement('div')
document.body.append(divBody)
divBody.setAttribute('class', 'demo')

//Lista
let ul = document.createElement('ul')
divBody.append(ul)


//Todos los productos
async function allProducts(listaDeProductos) {

    vaciar.remove()
    ul.remove();
    ul = document.createElement('ul')
    divBody.appendChild(ul)
    for (const product of listaDeProductos) {
        let li = document.createElement('li')
        li.innerHTML =
            `<h3>${product.name}<h3/>
         <img src="${product.img}" alt="${product.name}" />
         <p>${product.description}<p>
         <h4>Día de la salida: ${product.day}
         <button id=${product.id} class="button" onclick=agregar(${product.id}) >Agregar</button>
         <p>Precio $${product.price}</P>`
        ul.append(li)
        li.setAttribute('id', `${product.id}`)
        li.setAttribute('class', 'class=card')
    }
}

async function agregar(id) {
    //localStorage.getItem("lista") ? cart = JSON.parse(localStorage.getItem("lista")) : cart []
    let product = await fetch(`https://shade-glistening-boysenberry.glitch.me/products/${id}`)
    product = await product.json()
    const existe = cart.some(product => product.id === id)
    if (existe) {
        Swal.fire({
            title: 'Este producto ya está en tu carrito.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    } else {
        cart.push(product)
        localStorage.setItem("lista", JSON.stringify(cart))
        Swal.fire({
            title: 'Producto agregado al carrito con éxito.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
}

   const vaciar = document.createElement("button")
   vaciar.innerText = 'Vaciar carrito'
   vaciar.setAttribute('id', 'btnVaciar')
   vaciar.setAttribute('onclick', 'vaciarCarrito()')

//Productos del carrito
function cartProducts() {
    if (vaciar){
        vaciar.remove()
    }
    ul.remove();
    ul = document.createElement('ul')
    divBody.appendChild(ul)
    for (const product of cart) {
        let li = document.createElement('li')
        li.innerHTML =
        `<h3>Reserva para ${product.name}</h3>
         <p>Precio $${product.price}</P>
         <button id=${product.id} class="button" onclick=quitar(${product.id}) >Quitar</button>`
        
        ul.append(li)
        li.setAttribute('id', `${product.id}`)
        li.setAttribute('class', 'tarjeta')
   }

   
   divButton.append(vaciar)
   localStorage.setItem('page', "carrito")
}



function quitar(id) {
    cart = cart.filter(product => product.id !== id)
    localStorage.setItem("lista", JSON.stringify(cart))
    cartProducts()

}

// vaciar todo el carrito
function vaciarCarrito(){
cart = []
localStorage.setItem("lista", JSON.stringify(cart))
cartProducts()
}

async function selectCategory(category) {
    let products = await fetch(`https://shade-glistening-boysenberry.glitch.me/category/${category}`)
    products = await products.json()
    filtrados = products
    localStorage.setItem('filtrado', JSON.stringify(filtrados))
    allProducts(filtrados)
    localStorage.setItem('page', 'cat')
}

async function selectGroup(group) {
    let products = await fetch(`https://shade-glistening-boysenberry.glitch.me/products`)
    products = await products.json()
    filtrados = products.filter(product => product.group === group)
    localStorage.setItem('filtrado', JSON.stringify(filtrados))
    allProducts(filtrados)
    localStorage.setItem('page', 'group')
}

async function selectDay(day) {
    let products = await fetch(`https://shade-glistening-boysenberry.glitch.me/products`)
    products = await products.json()
    filtrados = products.filter(product => product.day === day)
    localStorage.setItem('filtrado', JSON.stringify(filtrados))
    allProducts(filtrados)
    localStorage.setItem('page', 'day')
}

async function searchProduct() {
    let products = await fetch(`https://shade-glistening-boysenberry.glitch.me/products`)
    products = await products.json()
    const productBySearch = products.filter(product => product.name.toLowerCase().includes(input.value))
    allProducts(productBySearch)
}

async function btnProducts() {
    let products = await fetch(`https://shade-glistening-boysenberry.glitch.me/products`)
    products = await products.json()
    allProducts(products)
    localStorage.setItem('page', 'home')
}


async function go() {
    let products = await fetch(`https://shade-glistening-boysenberry.glitch.me/productsdfgdfg`)
    products = products.json
    if (page == 'home') allProducts(products)
    if (page == 'carrito') cartProducts()
    if (page == 'day') allProducts(filtrados)
    if (page == 'cat') allProducts(filtrados)
    if (page == 'group') allProducts(filtrados)
}

go()



//https://shade-glistening-boysenberry.glitch.me/products/
//https://shade-glistening-boysenberry.glitch.me/products/:id
//https://shade-glistening-boysenberry.glitch.me/category/:name