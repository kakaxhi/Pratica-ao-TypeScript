"use strict";
var botaoAtualizar = document.getElementById("atualizar-saldo");
var botaoLimpar = document.getElementById("limpar-saldo");
var soma = document.getElementById("soma");
var campoSaldo = document.getElementById("campo-saldo");
if (campoSaldo) {
    campoSaldo.innerHTML = "0";
}
else {
    throw new Error("O elemento de id 'campo-saldo' não foi encontrado");
}
function somarAoSaldo(soma) {
    if (campoSaldo) {
        campoSaldo.innerHTML = "".concat(Number(campoSaldo.innerHTML) + soma);
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = "";
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener("click", function () {
    var _a;
    somarAoSaldo(Number((_a = soma === null || soma === void 0 ? void 0 : soma.value) !== null && _a !== void 0 ? _a : 0));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
//# sourceMappingURL=app.js.map