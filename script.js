/* =========================================================
   NEBULA HUBSTORE
========================================================= */


/* =========================================================
   PRODUCTOS

   PARA CAMBIAR LAS IMÁGENES:
   cambia solamente "image"

   Ejemplo:

   image: "img/vapes/vape-01.png"

========================================================= */

const products = [

    {
        number: "01",

        image:
            "img/mango maracuya.png",

        flavor1:
            "Mango Maracuyá Ice",

        flavor2:
            "Mix Frutos Rojos",

        color:
            "#f1d62d"
    },


    {
        number: "02",

        image:
            "img/frutilla mango ice.png",

        flavor1:
            "Frutilla Mango Ice",

        flavor2:
            "Frutilla Maracuyá Ice",

        color:
            "#ff713c"
    },


    {
        number: "03",

        image:
            "img/frambuesa arandano ice.png",

        flavor1:
            "Frambuesa Arándano Ice",

        flavor2:
            "Uva Ice",

        color:
            "#d83be7"
    },


    {
        number: "04",

        image:
            "img/mora ice.png",

        flavor1:
            "Mora Ice",

        flavor2:
            "Sandía Ice",

        color:
            "#6d6fff"
    },


    {
        number: "05",

        image:
            "img/frutilla sandia ice.png",

        flavor1:
            "Frutilla Sandía Ice",

        flavor2:
            "Sandía Mango Durazno Ice",

        color:
            "#c88f9f"
    },


    {
        number: "06",

        image:
            "img/Mix frutos rojos.png",

        flavor1:
            "Mix Frutos Rojos",

        flavor2:
            "Sandía Ice",

        color:
            "#ff3434"
    },


    {
        number: "07",

        image:
            "img/tuttu frutti.png",

        flavor1:
            "Tutti Frutti Ice",

        flavor2:
            "Melón Ice",

        color:
            "#45d2bb"
    },


    {
        number: "08",

        image:
            "img/chicle.png",

        flavor1:
            "Chicle",

        flavor2:
            "Frutilla Sandía Ice",

        color:
            "#f14ca9"
    },


    {
        number: "09",

        image:
            "img/cereza arandano.png",

        flavor1:
            "Cereza Arándano Ice",

        flavor2:
            "Frutilla Sandía Ice",

        color:
            "#cc7098"
    },


    {
        number: "10",

        image:
            "img/chicle de uva.png",

        flavor1:
            "Chicle de Uva",

        flavor2:
            "Mora Ice",

        color:
            "#8757ed"
    }

];



/* =========================================================
   CREAR CATÁLOGO
========================================================= */

const productGrid =
    document.getElementById(
        "productGrid"
    );


products.forEach(
    (product, index) => {


        const card =
            document.createElement(
                "article"
            );


        card.className =
            "product-card reveal";


        card.style.setProperty(
            "--card-color",
            product.color
        );


        card.innerHTML = `

            <div class="card-top">

                <span class="product-number">

                    ${product.number}

                </span>


                <span class="gold-badge">

                    GOLD EDITION

                </span>

            </div>



            <div class="card-product-area">


                <div
                    class="product-aura"
                ></div>


                <span
                    class="
                        product-star
                        product-star-one
                    "
                >
                    ✦
                </span>


                <span
                    class="
                        product-star
                        product-star-two
                    "
                >
                    ✦
                </span>



                <img

                    src="${product.image}"

                    alt="
                        Flumbar Mix
                        ${product.flavor1}
                        y
                        ${product.flavor2}
                    "

                    class="product-image"

                    loading="lazy"

                >

            </div>



            <div class="card-copy">


                <small>

                    FLUMBAR MIX · DOBLE SABOR

                </small>



                <h3>

                    ${product.flavor1}

                </h3>



                <div class="flavour-divider">

                    <span></span>

                    <b>
                        +
                    </b>

                    <span></span>

                </div>



                <h4>

                    ${product.flavor2}

                </h4>



                <div class="card-bottom">


                    <span class="puff-badge">

                        40.000 PUFF

                    </span>


                    <span class="card-action">

                        VER DETALLES

                        <b>
                            →
                        </b>

                    </span>

                </div>

            </div>

        `;



        card.addEventListener(
            "click",
            () => {

                openProduct(index);

            }
        );


        productGrid.appendChild(
            card
        );

    }
);



/* =========================================================
   MODAL
========================================================= */

const productModal =
    document.getElementById(
        "productModal"
    );


const modalBackground =
    document.getElementById(
        "modalBackground"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalFlavor1 =
    document.getElementById(
        "modalFlavor1"
    );


const modalFlavor2 =
    document.getElementById(
        "modalFlavor2"
    );


const modalProductImage =
    document.getElementById(
        "modalProductImage"
    );


const modalProductArea =
    document.getElementById(
        "modalProductArea"
    );


const buyButton =
    document.getElementById(
        "buyButton"
    );


let selectedProduct = null;



/* =========================================================
   ABRIR PRODUCTO
========================================================= */

function openProduct(index) {


    selectedProduct =
        products[index];


    /* NÚMERO */

    modalTitle.textContent =
        `MIX ${selectedProduct.number}`;


    /* SABORES */

    modalFlavor1.textContent =
        selectedProduct.flavor1;


    modalFlavor2.textContent =
        selectedProduct.flavor2;


    /* IMAGEN REAL */

    modalProductImage.src =
        selectedProduct.image;


    modalProductImage.alt =
        `Flumbar Mix ${selectedProduct.flavor1} y ${selectedProduct.flavor2}`;


    /* COLOR DEL PRODUCTO */

    modalProductArea
        .style
        .setProperty(
            "--modal-color",
            selectedProduct.color
        );


    /* ABRIR */

    productModal
        .classList
        .add("open");


    document.body
        .classList
        .add("modal-open");

}



/* =========================================================
   CERRAR PRODUCTO
========================================================= */

function closeProduct() {


    productModal
        .classList
        .remove("open");


    document.body
        .classList
        .remove("modal-open");

}



modalClose.addEventListener(
    "click",
    closeProduct
);


modalBackground.addEventListener(
    "click",
    closeProduct
);


document.addEventListener(
    "keydown",
    event => {


        if (
            event.key === "Escape"
        ) {

            closeProduct();

        }

    }
);



/* =========================================================
   CONTACTOS
========================================================= */

/*

   IMPORTANTE:

   Pon aquí tus enlaces.

   INSTAGRAM:
   usa el enlace de tu Instagram.

   WHATSAPP:
   usa tu enlace de WhatsApp correspondiente
   al número +56 9 3028 6013.

*/


const instagramLink =
    "https://www.instagram.com/direct/t/18016541666661072/";


const whatsappLink =
    "https://wa.me/56930286013";


/* =========================================================
   INSTAGRAM
========================================================= */

function openInstagram() {


    window.open(
        instagramLink,
        "_blank"
    );

}



/* =========================================================
   WHATSAPP
========================================================= */

function openWhatsapp(
    customMessage = null
) {


    const defaultMessage =

        "Hola Nebula Store ✦ Quisiera consultar por los Flumbar Mix disponibles.";


    const message =

        customMessage ||
        defaultMessage;


    const destination =

        whatsappLink +

        "?text=" +

        encodeURIComponent(
            message
        );


    window.open(
        destination,
        "_blank"
    );

}



/* =========================================================
   BOTONES INSTAGRAM
========================================================= */

document
    .querySelectorAll(
        '[data-contact="instagram"]'
    )
    .forEach(button => {


        button.addEventListener(
            "click",
            openInstagram
        );


    });



/* =========================================================
   BOTONES WHATSAPP
========================================================= */

document
    .querySelectorAll(
        '[data-contact="whatsapp"]'
    )
    .forEach(button => {


        button.addEventListener(
            "click",
            () => {

                openWhatsapp();

            }
        );


    });



/* =========================================================
   COMPRA DEL PRODUCTO
========================================================= */

buyButton.addEventListener(
    "click",
    () => {


        if (!selectedProduct) {

            return;

        }


        const message =

`Hola Nebula Store ✦

Quiero consultar por este Flumbar Mix:

✦ Sabor 01: ${selectedProduct.flavor1}
✦ Sabor 02: ${selectedProduct.flavor2}

¿Está disponible?

También quisiera consultar por el despacho.`;


        openWhatsapp(
            message
        );

    }
);



/* =========================================================
   HEADER AL HACER SCROLL
========================================================= */

const header =
    document.getElementById(
        "header"
    );


window.addEventListener(
    "scroll",
    () => {


        header
            .classList
            .toggle(
                "scrolled",
                window.scrollY > 50
            );


    }
);



/* =========================================================
   MENÚ CELULAR
========================================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


menuButton.addEventListener(
    "click",
    () => {


        mobileMenu
            .classList
            .toggle("open");


    }
);



document
    .querySelectorAll(
        ".mobile-menu a"
    )
    .forEach(link => {


        link.addEventListener(
            "click",
            () => {


                mobileMenu
                    .classList
                    .remove("open");


            }
        );


    });



/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

const revealObserver =

    new IntersectionObserver(

        entries => {


            entries.forEach(
                entry => {


                    if (
                        entry.isIntersecting
                    ) {


                        entry.target
                            .classList
                            .add(
                                "visible"
                            );


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }


                }
            );


        },

        {

            threshold: 0.1

        }

    );



document
    .querySelectorAll(
        ".reveal"
    )
    .forEach(element => {


        revealObserver
            .observe(
                element
            );


    });