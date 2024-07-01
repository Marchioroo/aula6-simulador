const simular = document.querySelector('.content-word');

if(simular){
    //funcao que chama o clicuqe
    simular.addEventListener('click', () => {

        let obterValorSimulador = () => {
            let valorSimulacao =  parseFloat(prompt('Qual é o valor da simulação?'));
            if (!isNaN(valorSimulacao)) {
            return valorSimulacao;
            }else{
                alert('Digite um valor valido!!');
                return obterValorSimulador(); 
            }
        };
    
        let valorSimulador = obterValorSimulador();
    
        if (!isNaN(valorSimulador)) {
            validarInformacao(valorSimulador); 
        } else {
            alert('Digite um valor valido!!');
            obterValorSimulador();
        }
    });
    //funcao que calcula o emprestimo
    let calcularEmprestimo = (valorSimulador, informacao) => {
        let contador = 0;
        let valorTotal = valorSimulador;
        while (contador < informacao) {
            valorTotal = valorTotal * 1.05; 
            contador++;
        }
        let valorParcela = valorTotal / informacao;
        let valorFinalCliente = `************ Informação do empréstimo ************\n`;
        valorFinalCliente += `Valor do empréstimo: R$ ${valorSimulador.toFixed(2)}\n`;
        valorFinalCliente += `Valor final a pagar: R$ ${valorTotal.toFixed(2)}\n`;
        valorFinalCliente += `Valor por parcela: R$ ${valorParcela.toFixed(2)}`;
        alert(valorFinalCliente);
    };
    //funcao que valida a info do usuari
    let validarInformacao = (valorSimulador) => {
        let informacao = parseInt(prompt('Em quantas vezes deseja pagar o empréstimo? Máximo de 12 vezes.'));
        if (informacao >= 1 && informacao <= 12) {
            calcularEmprestimo(valorSimulador, informacao);
        } else {
            alert('Por favor, escolha um número de parcelas de 1 a 12.');
            validarInformacao(valorSimulador); 
        }
    };

}else{
    console.error('Elemento nao enocntrado na pag');
}


