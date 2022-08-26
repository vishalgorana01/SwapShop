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

for(let i=0; i<categories_list.length; i++){
    categories_list[i].addEventListener('click', function(){
        let categ = categories_list[i].textContent;
        Categories.firstChild.textContent = categ;
    })
}

let search_categories = true;
Categories.addEventListener('click' , function(){
    if(search_categories){
       Categories.appendChild(ele);
       ele.setAttribute("class" , "categories");
       Categories_arrow.style.rotate = "180deg";
       search_categories = false;
    }
    else{
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
sign_in.addEventListener("click" , function(){
    cover_page.style.display = "flex";
    cover_page.appendChild(login_page);
});

// add eventlistener to cross mark of login_page
login_page.firstChild.addEventListener("click", function(){
    // login_page.style.transform = "translateY(-100%)";
    cover_page.removeChild(login_page);
    cover_page.style.display = "none";
});


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
login_page.children[1].children[5].addEventListener("click", function(){
register_page.style.display = "flex";

login_page.children[1].children[2].value = "";
login_page.children[1].children[3].value = "";

    cover_page.removeChild(login_page);
    cover_page.appendChild(register_page);
})

// add eventlistener to cross of register page
register_page.children[0].addEventListener("click", function(){
    console.log("hi");
    cover_page.removeChild(register_page);
    cover_page.style.display = "none";
});


// *****************************************************************************************************************
let all_users = {
    ['first name']: ["vishal"],
    ['last name'] : ["vishal"],
    id : ["vishal"],
    password : ["vishal"],
    cards_object: {
        img: "",
        h5: "",
        p : "",
        h5_2 : "",
        b :"",
    },
    cart: 0,
    card: '',
};

let user = {
    id : "",
    password : ""
}

const set=0;

if(localStorage.length == 0){
localStorage.setItem(set, JSON.stringify(all_users));
}

all_users.id = JSON.parse(localStorage.getItem(set)).id;
all_users.password = JSON.parse(localStorage.getItem(set)).password;
    

// add eventlistener to register button of register page

register_page.children[2].children[6].addEventListener("click", function(){
    var check2 = true;

    for(let i=2; i<register_page.children[2].childElementCount - 1; i++){

        let prev_type = [];

        if(register_page.children[2].children[i].value == ''){
            if(register_page.children[2].children[i].type == "password"){
                prev_type[i] = 0;
                register_page.children[2].children[i].type = "text";
                register_page.children[2].children[i].style.color = "red";
                register_page.children[2].children[i].value = "fill this field";
            }
            else{
                prev_type[i] = 1;
                register_page.children[2].children[i].value = 'fill this field';
                register_page.children[2].children[i].style.color = "red";
            }
        }

        if(register_page.children[2].children[i].value == "fill this field" || register_page.children[2].children[i].value == ""){
            check2 = false;
        }

        register_page.children[2].children[i].addEventListener("click", ()=>{
        
            if(register_page.children[2].children[i].type == "text" && prev_type[i] == 0){
                register_page.children[2].children[i].type = "password";
                register_page.children[2].children[i].style.color = "black";
                register_page.children[2].children[i].value = "";
            }
            else{
                register_page.children[2].children[i].value = '';
                register_page.children[2].children[i].style.color = "black";
            }
        })

}

if(check2 == true){
    user.id = register_page.children[2].children[4].value ;
    user.password = register_page.children[2].children[5].value ;

    all_users.id.push(user.id);
    all_users.password.push(user.password);
 
    
    localStorage.setItem(set, JSON.stringify(all_users));

    for(let i=2; i<register_page.children[2].childElementCount - 1; i++){
        register_page.children[2].children[i].value = '';
    }

    cover_page.removeChild(register_page);
    cover_page.appendChild(login_page);
}
});


// add eventlistener to login button of login page
login_page.children[1].children[4].addEventListener("click", function(){
    // let b = JSON.parse(localStorage.getItem(a));

    for(let i=0; i<all_users.id.length; i++){
        if(login_page.children[1].children[2].value == all_users.id[i] && login_page.children[1].children[3].value == all_users.password[i]){
            window.location.href="index.html";
            cover_page.style.display = "none";
            alert("You are successfully logged in");
            cover_page.removeChild(login_page);
        }
    }

    if(login_page.children[1].children[2].value != '' && login_page.children[1].children[2].value != "fill this field"){
        login_page.children[1].children[2].style.color = "red";
        login_page.children[1].children[2].value = 'incorrect email, username or id';
    }

    if(login_page.children[1].children[3].value != '' && login_page.children[1].children[3].value != "fill this field"){
        login_page.children[1].children[3].style.color = "red";
        login_page.children[1].children[3].value = 'Password is incorrect';
    }

    if(login_page.children[1].children[2].value == ''){
        login_page.children[1].children[2].style.color = "red";
        login_page.children[1].children[2].value = "fill this field";
    }
    
    if(login_page.children[1].children[3].value == ''){
        login_page.children[1].children[3].type = "text";
        login_page.children[1].children[3].style.color = "red";
        login_page.children[1].children[3].value = "fill this field";
    }

    login_page.children[1].children[2].addEventListener("click", ()=>{
        login_page.children[1].children[2].value = '';
        login_page.children[1].children[2].style.color = "black";
    })


    login_page.children[1].children[3].addEventListener("click", ()=>{
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

toggle_body.style.transform = "translateX(-7000px)";
toggle_body.style.transition = "0.3s linear";

toggle2.addEventListener("click", function(){
    toggle_body.style.transform = "translateX(0px)";
});

let back_mark = document.getElementById("back_mark");
    back_mark.addEventListener("click", function(){
    toggle_body.style.transform = "translateX(-7000px)";
})

for(let i=0; i<toggle_body.children[0].children[0].childElementCount; i++){
    toggle_body.children[0].children[0].children[i].addEventListener("click", function(){
        if(screen.width <= 400){
            toggle_body.style.transform = "translateX(-7000px)";
        }
    });
}

let toggle1 = document.getElementById("toggle-1");

toggle1.addEventListener("click", function(){
    toggle_body.style.transform = "translateX(0px)";
});


// *************** for product descripton **************************8

let all_cards = document.querySelectorAll(".card");
for(let i=0; i<all_cards.length; i++){
    all_cards[i].children[5].addEventListener("click", ()=>{
        for(let j=0; j<Object.keys(all_users.cards_object).length; j++){
            all_users.cards_object[Object.keys(all_users.cards_object)[j]] = all_cards[i].children[j].outerHTML;
            // console.log(all_cards[i].children[j].outerHTML);
        }

        // console.log(cards_object);

        localStorage.setItem(set, JSON.stringify(all_users));
        console.log(all_users);
        // console.log(JSON.parse(localStorage.getItem(a)));
        let g = JSON.parse(localStorage.getItem(set));
        console.log(g);

        document.location.href = "product.html";
    })
}




