let cart =[];

const products=[
    { name: "Chicken", vegetarian:false, glutenFree:true,organic:false, price: 9.99, category: "meat"},
    { name: "Broccoli", vegetarian:true, glutenFree:true,organic:true, price: 1.99, category: "vegetable"},
    { name: "Spinach", vegetarian:true, glutenFree:true,organic:true, price: 1.99, category: "vegetable"},
    { name: "Cucumber", vegetarian:true, glutenFree:true,organic:true, price: 1.99, category: "vegetable"},
    { name: "Bread", vegetarian:true, glutenFree:false,organic:false, price: 2.35, category: "grain"},
    { name: "Salmon", vegetarian:false, glutenFree:true,organic:true, price: 9.23, category: "fish"},
    { name: "Talapia", vegetarian:false, glutenFree:true,organic:true, price: 8.00, category: "fish"},
    { name: "Cod", vegetarian:false, glutenFree:true,organic:true, price: 10.00, category: "fish"},
    { name: "Apples", vegetarian:true, glutenFree:true,organic:true, price: 5.49, category: "fruit"},
    { name: "Strawberries", vegetarian:true, glutenFree:true,organic:true, price: 3.00, category: "fruit"},
    { name: "Cherries", vegetarian:true, glutenFree:true,organic:true, price: 3.00, category: "fruit"},
    { name: "Cheese", vegetarian:true, glutenFree:true,organic:false, price: 4.25, category: "dairy"},
    { name: "Milk", vegetarian:true, glutenFree:true,organic:false, price: 2.50, category: "dairy"},
    { name: "Eggs", vegetarian:true, glutenFree:true,organic:false, price: 2.75, category: "alternatives"},
    { name: "Gluten-Free Pasta", vegetarian:true, glutenFree:true,organic:false, price: 3.50, category: "grain"},
    { name: "Orange Juice", vegetarian:true, glutenFree:true,organic:false, price: 3.49, category: "beverage"},
    { name: "Carrot Juice", vegetarian:true, glutenFree:true,organic:false, price: 2.00, category: "beverage"}
];

function openMenu(tabName){
    const tabs = document.getElementsByClassName("tabContent");
    for(let i=0; i<tabs.length; i++){
        tabs[i].style.display="none";
    }
    const clickedTab=tabName;
    document.getElementById(clickedTab).style.display="block";

    if (clickedTab==="products"){
        showProducts(document.getElementById("priceRange").value);
    }

}

function getMaxPrice() {
    let x = document.getElementById("priceRange").value;
    document.getElementById("maxPrice").innerHTML = "$"+x;
    showProducts(x);
    
}

function showProducts(maxPrice){
    const diet=document.getElementById("diet").value;
    const productType = document.getElementById("productType").value;
    let filteredProducts=products.filter(product =>{
        if (diet === "vegetarian" && !product.vegetarian) {
            return false;
        }
        if (diet === "gluten-free" && !product.glutenFree) {
            return false;
        }
        if (productType === "organic" && !product.organic) {
            return false;
        }
        if (productType === "non-organic" && product.organic) {
            return false;
        } if(product.price > maxPrice){
            return false;
        }
        return true;
    });

    filteredProducts.sort((a,b) => a.price - b.price);
    const productDiv=document.getElementById("showProducts");
    productDiv.innerHTML="";

    filteredProducts.forEach((product,index) =>{
        productDiv.innerHTML += `
        <input type="checkbox" id="product${index}"value="${product.name}">
        ${product.name} - $${product.price.toFixed(2)}<br>
        `;
    });

    return filteredProducts;

}
//Adding categories to the product Page 

 let category_dictionary = {
    meat_products: [],
    dairy_products: [],
    alternative_products: [],
    beverage_products: [],
    vegetable_products: [],
    grain_products: [],
    fruit_products: [],
    fish_products: []
}

function sortCategories(){
    products.forEach((product) => {
        if (product.category == "meat"){
            category_dictionary.meat_products.push(product);
        }
        else if(product.category == "dairy"){
            category_dictionary.dairy_products.push(product);
        }
        else if(product.category == "beverage"){
            category_dictionary.beverage_products.push(product);
        }
        else if(product.category == "alternatives"){
            category_dictionary.alternative_products.push(product);
        }
        else if(product.category == "vegetable"){
            category_dictionary.vegetable_products.push(product);
        }
        else if(product.category == "fruit"){
            category_dictionary.fruit_products.push(product);
        }
        else if(product.category == "fish"){
            category_dictionary.fish_products.push(product);
        }
        else if(product.category == "grain"){
            category_dictionary.grain_products.push(product);
        }     
    })
    //const jsonString = JSON.stringify(category_dictionary);
    //const categoryDiv = document.getElementById("categoryDiv");
    //categoryDiv.textContent = jsonString;
}

const category_button = document.getElementById("categoryButton");
category_button.addEventListener("click", showCategories); //change to show after finishing

function showCategories(){
    sortCategories();
    //Note: Following 2 lines use help from AI for nested objects 
    Object.entries(category_dictionary).forEach(([cat, items]) => {
        items.forEach(item => {
            if (item.category == "meat"){
                let list = document.getElementById("meatCategoryList")
                let li = document.createElement('li');
                li.innerText = item.name;
                list.appendChild(li);
            }
            else if (item.category == "dairy"){
                let list = document.getElementById("dairyCategoryList")
                let li = document.createElement('li');
                li.innerText = item.name;
                list.appendChild(li);
            }
            else if (item.category == "vegetable"){
                let list = document.getElementById("vegetableCategoryList")
                let li = document.createElement('li');
                li.innerText = item.name;
                    list.appendChild(li);
            }
            else if (item.category == "fruit"){
                let list = document.getElementById("fruitCategoryList")
                let li = document.createElement('li');
                li.innerText = item.name;
                    list.appendChild(li);
            }
            else if (item.category == "grain"){
                let list = document.getElementById("grainCategoryList")
                let li = document.createElement('li');
                li.innerText = item.name;
                    list.appendChild(li);
            }
            else if (item.category == "fish"){
                let list = document.getElementById("fishCategoryList")
                let li = document.createElement('li');
                li.innerText = item.name;
                    list.appendChild(li);
            }
            else if (item.category== "alternatives"){
                let list = document.getElementById("alternativesCategoryList")
                let li = document.createElement('li');
                li.innerText = item.name;
                    list.appendChild(li);
            }
            else if (item.category == "beverage"){
                let list = document.getElementById("beverageCategoryList")
                let li = document.createElement('li');
                li.innerText = item.name;
                    list.appendChild(li);
            }
        })  
    })
}

function addToCart(){
    const productDiv=document.getElementById("showProducts");
    const checkbox=productDiv.getElementsByTagName("input");
    for (let i=0; i<checkbox.length; i++){
        if (checkbox[i].checked){
            const productName=checkbox[i].value;
            const product=products.find(p => p.name===productName);
            cart.push(product);
        }
    }
    displayCart();
}

function displayCart(){
    const cartDiv=document.getElementById("showCart");
    cartDiv.innerHTML="";
    let total=0;
    cart.forEach((item) =>{
        cartDiv.innerHTML += `${item.name} - $${item.price.toFixed(2)}<br>`;
        total += item.price;
    });
    cartDiv.innerHTML += `<strong>Total: $${total.toFixed(2)}</strong>`;
}



    
