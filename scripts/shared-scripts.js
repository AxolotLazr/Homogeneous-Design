let ColorTheme = 'light';

switchTheme();

function switchTheme() {
    if (document.getElementsByClassName('the-bottom-theme-switch')[0].getElementsByTagName('input')[0].checked) {
        ColorTheme = 'dark';
    } else {
        ColorTheme = 'light';
    }
    document.getElementById('color-theme').setAttribute('href', 'styles/ours/'+ColorTheme+'-theme.css')
}

function checkTheme() {
    return document.getElementById('color-theme').getAttribute('href');
}