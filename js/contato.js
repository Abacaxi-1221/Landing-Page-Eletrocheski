/* ============================================================
   Eletrocheski - Validação do formulário de contato
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.querySelector("#form-contato");
  var mensagemSucesso = document.querySelector("#mensagem-sucesso");

  // Quando o formulário é enviado
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede o recarregamento da página

    // Pega os campos do formulário
    var nome = document.querySelector("#nome");
    var email = document.querySelector("#email");
    var telefone = document.querySelector("#telefone");
    var assunto = document.querySelector("#assunto");
    var mensagem = document.querySelector("#mensagem");

    var valido = true;

    // Valida o nome
    if (nome.value.trim().length < 3) {
      mostrarErro(nome, "Informe seu nome (mínimo 3 letras).");
      valido = false;
    } else {
      limparErro(nome);
    }

    // Valida o e-mail usando uma expressão regular (regex)
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
      mostrarErro(email, "Informe um e-mail válido.");
      valido = false;
    } else {
      limparErro(email);
    }

    // Valida o telefone (apenas números, 10 ou 11 dígitos)
    var numeros = telefone.value.replace(/\D/g, "");
    if (numeros.length < 10 || numeros.length > 11) {
      mostrarErro(telefone, "Informe um telefone válido com DDD.");
      valido = false;
    } else {
      limparErro(telefone);
    }

    // Valida o assunto
    if (assunto.value === "") {
      mostrarErro(assunto, "Selecione um assunto.");
      valido = false;
    } else {
      limparErro(assunto);
    }

    // Valida a mensagem
    if (mensagem.value.trim().length < 10) {
      mostrarErro(mensagem, "Escreva uma mensagem (mínimo 10 letras).");
      valido = false;
    } else {
      limparErro(mensagem);
    }

    // Se todos os campos estiverem corretos, mostra a mensagem de sucesso
    // (simulando o envio dos dados para um banco de dados)
    if (valido) {
      mensagemSucesso.textContent =
        "Mensagem enviada com sucesso! Em breve entraremos em contato.";
      mensagemSucesso.classList.add("mensagem-sucesso--visivel");
      formulario.reset();
    }
  });

  // Mostra a mensagem de erro de um campo
  function mostrarErro(campo, texto) {
    campo.parentElement.classList.add("campo--erro");
    campo.parentElement.querySelector(".campo__erro").textContent = texto;
  }

  // Limpa a mensagem de erro de um campo
  function limparErro(campo) {
    campo.parentElement.classList.remove("campo--erro");
    campo.parentElement.querySelector(".campo__erro").textContent = "";
  }
});
