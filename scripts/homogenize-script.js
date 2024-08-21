let homoName = document.getElementsByClassName('homogenized-script')[0].getAttribute('name')

function updateTheme() {
    if (ColorTheme) {
        SetTheme = HotTheme2;
        document.getElementsByClassName('the-bottom-theme-icon')[0].setAttribute('src', '../images/ours/uncolored/LightIcon.png');
        document.getElementById('homogenized-color-theme').setAttribute('href', '../styles/theirs/'+homoName+'-light-theme.css');
    } else {
        SetTheme = HotTheme1;
        document.getElementsByClassName('the-bottom-theme-icon')[0].setAttribute('src', '../images/ours/uncolored/DarkIcon.png');
        document.getElementById('homogenized-color-theme').setAttribute('href', '../styles/theirs/'+homoName+'-dark-theme.css');
    }
       
    document.getElementById('color-theme').setAttribute('href', '../styles/ours/'+SetTheme+'-theme.css');
}