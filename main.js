//  ****  A function to show dropbox when the mouse is hover  ****//
//

function showDropBox(id) {
  // set font-color to white
  document.getElementById(id).classList.add("ok");
  // get the element
  /*  let arr = document
    .getElementById(id)
    .parentElement.querySelector(".dropdown-menu");
  // Add  class "show" from the classList of this element
  arr.classList.add("show");*/
}
//
//   **** A function to hide dropbox when the mouse is out  ****//
//
function hideDropBox(id) {
  // set font-color to white
  document.getElementById(id).classList.remove("ok");
  // get the element
  /* let arr = document
    .getElementById(id)
    .parentElement.querySelector(".dropdown-menu");
  // remove  class "show" from the classList of this element
  arr.classList.remove("show");*/
}
//
//
//** function to increment nb of porducts added to panel */
var list_product = [];
let k = 0;

function addproductToPanel(el) {
  //get src img
  /* console.log(
    el.parentElement.parentElement
      .querySelector(".card-img-top")
      .getAttribute("src")
  );*/
  //get card title
  console.log(
    el.parentElement.parentElement.querySelector(".card-title").innerText
  );
  //get card description
  console.log(
    el.parentElement.parentElement.querySelector(".card-text").innerText
  );
  //get card prix
  console.log(
    el.parentElement.parentElement
      .querySelector(".prix")
      .innerText.replace(" TND", "")
  );
  // get disp
  console.log(el.parentElement.parentElement.querySelector(".disp").innerText);
  // create an object of this product
  var obj_product = {
    src_img: el.parentElement.parentElement
      .querySelector(".card-img-top")
      .getAttribute("src"),
    description:
      el.parentElement.parentElement.querySelector(".card-title").innerHTML +
      "<br>" +
      el.parentElement.parentElement.querySelector(".card-text").innerText,
    disp: el.parentElement.parentElement.querySelector(".disp"),
    prix: el.parentElement.parentElement
      .querySelector(".prix")
      .innerText.replace(" TND", "")
  };
  let count = 0;
  let arr = [];
  //add object to localstorage panel
  if (localStorage.getItem("products") == null) {
    var produts_json = JSON.stringify(list_product);
    localStorage.setItem("products", produts_json);
    arr = JSON.parse(localStorage.getItem("products"));
    console.log("/***************arr*************");

    arr[arr.length] = obj_product;
    console.log(arr);
    var produts_json = JSON.stringify(arr);
    localStorage.setItem("products", produts_json);
    /* list_product[k] = obj_product;
    k++;*/
    count = arr.length;
    localStorage.setItem("count", count);
    console.log("count");
    localStorage.getItem("count");
  } else {
    arr = JSON.parse(localStorage.getItem("products"));
    console.log("/***************arr*************");

    arr[arr.length] = obj_product;
    console.log(arr);
    var produts_json = JSON.stringify(arr);
    localStorage.setItem("products", produts_json);
    /* list_product[k] = obj_product;
    k++;*/
    count = arr.length;
    localStorage.setItem("count", count);
    console.log("count");
    localStorage.getItem("count");
  }

  let nb = parseInt(document.getElementById("span-panier").innerHTML);
  document.getElementById("span-panier").innerHTML = String(count);
  let nb1 = parseInt(document.getElementById("span-panier2").innerHTML);
  document.getElementById("span-panier2").innerHTML = String(nb1 + 1);
}
function storing_product() {
  var produts_json = JSON.stringify(list_product);
  localStorage.setItem("products", produts_json);
  console.log("/*******my panel**********/");
  console.log(localStorage.getItem("products")); // products is the key of item
}
function onload_panel() {}

//get size of an object
Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
function nbProducts() {
  let arr = [];
  arr = JSON.parse(localStorage.getItem("products"));
  count = arr.length;
  localStorage.setItem("count", count);
  let nb = parseInt(document.getElementById("span-panier").innerHTML);
  document.getElementById("span-panier").innerHTML = String(
    localStorage.getItem("count")
  );
}

function increment(el) {
  console.log(
    el.parentElement.parentElement.querySelector(".form-control").value
  );
  var nb = el.parentElement.parentElement.querySelector(".form-control").value;
  regex = /^[0-9]*$/gm;
  if (regex.test(nb) === true) {
    if (el.innerText === "+") {
      nb = parseInt(nb);
      nb++;
    }
    if (el.innerText === "-") {
      nb = parseInt(nb);
      nb--;
    }
    if (nb <= 0) {
      el.parentElement.parentElement.querySelector(".form-control").value = "0";

      el.parentElement.parentElement.parentElement.parentElement.querySelector(
        ".item-montant"
      ).innerText = "0,000 TND ";

      //affiche total commande
      var ul = [].slice.call(
        document.getElementById("ul-prod").querySelectorAll(".list-group-item")
      );
      var sum = 0;
      ul.forEach(function(element) {
        sum += parseFloat(element.querySelector(".item-montant").innerText);
      });
      document.getElementById("total").querySelector(".montant").innerText =
        sum.toFixed(3) + " " + "TND";
    } else {
      el.parentElement.parentElement.querySelector(
        ".form-control"
      ).value = nb.toString();
      el.parentElement.parentElement.parentElement.parentElement.querySelector(
        ".item-montant"
      ).innerText =
        (
          nb *
          parseFloat(
            el.parentElement.parentElement.parentElement.parentElement.querySelector(
              ".item-pu"
            ).innerText
          )
        ).toFixed(3) +
        " " +
        "TND";
      //affiche total commande
      var ul = [].slice.call(
        document.getElementById("ul-prod").querySelectorAll(".list-group-item")
      );
      var sum = 0;
      ul.forEach(function(element) {
        sum += parseFloat(element.querySelector(".item-montant").innerText);
      });
      document.getElementById("total").querySelector(".montant").innerText =
        sum.toFixed(3) + " " + "TND";
    }
  } else {
    console.log("ce n'est pas un number!");
  }
}
function montant(el) {
  console.log("onload");
  var nb = parseFloat(el.querySelector(".item-pu").innerText);
  el.querySelector(".item-montant").innerText =
    (nb * parseInt(el.querySelector(".form-control").value)).toFixed(3) +
    " " +
    "TND";
}
