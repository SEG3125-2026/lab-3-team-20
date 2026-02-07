let cart =[];

const products=[
    { name: "Chicken", vegetarian:false, glutenFree:true,organic:false, price: 9.99, category: "meat",image:"images/chicken.jpg"},
    { name: "Broccoli", vegetarian:true, glutenFree:true,organic:true, price: 1.99, category: "vegetable",image:"images/broccoli.jpg"},
    { name: "Spinach", vegetarian:true, glutenFree:true,organic:true, price: 1.99, category: "vegetable",image:"images/spinach.jpg"},
    { name: "Cucumber", vegetarian:true, glutenFree:true,organic:true, price: 1.99, category: "vegetable",image:"images/cucumber.jpg"},
    { name: "Bread", vegetarian:true, glutenFree:false,organic:false, price: 2.35, category: "grain",image:"images/bread.jpg"},
    { name: "Salmon", vegetarian:false, glutenFree:true,organic:true, price: 9.23, category: "fish",image:"images/salmon.jpg"},
    { name: "Talapia", vegetarian:false, glutenFree:true,organic:true, price: 8.00, category: "fish", image:"images/talapia.jpg"},
    { name: "Cod", vegetarian:false, glutenFree:true,organic:true, price: 10.00, category: "fish",image:"images/cod.jpg"},
    { name: "Apples", vegetarian:true, glutenFree:true,organic:true, price: 5.49, category: "fruit",image:"images/apples.jpg"},
    { name: "Strawberries", vegetarian:true, glutenFree:true,organic:true, price: 3.00, category: "fruit",image:"images/strawberries.jpg"},
    { name: "Cherries", vegetarian:true, glutenFree:true,organic:true, price: 3.00, category: "fruit",image:"images/cherries.jpg"},
    { name: "Cheese", vegetarian:true, glutenFree:true,organic:false, price: 4.25, category: "dairy",image:"images/cheese.jpg"},
    { name: "Milk", vegetarian:true, glutenFree:true,organic:false, price: 2.50, category: "dairy",image:"images/milk.jpg"},
    { name: "Eggs", vegetarian:true, glutenFree:true,organic:false, price: 2.75, category: "alternatives",image:"images/eggs.jpg"},
    { name: "Gluten-Free Pasta", vegetarian:true, glutenFree:true,organic:false, price: 3.50, category: "grain",image:"images/pasta.jpg"},
    { name: "Orange Juice", vegetarian:true, glutenFree:true,organic:false, price: 3.49, category: "beverage",image:"images/orangejuice.jpg"},
    { name: "Carrot Juice", vegetarian:true, glutenFree:true,organic:false, price: 2.00, category: "beverage",image:"images/carrotjuice.jpg"}
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


function sortCategories(products){

   let categories = {
        meat_products: [],
        dairy_products: [],
        alternative_products: [],
        beverage_products: [],
        vegetable_products: [],
        grain_products: [],
        fruit_products: [],
        fish_products: []
    };

    for(let i=0; i<products.length ;i++){
        const product = products[i];

        if (product.category == "meat"){
            categories.meat_products.push(product);
        }
        else if(product.category == "dairy"){
            categories.dairy_products.push(product);
        }
        else if(product.category == "beverage"){
            categories.beverage_products.push(product);
        }
        else if(product.category == "alternatives"){
            categories.alternative_products.push(product);
        }
        else if(product.category == "vegetable"){
            categories.vegetable_products.push(product);
        }
        else if(product.category == "fruit"){
            categories.fruit_products.push(product);
        }
        else if(product.category == "fish"){
            categories.fish_products.push(product);
        }
        else if(product.category == "grain"){
            categories.grain_products.push(product);
        }     
    }
    return categories;
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
        } 
        if(product.price > maxPrice){
            return false;
        }
        return true;
    });

    filteredProducts.sort((a,b) => a.price - b.price);

    const categorized = sortCategories(filteredProducts);


    const meatDiv=document.getElementById("meatCategoryList");
    const dairyDiv=document.getElementById("dairyCategoryList");
    const altDiv=document.getElementById("alternativesCategoryList");
    const vegetableDiv=document.getElementById("vegetableCategoryList");
    const beverageDiv=document.getElementById("beveragesCategoryList");
    const fruitDiv=document.getElementById("fruitCategoryList");
    const grainDiv=document.getElementById("grainCategoryList");
    const fishDiv=document.getElementById("fishCategoryList");

    meatDiv.innerHTML = `
        <h4>Meat</h4>
        <table class="productTable"><tr><th>Select</th><th>Image</th><th>Product</th><th>Price</th></tr></table>
    `;

    dairyDiv.innerHTML = `
        <h4>Dairy</h4>
        <table class="productTable"><tr><th>Select</th><th>Image</th><th>Product</th><th>Price</th></tr></table>
    `;

    vegetableDiv.innerHTML = `
        <h4>Vegetables</h4>
        <table class="productTable"><tr><th>Select</th><th>Image</th><th>Product</th><th>Price</th></tr></table>
    `;

    fruitDiv.innerHTML = `
        <h4>Fruits</h4>
        <table class="productTable"><tr><th>Select</th><th>Image</th><th>Product</th><th>Price</th></tr></table>
    `;

    grainDiv.innerHTML = `
        <h4>Grains</h4>
        <table class="productTable"><tr><th>Select</th><th>Image</th><th>Product</th><th>Price</th></tr></table>
    `;

    fishDiv.innerHTML = `
        <h4>Fish</h4>
        <table class="productTable"><tr><th>Select</th><th>Image</th><th>Product</th><th>Price</th></tr></table>
    `;

    altDiv.innerHTML = `
        <h4>Alternatives</h4>
        <table class="productTable"><tr><th>Select</th><th>Image</th><th>Product</th><th>Price</th></tr></table>
    `;

    beverageDiv.innerHTML = `
        <h4>Beverages</h4>
        <table class="productTable"><tr><th>Select</th><th>Image</th><th>Product</th><th>Price</th></tr></table>
    `;

    filteredProducts.forEach(item => {
        const row = `
            <tr>
                <td><input type="checkbox" value="${item.name}"></td>
                <td><img src="${item.image}" class="productImg"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
            </tr>
        `;

        if (item.category ==="meat") meatDiv.querySelector("table").innerHTML += row;
        else if (item.category=== "dairy") dairyDiv.querySelector("table").innerHTML += row;
        else if (item.category=== "vegetable") vegetableDiv.querySelector("table").innerHTML += row;
        else if (item.category=== "fruit") fruitDiv.querySelector("table").innerHTML += row;
        else if (item.category=== "grain") grainDiv.querySelector("table").innerHTML += row;
        else if (item.category=== "fish") fishDiv.querySelector("table").innerHTML += row;
        else if (item.category=== "alternatives") altDiv.querySelector("table").innerHTML += row;
        else if (item.category=== "beverage") beverageDiv.querySelector("table").innerHTML += row;
    });
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
    document.getElementById("products").style.display="none";

    document.getElementById("cart").style.display="block";


}

function displayCart() {
    const cartDiv = document.getElementById("showCart");
    cartDiv.innerHTML = "";

    let total = 0;

    cartDiv.innerHTML = `
        <table class="productTable">
            <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
            </tr>
    `;

    cart.forEach(item => {
        cartDiv.innerHTML += `
            <tr>
                <td>
                    <img src="${item.image}" class="productImg">
                </td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
            </tr>
        `;
        total += item.price;
    });

    cartDiv.innerHTML += `
            <tr>
                <td></td>
                <td><strong>Total</strong></td>
                <td><strong>$${total.toFixed(2)}</strong></td>
            </tr>
        </table>
    `;
}

