var maxDayCal = 0
var sent = document.getElementById("deklaracja");
var dayCal = 0;
var dzisiaj = new Date();
var dzien = dzisiaj.getDate();
var miesiac = dzisiaj.getMonth()+1;
var rok = dzisiaj.getFullYear();

// class Product {
//     constructor(name,calories) {
//         this.name = name;
//         this.calories = calories;
//     }
// }

// let apple = new Product("Apple", 100);

var ProductsArray = [
            {name: "Jabłko", calories: 35},
            {name: "Pieczywo pszenne", calories: 20},
            {name: "masło", calories: 35},
            {name: "ser", calories: 50},
            {name: "ogórek", calories: 30},
            {name: "sałata", calories: 35},
            {name: "Ziemniaki", calories: 60},
            {name: "jajko", calories: 35},
            {name: "makaron", calories: 50},
            {name: "sos pomidorowy", calories: 70},
]

var select = document.getElementById("products");

for(var i = 0; i < ProductsArray.length; i++) {
    var opt = ProductsArray[i];
    var el = document.createElement("option");
    el.textContent = opt.name;
    el.value = opt.calories;
    select.appendChild(el);
}

document.getElementById("deklaracja").addEventListener("click",updateDailyCalories,odliczanie);
document.getElementById("add").addEventListener("click",addMeal);

function updateDailyCalories(event) {
    console.log("updateDailyCalories");
    maxDayCal = document.getElementById("kalorie").value;
    document.getElementById('kalorie').style.display = 'none';
    document.getElementById('deklaracja').style.display = 'none';
    document.getElementById("instructions").innerHTML = "Twoje dzienne deklarowane spożycie to "  + maxDayCal + " kcal" ;
    document.getElementById("print").innerHTML = "Twoje aktualne spożycie wynosi " + dayCal + "/" + maxDayCal + " kcal";
}

function odliczanie(event){

    document.getElementById("clock").innerHTML = dzien+"/"+miesiac+"/"+rok

    setTimeout("odliczanie()",1000);
    }

function addMeal(event) {

    var item = document.getElementById("products").value;
    var itemSelector = document.getElementById("products");


    if (maxDayCal==0) {
        alert("Przed rozpoczęciem musisz wpisać plan kalorii");
        itemSelector.selectedIndex = 0;
        return;
    }

    console.log("addMeal " + item);
    dayCal = dayCal + parseInt(item);
    if (dayCal > maxDayCal && maxDayCal != 0) {
        alert("Przekroczyłeś dzienne spożycie");
    }
    document.getElementById("print").innerHTML = "Twoje aktualne spożycie wynosi " + dayCal + "/" + maxDayCal + " kcal";

    var tabelMenu = document.getElementById("t");
    var newLine = document.createElement("tr");
    // newLine.innerText = itemSelector.children[itemSelector.selectedIndex].innerText + " " + item;
    newLine.innerHTML = `<td>${itemSelector.children[itemSelector.selectedIndex].innerText}</td><td>${item}</td>`;

    tabelMenu.appendChild(newLine);
    itemSelector.selectedIndex = 0;
}

document.getElementById("addNewItem").addEventListener("click",addListItem);
// var NewListItem = document.getElementById("newItem").addEventListener("click",cleanName);
// var ListItemCal = document.getElementById("newCal").addEventListener("click",cleanCalories);

// function cleanName(event) {
//     var NewListItem = document.getElementById("newItem")
//     NewListItem.value = ""
// }

// function cleanCalories(event) {
// var ListItemCal = document.getElementById("newCal")
// ListItemCal.value = ""
// }

function addListItem(event) {
    var NewListItem = document.getElementById("newItem")
    var ListItemCal = document.getElementById("newCal")
    var select = document.getElementById("products");
    
    el.textContent = NewListItem.value;
    el.value = ListItemCal.value;
    select.appendChild(el);
    NewListItem.reset;
    ListItemCal.reset;
}



