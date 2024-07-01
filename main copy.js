const simular = document.querySelector('.content-word');


simular.addEventListener('click', () => {

    let obterValorSimulador = () => {
        return parseFloat(prompt('Qual é o valor da simulação?'));
    };
    let valorSimulador = obterValorSimulador();



    if (!isNaN(valorSimulador)) {

        let informacao = parseInt(prompt('Em quantas vezes deseja pagar o emprestimo? max 12 vezes'));
        if (informacao >= 0 && informacao <= 12) {
            calcularEmprestimo(valorSimulador, informacao);


        } else {
            alert('Por gentileza, escolha um valor de parcelas de 0 a 12! ');
            informacao = parseInt(prompt('Em quantas vezes deseja pagar o emprestimo? max 12 vezes'));
            calcularEmprestimo(valorSimulador, informacao);
        }




    } else {
        alert('Numero invalido, tente novamente!');
        
    }
});

let calcularEmprestimo = (valorSimulador, informacao) => {
    let contador = 0;
    let valorTotal = valorSimulador;
    while (contador < informacao) {

        valorTotal = valorTotal * 1.05;
        console.log(valorTotal);

        contador++;
    }
    let valorParcela = valorTotal/informacao;
        let valorFinalCliente = `************ Informação do empréstimo ************\n`;
            valorFinalCliente += `Valor do empréstimo: R$ ${valorSimulador.toFixed(2)}\n`;
            valorFinalCliente += `Valor final a pagar: R$ ${valorTotal.toFixed(2)}\n`;
            valorFinalCliente += `Valor por parcela: R$ ${valorParcela.toFixed(2)}`
            alert(valorFinalCliente);
}

