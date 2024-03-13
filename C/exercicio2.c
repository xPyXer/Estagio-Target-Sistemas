#include <stdio.h>

int verifica_fibonacci(int numero) {
    int a = 0, b = 1;
    while (b < numero) {
        int temp = b;
        b = a + b;
        a = temp;
    }
    if (b == numero) {
        printf("%d pertence à sequência de Fibonacci.\n", numero);
    } else {
        printf("%d não pertence à sequência de Fibonacci.\n", numero);
    }
}

int main() {
    int numero;
    printf("Digite um número: ");
    scanf("%d", &numero);
    verifica_fibonacci(numero);
    return 0;
}
