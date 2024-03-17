// Dompter les clics sur le coeur.
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
    } else {
        // Sinon, remplacer l'icône pleine par l'icône vide et décrémenter le compteur.
        heartIcon.src = "/assets/img/heart_empty.png";
        heartCount--;
    }
    
    // Mettre à jour le texte du compteur avec la nouvelle valeur.
    count.textContent = heartCount;

    // Créer un élément image pour l'animation du cœur qui apparaît.
    const popHeart = document.createElement('img');
    popHeart.src = '/assets/img/heart_full.png';
    popHeart.classList.add('pop-heart');
    // Ajouter l'élément à l'élément contenant le compteur.
    count.appendChild(popHeart);
    
    // Définir un délai pour l'animation d'apparition.
    setTimeout(() => {
        popHeart.style.opacity = '1';
        // Le délai pour l'animation qui fait disparaître le coeur.
        setTimeout(() => {
            popHeart.style.opacity = '0';
            popHeart.remove();
        }, 500);
    }, 100);
}