let ColorTheme = false;
let HotTheme1 = 'corpo-dark';
let HotTheme2 = 'plum';
let SetTheme = '';

updateTheme();

function updateTheme() {
    if (ColorTheme) {
        SetTheme = HotTheme2;
        document.getElementsByClassName('the-bottom-theme-icon')[0].setAttribute('src', 'images/ours/uncolored/LightIcon.png');
    } else {
        SetTheme = HotTheme1;
        document.getElementsByClassName('the-bottom-theme-icon')[0].setAttribute('src', 'images/ours/uncolored/DarkIcon.png');
    }
    
    document.getElementById('color-theme').setAttribute('href', 'styles/ours/'+SetTheme+'-theme.css');
}

function toggleTheme() {
    ColorTheme = !ColorTheme;

    updateTheme();
}