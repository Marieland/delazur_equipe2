//Déclarer des variables qui sélectionnent les éléments du DOM
const btnCloseModal = document.querySelector('.btn-close-modal');
const modalBoutiqueVisible = document.querySelector('.modal-boutique-visible')
const btnsAdd0 = document.querySelectorAll('.btn__add-0')
let articleName = document.querySelector('.article-name')

//De base, ajouter la class hidden à la modale our qu'elle soit cachée
modalBoutiqueVisible.classList.add('modal-boutique-hidden')

//Pour chaque bouton de btnsAdd0 (C'est à dire tous les boutons pour ajouter un article)
for (let btnAdd0 of btnsAdd0) {
    //Quand on clique sur le bouton,
    btnAdd0.addEventListener('click', () => {
        //Enlever la class hidden (donc la modale est visible)
        modalBoutiqueVisible.classList.remove('modal-boutique-hidden');
        //Déclarer une variable product qui vient chercher le contenu du plus proche h3 de la sectionBoutique
        const product = btnAdd0.closest('.sectionBoutique').querySelector('h3').textContent;
        //Déclarer une variable productName qui vient chercher le contenu du plus proche h4 de la ficheProduit
        const productName = btnAdd0.closest('.ficheProduit').querySelector('h4').textContent;
        //Déclarer une variable size qui vient chercher le contenu du plus proche p de addCart
        const size = btnAdd0.closest('.addCart').querySelector('p').textContent;
        //Définir le texte de articleName à la concataination des variables product, productName et size, séparés de tirets
        articleName.textContent = product + ' - ' + productName + ' - ' + size;
    });
}

//Quand on clique sur le bouton btnCloseModal,
btnCloseModal.addEventListener('click', () => {
    //Appliquer la class hidden à la modale
    modalBoutiqueVisible.classList.add('modal-boutique-hidden')
});

