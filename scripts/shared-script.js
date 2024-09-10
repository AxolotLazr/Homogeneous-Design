let ColorTheme = false;
let HotTheme1 = 'corpo-dark';
let HotTheme2 = 'plum';
let SetTheme = '';

updateTheme();

let allTextBoxes = document.getElementsByClassName("text-box");

let theTopBar = document.getElementById('the-top-bar');
let mainAreaTopSpacer = document.getElementById('the-main-area-top-spacer');

let adjustTopSpacerHeight = setInterval(function(){
    mainAreaTopSpacer.style.height = theTopBar.offsetHeight + 'px';
}, 100);

function updateTheme() {
    let themeSwitches = document.getElementsByClassName('theme-switch')
    if (ColorTheme) {
        SetTheme = HotTheme2;
        for (i = 0; i < themeSwitches.length; i++){
            themeSwitches[i].getElementsByClassName('icon')[0].style.maskImage = "url(SVGs/ours/themeLight.svg)";
        }
    } else {
        SetTheme = HotTheme1;
        for (i = 0; i < themeSwitches.length; i++){
            themeSwitches[i].getElementsByClassName('icon')[0].style.maskImage = "url(SVGs/ours/themeDark.svg)";
        }
    }
    
    document.getElementById('color-theme').setAttribute('href', 'styles/ours/'+SetTheme+'-theme.css');
}

function toggleTheme() {
    ColorTheme = !ColorTheme;

    updateTheme();
}

function copyText(source) {
    navigator.clipboard.writeText(document.getElementById(source.id).innerText);
    console.log("Copied contents of "+source.id+" to clipboard")
}