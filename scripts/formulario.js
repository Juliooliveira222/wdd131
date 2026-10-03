const produtos = [
    { id: "tv-lg-oled-c3", nome: "LG OLED EVO C3 55\"" },
    { id: "tv-samsung-qled-q60", nome: "Samsung QLED 4K Q60C 50\"" },
    { id: "tv-tcl-p635", nome: "TCL Google TV 4K P635 43\"" },
    { id: "tv-philips-ambilight", nome: "Philips Ambilight 4K 55\"" },
    { id: "tv-samsung-neo-qled", nome: "Samsung Neo QLED 4K QN90C 65\"" },
    { id: "tv-lg-nanocell", nome: "LG NanoCell 4K NANO77 50\"" }
];

window.addEventListener("DOMContentLoaded", () => {
    carregarProdutos();
    configurarEnvioFormulario();
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

function atualizarFooter() {
    const campoAno = document.getElementById("anoAtual");
    const campoModificacao = document.getElementById("ultimaModificacao");

    if (campoAno) {
        campoAno.textContent = new Date().getFullYear();
    }

    if (campoModificacao) {
        campoModificacao.textContent = Última Modificação: ${document.lastModified};
    }
}

window.addEventListener("DOMContentLoaded", () => {
    exibirContador();
    atualizarFooter();
});

function exibirContador() {
    const elementoContador = document.getElementById("contador-avaliacoes");
    
    let total = Number(localStorage.getItem("totalAvaliacoes")) || 0;
    
    if (elementoContador) {
        elementoContador.textContent = total;
    }
}

function atualizarFooter() {
    const campoAno = document.getElementById("anoAtual");
    const campoModificacao = document.getElementById("ultimaModificacao");

    if (campoAno) {
        campoAno.textContent = new Date().getFullYear();
    }

    if (campoModificacao) {
        campoModificacao.textContent = Última Modificação: ${document.lastModified};
    }
}