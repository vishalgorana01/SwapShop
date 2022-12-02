import { item } from "./item.js";

let id_of_card = localStorage.getItem("id_of_shoe");

let productCard ;

for(let i=0; i<item.length; i++){
    if(item[i].idNo == id_of_card){
        productCard = item[i];
        console.log(productCard);
    }
}