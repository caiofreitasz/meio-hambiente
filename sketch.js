const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

function mostrarMensagem() {
mensagem.textContent = "🌱 Dica: plante uma árvore e ajude a preservar a vida no planeta!";
botao.textContent = "Atitude sustentável realizada! 🌎";
}

botao.addEventListener("click", mostrarMensagem);
