/* ============================================================
   Eletrocheski - Script principal
   Manipulação do DOM, eventos e funções de interface.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  iniciarMenuMobile();
  iniciarSombraCabecalho();
  iniciarBotaoTopo();
  iniciarAcordeao();
  iniciarRevelarAoRolar();
  iniciarContadores();
  atualizarAnoRodape();
});

/* 1. Menu mobile (abrir/fechar) */
function iniciarMenuMobile() {
  var botao = document.querySelector(".nav__toggle");
  var lista = document.querySelector(".nav__lista");
  if (!botao || !lista) return;

  botao.addEventListener("click", function () {
    lista.classList.toggle("nav__lista--aberta");
  });

  // Fecha o menu ao clicar em um link
  var links = lista.querySelectorAll(".nav__link");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      lista.classList.remove("nav__lista--aberta");
    });
  }
}

/* 2. Sombra no cabeçalho ao rolar a página */
function iniciarSombraCabecalho() {
  var cabecalho = document.querySelector(".cabecalho");
  if (!cabecalho) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      cabecalho.classList.add("cabecalho--rolagem");
    } else {
      cabecalho.classList.remove("cabecalho--rolagem");
    }
  });
}

/* 3. Botão voltar ao topo */
function iniciarBotaoTopo() {
  var botao = document.querySelector(".voltar-topo");
  if (!botao) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      botao.classList.add("voltar-topo--visivel");
    } else {
      botao.classList.remove("voltar-topo--visivel");
    }
  });

  botao.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* 4. Acordeão (missão, visão e valores) */
function iniciarAcordeao() {
  var itens = document.querySelectorAll(".acordeao__item");
  if (!itens.length) return;

  for (var i = 0; i < itens.length; i++) {
    var cabecalho = itens[i].querySelector(".acordeao__cabecalho");

    cabecalho.addEventListener("click", function () {
      var item = this.parentElement;
      var corpo = item.querySelector(".acordeao__corpo");
      var estaAberto = item.classList.contains("acordeao__item--aberto");

      // Fecha todos os itens
      for (var j = 0; j < itens.length; j++) {
        itens[j].classList.remove("acordeao__item--aberto");
        itens[j].querySelector(".acordeao__corpo").style.maxHeight = null;
      }

      // Abre o item clicado (se estava fechado)
      if (!estaAberto) {
        item.classList.add("acordeao__item--aberto");
        corpo.style.maxHeight = corpo.scrollHeight + "px";
      }
    });
  }
}

/* 5. Revelar elementos quando aparecem na tela */
function iniciarRevelarAoRolar() {
  var elementos = document.querySelectorAll(".revelar");
  if (!elementos.length) return;

  function revelar() {
    for (var i = 0; i < elementos.length; i++) {
      var posicao = elementos[i].getBoundingClientRect().top;
      if (posicao < window.innerHeight - 80) {
        elementos[i].classList.add("revelar--ativo");
      }
    }
  }

  window.addEventListener("scroll", revelar);
  revelar(); // chama uma vez ao carregar a página
}

/* 6. Contadores das estatísticas */
function iniciarContadores() {
  var numeros = document.querySelectorAll(".stat__numero");
  var stats = document.querySelector(".stats");
  if (!numeros.length || !stats) return;

  var animado = false;

  function animarContadores() {
    if (animado) return;

    var posicao = stats.getBoundingClientRect().top;
    if (posicao < window.innerHeight - 80) {
      animado = true;

      for (var i = 0; i < numeros.length; i++) {
        contar(numeros[i]);
      }
    }
  }

  function contar(elemento) {
    var alvo = parseInt(elemento.dataset.alvo);
    var sufixo = elemento.dataset.sufixo || "";
    var atual = 0;
    var incremento = Math.ceil(alvo / 50);

    var intervalo = setInterval(function () {
      atual = atual + incremento;
      if (atual >= alvo) {
        atual = alvo;
        clearInterval(intervalo);
      }
      elemento.textContent = atual + sufixo;
    }, 30);
  }

  window.addEventListener("scroll", animarContadores);
  animarContadores();
}

/* 7. Atualiza o ano no rodapé */
function atualizarAnoRodape() {
  var span = document.querySelector("#ano-atual");
  if (span) {
    span.textContent = new Date().getFullYear();
  }
}
