console.log("Hello, this is me");

let Categories = document.getElementById("Categories");
let Categories_arrow = document.getElementById("Categories_arrow");
let ele = document.createElement('div');
ele.innerHTML = `<ul><li>Men's</li>
<li>Sneaker's</li>
<li>Formal</li>
<li>Sportss</li>
<li>School</li>
<li>Men's Shoes</li>
<li>Regular</li>
<li>boys</li>
<li>Kids</li>
<li>Girls</li>
</ul>`;

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
