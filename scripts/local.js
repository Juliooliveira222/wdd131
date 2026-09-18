// 1. Inserir Ano Atual
document.getElementById("ano").textContent = new Date().getFullYear();

// 2. Inserir Última Modificação formatada
const dataMod = new Date(document.lastModified);
document.getElementById("modificacao").textContent = dataMod.toLocaleDateString('pt-BR') + " " + dataMod.toLocaleTimeString('pt-BR');

// 3. Cálculo da Sensação Térmica
const temp = 9;   // Temperatura fixa
const vento = 10; // Vento fixo

function calcularSensacaoTermica(t, v) {
    if (t <= 10 && v > 4.8) {
        let sensacao = 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
        return Math.round(sensacao) + " °C";
    } else {
        return "N/A";
    }
}

// Executa e insere na tela
document.getElementById("sensacao").textContent = calcularSensacaoTermica(temp, vento);