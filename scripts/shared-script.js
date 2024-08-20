let ColorTheme = false;
let HotTheme1 = 'corpo-dark';
let HotTheme2 = 'plum';
let SetTheme = '';

updateTheme();

function toggleTheme() {
    ColorTheme = !ColorTheme;

    updateTheme();
}