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

allClasses.forEach(c => {
    c.addEventListener('click', () => {
        c.classList.add('test');
    });
});