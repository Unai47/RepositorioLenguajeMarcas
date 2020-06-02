filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activo");
    current[0].className = current[0].className.replace(" activo", "");
    this.className += " activo";
  });
}

filterSelection2("all")
function filterSelection2(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv2");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass2(x[i], "enseñar");
    if (x[i].className.indexOf(c) > -1) w3AddClass2(x[i], "enseñar");
  }
}

function w3AddClass2(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass2(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer2 = document.getElementById("myBtnContainer2");
var btns2 = btnContainer2.getElementsByClassName("btn2");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activo2");
    current[0].className = current[0].className.replace(" activo2", "");
    this.className += " activo2";
  });
}

filterSelection3("all")
function filterSelection3(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv2");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass3(x[i], "enseñar");
    if (x[i].className.indexOf(c) > -1) w3AddClass3(x[i], "enseñar");
  }
}

function w3AddClass3(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass3(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer3 = document.getElementById("myBtnContainer3");
var btns3 = btnContainer3.getElementsByClassName("btn3");
for (var i = 0; i < btns3.length; i++) {
  btns3[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activo3");
    current[0].className = current[0].className.replace(" activo3", "");
    this.className += " activo3";
  });
}

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
      ul = document.getElementById("Kanto");
      li = ul.getElementsByClassName("filterDiv");
  
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function myFunction2() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch2");
  filter = input.value.toUpperCase();
      ul = document.getElementById("Johto");
      li = ul.getElementsByClassName("filterDiv2");
  
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function myFunction3() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch3");
  filter = input.value.toUpperCase();
      ul = document.getElementById("Hoen");
      li = ul.getElementsByClassName("filterDiv2");
  
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  if(cityName == "Kanto"){
      var pokedex = document.getElementById("pokedex")
      pokedex.style.left = "200%";
      pokedex.style.position = "relative";
  }else if(cityName == "Johto"){
      var pokedex = document.getElementById("pokedex")
      pokedex.style.left = "200%";
      pokedex.style.position = "relative";
  } else if(cityName == "Hoen"){
      var pokedex = document.getElementById("pokedex")
      pokedex.style.left = "200%";
      pokedex.style.position = "relative";
  }
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  if(cityName == "Kanto"){
      setTimeout(cambiaSeccion1, 700);
  }else if(cityName == "Johto"){
      setTimeout(cambiaSeccion2, 700);
      
  } else if(cityName == "Hoen"){
      setTimeout(cambiaSeccion3, 700);
  }
  
}

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}


window.onload = function() {
  var body = document.body
  body.style.top = "0";
  var header = document.getElementById("header")
  header.style.left = "0";
  header.style.position = "relative";
  var pokedex = document.getElementById("pokedex")
  pokedex.style.left = "0";
  pokedex.style.position = "relative";
  setTimeout(enseñaMew, 1500);
};

function enseñaMew(){
  document.getElementById("mew2").style.display = "block";
  document.getElementById("mew2").className ="mew"; 
}
function enseñaHooh(){
  document.getElementById("hooh2").style.display = "block";
  document.getElementById("hooh2").className ="hooh"; 
}
function enseñaRayquaza(){
  document.getElementById("rayquaza2").style.display = "block";
  document.getElementById("rayquaza2").className ="rayquaza"; 
}
function cambiaSeccion1(){
  var pokedex = document.getElementById("pokedex")
      pokedex.style.left = "0";
}
function cambiaSeccion2(){
  var pokedex = document.getElementById("pokedex")
      pokedex.style.left = "0";
    setTimeout(enseñaHooh, 1000);
}
function cambiaSeccion3(){
  var pokedex = document.getElementById("pokedex")
      pokedex.style.left = "0";
    setTimeout(enseñaRayquaza, 1000);
}