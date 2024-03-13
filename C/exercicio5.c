#include <stdio.h>
#include <string.h>

void inverter_string(char string[]) {
    int tamanho = strlen(string);
    for (int i = tamanho - 1; i >= 0; i--) {
        printf("%c", string[i]);
    }
}

int main() {
    char entrada[100];
    printf("Digite uma string: ");
    scanf("%s", entrada);
    printf("String invertida: ");
    inverter_string(entrada);
    return 0;
}
