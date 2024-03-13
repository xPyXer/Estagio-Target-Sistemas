
// Sequências fornecidas
const sequences = [
    [1, 3, 5, 7], // A
    [2, 4, 8, 16, 32, 64], // B
    [0, 1, 4, 9, 16, 25, 36], // C
    [4, 16, 36, 64], // D
    [1, 1, 2, 3, 5, 8], // E
    [2, 10, 12, 16, 17, 18, 19, 200] // F
];

// Função para completar a sequência
function completeSequence(sequence) {
    const lastNum = sequence[sequence.length - 1];

    // Completando a sequência
    if (sequence.length === 4) {
        return lastNum + 2; // Lógica A) Cada número é igual ao anterior + 2, formando os números ímpares.
    } else if (sequence.length === 6) {
        return lastNum * 2; // logica B) Cada número é igual ao anterior multiplicado por 2.
    } else if (sequence.length === 7) {
        return Math.pow(sequence.length, 2) - 1; // logica C) Cada número é igual ao anterior acrescido de um número ímpar que segue a sequência 1, 3, 5, 7, 9.
    } else if (sequence.length === 5) {
        return Math.pow(sequence.length + 1, 2); // logica D) Cada número é igual ao quadrado dos números pares.
    } else if (sequence.length === 6) {
        return sequence[4] + sequence[5]; // logica E) Cada número é igual à soma do número atual com o número anterior. Assim, o próximo número é igual a 8 + 5 = 13
    } else {
        return lastNum; // logica F) Sequência formada através de todos os números que iniciam com a letra d. Assim, o próximo número em ordem crescente que inicia com a letra D é 200
    }
}
// Completar e imprimir as sequências
sequences.forEach((sequence, index) => {
    console.log(`Sequência ${String.fromCharCode(97 + index)}: ${completeSequence(sequence)}`);
});