function fibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

function isFibonacci(number, sequence) {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === number) {
            return true;
        }
    }
    return false;
}

// Número a ser verificado
const numberToCheck = 13;

// Calcula a sequência de Fibonacci até o número informado
const fibonacci = fibonacciSequence(numberToCheck);

// Verifica se o número informado pertence à sequência de Fibonacci
if (isFibonacci(numberToCheck, fibonacci)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
