let g = JSON.parse(localStorage.getItem(2));

let no_items = document.querySelector(".left-added-cart .one");
no_items.children[1].children[0].innerHTML = `${g.cart.length}`;
let carts_of_customer = document.querySelectorAll(".left-added-cart .third");

for(let i=0; i<g.cart.length; i++){
    carts_of_customer[i].style.display = "grid";
    
    // console.log(g.cart[2].shoe_img);
    // console.log(g.cart[2].shoe_price);
    // console.log(g.cart[2].shoe_name);

    carts_of_customer[i].innerHTML = ` 
              <div class="img-display">
              ${g.cart[i].shoe_img}
              <div>
                <h5>${g.cart[i].shoe_name}</h5>
                <p class="shoeCategory">Category of the shoe</p>
                <p class="availability">Available in stock</p>
              </div>
            </div>
            <div class="product_quantity">
              <p><b>-</b><span>1</span><b>+</b></p>
              <p></p>
              <p></p>
            </div>
            <div class="product_price">
              <p><b></b><b>${g.cart[i].shoe_price}</b></p>
              <p></p>
              <p></p>
            </div>
            <div class="product_total_price">
              <p><b></b><b>${g.cart[i].shoe_price}</b></p>
              <p></p>
              <p></p>
            </div>
          `
}

let plus;
let minus;

let final_price = ()=>{
  let final = 0;
  for(let i=0; i<g.cart.length; i++){
    let traverse_price = carts_of_customer[i].children[3].children[0].children[1].innerHTML;
    traverse_price = traverse_price.slice(3);
    traverse_price = Number.parseInt(traverse_price);
    final = traverse_price + final;
    // console.log(final);
  }

  return final;
}

document.querySelector(".inside-right-added-cart .two ").children[1].innerHTML = `Rs.${final_price()}`;
document.querySelector(".inside-right-added-cart .five ").children[1].innerHTML = `Rs${final_price()}`;

for(let i=0; i<g.cart.length; i++){
  minus = carts_of_customer[i].children[1].children[0].children[0];

  minus.addEventListener("click", function(){
    console.log("-");
    let quantity = carts_of_customer[i].children[1].children[0].children[1].innerHTML;
    quantity = Number.parseInt(quantity);
    quantity--;

    if(quantity <= 0){
      quantity = 0;
      carts_of_customer[i].style.opacity = '0.3';
    }
    else{
      carts_of_customer[i].style.opacity = '1';
    }

    carts_of_customer[i].children[1].children[0].children[1].innerHTML = `${quantity}`;
    
    let total_price = g.cart[i].shoe_price;
    total_price = total_price.slice(3);
    total_price = Number.parseInt(total_price);
    total_price = total_price*quantity;
    carts_of_customer[i].children[3].children[0].children[1].innerHTML = `Rs.${total_price}`;

    console.log(final_price());
    document.querySelector(".inside-right-added-cart .two ").children[1].innerHTML = `Rs.${final_price()}`;
    document.querySelector(".inside-right-added-cart .five ").children[1].innerHTML = `Rs${final_price()}`;
  });

  plus = carts_of_customer[i].children[1].children[0].children[2];
  plus.addEventListener("click", function(){

    let quantity = carts_of_customer[i].children[1].children[0].children[1].innerHTML;
    quantity = Number.parseInt(quantity);
    quantity++;

    if(quantity >= 1){
      carts_of_customer[i].style.opacity = '1';
    }
    carts_of_customer[i].children[1].children[0].children[1].innerHTML = `${quantity}`;

    let total_price = g.cart[i].shoe_price;
    total_price = total_price.slice(3);
    total_price = Number.parseInt(total_price);
    total_price = total_price*quantity;
    carts_of_customer[i].children[3].children[0].children[1].innerHTML = `Rs.${total_price}`;

    console.log(final_price());
    document.querySelector(".inside-right-added-cart .two ").children[1].innerHTML = `Rs.${final_price()}`;
    document.querySelector(".inside-right-added-cart .five ").children[1].innerHTML = `Rs${final_price()}`;
  })
}


document.querySelector(".inside-right-added-cart .two ").children[0].children[1].innerHTML = `${g.cart.length}`;