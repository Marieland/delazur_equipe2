const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");



//Tableau d'image [0,1,2]


buttons.forEach ((button)=> {
    button.addEventListener('click', (e) =>{
      const calcNextSlide = e.target.id ==="next" ? 1 : -1;
      const slideActive = document.querySelector(".active");

      newIndex =calcNextSlide + [...slides].indexOf(slideActive);

      slides[newIndex].classList.add("active");
      if (newIndex < 0) newIndex=[...slides].length -1; //pour obtenir le dernier élément du tableau nous devons ajouté -1
      if (newIndex >= [...slides].length) newIndex = 0;

      slideActive.classList.remove("active");
    });
});
