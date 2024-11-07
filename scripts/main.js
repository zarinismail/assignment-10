let pootsImg = document.querySelector('#poots');
let farmerImg = document.querySelector('#farmer');
let hiddenMessage1 = document.querySelector('#hiddentext1');
let hiddenMessage2 = document.querySelector('#hiddentext2');

hiddenMessage1.style.display = 'none';
hiddenMessage2.style.display = 'none';

pootsImg.onmouseover = () => {
    pootsImg.setAttribute('src', 'images/currentpoots.jpg');
    hiddenMessage1.style.display ='block';
};
pootsImg.onmouseout = () => {
    pootsImg.setAttribute('src', 'images/kittenpoots.jpg');
    hiddenMessage1.style.display = 'none';
};

farmerImg.onclick = () => {
    switch(farmerImg.getAttribute('src')) {
        case 'images/farmer1.jpg':
            farmerImg.setAttribute('src', 'images/farmer2.jpg');
            hiddenMessage2.style.display = 'block';
            break;
        case 'images/farmer2.jpg':
            farmerImg.setAttribute('src', 'images/farmer3.jpg');
            hiddenMessage2.style.display = 'block';
            break;
        case 'images/farmer3.jpg':
            farmerImg.setAttribute('src', 'images/farmer4.jpg');
            hiddenMessage2.style.display = 'block';
            break;
        case 'images/farmer4.jpg':
            farmerImg.setAttribute('src', 'images/farmer5.jpg');
            hiddenMessage2.style.display = 'block';
            break;
        case 'images/farmer5.jpg':
            farmerImg.setAttribute('src', 'images/farmer1.jpg');
            hiddenMessage2.style.display = 'none';
            break;
    }
};