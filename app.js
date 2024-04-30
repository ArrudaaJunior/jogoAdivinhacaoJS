// Declaração de uma variável que armazena a mensagem de boas-vindas exibida ao usuário.
alert('Boas vindas ao jogo do número secreto');

// Declaração de uma variável que define o número máximo possível para o número secreto.
let numeroMaximo = 30;

// Gera um número aleatório entre 1 e o número máximo e atribui à variável numeroSecreto.
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Exibe o número secreto no console do navegador para fins de depuração.
console.log(numeroSecreto);

// Declaração de uma variável que armazena o valor do chute do jogador.
let chute;

// Inicialização da variável tentativas para 1, representando a primeira tentativa do jogador.
let tentativas = 1;

// Enquanto o chute do jogador não for igual ao número secreto, o loop continuará.
while (chute != numeroSecreto) {
    // Solicita ao jogador que escolha um número dentro do intervalo especificado.
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se o chute do jogador for igual ao número secreto, o jogador acertou e o loop é interrompido.
    if (numeroSecreto == chute) {
        // Para parar o loop
        break;
    } else {
        // Se o chute for diferente do número secreto, informa ao jogador se o número secreto é maior ou menor que o chute.
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // Incrementa o número de tentativas.
        tentativas++;
    }
}

// Operador ternário para determinar a palavra "tentativa" ou "tentativas" com base no número de tentativas.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Exibe uma mensagem parabenizando o jogador pelo acerto, juntamente com o número secreto e o número de tentativas realizadas.
alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


// if (tentativas > 1) {
//     // alert com acoplamento - template string caso for várias tentativas
//     alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tenativas} tentativas`);

// } else {
//     // alert com acoplamento - template string caso for só uma tentativa
//     alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tenativas} tentativa`);
// }


