# Eletrocheski

## Nome do projeto
**Eletrocheski**

## Objetivo
Desenvolver um site institucional para a empresa **Eletrocheski**, especializada
em **instalação e manutenção de postes e redes elétricas** para diversas
empresas. O projeto foi construído utilizando apenas **HTML, CSS e JavaScript
puro**, aplicando os conceitos trabalhados em aula: estruturação semântica de
páginas, estilização com CSS, manipulação do DOM, tratamento de eventos,
validação de formulários e organização do código.

## Tecnologias utilizadas
- **HTML5** — estruturação semântica das páginas
- **CSS3** — estilização, responsividade (Flexbox, Grid e media queries) e animações
- **JavaScript** — manipulação do DOM, eventos e validação

## Estrutura das páginas

O site é composto por **4 páginas distintas**, com navegação entre elas:

**Início (Home)** `index.html` Apresentação da empresa, diferenciais, estatísticas e resumo dos serviços
**Sobre** `sobre.html` História, missão, visão e valores da empresa
**Serviços** `servicos.html` Lista completa de serviços e processo de trabalho 
**Contato** `contato.html` Informações de contato e formulário com validação 

### Organização dos arquivos
```
Landing-Page-Eletrocheski/
├── index.html          # Página inicial
├── sobre.html          # Página Sobre
├── servicos.html       # Página de Serviços
├── contato.html        # Página de Contato
├── css/
│   └── style.css       # Estilos do site
├── js/
│   ├── main.js         # Recursos de interface (menu, contadores, acordeão, etc.)
│   └── contato.js      # Validação e envio do formulário de contato
└── README.md           # Documentação do projeto
```

## Funcionalidades implementadas

### Manipulação do DOM e eventos (JavaScript)
- **Menu mobile responsivo** — abre/fecha ao clicar no botão (hambúrguer)
- **Sombra dinâmica no cabeçalho** — aparece ao rolar a página (evento `scroll`)
- **Botão "voltar ao topo"** — surge ao rolar e leva ao topo com rolagem suave
- **Acordeão** — exibe missão, visão e valores expansíveis (página Sobre)
- **Contadores animados** — números das estatísticas aumentam de 0 até o
  valor final quando aparecem na tela (usando `setInterval`)
- **Animação de revelação** — elementos surgem suavemente ao rolar a página
- **Ano automático no rodapé** — atualizado via JavaScript

### Formulário de contato (validação e mensagem de sucesso)
- Validação dos campos **nome, e-mail, telefone, assunto e mensagem** ao
  enviar o formulário (evento `submit`)
- Mensagens de erro específicas para cada campo
- **Validação de e-mail** por expressão regular (regex)
- **Validação de telefone** (10 ou 11 dígitos)
- **Mensagem de sucesso** exibida após o envio, **simulando o envio dos dados
  para um banco de dados**, e o formulário é limpo em seguida

## Integrantes
- **Fabio** (individual)

## Links de acesso
- **Youtube:** https://youtu.be/CMohE5fR6wk
- **Repositório:** https://github.com/Abacaxi-1221/Landing-Page-Eletrocheski
- **GitHub Pages:** https://abacaxi-1221.github.io/Landing-Page-Eletrocheski/

## Como executar localmente
1. Faça o download ou clone o repositório.
2. Abra o arquivo **`index.html`** em qualquer navegador.
3. Navegue entre as páginas pelo menu superior.
