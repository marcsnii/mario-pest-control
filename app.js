var updatePestsTotal = function() {
  var goombasQuantElem = document.querySelector("#quant");
  var goombasPriceElem = document.querySelector("#price");
  var goombasQuantValue = parseInt(goombasQuantElem.value);
  var goombasPriceValue = parseInt(goombasPriceElem.value);
  var fnum = goombasQuantValue * goombasPriceValue;

  var bobQuantElem = document.querySelector("#quant1");
  var bobPriceElem = document.querySelector("#price1");
  var bobQuantValue = parseInt(bobQuantElem.value);
  var bobPriceValue = parseInt(bobPriceElem.value);
  var snum = bobQuantValue * bobPriceValue;

  var cheepQuantElem = document.querySelector("#quant2");
  var cheepPriceElem = document.querySelector("#price2");
  var cheepQuantValue = parseInt(cheepQuantElem.value);
  var cheepPriceValue = parseInt(cheepPriceElem.value);
  var tnum = cheepQuantValue * cheepPriceValue;

  document.querySelector("#peststotal").innerHTML = parseInt(fnum) + parseInt(snum) + parseInt(tnum);
}

updatePestsTotal();

var goombasQuantElem = document.querySelector("#quant");
var goombasPriceElem = document.querySelector("#price");

var updateGoomba = function() {
  var goombasQuantValue = parseInt(goombasQuantElem.value);
  var goombasPriceValue = parseInt(goombasPriceElem.value);
  // document.querySelector("#g1").addClassList.add(".animated");
  // document.querySelector("#g1").addClassList.add(".flash");
  if (isNaN(goombasQuantValue) || isNaN(goombasPriceValue)) {
    document.querySelector("#goomtotal").innerHTML = 0;
  } else {
    document.querySelector("#goomtotal").innerHTML = goombasQuantValue * goombasPriceValue;
    updatePestsTotal();
  }
}

goombasQuantElem.addEventListener("keyup", updateGoomba);
goombasQuantElem.addEventListener("click", updateGoomba);
goombasPriceElem.addEventListener("keyup", updateGoomba);
goombasPriceElem.addEventListener("click", updateGoomba);
//document.querySelector("#goomtotal").innerHTML = document.querySelector("#peststotal").innerHTML = (goombasQuantValue * goombasPriceValue) + (bobQuantValue * bobPriceValue) + (cheepQuantValue * cheepPriceValue);

var bobQuantElem = document.querySelector("#quant1");
var bobPriceElem = document.querySelector("#price1");

var updateBob = function() {
  var bobQuantValue = parseInt(bobQuantElem.value);
  var bobPriceValue = parseInt(bobPriceElem.value);

  if (isNaN(bobQuantValue) || isNaN(bobPriceValue)) {
    document.querySelector("#bobtotal").innerHTML = 0;
  } else {
    document.querySelector("#bobtotal").innerHTML = bobQuantValue * bobPriceValue;
    updatePestsTotal();
  }
}

bobQuantElem.addEventListener("keyup", updateBob);
bobQuantElem.addEventListener("click", updateBob);
bobPriceElem.addEventListener("keyup", updateBob);
bobPriceElem.addEventListener("click", updateBob);
//document.querySelector("#peststotal").innerHTML = (goombasQuantValue * goombasPriceValue) + (bobQuantValue * bobPriceValue) + (cheepQuantValue * cheepPriceValue);


var cheepQuantElem = document.querySelector("#quant2");
var cheepPriceElem = document.querySelector("#price2");

var updateCheep = function() {
  var cheepQuantValue = parseInt(cheepQuantElem.value);
  var cheepPriceValue = parseInt(cheepPriceElem.value);

  if (isNaN(cheepQuantValue) || isNaN(cheepPriceValue)) {
    document.querySelector("#cheeptotal").innerHTML = 0;
  } else {
    document.querySelector("#cheeptotal").innerHTML = cheepQuantValue * cheepPriceValue;
    updatePestsTotal();
  }
}

cheepQuantElem.addEventListener("keyup", updateCheep);
cheepQuantElem.addEventListener("click", updateCheep);
cheepPriceElem.addEventListener("keyup", updateCheep);
cheepPriceElem.addEventListener("click", updateCheep);

//document.querySelector("#peststotal").innerHTML = (goombasQuantValue * goombasPriceValue) + (bobQuantValue * bobPriceValue) + (cheepQuantValue * cheepPriceValue);
