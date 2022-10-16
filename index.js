console.log("Hello, this is me");

let Categories = document.getElementById("Categories");
let Categories_arrow = document.getElementById("Categories_arrow");
let ele = document.createElement('div');
ele.innerHTML = `<ul><li onClick="window.location.href='explore.html#Mens';">Men's</li>
<li onClick="window.location.href='explore.html#Sneakers';">Sneaker's</li>
<li style="z-index: 3;" onClick="window.location.href='explore.html#Formals';">Formal</li>
<li onClick="window.location.href='explore.html#Sports';">Sports</li>
<li onClick="window.location.href='explore.html#school_shoes';">School</li>
<li onClick="window.location.href='explore.html#Mens';">Men's Shoes</li>
<li onClick="window.location.href='index.html#Regular_shoes';">Regular</li>
<li onClick="window.location.href='explore.html#Boys_shoes';">boys</li>
<li onClick="window.location.href='explore.html#kids_shoes';">Kids</li>
<li onClick="window.location.href='explore.html#Girls_shoe';">Girls</li>
<li onClick="window.location.href='explore.html';">All Categories</li>
</ul>`;

// console.log(typeof(ele.firstElementChild.children));
let categories_list = ele.firstElementChild.children;

for (let i = 0; i < categories_list.length; i++) {
    categories_list[i].addEventListener('click', function () {
        let categ = categories_list[i].textContent;
        Categories.firstChild.textContent = categ;
    })
}

let search_categories = true;
Categories.addEventListener('click', function () {
    if (search_categories) {
        Categories.appendChild(ele);
        ele.setAttribute("class", "categories");
        Categories_arrow.style.rotate = "180deg";
        search_categories = false;
    }
    else {
        ele.remove();
        Categories_arrow.style.rotate = "360deg";
        search_categories = true;
    }
});


let cover_page = document.querySelector(".cover_of_login_page");// -----------> Background blur page

let sign_in = document.getElementById("sign_in"); // -----> sign in button

let login_page = document.createElement("div"); // -----> login page created
login_page.setAttribute("class", "login_page"); // -----> set class to login page

// make html of login page
login_page.innerHTML = `<a href="#" id="x_mark"><i class="fa-solid fa-xmark"></i></a> 

<div class="right">
  <h4>SwapShop</h4>
  <h6>Welcome to SwapShop</h6>
  <input type="email" placeholder="email, username, or id">
  <input type="password" placeholder="password">
  <button class="btn" type="button">login</button>
  <button id="sign_up" class="btn" type="button">sign up</button>
</div>

<div class="left">
  <img src="./images/tying-sport-shoes-outdoors_236854-13785.jpg" alt="" srcset="">
</div>`;



cover_page.style.display = "none";

// add eventlistener to sign in button
sign_in.addEventListener("click", function () {
    cover_page.style.display = "flex";
    cover_page.appendChild(login_page);
});

// add eventlistener to cross mark of login_page
login_page.firstChild.addEventListener("click", function () {
    // login_page.style.transform = "translateY(-100%)";
    cover_page.removeChild(login_page);
    cover_page.style.display = "none";
});

let logout = document.querySelector("#logout"); // ---------> logout button
logout.style.display = "none";

if (localStorage.getItem(2) != null) {
    logout.style.display = "flex";
    sign_in.style.display = "none";
}

logout.addEventListener("click", function () {
    localStorage.removeItem(2);
    alert("logout successfully");
    document.location.href = "index.html";
})

let register_page = document.createElement("div"); // ---------> register_page created
register_page.setAttribute("class", "register_page"); // --------> set class to register_page

// make html of register_page
register_page.innerHTML = `<a href="#"><i class="fa-solid fa-xmark"></i></a>
<div class="left">
  <img src="./images/tying-sport-shoes-outdoors_236854-13785.jpg" alt="" srcset="">
</div>

<div class="right">
  <h4>SwapShop</h4>
  <h6>Welcome to SwapShop</h6>
  <input type="text" placeholder="Name"><input type="text" placeholder="Last Name">
  <input type="email" placeholder="email, username, or id">
  <input type="password" placeholder="password" >
  <button class="btn" type="button">Register</button>
</div>`;

// add eventlistener to sign Up button of login_page
login_page.children[1].children[5].addEventListener("click", function () {
    register_page.style.display = "flex";

    login_page.children[1].children[2].value = "";
    login_page.children[1].children[3].value = "";

    cover_page.removeChild(login_page);
    cover_page.appendChild(register_page);
})

// add eventlistener to cross of register page
register_page.children[0].addEventListener("click", function () {
    console.log("hi");
    cover_page.removeChild(register_page);
    cover_page.style.display = "none";
});


// *****************************************************************************************************************

class new_user {
    firstName;
    lastName;
    givenemail;
    givenpassword;
    cart;
    age;
    phoneNo;
    address;

    constructor(givenfirstName, givenlastName, givenemail, givenpassword, givencart, givenAge, givenphoneNo, givenadddress) {
        this.firstName = givenfirstName;
        this.lastName = givenlastName;
        this.email = givenemail;
        this.password = givenpassword;
        this.cart = givencart;
        this.age = givenAge;
        this.phoneNo = givenphoneNo;
        this.address = givenadddress;
    }
}

let all_users = [];

const set = 0;

register_page.children[2].children[6].addEventListener("click", function () {
    var check2 = true;

    for (let i = 2; i < register_page.children[2].childElementCount - 1; i++) {

        let prev_type = [];

        if (register_page.children[2].children[i].value == '') {
            if (register_page.children[2].children[i].type == "password") {
                prev_type[i] = 0;
                register_page.children[2].children[i].type = "text";
                register_page.children[2].children[i].style.color = "red";
                register_page.children[2].children[i].value = "fill this field";
            }
            else {
                prev_type[i] = 1;
                register_page.children[2].children[i].value = 'fill this field';
                register_page.children[2].children[i].style.color = "red";
            }
        }

        if (register_page.children[2].children[i].value == "fill this field" || register_page.children[2].children[i].value == "") {
            check2 = false;
        }

        register_page.children[2].children[i].addEventListener("click", () => {

            if (register_page.children[2].children[i].type == "text" && prev_type[i] == 0) {
                register_page.children[2].children[i].type = "password";
                register_page.children[2].children[i].style.color = "black";
                register_page.children[2].children[i].value = "";
            }
            else {
                register_page.children[2].children[i].value = '';
                register_page.children[2].children[i].style.color = "black";
            }
        })

    }

    if (check2 == true) {

        let firstName = register_page.children[2].children[2].value;
        let lastName = register_page.children[2].children[3].value;
        let email = register_page.children[2].children[4].value;
        let password = register_page.children[2].children[5].value;
        let cart = [];
        let age = 19;
        let phoneNo = 9675994583;
        let addres = "";

        let new_customer = new new_user(firstName, lastName, email, password, cart, age, phoneNo, addres);

        if (localStorage.length != 0) {
            all_users = JSON.parse(localStorage.getItem(0));
        }
        all_users.push(new_customer);
        localStorage.setItem(0, JSON.stringify(all_users));
        for (let i = 2; i < register_page.children[2].childElementCount - 1; i++) {
            register_page.children[2].children[i].value = '';
        }

        cover_page.removeChild(register_page);
        cover_page.appendChild(login_page);
        console.log("append");
    }
});


// add eventlistener to login button of login page
login_page.children[1].children[4].addEventListener("click", function () {

    let ID = login_page.children[1].children[2].value;
    let Password = login_page.children[1].children[3].value;

    let current_customer = JSON.parse(localStorage.getItem(0));
    for (let i = 0; i < current_customer.length; i++) {
        if (login_page.children[1].children[2].value == current_customer[i].email && login_page.children[1].children[3].value == current_customer[i].password) {
            localStorage.setItem(2, JSON.stringify(current_customer[i]));
            cover_page.style.display = "none";
            cover_page.removeChild(login_page);
            alert("you are successfully logged in");

            if (localStorage.getItem(2) != null) {
                logout.style.display = "flex";
                sign_in.style.display = "none";
            }
        }
    }

    if (login_page.children[1].children[2].value != '' && login_page.children[1].children[2].value != "fill this field") {
        login_page.children[1].children[2].style.color = "red";
        login_page.children[1].children[2].value = 'incorrect email, username or id';
    }

    if (login_page.children[1].children[3].value != '' && login_page.children[1].children[3].value != "fill this field") {
        login_page.children[1].children[3].style.color = "red";
        login_page.children[1].children[3].value = 'Password is incorrect';
    }

    if (login_page.children[1].children[2].value == '') {
        login_page.children[1].children[2].style.color = "red";
        login_page.children[1].children[2].value = "fill this field";
    }

    if (login_page.children[1].children[3].value == '') {
        login_page.children[1].children[3].type = "text";
        login_page.children[1].children[3].style.color = "red";
        login_page.children[1].children[3].value = "fill this field";
    }

    login_page.children[1].children[2].addEventListener("click", () => {
        login_page.children[1].children[2].value = '';
        login_page.children[1].children[2].style.color = "black";
    })


    login_page.children[1].children[3].addEventListener("click", () => {
        login_page.children[1].children[3].value = '';
        login_page.children[1].children[3].style.color = "black";
        login_page.children[1].children[3].type = "password";
    })

})

//  ************* toggle button ************
let toggle2 = document.getElementById("toggle_2");
let toggle_body = document.querySelector("#toggle_body");
toggle_body.innerHTML = `  <div class="toggle_content">
<ul>
  <li><a href="#"><i class="fa-solid fa-angle-right"></i>My Accont</a></li>
  <li><a href="#index.html"><i class="fa-solid fa-angle-right"></i>Home</a></li>
  <li><a href="#inex.html"><i class="fa-solid fa-angle-right"></i>About Us</a></li>
  <li><a href="#section-5"><i class="fa-solid fa-angle-right"></i>Contact us </a></li>
  <li><a href="#"><i class="fa-solid fa-angle-right"></i>Offers</a></li>
  <li><a href="#"><i class="fa-solid fa-angle-right"></i>CashPrizes</a></li>
  <li><a href="#"><i class="fa-solid fa-angle-right"></i>Your Orders</a></li>
  <li><a href="#section-3" onclick="document.location.href='index.html#section-3' "><i class="fa-solid fa-angle-right"></i>Today's deal</a></li>
  <li><a href="#"><i class="fa-solid fa-angle-right"></i>Settings</a></li>
  <li><a href="#"><i class="fa-solid fa-angle-right"></i>Help</a></li>      
</ul>

<a id="back_mark"><i class="fa-solid fa-arrow-left"></i></a>
</div>`;

toggle_body.style.transform = "translateX(-1000%)";
toggle_body.style.transition = "all 0.5s ";

toggle2.addEventListener("click", function () {
    console.log(toggle_body);
    toggle_body.style.transform = "translateX(0px)";
});

let back_mark = document.getElementById("back_mark");
back_mark.addEventListener("click", function () {
    toggle_body.style.transform = "translateX(-7000px)";
})

for (let i = 0; i < toggle_body.children[0].children[0].childElementCount; i++) {
    toggle_body.children[0].children[0].children[i].addEventListener("click", function () {
        if (screen.width <= 400) {
            toggle_body.style.transform = "translateX(-1000%)";
        }
    });
}

let toggle1 = document.getElementById("toggle-1");

toggle1.addEventListener("click", function () {
    toggle_body.style.transform = "translateX(0px)";
});


for (let i = 0; i < toggle_body.children[0].children[0].childElementCount; i++) {
    toggle_body.children[0].children[0].children[i].addEventListener("click", function () {
        // console.log("links")
    })

    toggle_body.children[0].children[0].children[i].addEventListener("mouseover", function () {
        for (let j = 0; j < toggle_body.children[0].children[0].childElementCount; j++) {
            if (i == j) {
                toggle_body.children[0].children[0].children[i].style.transform = "translateX(15px)";
                toggle_body.children[0].children[0].children[i].style.transition = "all 0.3s";
            }
            else {
                toggle_body.children[0].children[0].children[j].style.transform = "translateX(0px)";
                toggle_body.children[0].children[0].children[i].style.transition = "all 0.3s";
            }
        }
    })

    toggle_body.children[0].children[0].addEventListener("mouseleave", function () {
        for (let j = 0; j < toggle_body.children[0].children[0].childElementCount; j++) {
            toggle_body.children[0].children[0].children[j].style.transform = "translateX(0px)"
        }
    })

}


let toggle_myAccount = document.querySelector(".toggle_myAccount");

toggle_body.children[0].children[0].children[0].addEventListener("click", function () {
    if (localStorage.getItem(2) == null) {
        cover_page.style.display = "flex";
        cover_page.appendChild(login_page);
    }
    else {
        let update_profile = JSON.parse(localStorage.getItem(2));
        toggle_myAccount.children[0].children[1].children[0].children[0].value = `${update_profile.firstName} ${update_profile.lastName}`;
        toggle_myAccount.children[1].children[1].value = `${update_profile.email}`;
        toggle_body.children[0].style.display = "none";
        toggle_myAccount.style.transform = "translateX(0px)";
    }
});

let back_myAccount = document.querySelector("#back_myAccount");
back_myAccount.addEventListener("click", function () {
    toggle_myAccount.style.transform = "translateX(-1000%)";
    toggle_body.children[0].style.display = "flex";
})


// *************** for product descripton **************************8

// let all_cards = document.querySelectorAll(".card");
// for (let i = 0; i < all_cards.length; i++) {
//     all_cards[i].children[5].addEventListener("click", () => {
//         for (let j = 0; j < Object.keys(all_users.cards_object).length; j++) {
//             all_users.cards_object[Object.keys(all_users.cards_object)[j]] = all_cards[i].children[j].outerHTML;
//             // console.log(all_cards[i].children[j].outerHTML);
//         }

//         // console.log(cards_object);

//         localStorage.setItem(set, JSON.stringify(all_users));
//         console.log(all_users);
//         // console.log(JSON.parse(localStorage.getItem(a)));
//         let g = JSON.parse(localStorage.getItem(set));
//         console.log(g);

//         document.location.href = "product.html";
//     })

//     all_cards[i].children[6].addEventListener("click", () => {
//         if (!(all_users.added_cart.includes(all_cards[i].innerHTML))) {
//             all_users.added_cart.push(all_cards[i].innerHTML);
//         }
//         localStorage.setItem(set, JSON.stringify(all_users));
//     })
// }


// *********************************** cart addded ************************
class carts {
    shoe_name;
    shoe_img;
    shoe_price;
    shoe_categoey;

    constructor(givenShoename, givenShoeimg, givenShoeprice, givenShoecategory) {
        this.shoe_name = givenShoename;
        this.shoe_img = givenShoeimg;
        this.shoe_price = givenShoeprice;
        this.shoe_categoey = givenShoecategory;
    }
};

let all_cards = document.querySelectorAll(".card");
console.log(all_cards);
for (let i = 0; i < all_cards.length; i++) {
    all_cards[i].children[6].addEventListener("click", function () {

        if (localStorage.getItem(2) == null) {
            cover_page.style.display = "flex";
            cover_page.appendChild(login_page);
        }

        else {


            let current_customer = JSON.parse(localStorage.getItem(2));
            let find_current = JSON.parse(localStorage.getItem(0));

            for (let j = 0; j < find_current.length; j++) {
                if (current_customer.email == find_current[j].email) {
                    // console.log(all_cards[i].innerHTML);
                    let shoeName = all_cards[i].children[1].innerHTML;
                    let shoeImg = all_cards[i].children[0].outerHTML;
                    let shoePrice = all_cards[i].children[4].innerHTML
                    let shoeCategory = "category";
                    console.log(shoeName);
                    console.log(shoeImg);
                    console.log(shoePrice);
                    console.log(shoeCategory);

                    let new_cart_added = new carts(shoeName, shoeImg, shoePrice, shoeCategory);
                    console.log(new_cart_added);
                    current_customer.cart.push(new_cart_added);
                    find_current.splice(j, 1);

                    find_current.push(current_customer);
                    localStorage.setItem(0, JSON.stringify(find_current));
                    localStorage.setItem(2, JSON.stringify(current_customer));
                }

            }

        }

    })

}

// ****************************************************************************


// ************************ fix some small bugs **********************

let cart_icon = document.querySelector("#cart_icon");
console.log(cart_icon);

cart_icon.addEventListener("click", function () {
    if (localStorage.getItem(2) == null) {
        cover_page.style.display = "flex";
        cover_page.appendChild(login_page);
    }
    else {
        document.location.href = 'added_carts.html';
    }
})