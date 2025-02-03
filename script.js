const button = document.getElementById("toggle-dark-mode");
const body = document.body;
window.sr = ScrollReveal({ reset: false});


/*Scroll com efeito de aparecimento*/
list_cards = ['.card1','.card2','.card3','.card4',
    '.card5','.card6','.card7','.duvidas','.linha1','.linha2','.linha3','.contato'];
for (i = 0; i < list_cards.length; i++) {
    sr.reveal(list_cards[i], {duration: 1000, origin: 'bottom', distance: '50px' });

sr.reveal('.lista', {duration: 1000, origin: 'left', distance: '50px' });}



// Verifica no localStorage se o dark mode estava ativado
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    }

button.addEventListener("click", () => {
body.classList.toggle("dark-mode");

// Salva a preferência no localStorage
if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    button.innerText = "☀️";
} else {
    localStorage.setItem("darkMode", "disabled");
    button.innerText = "🌙";
 }
});


