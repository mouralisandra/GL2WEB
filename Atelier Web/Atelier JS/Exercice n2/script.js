const texte = document.querySelector(".word > .texte");
const couleur = document.querySelector(".word > .couleur");
const taillePolice = document.querySelector(".word > .taille-police");
const famillePolice = document.querySelector(".word > .famille-police");

couleur.addEventListener('change', (e) => {
    texte.style.color = e.target.value;
});

famillePolice.addEventListener('change', (e) => {
    texte.style.fontFamily = e.target.value;
});

taillePolice.addEventListener('change', (e) => {
    texte.style.fontSize = e.target.value + 'px';
});