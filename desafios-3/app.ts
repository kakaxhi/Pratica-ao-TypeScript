let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma") as HTMLInputElement | null;
let campoSaldo = document.getElementById("campo-saldo");
if(campoSaldo) {
    campoSaldo.innerHTML = "0";
}
else {
    throw new Error("O elemento de id 'campo-saldo' não foi encontrado");
}
function somarAoSaldo(soma: number) {
    if(campoSaldo) {
        campoSaldo.innerHTML = `${Number(campoSaldo.innerHTML) + soma}`;
    }
}

function limparSaldo() {
    if(campoSaldo) {
        campoSaldo.innerHTML = "";
    }
}

botaoAtualizar?.addEventListener("click", function () {
    somarAoSaldo(Number(soma?.value ?? 0));
});

botaoLimpar?.addEventListener("click", function () {
    limparSaldo();
});