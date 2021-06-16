
//console.log(document)
//console.log(document.getElementById("total").innerHTML)
var btnsAddTag=document.getElementsByClassName("plus");
for (var i =0; i<btnsAddTag.length;i++){
    btnsAddTag[i].addEventListener("click",increment);
}
function increment(event){
var btnPlus=event.target;
var divel=btnPlus.parentElement;
var quantityTag=divel.querySelector("p");
var quantity=Number(quantityTag.innerHTML);
quantity++;
quantityTag.innerHTML=quantity;
var priceTag=divel.parentElement.parentElement.querySelector(".price");
var UnitpriceTag=divel.parentElement.parentElement.querySelector(".unitPrice");
var Unitprice=Number(UnitpriceTag.innerHTML);
var price=Unitprice*quantity
priceTag.innerHTML=price;
}
var checkTag=document.getElementsByClassName("check")
for (var i =0; i<checkTag.length;i++){
    checkTag[i].addEventListener("click",totalPrice);
}
function totalPrice(event) {
    var checktag=event.target;
    var priceTag=checktag.parentElement.parentElement.querySelector(".price");
    console.log(priceTag)
    var btnplus=checktag.parentElement.parentElement.querySelector(".plus");
    var btnminus=checktag.parentElement.parentElement.querySelector(".minus");
    var price=Number(priceTag.innerHTML);
    var totalTag=document.getElementById("total")
    console.log(totalTag);
    var total=Number(totalTag.innerHTML)
     if (checktag.checked===true) {
        total+=price;
        btnplus.setAttribute("disabled",true);
        btnminus.setAttribute("disabled",true);
    }
    else{
        total-=price;
        btnplus.removeAttribute("disabled");
        btnminus.removeAttribute("disabled");
    }

    totalTag.innerHTML=total
}

var btnNegTag=document.getElementsByClassName("minus");
for (var i =0; i<btnNegTag.length;i++){
   btnNegTag[i].addEventListener("click",discrimination);
}
function discrimination (event){
var btnminus=event.target;
var divel=btnminus.parentElement;
var quantityTag=divel.querySelector("p");
var quantity=Number(quantityTag.innerHTML);
if (quantity> 0) {
    quantity--;
}
quantityTag.innerHTML=quantity;
var priceTag=divel.parentElement.parentElement.querySelector(".price");
var UnitpriceTag=divel.parentElement.parentElement.querySelector(".unitPrice");
var Unitprice=Number(UnitpriceTag.innerHTML);
var price=Unitprice*quantity
priceTag.innerHTML=price;
quantityTag.innerHTML=quantity;
}
var removecarte = document.getElementsByClassName('delete')
for (var i = 0 ; i < removecarte.length; i++){
    var buton = removecarte[i].addEventListener('click',remove)
}

function remove (event) {
    var btnDelete = event.target;
    var trTag = btnDelete.parentElement.parentElement.parentElement.parentElement;
    var parentTr = document.querySelector("tbody");
    console.log(trTag)
    console.log(parentTr)
    parentTr.removeChild(trTag);
}

var btnliketag = document.getElementsByClassName('like')
for( var i = 0; i < btnliketag.length; i++){
     btnliketag[i].addEventListener('click', itemlike )
}
function itemlike (event){
    var btnred = event.target;
    if (btnred.style.color === 'red') {
        btnred.style.color = 'black'

    }
    else {
        btnred.style.color = 'red'
    }
}