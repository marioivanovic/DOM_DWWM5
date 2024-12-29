// // ID
// // querySelector permet de cibler le premier élément qu'on souhaite, ici le premier élément ayant l'id "title";
// const oneId = document.querySelector('#title');
// // querySelectorAll permet de cibler tous les éléments ayant l'id "title";
// const allIds = document.querySelectorAll('#title');
// // getElementById permet de cibler l'élément ayant pour id "title".
// const titleId = document.getElementById('title');

// // CLASSE
// const oneClass = document.querySelector('.secondTitle');
// const allClasses = document.querySelectorAll('.secondTitle');
// const secondTitleClass = document.getElementsByClassName('secondTitle');
// const headingTitle = document.querySelector('.title_heading_article');
// const parent = document.querySelector('.parent');
const machin = document.getElementById('barfoo')
const listeCourse = document.querySelector('#liste');


// // MODIFICATIONS
// headingTitle.textContent = " CECI EST MON NOUVEAU TITRE DE TEST, TOUT LE MONDE VOIT ????????!!!!!"
// headingTitle.style.color = 'red';
// headingTitle.style.backgroundColor = 'green';

// // CREATION NOUVEAU ELEMENT
// // const paragraph = document.createElement('p');
// // paragraph.textContent = 'TEXTE DANS DIV PARENT';
// // parent.appendChild(paragraph);

// // console.log(paragraph.parentElement);
// // console.log(parent.children)

// // AJOUT DE CLASSE
// // parent.classList.add('classTest')
// // parent.classList.remove('classTest')
// // parent.classList.toggle('parent')
// // parent.classList.contains('parent')


// // SUPPRESSION D'UN ELEMENT
// // parent.removeChild(nouvelElement)

// // #title = id="title"
// console.log("one id =>", oneId);
// console.log("one class =>", oneClass);
// console.log("all classes =>", allClasses);
// console.log("all ids =>", allIds);
// console.log("all ids =>", allIds[1]);
// console.log("Title ID =>", titleId)

// // Une nodeListe est un array-like renvoyée par un querySelectorAll(), on peut uniquement utiliser le forEach, si on veut utiliser autre chose, on doit d'abord
// // convertir la nodeListe en array avec Array.from(le nom de la const du querySelectorAll()).
// const listOfNodes = Array.from(allClasses);
// const array = listOfNodes.map(l => l.textContent);

// console.log("nodeListe après transformation en array =>", array)
// console.log("MACHIN ::: ", machin);
// allClasses.forEach(c => {
//     c.addEventListener('click', () => {
//         c.classList.add('test');
//     });
// });


const produits = ['Pommes', 'Poires', 'Carottes', 'Peches', 'Abricots', 'Fraises'];

// produits.forEach((produit, index) => {
//     const li = document.createElement('li');
//     li.textContent = produit;
//     listeCourse.appendChild(li);
// })
// const liste = document.querySelector('#liste')
// console.log("ICI :", listeCourse);


// const draggable = document.querySelector('.draggable');
// const dropzone = document.querySelector('.dropzone');

// draggable.addEventListener('dragstart', (event) => {
//     event.target.classList.add('dragging');
// });

// draggable.addEventListener('dragend', (event) => {
//     event.target.classList.remove('dragging');
// });

// dropzone.addEventListener('dragover', (e) => {
//     e.preventDefault(); // Nécessaire pour permettre le drop
// });

// dropzone.addEventListener('drop', (event) => {
//     // event.preventDefault();
//     const dragging = document.querySelector('.dragging');
//     event.target.appendChild(dragging);
// });


// const form = document.querySelector('#monFormulaire');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const email = form.querySelector('#email').value;
//     const password = form.querySelector('#password').value;

//     console.log("Données:", { email, password });
// });

// // const button = document.querySelector('.btn');

// // button.addEventListener('click', () => { console.log("Button cliqué") })


// // const users = document.querySelector('#users');

// // fetch('https://fakestoreapi.com/products?limit=30')
// //     .then(response => response.json())
// //     .then(products => {
// //         const listOfProducts = document.querySelector('#products');
// //         products.forEach(product => {
// //             const displayProduct = document.createElement('div');
// //             displayProduct.classList.add('test')
// //             displayProduct.innerHTML = `<h4> Product : ${product.title}</h4>
// //             <p> ${product.description}</p>
// //             <img src=${product.image} alt=${product.title}>`;
// //             listOfProducts.appendChild(displayProduct);
// //         })
// //     })
// //     .catch(error => console.log(error))


// // produits.forEach((data, index) => {
// //     const user = document.createElement('li');
// //     user.textContent = data;
// //     users.appendChild(li);
// // })

// // click
// // dblclick
// // mouseover 
// // mouseout
// // keyup 
// // keydown 
// // submit 
// // change 

// // async function displayAllUsers() {
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //         const users = await response.json();
// //         const listOfUsers = document.querySelector('.users');

// //         users.forEach(user => {
// //             const liste = document.createElement('li');
// //             liste.innerHTML = ` <h2>${user.name}</h2>`;
// //             listOfUsers.appendChild(liste);
// //         })
// //     }
// //     catch (err) {
// //         console.log('Erreur : ', err)
// //     }
// // }

// // async function displayAllUsers() {
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //         const users = await response.json();
// //         const listOfUsers = document.querySelector('.users');
// //         const usersAdded = users.map(user =>
// //             `<h4>${user.name}</h4>`
// //         ).join('');
// //         listOfUsers.innerHTML = usersAdded;
// //     }
// //     catch (err) {
// //         console.log("Erreur : ", err);
// //     }
// // }

// // displayAllUsers();


// // const fruits = ['Pomme', "Poire"];

// // .join() => "Pomme,Poire"
// //     .join('') => "PommePoire"
// //         .join('-') => "Pomme-Poire"




// const appUsers = [{
//     nom: "Jules", age: 45, email: "jules@gmail.com"
// },
// {
//     nom: "Mathilde", age: 25, email: "math@gmail.com"
// },
// {
//     nom: "Martin", age: 20, email: "themartin@gmail.com"
// },
// {
//     nom: "Jasmine", age: 33, email: "jassbeauty@gmail.com"
// },
// {
//     nom: "Noé", age: 40, email: "nono@gmail.com"
// },
// {
//     nom: "Bethy", age: 65, email: "bethymamie@gmail.com"
// },
// {
//     nom: "Sarah", age: 41, email: "sarah.pro@gmail.com"
// },
// {
//     nom: "Kevin", age: 43, email: "kevstillyoung@gmail.com"
// },]

// const button = document.getElementById('addUser');
// const listAppUsers = document.querySelector('.personsList');
// const compteurContent = document.querySelector('.compteur');

// let index = 0;
// let numberUsers = 0;

// // Créer un compteur qui va s'incrémenter au clique (et à l'ajout d'un user) du button.

// function updateCompt() {
//     compteurContent.textContent = `Users : ${numberUsers}`;
// };


// // button.addEventListener('click', function () {
// //     if (index < appUsers.length) {
// //         const userOfApp = appUsers[index];
// //         const card = document.createElement('div');

// //         card.innerHTML = `<h2>${userOfApp.nom}</h2>
// //         <button class="delete">Supprimer user</button>`;

// //         card.querySelector('.delete').addEventListener('click', () => {
// //             card.remove();
// //             numberUsers--;
// //             updateCompt();
// //         });

// //         listAppUsers.appendChild(card);
// //         // index += 1;
// //         index++;
// //         numberUsers++;
// //         updateCompt();
// //     } else {
// //         alert("Oops ! Aucun user à ajouter");
// //     }
// // })

// // const old = document.querySelector('.old');
// // const child = document.querySelector('#children');


// // Propagation
// // child.addEventListener('click', () => {
// //     console.log("Clique à l'enfant");
// // })

// // old.addEventListener('click', () => {
// //     console.log("Clique au parent");
// // })

// // Délégation
// // document.querySelectorAll('.button').forEach(function (button) {
// //     button.addEventListener('click', () => {
// //         console.log('bouton cliqué');
// //     })
// // })

// // const container = document.getElementById('container');
// // container.addEventListener('click', (e) => {
// //     if (e.target.classList.contains('btn')) {
// //     console.log('Bouton cliqué')
// // }
// // })

// // const mouseBox = document.querySelector('.mouseBox');
// // const keyInput = document.querySelector('.doKey');
// // const displayKeyNumber = document.querySelector('.count');

// // mouseBox.addEventListener('mouseover', function () {
// //     mouseBox.style.backgroundColor = 'red';
// //     mouseBox.textContent = 'Coucou tout le monde, oubliez pas de signer avant 13h !!';
// // });

// // mouseBox.addEventListener('mouseout', function () {
// //     mouseBox.style.backgroundColor = "white";
// //     mouseBox.textContent = 'Mouse box';
// // });

// // keyInput.addEventListener('keydown', function (event) {
// //     console.log("touche down:", event.key);

// // })

// // keyInput.addEventListener('keyup', function (e) {
// //     displayKeyNumber.textContent = `${this.value.length}`;
// //     console.log("this", this);
// //     console.log("this.value", this.value);
// //     console.log("keyInput.value", keyInput.value);
// //     console.log("e.target.value", e.target.value);
// // })

// const newStudent = {
//     name: "Julie",
//     age: 35,
//     introduce: function () {
//         console.log(`My name is ${this.name} et j'ai ${this.age} ans !`)
//     }
// }

// const newStudent2 = {
//     name: "Bobby",
//     age: 2,
//     introduce: function () {
//         console.log(`My name is ${this.name} et j'ai ${this.age} ans !`)
//     }
// }

// newStudent.introduce();
// // My name is Julie et j'ai 35 ans !

// newStudent2.introduce();
// // My name is Bobby et j'ai 2 ans !

// const julieSaysHello = newStudent.introduce;
// julieSaysHello();
// // Avec bind : My name is Julie et j'ai 35 ans !
// // Sans bind : My name is  et j'ai undefined ans !

// const julieSaysHelloAgain = newStudent.introduce.bind(newStudent);
// julieSaysHelloAgain();
// // My name is Julie et j'ai 35 ans !



// // class IncrementButton {
// //     constructor() {
// //         this.increment = 0;
// //     }

// //     incrementation() {
// //         this.increment++;
// //     }
// // }

// // const myIncrementButton1 = new IncrementButton();
// // const myIncrementButton2 = new IncrementButton();

// // button.addEventListener('click', myIncrementButton.incrementation);


// // button.addEventListener('click', myIncrementButton.incrementation.bind(myIncrementButton))

// // class Quick {
// //     constructor(nom) {
// //         this.nom = nom;
// //         this.address = 0;
// //         this.employee = 0;
// //         this.chairColor = blue;
// //         this.menu = menu;

// //     }
// //     addRank() {
// //         this.rank += 1;
// //         console.log(`${this.nom} est au rang ${this.rank}`)
// //     }
// // }

// // const quick1 = new Quick("Quick Montreuil", "14, rue de la Beaune 93100 Montreuil", "30");
// // const quick2 = new Quick("Quick Marseille");
// // const quick30000000 = new Quick("Quick Quimper");

// // class Hero {
// //     constructor(nom, vie) {
// //         this.nom = nom;
// //         this.vie = vie;
// //         this.niveau = 1;
// //     }
// // }

// // class Magician extends Hero {
// //     constructor(nom) {
// //         this.sorts = ['Glace', 'Tornade', 'Boule de feu', 'Empoisonnement']
// //     }

// //     jeterSort(sort) {
// //         if (this.sorts.includes(sort)) {
// //             this.vie -= 10;
// //             console.log(`${this.nom} jette ${sort}`)
// //         } else {
// //             console.log(`${this.nom} n'as pas ce sort`)
// //         }
// //     }
// // }

// // const magicien = new Magician("Hercule");


// // magicien.jeterSort('Tempete');

// // Hercule jette Tornade;






// // EXERCICES A PUSH SUR GITHUB



// // Exercice 1 : Changer la couleur d'un paragraphe au clic
// // Mahmoudou

// // Yacine 
// let paragraphe = document.getElementById('para');
// paragraphe.addEventListener('click', function () {
//     paragraphe.style.color = 'blue';
// });





// // Exercice 2 : Changer de couleur et de texte au survol de la souris
// // Karla
// const cacheCat = document.querySelector('.cacheCat');
// const paragraph = document.querySelector('#paragraphe');

// cacheCat.addEventListener('mouseover', function () {
//     cacheCat.textContent = 'Miaou !';
//     cacheCat.style.color = 'red';
//     cacheCat.style.backgroundColor = 'yellow';
// });

// paragraph.addEventListener('mouseover', function () {
//     paragraph.style.color = 'red';
//     paragraph.textContent = 'Miaou !';
//     paragraph.style.backgroundColor = 'blue'
// })

// cacheCat.addEventListener('mouseout', function () {
//     cacheCat.textContent = 'cache Cat';
//     cacheCat.style.color = 'black';
//     cacheCat.style.backgroundColor = 'orange';
// });

// paragraph.addEventListener('mouseout', function () {
//     paragraph.style.color = 'black';
//     paragraph.textContent = 'Tu es adorable !';
//     paragraph.style.backgroundColor = 'white'
// })



// Lundi 23/12

// Exercice 3 : Afficher le texte en temps réel. (afficher le text de l'input dans un paragraphe par exemple)
// Farah
produits.forEach((produit) => {
    const li = document.createElement('li');
    li.textContent = produit;
    listeCourse.appendChild(li);
});

machin.addEventListener('input', () => {
    listeCourse.textContent = machin.value;
});



// Exercice 4 : Compter le nombre de caractères au keyup, afficher le nombre dans un paragraphe. BONUS : Ajouter une limite à 50 caractères.
// Sami

const champTexteComptage = document.getElementById('champTexteComptage');
const caracteresCompteur = document.getElementById('caracteresCompteur');

champTexteComptage.addEventListener('keyup', () => {
    const texte = champTexteComptage.value;

    if (texte.length > 50) {
        champTexteComptage.value = texte.slice(0, 50);
    }

    caracteresCompteur.textContent = `Nombre de caractères : ${champTexteComptage.value.length} / 50`;
});

// Pour aller jusqu'à 100 et ne pas redescendre à 10 dans le compteur

// champTexteComptage.addEventListener('keyup', () => {
//     champTexteComptage.value = champTexteComptage.value.slice(0, 100);


//     caracteresCompteur.textContent = `Nombre de caractères : ${champTexteComptage.value.length} / 100`;
// });


// Exercice 5 : Creer une class, ajouter un event listener au bouton, à chaque clic, on incrémente puis on affiche la nouvelle valeur dans une div. (rajouter du style CSS)
// Noah

class Compteur {
    constructor(element) {
        this.compteur = 0;
        this.element = element;
    }

    incrementer() {
        this.compteur++;
        this.afficher();
    }

    afficher() {
        this.element.textContent = this.compteur;
    }
}


const incrementButton = document.querySelector('#incrementButton');
const counterValue = document.querySelector('#counterValue');


const compteur = new Compteur(counterValue);


incrementButton.addEventListener('click', () => {
    compteur.incrementer();
});

// class Compteur {
//     constructor() {
//         this.compteur = 0;
//         this.button = document.querySelector('#incrementButton');
//         this.counter = document.querySelector('#counterValue');


//         this.increment = this.incrementer.bind(this);
//         this.button.addEventListener('click', this.increment);
//     }
//     incrementer() {
//         this.compteur++;
//         this.counter.textContent = this.compteur;
//     }

// }


// // const incrementButton = document.querySelector('#incrementButton');
// // const counterValue = document.querySelector('#counterValue');


// const compteur = new Compteur(counterValue);



// Exercice 6 : Creer un score initial de 0, séléctionner la zone de jeu et le score, au survol, augmenter le score, à la sortie de zone, changer la couleur. Creer une nouvelle instance.
// Step 1 : creer score initial de 0 = FAIT
// Step 2: Séléctionner zone + score = FAIT
// Step 3: Augmenter score au survol = FAIT
// Step 4: Changer couleur à la sorte de zone = FAIT
// Step 5: Créer une nouvelle instance. = FAIT

class mouseGame {
    constructor() {
        this.score = 0;
        this.gameZone = document.querySelector('.mouseZone');
        this.displayScore = document.querySelector('#score');

        this.incrementScore = this.incrementScore.bind(this);
        this.changeColor = this.changeColor.bind(this);

        this.gameZone.addEventListener('mouseover', this.incrementScore);
        this.gameZone.addEventListener('mouseout', this.changeColor);
    }

    incrementScore() {
        this.score++;
        this.displayScore.textContent = this.score;
    }

    changeColor() {
        const colors = ['red', 'blue', 'yellow', 'green', 'purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.gameZone.style.backgroundColor = randomColor;
    }

}

const myNewMouseGame = new mouseGame();

let score = 0;
const scoreContainer = document.getElementById('scoreContainer');
let scoreElement = document.getElementById('score');

function incrementScore() {
    score++;
    score.element.textContent = score;
    game.addEventListener('mouseover', incrementScore());
}

function changeColor() {
    const color = `${color} gameZone.backgroundColor = 'red'`;
}

function NewGame() {
    const oldGame = document.getElementById('game-zone');
    if (oldGame) {
        oldGame.remove();
    }
};




// Pour lundi 23/12

// Faire une to-do list en JS.

// TO HAVE :

// ajouter des tâches au click et ou la touche Entrer.

// supprimer des tâches au click.

// ajouter un compteur qui va s'incrémenter à l'ajout d'une tâche et décrementer à la suppression d'une tâche.

// ajouter du style à la liste !

