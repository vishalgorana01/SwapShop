console.log("hello , i am product.js")
let g = JSON.parse(localStorage.getItem(0));
console.log(g);
let product_img = document.getElementById("product_img");

product_img.children[0].outerHTML = g.cards_object.img;

let product_content = document.getElementById("product_content");

product_content.children[0].outerHTML = g.cards_object.h5;
product_content.children[1].outerHTML = g.cards_object.p;
product_content.children[1].outerHTML = `<p> ${product_content.children[1].innerHTML}${product_content.children[1].innerHTML}${product_content.children[1].innerHTML}${product_content.children[1].innerHTML} </p>`;

product_content.children[2].outerHTML = g.cards_object.h5_2;
product_content.children[2].outerHTML = `<h6>${product_content.children[2].innerHTML}</h6>`;

product_content.children[3].outerHTML = g.cards_object.b;