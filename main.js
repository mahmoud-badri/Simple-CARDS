//-------------------------------------------------------------start registar----------------------------------------------------------//














//-----------------------------------------------------------------------------------------------------------------------//

let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let totall = document.getElementById("totall")
let count = document.getElementById("count")
let category = document.getElementById("category")
let submit = document.getElementById("submit")

let mood = "Create"
let tymp;
let movY;





// get total 
function getTotal(){
    if (price.value != ""){
        let result = (+price.value + +taxes.value + +ads.value ) - +discount.value
        totall.innerHTML = result
        totall.style.background = "#040"
    }
    else{
        totall.innerHTML = ""
        totall.style.background = "#a00d02"
    }
}

// create prouduct

// init array to put the data inside
let dataProduct;
// cheack if localStorage contain data
if (localStorage.proucut != null){
    dataProduct = JSON.parse(localStorage.proucut)
}else{
    dataProduct = [];
}

submit.onclick = function(){
    let newData = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        totall:totall.innerHTML,
        count:count.value,
        category:category.value,
    }
    // save data for object in array
    if (mood === "Create"){
        if (newData.count > 1){
        for (i = 0; i < newData.count; i++){
            dataProduct.push(newData)
        }
        }else {
            dataProduct.push(newData)
        }
    }else{
        dataProduct [tymp] = newData
        mood = "Create"
        submit.innerHTML = "Create"
        count.style.display = "block"
        scroll({movY, behavior:"smooth"})
    }
    
    
    // save data in localstorage
    localStorage.setItem("proucut", JSON.stringify(dataProduct))
    
    // using function clear 
    clearData()
    showData()
    
}



// clear inputs
function clearData(){ 
    title.value = "",
    price.value = "",
    taxes.value = "",
    ads.value = "",
    discount.value = "",
    totall.innerHTML = "",
    count.value = "",
    category.value = ""
}
// read data

function showData(){
    getTotal()
    let table = "";
    for (let i = 0; i < dataProduct.length; i++){
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataProduct[i].title}</td>
            <td>${dataProduct[i].price}</td>
            <td>${dataProduct[i].taxes}</td>
            <td>${dataProduct[i].ads}</td>
            <td>${dataProduct[i].discount}</td>
            <td>${dataProduct[i].totall}</td>
            <td>${dataProduct[i].category}</td>
            <td><button onclick="udateData(${i})" id="update">update</update></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = table;
    let btnDelete = document.getElementById("daleatall")
    if (dataProduct.length> 0){
        btnDelete.innerHTML = `<td><button onclick="deleteAll()" id="daleatall">Delete All (${dataProduct.length})</update></td>`
    }else{
        btnDelete.innerHTML = "";
    }
} 
showData()
// count
// delete

function deleteData(i){
    dataProduct.splice(i,1);
    localStorage.proucut = JSON.stringify(dataProduct)
    showData()
}
function deleteAll(){
    localStorage.clear();
    dataProduct.splice(0);
    showData()
}
// update
function udateData(i){
    title.value = dataProduct[i].title
    price.value = dataProduct[i].price
    taxes.value = dataProduct[i].taxes
    ads.value = dataProduct[i].ads
    discount.value = dataProduct[i].discount
    totall.value = dataProduct[i].totall
    category.value = dataProduct[i].category
    count.style.display = "none"
    getTotal()
    submit.innerHTML = "Update"
    mood = "Update"
    tymp = i
    scroll({top:0, behavior:"smooth"})
    let locy = scrollY;
    movY = locy

}   

// search
let searchMode = "title"
function getsearchMode(id){
    let search = document.getElementById("search")
    if(id == "searchtitle"){
        searchMode = "Title"

    }else{
        searchMode = "Catogary"
    }
    search.setAttribute("Placeholder", "Search By " + searchMode)
    search.focus()
    search.value=""
    showData()
}


function searchData(value) {
    let table = '';
    if (searchMode == "title"){
        for (let i = 0; i < dataProduct.length; i++){
        if(dataProduct[i].title.includes(value.toLowerCase())){
            table += `
            <tr>
                <td>${i}</td>
                <td>${dataProduct[i].title}</td>
                <td>${dataProduct[i].price}</td>
                <td>${dataProduct[i].taxes}</td>
                <td>${dataProduct[i].ads}</td>
                <td>${dataProduct[i].discount}</td>
                <td>${dataProduct[i].totall}</td>
                <td>${dataProduct[i].category}</td>
                <td><button onclick="udateData(${i})" id="update">update</update></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>
            `
        }
        }
    }
    else{
        for (let i = 0; i < dataProduct.length; i++){
            if(dataProduct[i].category.includes(value.toLowerCase())){
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataProduct[i].title}</td>
                    <td>${dataProduct[i].price}</td>
                    <td>${dataProduct[i].taxes}</td>
                    <td>${dataProduct[i].ads}</td>
                    <td>${dataProduct[i].discount}</td>
                    <td>${dataProduct[i].totall}</td>
                    <td>${dataProduct[i].category}</td>
                    <td><button onclick="udateData(${i})" id="update">update</update></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                `
            }
            }
    }
    
    document.getElementById("tbody").innerHTML = table;
}
// clean data














































// // Inputs and elements
// // let title = document.getElementById('title');
// // let price = document.getElementById('price');
// // let taxes = document.getElementById('taxes');
// // let ads = document.getElementById('ads');
// // let discount = document.getElementById('discount');
// // let total = document.getElementById('total');
// // let count = document.getElementById('count');
// // let category = document.getElementById('category');
// // let submit = document.getElementById('submit');
// // let username = document.getElementById('user-name');
// // let password = document.getElementById('password');
// // let loginBtn = document.getElementById('Log');
// // let productData;

// // Storage
// // let userArray;

// // Initial storage check
// // if (localStorage.username) {
// // userArray = JSON.parse(localStorage.username);
// // } else {
// // userArray = [];
// // }

// // Login button click event
// // loginBtn.onclick = function () {
// //   Validate login credentials
// // let validUser = userArray.find(
// //     (user) => user.username === username.value.toLowerCase() && user.password === password.value
// // );

// //   If valid, redirect to product page
// // if (validUser) {
// //     window.location.href = 'products.html';
// // } else {
// //     alert('Invalid username or password!');
// // }
// // };

// // Get product total
// // function getTotal() {
// // if (price.value) {
// //     let result = +price.value + +taxes.value + +ads.value - +discount.value;
// //     total.innerHTML = result;
// //     total.style.background = '#040';
// // } else {
// //     total.innerHTML = '';
// //     total.style.background = '#a00d02';
// // }
// // }

// // Create product
// // let dataProduct;

// // Check local storage for data
// // if (localStorage.product) {
// // dataProduct = JSON.parse(localStorage.product);
// // } else {
// // dataProduct = [];
// // }

// // Submit button click event
// // submit.onclick = function () {
// //   Create new product object
// // let newProduct = {
// //     title: title.value.toLowerCase(),
// //     price: price.value,
// //     taxes: taxes.value,
// //     ads: ads.value,
// //     discount: discount.value,
// //     total: total.innerHTML,
// //     count: count.value,
// //     category: category.value,
// // };

// //   Create or update data based on mode
// // if (mood === 'Create') {
// //     Multiple products if count > 1
// //     if (newProduct.count > 1) {
// //     for (let i = 0; i < newProduct.count; i++) {
// //         dataProduct.push(newProduct);
// //     }
// //     } else {
// //     dataProduct.push(newProduct);
// //     }
// // } else {
// //     dataProduct[tymp] = newProduct;
// //     mood = 'Create';
// //     submit.innerHTML = 'Create';
// //     count.style.display = 'block';
// //     Scroll to top after update
// //     scroll({ top: 0, behavior: 'smooth' });
// // }

// //   Save data to local storage
// // localStorage.setItem('product', JSON.stringify(dataProduct));

// //   Clear data and show updated table
// // clearData();
// // showData();
// // };

// // Clear input fields
// // function clearData() {
// // title.value = '';
// // price.value = '';
// // taxes.value = '';
// // ads.value = '';
// // discount.value = '';
// // total.innerHTML = '';
// // count.value = '';
// // category.value = '';
// // }

// // Show product data
// // function showData() {
// // getTotal();
// // let table = '';
// // for (let i = 0; i < dataProduct.length; i++) {
// //     table += `
// //     <tr>
// //         <td><span class="math-inline">\{i\}</td\>
// // <td\></span>{dataProduct[i].title}</td>
// //         <td><span class="math-inline">\{dataProduct\[i\]\.price\}</td\></6\>
// // <td\></span>{dataProduct[i].taxes}</td>
// //         <td><span class="math-inline">\{dataProduct\[i\]\.ads\}</td\>
// // <td\></span>{dataProduct[i].discount}</td>
// //         <td><span class="math-inline">\{dataProduct\[i\]\.total\}</td\>
// // <td\></span>{dataProduct[i].category}</td>
// //         <td><button onclick="updateData(<span class="math-inline">\{i\}\)"</7\> id\="update"\>Update</button\></td\>
// // <td\><button onclick\="deleteData\(</span>{i})" id="delete">Delete</button></td>
// //     </tr>
// //     `;
// // }
// // document.getElementById('tbody').innerHTML =  table; }