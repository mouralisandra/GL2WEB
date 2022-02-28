let jouer = true;

const hiddennumber = () => {
    let diff = 1;
    let message = "choisir le niveaue difficulté <10";
    do {
        diff = parseInt(prompt(message));
        message = "De 1 à 10 SVP";
    } while (diff > 10)

    const lenombre = Math.floor(11 * Math.random());
    let chances = 10 - diff;
    let utilisateur = lenombre + 1;
    do {
        utilisateur = prompt(`jouez pour ne rien gangner (${chances})`);
        chances--;
    } while (chances > 0 && lenombre !== parseInt(utilisateur))

    if (chances > 0 || lenombre === parseInt(utilisateur)) {
        alert(`${lenombre}, C'est ça mais vous ne gagnez rien`);
    } else alert(`Même pour ne rien gagner vous avez perdu. C'était ${lenombre}`);

    jouer = prompt("Rejouer? Oui ou non", "oui");
    jouer = ["oui"].includes(jouer.toLowerCase());
}

while (jouer) {
    hiddennumber();
}