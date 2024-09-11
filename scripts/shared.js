let ColorTheme = false;
let HotTheme1 = 'corpo-dark';
let HotTheme2 = 'plum';
let currentTheme = '';
let themes = [
    'default',
    'corpo-dark',
    'jumgle',
    'light',
    'plum',
    'something'
];

let addedBody = document.getElementById('the-actual-page')
addedBody.style.order = 2;
console.log(addedBody)

document.getElementsByTagName('body')[0].innerHTML = baseBody;

document.getElementById('the-main-area').appendChild(addedBody)

updateTheme();

let allTextBoxes = document.getElementsByClassName("text-box");

let theTopBar = document.getElementById('the-top-bar');
let mainAreaTopSpacers = document.getElementsByClassName('top-spacer');

let adjustTopSpacerHeight = setInterval(function(){
    for (i = 0; i < mainAreaTopSpacers.length; i++) {
        mainAreaTopSpacers[i].style.height = theTopBar.offsetHeight + 'px';
    }
}, 100);

function toggleTheme() {
    ColorTheme = !ColorTheme;

    updateTheme();
}

function copyText(source) {
    navigator.clipboard.writeText(document.getElementById(source.id).innerText);
    console.log("Copied contents of "+source.id+" to clipboard")
}