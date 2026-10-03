const produtos = [
    {
        id: "tv-lg-oled-c3",
        nome: "LG OLED EVO C3 55\"",
        classificacaomedia: 4.5
    },
    { 
        id: "tv-samsung-qled-q60",
        nome: "Samsung QLED 4K Q60C 50\"",
        classificacaomedia: 4.2
    },
    { 
        id: "tv-tcl-p635", 
        nome: "TCL Google TV 4K P635 43\"", 
        classificacaomedia: 4.0 
    },
    { 
        id: "tv-philips-ambilight", 
        nome: "Philips Ambilight 4K 55\"", 
        classificacaomedia: 4.3 
    },
    { 
        id: "tv-samsung-neo-qled", 
        nome: "Samsung Neo QLED 4K QN90C 65\"", 
        classificacaomedia: 4.6 
    },
    { 
        id: "tv-lg-nanocell", 
        nome: "LG NanoCell 4K NANO77 50\"", 
        classificacaomedia: 4.1 
    }
];

window.addEventListener("DOMContentLoaded", () => {
    carregarProdutos();
    configurarEnvioFormulario();
    exibirContador();
    atualizarFooter();
});

function carregarProdutos() {
    const select = document.getElementById("produto");
    if (!select) return;

    produtos.forEach(item => {
        const opcao = document.createElement("option");
        opcao.value = item.id;
        opcao.textContent = item.nome;
        select.appendChild(opcao);
    });
}

function configurarEnvioFormulario() {
    const formulario = document.querySelector("form");
    if (!formulario) return;

    formulario.addEventListener("submit", () => {
        let total = Number(localStorage.getItem("totalAvaliacoes")) || 0;
        total += 1;
        localStorage.setItem("totalAvaliacoes", total);
    });
}

function exibirContador() {
    const elementoContador = document.getElementById("contador-avaliacoes");
    if (!elementoContador) return;

    let total = Number(localStorage.getItem("totalAvaliacoes")) || 0;
    elementoContador.textContent = total;
}

function atualizarFooter() {
    const campoAno = document.getElementById("anoAtual");
    const campoModificacao = document.getElementById("ultimaModificacao");

    if (campoAno) {
        campoAno.textContent = new Date().getFullYear();
    }

    if (campoModificacao) {
        campoModificacao.textContent = `Última Modificação: ${document.lastModified}`;
    }
}