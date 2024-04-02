/* *** Variables *** */

/* Crear un diccionario de datos para agilizar el ingreso a la información */

let tool = {
    clean: document.getElementById('clean'),
    print: document.getElementById('print')
}

let elements = {
    lasagnas: {
        bolo: document.getElementById('lasagna_bolo_1'),
        mixta: document.getElementById('lasagna_mixta_2'),
        muschroom_chicken: document.getElementById('lasagna_muschroom_chicken_3'),
        peperoni: document.getElementById("lasagna_peperoni_4"),
        ranchera: document.getElementById("lasagna_ranchera_5"),
        carbonara: document.getElementById("lasagna_carbonara_6")
    },
    pizza: {
        chefsiot: document.getElementById("pizza_chefsiot_1"),
        mixed: document.getElementById("pizza_mixed_2"),
        mushroom: document.getElementById("pizza_mushroom_3"),
        neapolitian: document.getElementById("pizza_neapolitian_4"),
        peperoni: document.getElementById("pizza_peperoni_5")
    },
    pizza_combos: {
        combo_1: document.getElementById("pizza_combo_1"),
        combo_2: document.getElementById("pizza_combo_2"),
        combo_3: document.getElementById("pizza_combo_3")
    },
    gelato: {
        lemon: {
            unaBola: document.getElementById("gelato_lemon_1"),
            dosBola: document.getElementById("gelato_lemon_2"),
            tresBola: document.getElementById("gelato_lemon_3")
        },
        mind: {
            unaBola: document.getElementById("gelato_mind_1"),
            dosBola: document.getElementById("gelato_mind_2"),
            tresBola: document.getElementById("gelato_mind_3")
        },
        nut: {
            unaBola: document.getElementById("gelato_nut_1"),
            dosBola: document.getElementById("gelato_nut_2"),
            tresBola: document.getElementById("gelato_nut_3")
        },
        strawberry: {
            unaBola: document.getElementById("gelato_strawberry_1"),
            dosBola: document.getElementById("gelato_strawberry_2"),
            tresBola: document.getElementById("gelato_strawberry_3")
        }
    },
    billing: {
        productSpace: document.getElementById("product"),
        priceProduct: document.getElementById("price"),
        spaceTotalPrice: document.getElementById("total"),
        priceTotal: 0
    }
};

/* Esta parte para los precios de cada plato */

let preciosPlatos = {
    lasagna_bolo: 15000,
    lasagna_mixta: 16000,
    lasagna_muschroom_chicken: 16000,
    lasagna_peperoni: 15000,
    lasagna_ranchera: 15000,
    lasagna_carbonara: 15000,
    pizza_chefsiot: 7500,
    pizza_mixed: 7500,
    pizza_mushroom: 7500,
    pizza_neapolitian: 7500,
    pizza_peperoni: 7500,
    pizza_combo_1: 9000,
    pizza_combo_2: 12000,
    pizza_combo_3: 60000,
    gelato_scoop: 5000,
    gelato_twoscoop: 9500,
    gelato_threescoop: 13000,
};

/* Aumentar el valor de front */

function valorTotal(valor) {
    elements.billing.priceTotal += valor;
    elements.billing.spaceTotalPrice.textContent = elements.billing.priceTotal;
}

/* Agregar productos en factura */

function agregarProducto(nombrePlato, precioPlato) {
    // Creamos nuevos elementos 'p'
    let nuevoProducto = document.createElement("p");
    let nuevoPrice = document.createElement("p");

    // Creamos nodos de texto con el contenido
    let producto = document.createTextNode(nombrePlato);
    let price = document.createTextNode("$" + precioPlato);

    // Agregamos los nodos de texto como hijos de los párrafos
    nuevoProducto.appendChild(producto);
    nuevoPrice.appendChild(price);

    // Agregamos los nuevos párrafos como hijos de los elementos correspondientes
    elements.billing.productSpace.appendChild(nuevoProducto);
    elements.billing.priceProduct.appendChild(nuevoPrice);

    // Agregamos el valor
    valorTotal(precioPlato);
}

/* Logica de agregar */

/* Lasagnas */
elements.lasagnas.bolo.addEventListener("click", function () {
    let nombrePlato = "Lasagna Bolognesa";
    let precioPlato = preciosPlatos["lasagna_bolo"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.lasagnas.mixta.addEventListener("click", function () {
    let nombrePlato = "Lasagna Mixed";
    let precioPlato = preciosPlatos["lasagna_mixta"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.lasagnas.muschroom_chicken.addEventListener("click", function () {
    let nombrePlato = "Lasagna Mushroom Chicken";
    let precioPlato = preciosPlatos["lasagna_muschroom_chicken"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.lasagnas.peperoni.addEventListener("click", function () {
    let nombrePlato = "Lasagna Pepperoni";
    let precioPlato = preciosPlatos["lasagna_peperoni"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.lasagnas.ranchera.addEventListener("click", function () {
    let nombrePlato = "Lasagna Rancher";
    let precioPlato = preciosPlatos["lasagna_ranchera"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.lasagnas.carbonara.addEventListener("click", function () {
    let nombrePlato = "Lasagna Carbonara";
    let precioPlato = preciosPlatos["lasagna_carbonara"];
    agregarProducto(nombrePlato, precioPlato);
});


/* Pizza */
elements.pizza.chefsiot.addEventListener("click", function () {
    let nombrePlato = "Pizza Chefsito";
    let precioPlato = preciosPlatos["pizza_chefsiot"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.pizza.mixed.addEventListener("click", function () {
    let nombrePlato = "Pizza Mixed";
    let precioPlato = preciosPlatos["pizza_mixed"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.pizza.mushroom.addEventListener("click", function () {
    let nombrePlato = "Pizza Mushroom chickes";
    let precioPlato = preciosPlatos["pizza_mushroom"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.pizza.neapolitian.addEventListener("click", function () {
    let nombrePlato = "Pizza Neapolitian";
    let precioPlato = preciosPlatos["pizza_neapolitian"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.pizza.peperoni.addEventListener("click", function () {
    let nombrePlato = "Pizza Pepperoni";
    let precioPlato = preciosPlatos["pizza_neapolitian"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.pizza_combos.combo_1.addEventListener("click", function () {
    let nombrePlato = "Personal combo";
    let precioPlato = preciosPlatos["pizza_combo_1"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.pizza_combos.combo_2.addEventListener("click", function () {
    let nombrePlato = "Amore combo";
    let precioPlato = preciosPlatos["pizza_combo_2"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.pizza_combos.combo_3.addEventListener("click", function () {
    let nombrePlato = "Famiglia";
    let precioPlato = preciosPlatos["pizza_combo_3"];
    agregarProducto(nombrePlato, precioPlato);
});

/* Gelato */

/* Lemon */
elements.gelato.lemon.unaBola.addEventListener("click", function () {
    let nombrePlato = "A Lemon Scoop";
    let precioPlato = preciosPlatos["gelato_scoop"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.gelato.lemon.dosBola.addEventListener("click", function () {
    let nombrePlato = "Two Lemon Scoop";
    let precioPlato = preciosPlatos["gelato_twoscoop"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.gelato.lemon.tresBola.addEventListener("click", function () {
    let nombrePlato = "Three Lemon Scoop";
    let precioPlato = preciosPlatos["gelato_threescoop"];
    agregarProducto(nombrePlato, precioPlato);
});

/* Mind */
elements.gelato.mind.unaBola.addEventListener("click", function () {
    let nombrePlato = "A Mind Scoop";
    let precioPlato = preciosPlatos["gelato_scoop"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.gelato.mind.dosBola.addEventListener("click", function () {
    let nombrePlato = "Two Mind Scoop";
    let precioPlato = preciosPlatos["gelato_twoscoop"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.gelato.mind.tresBola.addEventListener("click", function () {
    let nombrePlato = "Three Mind Scoop";
    let precioPlato = preciosPlatos["gelato_threescoop"];
    agregarProducto(nombrePlato, precioPlato);
});

/* Nut */
elements.gelato.nut.unaBola.addEventListener("click", function () {
    let nombrePlato = "A Nut Scoop";
    let precioPlato = preciosPlatos["gelato_scoop"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.gelato.nut.dosBola.addEventListener("click", function () {
    let nombrePlato = "Two Nut Scoop";
    let precioPlato = preciosPlatos["gelato_twoscoop"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.gelato.nut.tresBola.addEventListener("click", function () {
    let nombrePlato = "Three Nut Scoop";
    let precioPlato = preciosPlatos["gelato_threescoop"];
    agregarProducto(nombrePlato, precioPlato);
});

/* Strawberry */
elements.gelato.strawberry.unaBola.addEventListener("click", function () {
    let nombrePlato = "A Strawberry Scoop";
    let precioPlato = preciosPlatos["gelato_scoop"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.gelato.strawberry.dosBola.addEventListener("click", function () {
    let nombrePlato = "Two Strawberry Scoop";
    let precioPlato = preciosPlatos["gelato_twoscoop"];
    agregarProducto(nombrePlato, precioPlato);
});

elements.gelato.strawberry.tresBola.addEventListener("click", function () {
    let nombrePlato = "Three Strawberry Scoop";
    let precioPlato = preciosPlatos["gelato_threescoop"];
    agregarProducto(nombrePlato, precioPlato);
});

/* ToolTip */
tool.clean.addEventListener("click", function() {
    // Selección de los elementos "price" y "product"
    let priceElement = document.getElementById("price");
    let productElement = document.getElementById("product");

    // Eliminar todos los hijos del elemento "price"
    while (priceElement.firstChild) {
        priceElement.removeChild(priceElement.firstChild);
    }

    // Eliminar todos los hijos del elemento "product"
    while (productElement.firstChild) {
        productElement.removeChild(productElement.firstChild);
    }

    elements.billing.spaceTotalPrice.textContent = "";
    elements.billing.priceTotal = 0;
});

// Función para imprimir la sección deseada
function imprimirSeccion() {
    // Clonar el contenedor de la sección completa
    let seccionImpresa = document.querySelector('.blling_auto').cloneNode(true);
    
    // Eliminar los botones "Clean" y "Print" del clon
    let botonesEliminar = seccionImpresa.querySelectorAll('.col button');
    botonesEliminar.forEach(function(boton) {
        boton.remove();
    });

    // Imprimir la sección clonada
    let ventanaImpresion = window.open('', '_blank');
    ventanaImpresion.document.body.appendChild(seccionImpresa);
    ventanaImpresion.print();
}

tool.print.addEventListener("click", imprimirSeccion);