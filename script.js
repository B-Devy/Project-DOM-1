
var title = document.getElementById('title');
title.style.backgroundColor = "red";

var premier = document.getElementsByClassName('premier')[0];
var deuxieme = document.getElementsByClassName('deuxieme')[0];
var troisieme = document.getElementsByClassName('troisieme')[0];

premier.textContent = "TextContent";
deuxieme.innerHTML = "InnerHTML";
troisieme.innerText = "InnerText";

var undeuxtrois = [premier, deuxieme, troisieme];

for (let index = 0; index < undeuxtrois.length; index++) {
    undeuxtrois[index].style.backgroundColor = 'rebeccapurple';
    
}

var rose = document.getElementsByClassName("fondrose");
for (var i = 0; i < rose.length; i++) {
    rose[i].style.backgroundColor = "pink";
}

var articles = document.getElementsByTagName("article");

for (let x = 0; x < articles.length; x++) {
    articles[x].style.color = "blue";
}

var articlespans = document.querySelectorAll('#Grosse article.truc span');
for (let i = 0; i < articlespans.length; i++) {
    articlespans[i].style.backgroundColor = "green";    
}

var articlespan = document.querySelector('#Grosse article.truc span');
articlespan.style.backgroundColor = "yellow";

var Grosse = document.getElementById("Grosse");
console.log(Grosse.children);
console.log(Grosse.parentElement);

var innertruc = document.getElementById('innertruc');
var texttruc = document.getElementById('texttruc');
innertruc.innerHTML = "<ul><li>Elément</li><li>Elément 2</li></ul>";  /*integre dans l'html*/
texttruc.textContent = "<ul><li>Elément</li><li>Elément 2</li></ul>"; /*le texte brute*/

texttruc.classList.add('sousligne');
var contenir = texttruc.classList.contains('sousligne');
console.log(contenir);

var creation = document.createElement('p');
Grosse.appendChild(creation);
creation.innerHTML = "mqljdkfjkqm";

var clic = document.getElementById('clic');
clic.addEventListener("click", function() {
    clic.innerHTML = "Ayé, tu as cliqué !"
});

var lelien = document.getElementById('lelien');
lelien.getAttribute("target"); /*rajoute l'attribut*/
lelien.setAttribute('target', '_blank') /*regle le param de l'attribut*/
lelien.style.backgroundColor = "red"; 
console.log(lelien);

var lelien2 = document.getElementById('lelien2');
//lelien.preventDefault();
lelien.addEventListener('click', function(event) {
    event.preventDefault();
})

/*--------- MOUSEMOVE ---------------*/
var cible = document.getElementById('cible');
var souris = document.getElementById('souris');
var souris2 = document.getElementById('souris2');

cible.addEventListener('mousemove', function(even) {
    var absisse = even.offsetX;
    var ordo = even.offsetY;

    console.log(absisse);
    console.log(ordo);
    
    souris.innerHTML = absisse;
    souris2.innerHTML = ordo;
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select[name = "icecream"]').onchange=changeEventHandler;
}, false);

function changeEventHandler(event) {
    if(!event.target.value) alert('Please Select One');
    else alert ('You Like' + event.target.value + "ice cream.");
}

/*fetch("http://url-service-web.com/api/users");*/

fetch("https://mockbin.com/request")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });