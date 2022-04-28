const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['a', 'b', 'c', 'a', 'b'];
const emojis = ['🤑', '🪙', '😐', '🤧', '🥶'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (i = 1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    // console.log(tableauResultats);
    verifTab(tableauResultats);
    tableauResultats = [];
})

function verifTab(tabResultats) {
    for (i = 0; i < 5; i++){
        if (tabResultats[i] === reponses[i]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    //console.log(verifTableau);
    afficherResultat(verifTableau);
    verifTableau = [];
}

function afficherResultat(tabCheck) {
    
    const nbFautes = tabCheck.filter(el => el !== true).length;
    console.log(nbFautes);
    switch(nbFautes) {
        case 0:
            titreResultat.innerText = "🤑 Bravo, c'est un sans faute ! 🤑"
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
            break;
        case 1:
            titreResultat.innerText = "🪙 Tu y es presque , encore un effort ! 🪙"
            aideResultat.innerText = 'Retente une autre réponse dans les cases rouges, puis re-valide !';
            noteResultat.innerText = '4/5';
            break;
        case 2:
            titreResultat.innerText = "😐 Bravo, c'est un sans faute ! 😐"
            aideResultat.innerText = 'Retente une autre réponse dans les cases rouges, puis re-valide !';
            noteResultat.innerText = '3/5';
            break;
        case 3:
            titreResultat.innerText = "😐 Je suis certain que tu peux mieux faire ! 😐"
            aideResultat.innerText = 'Retente une autre réponse dans les cases rouges, puis re-valide !';
            noteResultat.innerText = '2/5';
            break;
        case 4:
            titreResultat.innerText = "🤧 Il y a encore du travail ! 🤧"
            aideResultat.innerText = 'Retente une autre réponse dans les cases rouges, puis re-valide !';
            noteResultat.innerText = '1/5';
            break;
        case 5:
            titreResultat.innerText = "🥶 Il faut revoir sa copie ! 🥶"
            aideResultat.innerText = 'Aïe Aïe Aïe… ';
            noteResultat.innerText = '0/5';
            break;
        
        default: 'Erreur innatendu';

    }
}
