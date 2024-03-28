function validateEmail() {
    var email = document.getElementById('email').value;
    var domain = email.substring(email.lastIndexOf("@") + 1);
    if (domain.toLowerCase() === "yahoo.com") {
        alert("Nous n'acceptons pas les adresses e-mail Yahoo.");
        return false;
    }
    return true;
}
// Associez la fonction validatePassword au formulaire
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        if (!validateEmail()) {
            event.preventDefault(); // Empêche l'envoi du formulaire si le mot de passe est incorrect
        }
    });
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
const type = password
    .getAttribute('type') === 'password' ?
    'text' : 'password';
password.setAttribute('type', type);
togglePassword.classList.toggle('bi-eye');
});
// Fonction pour valider le mot de passe
function validatePassword() {
const enteredPassword = document.getElementById('password').value;
if (enteredPassword !== 'Kaput Draconis') {
    alert('Mot de passe incorrect.');
    return false;
}
return true;
}
// Associez la fonction validatePassword au formulaire
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
if (!validatePassword()) {
    event.preventDefault(); // Empêche l'envoi du formulaire si le mot de passe est incorrect
}
});