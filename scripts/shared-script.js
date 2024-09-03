let ColorTheme = false;
let HotTheme1 = 'corpo-dark';
let HotTheme2 = 'plum';
let SetTheme = '';

updateTheme();

function updateTheme() {
    if (ColorTheme) {
        SetTheme = HotTheme2;
        document.getElementById('the-theme-icon').style.maskImage = "url(SVGs/ours/themeLight.svg), url(SVGs/ours/search.svg)";
    } else {
        SetTheme = HotTheme1;
        document.getElementById('the-theme-icon').style.maskImage = "url(SVGs/ours/themeDark.svg), url(SVGs/ours/search.svg)";
    }
    
    document.getElementById('color-theme').setAttribute('href', 'styles/ours/'+SetTheme+'-theme.css');
}

function toggleTheme() {
    ColorTheme = !ColorTheme;

    updateTheme();
}