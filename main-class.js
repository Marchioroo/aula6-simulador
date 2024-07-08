const simular = document.querySelector('.content-word');
if (simular) {

    class Simulador {
        constructor(valorSimulacao = 0, qtdDivisao = 0) {
            this.valorSimulacao = valorSimulacao;
            this.qtdDivisao = qtdDivisao;
        }

        obterValorSimulador = () => {
            let valor;
            do {
                valor = parseFloat(prompt('Qual é o valor da simulação?'));
                if (isNaN(valor)) {
                    alert('Digite um valor válido!');
                }
            } while (isNaN(valor));
            this.valorSimulacao = valor;
            return valor;
        };

        calcularEmprestimo = (valor, informacao) => {
            let contador = 0;
            let valorTotal = valor;
            while (contador < informacao) {
                valorTotal *= 1.05; 
                contador++;
            }
            const valorParcela = valorTotal / informacao;
            const valorFinalCliente = `************ Informação do empréstimo ************\n` +
                                      `Valor do empréstimo: R$ ${valor.toFixed(2)}\n` +
                                      `Valor final a pagar: R$ ${valorTotal.toFixed(2)}\n` +
                                      `Valor por parcela: R$ ${valorParcela.toFixed(2)}`;
            alert(valorFinalCliente);
        };

        validarInformacao = (valor) => {
            let informacao;
            do {
                informacao = parseInt(prompt('Em quantas vezes deseja pagar o empréstimo? Máximo de 12 vezes.'));
                if (informacao < 1 || informacao > 12) {
                    alert('Por favor, escolha um número de parcelas de 1 a 12.');
                }
            } while (informacao < 1 || informacao > 12);
            this.qtdDivisao = informacao;
            this.calcularEmprestimo(valor, informacao);
        };
    }

    const simulador = new Simulador();
    simular.addEventListener('click', () => {
        const valor = simulador.obterValorSimulador();
        simulador.validarInformacao(valor);
    });

}
