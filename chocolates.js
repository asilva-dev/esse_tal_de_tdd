// Teste 1

// function calcularPrecoTotal(quantidade) {
//     return quantidade * 5;
// }

// Teste 2 e 3

// function calcularPrecoTotal(quantidade) {
//     let precoUnitario = 5;
//     let desconto = 0;

//     if (quantidade >= 10 && quantidade < 20) {
//         desconto = 0.1; // 10%
//     } else if (quantidade >= 20) {
//         desconto = 0.2; // 20%
//     }

//     let precoTotal = quantidade * precoUnitario;
//     let descontoAplicado = precoTotal * desconto;
//     return precoTotal - descontoAplicado;
// }


// Refatorando
// const PRECO_UNITARIO = 5;

// function calcularDesconto(quantidade) {
//     if (quantidade >= 20) {
//         return 0.2; // 20%
//     } else if (quantidade >= 10) {
//         return 0.1; // 10%
//     } else {
//         return 0;
//     }
// }

// function calcularPrecoTotal(quantidade) {
//     const desconto = calcularDesconto(quantidade);
//     const precoTotal = quantidade * PRECO_UNITARIO;
//     const precoComDesconto = precoTotal * (1 - desconto);
//     return precoComDesconto;
// }

module.exports = calcularPrecoTotal;
