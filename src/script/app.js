
let tela = document.getElementById("tela");
let botoes = document.querySelector(".butões");
let igual = document.getElementById("equals");
let limpar = document.getElementById("clear");
let del = document.getElementById("del");

// Adiciona os números e operadores na tela
botoes.addEventListener("click", function(event) {
    let valor = event.target.getAttribute("data-value");

    if (valor !== null) {
        tela.value += valor;
    }
});

// Função para calcular
function calcular() {
    try {
        if (tela.value === "") {
            return;
        }

        // Permite apenas números e operadores matemáticos
        if (!/^[0-9+\-*/%. ]+$/.test(tela.value)) {
            tela.value = "Erro";
            return;
        }

        let resultado = eval(tela.value);

        if (Number.isFinite(resultado)) {
            tela.value = resultado;
        } else {
            tela.value = "Erro";
        }

    } catch (erro) {
        tela.value = "Erro";
    }
}

// Botão de igual
igual.addEventListener("click", calcular);

// Botão de limpar
limpar.addEventListener("click", function() {
    tela.value = "";
});

// Botão DEL - Apaga o último caractere
del.addEventListener("click", function() {
    tela.value = tela.value.slice(0, -1);
});