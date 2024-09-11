let baseBody = `
<div id="the-baseline">
    <div id="the-edge-shadow"></div>
    <div id="the-intrusive-holder">
        <div class="top-spacer"></div>
        <div id="the-intrusive-box" class="outline shadow">
        </div>
    </div>
    <div id="the-top-holder" class="edge-holder">
        <div id="the-top-bar" class="edge-box top shadow outline glow horizontal-holder">
            <flexSpacer style="--size:0.1;max-width:var(--gutterWidth); order:1;"></flexSpacer>
        
            <div id="the-top-bar-logo" class="logo" style="mask-image: url(SVGs/logos/default.svg); order:2;"></div>
        
            <flexSpacer style="--size:1;order:3;"></flexSpacer>
        
            <div id="the-search-holder" class="horizontal-holder outline horizontal-action-box glow">
                <input id="the-search-input" type="text" placeholder="Search Homo">
                <div id="the-search-icon" class="icon" style="mask-image: url(SVGs/icons/search.svg);"></div>
            </div>
        
            <flexSpacer style="--size:1.1; order:5;"></flexSpacer>

            <div id="the-top-bar-end-holder" class="horizontal-holder" style="order:6;">
                <label id="the-dropdown" class="outline button horizontal-action-box glow matter-child">
                    <input type="button" onclick="">
                    <div class="icon" style="mask-image: url(SVGs/icons/list.svg);"></div>
                </label>
                <flexSpacer style="--size:1; max-width:var(--buttonSize);"></flexSpacer>
                <div id="the-options" class="outline button horizontal-action-box glow matter-child"></div>
            </div>

            <flexSpacer style="--size:0.1;max-width:var(--gutterWidth); order:7;"></flexSpacer>
        </div>
    </div>

    <flexSpacer style="--size:1;"></flexSpacer>

    <div id="the-bottom-holder" class="edge-holder">
        <div id="the-bottom-bar" class="edge-box bottom horizontal-holder">
            <label id="the-theme-switch" class="theme-switch shadow outline button glow">
                <input type="button" onclick="toggleTheme()">
                <div class="icon" style="mask-image: url(SVGs/themeDark.svg);"></div>
            </label>
            <flexSpacer style="--size:1;"></flexSpacer>
        </div>
    </div>
</div>
<div id="the-main-area">
    <div id="the-main-area-top-spacer" class="top-spacer" style="order:1;"></div>
    <divSpacer style="--size:var(--edgeBoxSize); order:3;"></divSpacer>
</div>`;

function updateTheme() {
    let themeSwitches = document.getElementsByClassName('theme-switch')
    if (ColorTheme) {
        SetTheme = HotTheme2;
        for (i = 0; i < themeSwitches.length; i++){
            themeSwitches[i].getElementsByClassName('icon')[0].style.maskImage = "url(SVGs/icons/light.svg)";
        }
    } else {
        SetTheme = HotTheme1;
        for (i = 0; i < themeSwitches.length; i++){
            themeSwitches[i].getElementsByClassName('icon')[0].style.maskImage = "url(SVGs/icons/dark.svg)";
        }
    }
    
    document.getElementById('theme').setAttribute('href', 'styles/themes/'+SetTheme+'.css');
}