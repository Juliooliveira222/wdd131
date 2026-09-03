// Aguarda o carregamento do DOM antes de executar os scripts
document.addEventListener("DOMContentLoaded", () => {
    // 1. Preenche o ano atual dinamicamente no footer
    const currentYearSpan = document.getElementById("anoatual");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Preenche a data e hora da última modificação do documento
    const lastModifiedParagraph = document.getElementById("ultimaModificacao");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = "Última Modificação: " + document.lastModified;
    }
});