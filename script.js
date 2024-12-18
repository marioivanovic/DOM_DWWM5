// ID
// querySelector permet de cibler le premier élément qu'on souhaite, ici le premier élément ayant l'id "title";
const oneId = document.querySelector('#title');
// querySelectorAll permet de cibler tous les éléments ayant l'id "title";
const allIds = document.querySelectorAll('#title');
// getElementById permet de cibler l'élément ayant pour id "title".
const titleId = document.getElementById('title');

// CLASSE
const oneClass = document.querySelector('.secondTitle');
const allClasses = document.querySelectorAll('.secondTitle');
const secondTitleClass = document.getElementsByClassName('secondTitle');
const headingTitle = document.querySelector('.title_heading_article');
const parent = document.querySelector('.parent');
const machin = document.getElementById('barfoo')
const listeCourse = document.querySelector('#liste');


// MODIFICATIONS
headingTitle.textContent = " CECI EST MON NOUVEAU TITRE DE TEST, TOUT LE MONDE VOIT ????????!!!!!"
headingTitle.style.color = 'red';
headingTitle.style.backgroundColor = 'green';

// CREATION NOUVEAU ELEMENT
// const paragraph = document.createElement('p');
// paragraph.textContent = 'TEXTE DANS DIV PARENT';
// parent.appendChild(paragraph);

// console.log(paragraph.parentElement);
// console.log(parent.children)

// AJOUT DE CLASSE
// parent.classList.add('classTest')
// parent.classList.remove('classTest')
// parent.classList.toggle('parent')
// parent.classList.contains('parent')


// SUPPRESSION D'UN ELEMENT
// parent.removeChild(nouvelElement)

// #title = id="title"
console.log("one id =>", oneId);
console.log("one class =>", oneClass);
console.log("all classes =>", allClasses);
console.log("all ids =>", allIds);
console.log("all ids =>", allIds[1]);
console.log("Title ID =>", titleId)

// Une nodeListe est un array-like renvoyée par un querySelectorAll(), on peut uniquement utiliser le forEach, si on veut utiliser autre chose, on doit d'abord
// convertir la nodeListe en array avec Array.from(le nom de la const du querySelectorAll()).
const listOfNodes = Array.from(allClasses);
const array = listOfNodes.map(l => l.textContent);

console.log("nodeListe après transformation en array =>", array)
console.log("MACHIN ::: ", machin);
allClasses.forEach(c => {
    c.addEventListener('click', () => {
        c.classList.add('test');
    });
});


const produits = ['Pommes', 'Poires', 'Carottes', 'Peches', 'Abricots', 'Fraises'];

produits.forEach((produit, index) => {
    const li = document.createElement('li');
    li.textContent = produit;
    listeCourse.appendChild(li);
})
const liste = document.querySelector('#liste')
console.log("ICI :", listeCourse);


const draggable = document.querySelector('.draggable');
const dropzone = document.querySelector('.dropzone');

draggable.addEventListener('dragstart', (event) => {
    event.target.classList.add('dragging');
});

draggable.addEventListener('dragend', (event) => {
    event.target.classList.remove('dragging');
});

dropzone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Nécessaire pour permettre le drop
});

dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    const dragging = document.querySelector('.dragging');
    event.target.appendChild(dragging);
});


const form = document.querySelector('#monFormulaire');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;

    console.log("Données:", { email, password });
});

const button = document.querySelector('.btn');

button.addEventListener('click', () => { console.log("Button cliqué") })


// const users = document.querySelector('#users');

fetch('https://fakestoreapi.com/products?limit=30')
    .then(response => response.json())
    .then(products => {
        const listOfProducts = document.querySelector('#users');
        products.forEach(product => {
            const displayProduct = document.createElement('div');
            displayProduct.classList.add('test')
            displayProduct.innerHTML = `<h3> Product : ${product.title}</h3>
            <p> ${product.description}</p>
            <img src=${product.image} alt=${product.title}>`;
            listOfProducts.appendChild(displayProduct);
        })
    })
    .catch(error => console.log(error))


// produits.forEach((data, index) => {
//     const user = document.createElement('li');
//     user.textContent = data;
//     users.appendChild(li);
// })

// click
// dblclick
// mouseover 
// mouseout
// keyup 
// keydown 
// submit 
// change 