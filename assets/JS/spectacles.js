// Compter les clics sur le coeur.
let heartCount = 0;

// Fonction appelée lorsqu'un bouton de coeur est cliqué.
function changeHeart(event) {
    // Sélection de l'icône de coeur à partir de l'élément cliqué.
    const heartIcon = event.currentTarget.querySelector('.heart__icon');
    // Sélection de l'élément contenant le compteur de clics.
    const count = document.querySelector(".count");
    
    // Vérification si l'icône de cœur est vide ou pas.
    if (heartIcon.src.includes('heart_empty')) {
        // Si l'icône est vide, la remplacer par l'icône pleine et ajouter le compte au compteur.
        heartIcon.src = "/assets/img/heart_full.png";
        heartCount++;

        // Mettre à jour le texte du compteur avec la nouvelle valeur.
        count.textContent = heartCount;

        // Créer un élément image pour l'animation du coeur qui apparaît.
        const popHeart = document.createElement('img');
        popHeart.src = '/assets/img/heart_full.png';
        popHeart.classList.add('pop-heart');
        // Ajouter l'image de coeur à l'élément contenant le compteur.
        count.appendChild(popHeart);
        
        // Définir un délai pour l'animation d'apparition.
        setTimeout(() => {
            popHeart.style.opacity = '1';
            // Le délai pour l'animation qui fait disparaître le coeur.
            setTimeout(() => {
                popHeart.style.opacity = '0';
                // Supprimer l'élément après l'animation de disparition.
                setTimeout(() => {
                    popHeart.remove();
                }, 500);
            }, 500);
        }, 100);
    } else {
        // Sinon, remplace l'icône plein par l'icône vide et reduire le compte.
        heartIcon.src = "/assets/img/heart_empty.png";
        heartCount--;

        // Mettre à jour le texte du compteur avec la nouvelle valeur.
        count.textContent = heartCount;
    }
}

// Sélectionner les boutons en coeur et leurs ajouter un écouteur d'événements.
const heartButtons = document.querySelectorAll('.heart__button');
heartButtons.forEach(button => {
    button.addEventListener('click', changeHeart);
});

document.querySelectorAll('.btn__visiter__site').forEach(button => {
    button.setAttribute('tabindex', '-1');
});