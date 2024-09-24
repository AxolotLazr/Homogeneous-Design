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

let baseBody = `
<div id="the-baseline">
    <div id="the-edge-shadow"></div>
    <div id="the-intrusive-holder">
        <div class="top-spacer" style="order:1;"></div>
        <div id="the-index" class="tab shadow glow outline" style="order:2;">
            <div id="the-index-title" class="title glow" onclick="copyText(this)">Index</div>
            <hr>
            <div id="the-index-body" class="intrusive-body outline">
                <div class="card outline glow"></div>
            </div>
        </div>
        <div id="the-options" class="tab shadow glow" style="order:2;">
            <div id="the-options-title" class="title glow" onclick="copyText(this)">Options</div>
            <hr>
        </div>
        <div id="the-intrusive-bottom"></div>
    </div>
    <div id="the-top-holder" class="edge-holder">
        <div id="the-top-bar" class="edge-box top shadow outline glow horizontal-holder">
            <flexSpacer style="--size:0.1;max-width:var(--gutterWidth); order:1;"></flexSpacer>
        
            <div id="the-top-bar-logo" class="logo" style="mask-image: url(`+hrefPrefix+`SVGs/logos/default.svg); order:2;"></div>
        
            <flexSpacer style="--size:1;order:3;"></flexSpacer>
        
            <div id="the-search-holder" class="horizontal-holder outline horizontal-action-box glow">
                <input id="the-search-input" type="text" placeholder="Search Homo">
                <div id="the-search-icon" class="icon" style="mask-image: url(`+hrefPrefix+`SVGs/icons/search.svg);"></div>
            </div>
        
            <flexSpacer style="--size:1.1; order:5;"></flexSpacer>

            <div id="the-top-bar-end-holder" class="horizontal-holder" style="order:6;">
                <label id="the-index-button" class="outline button horizontal-action-box glow matter-child">
                    <input type="button" onclick="handleIntrusiveBox('index')">
                    <div class="icon" style="mask-image: url(`+hrefPrefix+`SVGs/icons/list.svg);"></div>
                </label>
                <flexSpacer style="--size:1; max-width:var(--buttonSize);"></flexSpacer>
                <label id="the-options-button" class="outline button horizontal-action-box glow matter-child spin">
                    <input type="button" onclick="handleIntrusiveBox('options')">
                    <div class="icon" style="mask-image: url(`+hrefPrefix+`SVGs/icons/settings.svg);"></div>
                </label>
            </div>

            <flexSpacer style="--size:0.1;max-width:var(--gutterWidth); order:7;"></flexSpacer>
        </div>
    </div>

    <flexSpacer style="--size:1;"></flexSpacer>

    <div id="the-bottom-holder" class="edge-holder">
        <div id="the-bottom-bar" class="edge-box bottom horizontal-holder">
            <label id="the-theme-switch" class="theme-switch shadow outline button glow spin">
                <input type="button" onclick="toggleTheme()">
                <div class="icon" style="mask-image: url(`+hrefPrefix+`SVGs/icons/dark.svg);"></div>
            </label>
            <flexSpacer style="--size:1;"></flexSpacer>
        </div>
    </div>
</div>
<div id="the-main-area" onclick="mainAreaClicked()">
    <div id="the-main-area-top-spacer" class="top-spacer" style="order:1;"></div>
    <divSpacer style="--size:var(--edgeBoxSize); order:3;"></divSpacer>
</div>`;

let addedBody = document.getElementById('the-actual-page');
addedBody.style.order = 2;
console.log('page content captured');

document.getElementsByTagName('body')[0].innerHTML = baseBody;
console.log('page base inserted');

document.getElementById('the-main-area').appendChild(addedBody);
console.log('page appended original content');

updateTheme();

let allTextBoxes = document.getElementsByClassName("text-box");

let theTopBar = document.getElementById('the-top-bar');

let adjustTopSpacerHeight = setInterval(function(){
        document.documentElement.style.setProperty('--topSpacerHeight', theTopBar.offsetHeight + 'px');
}, 100);

//set up the intrusive box
let theIntrusiveHolder = document.getElementById('the-intrusive-holder');

let intrusiveTabOpen = false;
let intrusiveTab = 'index';

function handleIntrusiveBox(from) {
    if (intrusiveTab == from) {
        intrusiveTabOpen = !intrusiveTabOpen;
    } else if (intrusiveTabOpen == false) {
        intrusiveTabOpen = true;
    }
    console.log('intrusive tab open: '+intrusiveTabOpen);

    intrusiveTab = from;

    for (i = 0; i < document.getElementsByClassName('tab').length; i++) {
        document.getElementsByClassName('tab')[i].classList.remove('open');
    }
    console.log('intrusive tab: '+intrusiveTab);

    if (intrusiveTabOpen) {
        theIntrusiveHolder.getElementsByClassName('tab').namedItem('the-'+intrusiveTab).classList.add('open');
    }
    
    console.log('intrusive classList: '+theIntrusiveHolder.classList);
}
function mainAreaClicked() {
    intrusiveTabOpen = false;
    for (i = 0; i < document.getElementsByClassName('tab').length; i++) {
        document.getElementsByClassName('tab')[i].classList.remove('open');
    }
}
function updateTheme() {
    let themeSwitches = document.getElementsByClassName('theme-switch')
    if (ColorTheme) {
        currentTheme = HotTheme2;
        for (i = 0; i < themeSwitches.length; i++){
            themeSwitches[i].getElementsByClassName('icon')[0].style.maskImage = 'url('+hrefPrefix+'SVGs/icons/light.svg)';
        }
        console.log('theme icon set to light');
    } else {
        currentTheme = HotTheme1;
        for (i = 0; i < themeSwitches.length; i++){
            themeSwitches[i].getElementsByClassName('icon')[0].style.maskImage = 'url('+hrefPrefix+'SVGs/icons/dark.svg)';
        }
        console.log('theme icon set to dark');
    }
    
    document.getElementById('theme').setAttribute('href', ''+hrefPrefix+'styles/themes/'+currentTheme+'.css');
    console.log('theme set to ' + currentTheme)
}

function toggleTheme() {
    ColorTheme = !ColorTheme;

    updateTheme();
}

function copyText(source) {
    navigator.clipboard.writeText(document.getElementById(source.id).innerText);
    console.log("Copied contents of "+source.id+" to clipboard")
}