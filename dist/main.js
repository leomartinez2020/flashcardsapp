// Start
const lista = ['embudo-decantacion', 'embudo-solo', 'erlenmeyer', 'condensador', 'matraz-plano', 'tubo-ensayo',
    'pipeta', 'probeta', 'vaso-precipitados', 'mechero', 'balanza', 'tripode', 'mortero'
];

const elem1 = document.getElementById('target1');
const elem2 = document.getElementById('target2');
const elem3 = document.getElementById('flip-card-front');
const labImg = document.getElementById('lab-img');
const counterElem = document.getElementById('counter');

const buttonFlip = document.getElementById('button-flip');
const buttonReveal = document.getElementById('button-reveal');
const buttonNext = document.getElementById('button-next');
let control = true;
let counter = 1;

buttonFlip.addEventListener('click', function(event) {
    if (control) {
        elem1.style.transform = "rotateY(360deg)";
        elem2.style.transform = "rotateY(360deg)";
    } else {
        elem1.style.transform = "rotateY(-360deg)";
        elem2.style.transform = "rotateY(-360deg)";
    }
    control = !control;
});

buttonReveal.addEventListener('click', function(event) {
    elem2.style.transform = "rotateY(180deg)";
});

buttonNext.addEventListener('click', function(event) {
    labImg.src = "./assets/" + lista[counter] + ".png";
    elem1.style.transform = "rotateY(-360deg)";
    elem2.style.transform = "rotateY(-360deg)";
    if (counter < lista.length) counter++;
    control = true;
    counterElem.innerHTML = `${counter}`;
});
