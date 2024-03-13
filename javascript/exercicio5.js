const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(string) {
    let stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

rl.question("Digite uma string: ", (entrada) => {
    const stringInvertida = inverterString(entrada);
    console.log("String invertida:", stringInvertida);
    rl.close();
});
