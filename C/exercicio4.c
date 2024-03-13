#include <stdio.h>
#include <unistd.h>

int main() {
    int interruptor1, interruptor2, interruptor3;

    // Primeira iteração: ligar o primeiro interruptor
    interruptor1 = 1;
    interruptor2 = 0;
    interruptor3 = 0;
    sleep(2); // Aguardar alguns minutos

    // Segunda iteração: desligar o primeiro interruptor e ligar o segundo
    interruptor1 = 0;
    interruptor2 = 1;
    interruptor3 = 0;
    sleep(2); // Aguardar alguns minutos

    // Verificar o estado das lâmpadas
    if (interruptor1 == 1) {
        printf("O interruptor 1 controla a lâmpada 1.\n");
    } else {
        printf("O interruptor 3 controla a lâmpada 1.\n");
    }

    if (interruptor2 == 1) {
        printf("O interruptor 2 controla a lâmpada 2.\n");
    } else {
        printf("O interruptor 3 controla a lâmpada 2.\n");
    }

    if (interruptor3 == 1) {
        printf("O interruptor 1 controla a lâmpada 3.\n");
    } else {
        printf("O interruptor 2 controla a lâmpada 3.\n");
    }

    return 0;
}
