
document.getElementById("ano").textContent = new Date().getFullYear();
const dataMod = new Date(document.lastModified);
document.getElementById("modificacao").textContent = dataMod.toLocaleDateString('pt-BR') + " " + dataMod.toLocaleTimeString('pt-BR');
const temp = 9;   
const vento = 10; 
function calcularSensacaoTermica(t, v) {
    if (t <= 10 && v > 4.8) {
        let sensacao = 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
        return Math.round(sensacao) + " °C";
    } else {
        return "N/A";
    }
}
document.getElementById("sensacao").textContent = calcularSensacaoTermica(temp, vento);