for (i = 0; i < pages.length; i++){
    let newCard = document.createElement('a');
    newCard.id = pages[i].name;
    newCard.classList = 'card outline glow';
    newCard.href = (window.location.hostname.includes('io') ? '/Homogenous-Design':'')+pages[i].link+'/';
    if (pages[i].link == pathname){newCard.style.opacity = '0.5';}
        let newCardTitle = document.createElement('div');
        newCardTitle.classList = 'title';
        newCardTitle.innerText = pages[i].name;
        newCard.appendChild(newCardTitle);
        
        let newCardCreator = document.createElement('a');
        newCardCreator.classList = 'creator outline glow';
        newCardCreator.href = (window.location.hostname.includes('io') ? '/Homogenous-Design':'')+pages[i].creator.page.link;
        newCardCreator.style.backgroundImage = 'url('+subfolderDepth+'images/PFPs/'+pages[i].creator.pfp.image+')';
        newCardCreator.style.backgroundSize = 'calc(100%*'+pages[i].creator.pfp.zoom+')';
        newCardCreator.style.backgroundPosition = pages[i].creator.pfp.offsetX*100+'% '+pages[i].creator.pfp.offsetY*100+'%';
        newCardCreator.style.backgroundRepeat = 'no-repeat';
        newCard.appendChild(newCardCreator);

    document.getElementById('the-index-body').appendChild(newCard);
}