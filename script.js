function calcularDoppler() {
    const vSom = parseFloat(document.getElementById('vSom').value);
    const fFonte = parseFloat(document.getElementById('fFonte').value);
    const vObs = parseFloat(document.getElementById('vObs').value);
    const dirObs = document.getElementById('dirObs').value;
    const vFonte = parseFloat(document.getElementById('vFonte').value);
    const dirFonte = document.getElementById('dirFonte').value;
    const divResultado = document.getElementById('resultado');

    if (isNaN(vSom) || isNaN(fFonte) || isNaN(vObs) || isNaN(vFonte)) {
        divResultado.textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Ajuste de sinal segundo o referencial padrão do Efeito Doppler:
    // Observador se aproximando -> + | Observador se afastando -> -
    const sinalObs = (dirObs === "aproximando") ? 1 : -1;

    // Fonte se aproximando -> - | Fonte se afastando -> +
    const sinalFonte = (dirFonte === "aproximando") ? -1 : 1;

    const numerador = vSom + (sinalObs * vObs);
    const denominador = vSom + (sinalFonte * vFonte);

    if (denominador === 0) {
        divResultado.textContent = "Erro: A velocidade da fonte não pode ser igual à velocidade do som na aproximação (divisão por zero).";
        return;
    }

    // Fórmula: f' = f * ((v ± v_obs) / (v ∓ v_fonte))
    const fPercebida = fFonte * (numerador / denominador);

    divResultado.innerHTML = `Frequência percebida: <strong>${fPercebida.toFixed(2)} Hz</strong>`;
}
